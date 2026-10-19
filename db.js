/**
 * CLIPBUNKER // ADAPTADOR DE BASE DE DATOS (SUPABASE POSTGRESQL + LOCAL JSON FALLBACK)
 * - Si existen SUPABASE_URL y SUPABASE_KEY en las variables de entorno, conecta con Supabase.
 * - Si no están configuradas (desarrollo local sin credenciales), opera con data/portal_db.json.
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_KEY = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_KEY || '';

const isSupabaseEnabled = Boolean(SUPABASE_URL && SUPABASE_KEY);
let supabase = null;

if (isSupabaseEnabled) {
  try {
    supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    console.log('[SUPABASE] Conexión activa con la base de datos PostgreSQL.');
  } catch (err) {
    console.error('[SUPABASE] Error al inicializar cliente:', err.message);
  }
} else {
  console.log('[LOCAL DB] Operando en modo local con data/portal_db.json (sin credenciales Supabase).');
}

// -----------------------------------------------------------------------------
// LOCAL DB HELPERS (FALLBACK)
// -----------------------------------------------------------------------------
const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'portal_db.json');

const DEFAULT_DB = {
  weeklyConfig: {
    weekNumber: 42,
    operationName: 'OPERACIÓN OVERLORD // SEMANA #42',
    closeDay: 0,
    closeHour: 20,
    discordWebhookUrl: '',
    defaultTopCount: 1
  },
  tiktokQueue: ['clip-1'],
  dispatchHistory: [
    {
      id: 'disp-1',
      date: 'Domingo pasado, 20:00 hs',
      week: 'SEMANA #41',
      clipsCount: 1,
      topClipTitle: 'Duelo de bayoneta y pala bajo fuego de artillería en Hürtgen Forest',
      methods: ['Estudio Interno 9:16', 'Webhook Discord', 'Salón de los Héroes'],
      moderator: 'Alto_Mando'
    }
  ],
  clips: [],
  hallOfFame: []
};

function readLocalDb() {
  if (!fs.existsSync(DB_FILE)) {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(DB_FILE, JSON.stringify(DEFAULT_DB, null, 2), 'utf8');
    return JSON.parse(JSON.stringify(DEFAULT_DB));
  }
  try {
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  } catch (e) {
    return JSON.parse(JSON.stringify(DEFAULT_DB));
  }
}

function writeLocalDb(data) {
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.warn('[LOCAL DB] No se pudo escribir en disco local (read-only):', err.message);
  }
}

// -----------------------------------------------------------------------------
// OPERACIONES UNIFICADAS (ASYNC)
// -----------------------------------------------------------------------------

async function getState() {
  if (isSupabaseEnabled && supabase) {
    try {
      const [
        cfgRes,
        clipsRes,
        commentsRes,
        hallRes,
        queueRes,
        dispatchRes
      ] = await Promise.all([
        supabase.from('weekly_config').select('*').limit(1).single(),
        supabase.from('clips').select('*').order('votes', { ascending: false }),
        supabase.from('comments').select('*').order('created_at', { ascending: true }),
        supabase.from('hall_of_fame').select('*').order('created_at', { ascending: false }),
        supabase.from('tiktok_queue').select('clip_id'),
        supabase.from('dispatch_history').select('*').order('created_at', { ascending: false })
      ]);

      if (clipsRes && clipsRes.error) {
        console.warn('[SUPABASE] Tablas aún no creadas en Supabase (' + clipsRes.error.message + '). Mostrando datos locales provisionalmente.');
        const localDb = readLocalDb();
        return {
          weeklyConfig: localDb.weeklyConfig || DEFAULT_DB.weeklyConfig,
          clips: localDb.clips || [],
          hallOfFame: localDb.hallOfFame || [],
          tiktokQueue: localDb.tiktokQueue || [],
          dispatchHistory: localDb.dispatchHistory || []
        };
      }

      const cfgRows = cfgRes ? cfgRes.data : null;
      const clipsRows = clipsRes ? clipsRes.data : null;
      const commentsRows = commentsRes ? commentsRes.data : null;
      const hallRows = hallRes ? hallRes.data : null;
      const queueRows = queueRes ? queueRes.data : null;
      const dispatchRows = dispatchRes ? dispatchRes.data : null;

      // Mapear comentarios a sus clips
      const commentsByClip = {};
      (commentsRows || []).forEach(comm => {
        if (!commentsByClip[comm.clip_id]) commentsByClip[comm.clip_id] = [];
        commentsByClip[comm.clip_id].push({
          id: comm.id,
          author: comm.author,
          role: comm.role,
          text: comm.text,
          time: new Date(comm.created_at).toLocaleString('es-AR', { hour12: false })
        });
      });

      const formattedClips = (clipsRows || []).map(c => ({
        id: c.id,
        title: c.title,
        videoUrl: c.video_url,
        youtubeId: c.youtube_id,
        map: c.map,
        coords: c.coords,
        role: c.role,
        faction: c.faction,
        factionClass: c.faction_class,
        authorDiscord: c.author_discord,
        authorClan: c.author_clan,
        votes: c.votes,
        voterIds: Array.isArray(c.voter_ids) ? c.voter_ids : [],
        hookText: c.hook_text,
        createdAt: c.created_at ? new Date(c.created_at).toLocaleDateString('es-AR') : 'Recién enviado',
        status: c.status,
        comments: commentsByClip[c.id] || []
      }));

      const formattedWeeklyConfig = cfgRows ? {
        weekNumber: cfgRows.week_number,
        operationName: cfgRows.operation_name,
        closeDay: cfgRows.close_day,
        closeHour: cfgRows.close_hour,
        discordWebhookUrl: cfgRows.discord_webhook_url || '',
        defaultTopCount: cfgRows.default_top_count || 1
      } : DEFAULT_DB.weeklyConfig;

      const formattedHall = (hallRows || []).map(h => ({
        week: h.week,
        title: h.title,
        youtubeId: h.youtube_id,
        videoUrl: h.video_url,
        authorDiscord: h.author_discord,
        authorClan: h.author_clan,
        map: h.map,
        role: h.role,
        faction: h.faction,
        votes: h.votes,
        medalTitle: h.medal_title,
        communityHonor: h.community_honor
      }));

      const formattedQueue = (queueRows || []).map(q => q.clip_id);

      const formattedDispatch = (dispatchRows || []).map(d => ({
        id: d.id,
        date: d.date,
        week: d.week,
        clipsCount: d.clips_count,
        topClipTitle: d.top_clip_title,
        methods: Array.isArray(d.methods) ? d.methods : [],
        moderator: d.moderator
      }));

      return {
        weeklyConfig: formattedWeeklyConfig,
        clips: formattedClips,
        hallOfFame: formattedHall,
        tiktokQueue: formattedQueue,
        dispatchHistory: formattedDispatch
      };
    } catch (err) {
      console.error('[SUPABASE] Error en getState, fallback a local:', err.message);
    }
  }

  // Fallback Local JSON
  const localDb = readLocalDb();
  return {
    weeklyConfig: localDb.weeklyConfig || DEFAULT_DB.weeklyConfig,
    clips: localDb.clips || [],
    hallOfFame: localDb.hallOfFame || [],
    tiktokQueue: localDb.tiktokQueue || [],
    dispatchHistory: localDb.dispatchHistory || []
  };
}

async function addClip(clipData) {
  if (isSupabaseEnabled && supabase) {
    try {
      const { data, error } = await supabase.from('clips').insert({
        id: clipData.id,
        title: clipData.title,
        video_url: clipData.videoUrl,
        youtube_id: clipData.youtubeId,
        map: clipData.map,
        coords: clipData.coords,
        role: clipData.role,
        faction: clipData.faction,
        faction_class: clipData.factionClass,
        author_discord: clipData.authorDiscord,
        author_clan: clipData.authorClan,
        author_discord_id: clipData.authorDiscordId,
        votes: clipData.votes,
        voter_ids: clipData.voterIds,
        hook_text: clipData.hookText,
        status: clipData.status || 'candidate'
      }).select().single();

      if (!error && data) {
        clipData.comments = [];
        return clipData;
      }
    } catch (err) {
      console.error('[SUPABASE] Error en addClip:', err.message);
    }
  }

  // Fallback Local
  const localDb = readLocalDb();
  localDb.clips.unshift(clipData);
  writeLocalDb(localDb);
  return clipData;
}

async function voteClip(clipId, voterId) {
  if (isSupabaseEnabled && supabase) {
    try {
      const { data: clip, error } = await supabase.from('clips').select('*').eq('id', clipId).single();
      if (!error && clip) {
        let voterIds = Array.isArray(clip.voter_ids) ? [...clip.voter_ids] : [];
        const idx = voterIds.indexOf(voterId);
        let voted = false;
        let newVotes = clip.votes || 0;

        if (idx >= 0) {
          voterIds.splice(idx, 1);
          newVotes = Math.max(0, newVotes - 1);
          voted = false;
        } else {
          voterIds.push(voterId);
          newVotes += 1;
          voted = true;
        }

        const { data: updated } = await supabase
          .from('clips')
          .update({ votes: newVotes, voter_ids: voterIds })
          .eq('id', clipId)
          .select()
          .single();

        return {
          ok: true,
          voted,
          clip: {
            id: updated.id,
            title: updated.title,
            videoUrl: updated.video_url,
            youtubeId: updated.youtube_id,
            votes: updated.votes,
            voterIds: updated.voter_ids
          }
        };
      }
    } catch (err) {
      console.error('[SUPABASE] Error en voteClip:', err.message);
    }
  }

  // Fallback Local
  const localDb = readLocalDb();
  const clip = localDb.clips.find(c => c.id === clipId);
  if (!clip) return { ok: false, message: 'Clip no encontrado' };

  if (!Array.isArray(clip.voterIds)) clip.voterIds = [];
  const idx = clip.voterIds.indexOf(voterId);
  let voted = false;
  if (idx >= 0) {
    clip.voterIds.splice(idx, 1);
    clip.votes = Math.max(0, clip.votes - 1);
    voted = false;
  } else {
    clip.voterIds.push(voterId);
    clip.votes += 1;
    voted = true;
  }
  writeLocalDb(localDb);
  return { ok: true, voted, clip };
}

async function addComment(clipId, { author, role, text }) {
  if (isSupabaseEnabled && supabase) {
    try {
      const { data, error } = await supabase.from('comments').insert({
        clip_id: clipId,
        author: author || '@Soldado_Discord',
        role: role || 'Soldado',
        text: String(text).trim()
      }).select().single();

      if (!error && data) {
        return {
          author: data.author,
          role: data.role,
          text: data.text,
          time: 'Ahora mismo'
        };
      }
    } catch (err) {
      console.error('[SUPABASE] Error en addComment:', err.message);
    }
  }

  // Fallback Local
  const localDb = readLocalDb();
  const clip = localDb.clips.find(c => c.id === clipId);
  if (!clip) return null;

  const comment = {
    author: author || '@Soldado_Discord',
    role: role || 'Soldado',
    text: String(text).trim(),
    time: 'Ahora mismo'
  };
  if (!Array.isArray(clip.comments)) clip.comments = [];
  clip.comments.push(comment);
  writeLocalDb(localDb);
  return comment;
}

async function updateWeeklyConfig(config) {
  if (isSupabaseEnabled && supabase) {
    try {
      await supabase.from('weekly_config').update({
        week_number: config.weekNumber,
        operation_name: config.operationName,
        close_day: config.closeDay,
        close_hour: config.closeHour,
        discord_webhook_url: config.discordWebhookUrl,
        default_top_count: config.defaultTopCount,
        updated_at: new Date()
      }).eq('id', 1);
      return config;
    } catch (err) {}
  }

  const localDb = readLocalDb();
  localDb.weeklyConfig = { ...localDb.weeklyConfig, ...config };
  writeLocalDb(localDb);
  return localDb.weeklyConfig;
}

async function deleteClip(clipId) {
  if (isSupabaseEnabled && supabase) {
    try {
      await supabase.from('clips').delete().eq('id', clipId);
      await supabase.from('tiktok_queue').delete().eq('clip_id', clipId);
      return true;
    } catch (err) {}
  }

  const localDb = readLocalDb();
  localDb.clips = localDb.clips.filter(c => c.id !== clipId);
  localDb.tiktokQueue = (localDb.tiktokQueue || []).filter(id => id !== clipId);
  writeLocalDb(localDb);
  return true;
}

async function dispatchWinners(dispatchEntry, { queueIds, hallOfFameWinners, nextWeekConfig }) {
  if (isSupabaseEnabled && supabase) {
    try {
      // Guardar historial
      await supabase.from('dispatch_history').insert({
        id: dispatchEntry.id,
        date: dispatchEntry.date,
        week: dispatchEntry.week,
        clips_count: dispatchEntry.clipsCount,
        top_clip_title: dispatchEntry.topClipTitle,
        methods: dispatchEntry.methods,
        moderator: dispatchEntry.moderator
      });

      // Actualizar cola si aplica
      if (Array.isArray(queueIds)) {
        await supabase.from('tiktok_queue').delete().neq('clip_id', '__none__');
        if (queueIds.length) {
          await supabase.from('tiktok_queue').insert(queueIds.map(id => ({ clip_id: id })));
        }
      }

      // Archivar en Hall of Fame si aplica
      if (Array.isArray(hallOfFameWinners) && hallOfFameWinners.length) {
        await supabase.from('hall_of_fame').insert(hallOfFameWinners.map(h => ({
          week: h.week,
          title: h.title,
          youtube_id: h.youtubeId,
          video_url: h.videoUrl,
          author_discord: h.authorDiscord,
          author_clan: h.authorClan,
          map: h.map,
          role: h.role,
          faction: h.faction,
          votes: h.votes,
          medal_title: h.medalTitle,
          community_honor: h.communityHonor
        })));
      }

      // Siguiente semana
      if (nextWeekConfig) {
        await supabase.from('weekly_config').update({
          week_number: nextWeekConfig.weekNumber,
          operation_name: nextWeekConfig.operationName,
          updated_at: new Date()
        }).eq('id', 1);
      }

      return true;
    } catch (err) {
      console.error('[SUPABASE] Error en dispatchWinners:', err.message);
    }
  }

  // Fallback Local
  const localDb = readLocalDb();
  if (!Array.isArray(localDb.dispatchHistory)) localDb.dispatchHistory = [];
  localDb.dispatchHistory.unshift(dispatchEntry);

  if (Array.isArray(queueIds)) {
    localDb.tiktokQueue = queueIds;
    localDb.clips.forEach(c => {
      c.status = queueIds.includes(c.id) ? 'in_queue' : 'candidate';
    });
  }

  if (Array.isArray(hallOfFameWinners) && hallOfFameWinners.length) {
    if (!Array.isArray(localDb.hallOfFame)) localDb.hallOfFame = [];
    localDb.hallOfFame.unshift(...hallOfFameWinners);
  }

  if (nextWeekConfig) {
    localDb.weeklyConfig.weekNumber = nextWeekConfig.weekNumber;
    localDb.weeklyConfig.operationName = nextWeekConfig.operationName;
  }

  writeLocalDb(localDb);
  return true;
}

module.exports = {
  isSupabaseEnabled,
  getState,
  addClip,
  voteClip,
  addComment,
  updateWeeklyConfig,
  deleteClip,
  dispatchWinners
};

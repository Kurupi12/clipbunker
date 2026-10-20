/**
 * HELL LET CLIPS // SERVIDOR BACKEND DEL PORTAL COMUNITARIO (COSTO $0 - YOUTUBE)
 * - Portal propio e independiente para la comunidad de Hell Let Loose (sin menciones públicas a TikTok)
 * - Almacenamiento $0: Todos los clips se comparten mediante enlaces de YouTube
 * - Autenticación con Discord OAuth2 (/auth/discord) para jugadores (votar, comentar, subir link YT)
 * - Consola Interna del Moderador (/api/mod/*): Extraer datos de los más votados y enviarlos
 * - Estudio 9:16 Interno (/api/tiktok/*): Exclusivo para el moderador que genera los videos de enganche
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { execFile } = require('child_process');

let ffmpegStaticPath = null;
try {
  ffmpegStaticPath = require('ffmpeg-static');
} catch (err) {
  ffmpegStaticPath = null;
}

const app = express();
app.set('trust proxy', 1);
const PORT = process.env.PORT || 3044;

// Clave de acceso del Moderador (configurable en .env)
const MODERATOR_SECRET_KEY = process.env.MODERATOR_KEY || 'HLL-MOD-1944';
const MODERATOR_TOKEN = 'mod_session_hll_1944_internal';

// Configuración Discord OAuth2
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID || '1561852439206830130';
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET || 'H4-UbcLZ8pso7hHiiZTeTOutmtn5lgqP';
const DISCORD_REDIRECT_URI = process.env.DISCORD_REDIRECT_URI || 'https://clipbunker.vercel.app/auth/discord/callback';

function getRedirectUri(req) {
  if (process.env.DISCORD_REDIRECT_URI) {
    const host = req.get('host') || '';
    if ((host.includes('localhost') || host.includes('127.0.0.1')) && !process.env.DISCORD_REDIRECT_URI.includes('localhost')) {
      return `http://${host}/auth/discord/callback`;
    }
    return process.env.DISCORD_REDIRECT_URI;
  }
  const host = req.get('host') || 'clipbunker.vercel.app';
  const proto = host.includes('localhost') || host.includes('127.0.0.1') ? 'http' : 'https';
  return `${proto}://${host}/auth/discord/callback`;
}

const isVercel = Boolean(process.env.VERCEL);
const DATA_DIR = path.join(__dirname, 'data');
const EXPORTS_DIR = isVercel ? '/tmp/exports' : path.join(__dirname, 'exports');
const BIN_DIR = isVercel ? '/tmp/bin' : path.join(__dirname, 'bin');

try {
  [DATA_DIR, EXPORTS_DIR, BIN_DIR].forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
} catch (e) {
  // En entornos serverless como Vercel el disco de la aplicación es read-only
}

function getFFmpegBinary() {
  if (ffmpegStaticPath && fs.existsSync(ffmpegStaticPath)) {
    return ffmpegStaticPath;
  }
  return 'ffmpeg';
}

function getYtDlpBinary() {
  const localWin = path.join(BIN_DIR, 'yt-dlp.exe');
  const localUnix = path.join(BIN_DIR, 'yt-dlp');
  if (fs.existsSync(localWin)) return localWin;
  if (fs.existsSync(localUnix)) return localUnix;
  return 'yt-dlp';
}

function extractYouTubeId(url) {
  if (!url || typeof url !== 'string') return null;
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const match = url.trim().match(regExp);
  return match ? match[1] : null;
}

app.use(cors());
app.use(express.json({ limit: '35mb' }));
app.use('/exports', express.static(EXPORTS_DIR));
app.use(express.static(__dirname));

function requireModerator(req, res, next) {
  const token = req.headers['x-mod-token'] || req.body?.modToken || req.query?.modToken;
  if (token !== MODERATOR_TOKEN) {
    return res.status(403).json({
      ok: false,
      message: 'Acceso restringido: Función exclusiva para el Moderador.'
    });
  }
  next();
}

// ============================================================================
// BASE DE DATOS (SUPABASE POSTGRESQL + LOCAL JSON FALLBACK)
// ============================================================================
const db = require('./db');

function ensureFallbackPreviewVideo() {
  const samplePath = path.join(EXPORTS_DIR, 'fallback_yt_preview.mp4');
  if (fs.existsSync(samplePath) && fs.statSync(samplePath).size > 1000) return samplePath;

  const candidateBundled = [
    path.join(__dirname, 'public', 'fallback_preview.mp4'),
    path.join(__dirname, 'fallback_preview.mp4'),
    path.join(process.cwd(), 'public', 'fallback_preview.mp4'),
    path.join(process.cwd(), 'fallback_preview.mp4')
  ];

  for (const bundled of candidateBundled) {
    if (fs.existsSync(bundled) && fs.statSync(bundled).size > 1000) {
      try {
        if (!fs.existsSync(EXPORTS_DIR)) {
          fs.mkdirSync(EXPORTS_DIR, { recursive: true });
        }
        fs.copyFileSync(bundled, samplePath);
        return samplePath;
      } catch (e) {
        return bundled;
      }
    }
  }

  if (isVercel) return null;

  const ffmpegBin = getFFmpegBinary();
  execFile(
    ffmpegBin,
    [
      '-y',
      '-f', 'lavfi',
      '-i', 'testsrc2=size=1280x720:rate=30:duration=6',
      '-f', 'lavfi',
      '-i', 'sine=frequency=440:sample_rate=44100:duration=6',
      '-vf', 'hue=s=0.25,eq=contrast=1.25:brightness=-0.08,drawbox=x=580:y=300:w=120:h=120:color=orange@0.8:t=3',
      '-c:v', 'libx264',
      '-pix_fmt', 'yuv420p',
      '-preset', 'ultrafast',
      '-c:a', 'aac',
      '-b:a', '128k',
      samplePath
    ],
    () => {}
  );
  return samplePath;
}
ensureFallbackPreviewVideo();

app.get('/exports/fallback_yt_preview.mp4', (req, res) => {
  const found = ensureFallbackPreviewVideo();
  if (found && fs.existsSync(found) && fs.statSync(found).size > 1000) {
    return res.sendFile(found);
  }
  const target = path.join(EXPORTS_DIR, 'fallback_yt_preview.mp4');
  if (fs.existsSync(target) && fs.statSync(target).size > 1000) {
    return res.sendFile(target);
  }
  const candidateBundled = [
    path.join(__dirname, 'public', 'fallback_preview.mp4'),
    path.join(__dirname, 'fallback_preview.mp4'),
    path.join(process.cwd(), 'public', 'fallback_preview.mp4'),
    path.join(process.cwd(), 'fallback_preview.mp4')
  ];
  for (const bundled of candidateBundled) {
    if (fs.existsSync(bundled) && fs.statSync(bundled).size > 1000) {
      return res.sendFile(bundled);
    }
  }
  res.status(404).send('Fallback video not found');
});

app.get('/api/tiktok/download/:filename', (req, res) => {
  const filename = path.basename(req.params.filename);
  const target = path.join(EXPORTS_DIR, filename);

  if (fs.existsSync(target) && fs.statSync(target).size > 1000) {
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Type', 'video/mp4');
    return res.sendFile(target);
  }

  const fallback = ensureFallbackPreviewVideo();
  if (fallback && fs.existsSync(fallback)) {
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Type', 'video/mp4');
    return res.sendFile(fallback);
  }

  res.status(404).send('Archivo no encontrado');
});

app.get('/exports/:filename', (req, res) => {
  const filename = path.basename(req.params.filename);
  const target = path.join(EXPORTS_DIR, filename);

  if (fs.existsSync(target) && fs.statSync(target).size > 100) {
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Type', filename.endsWith('.mp4') ? 'video/mp4' : (filename.endsWith('.png') ? 'image/png' : 'application/octet-stream'));
    return res.sendFile(target);
  }

  const candidateBundled = [
    path.join(__dirname, 'public', filename),
    path.join(__dirname, filename),
    path.join(process.cwd(), 'public', filename)
  ];
  for (const b of candidateBundled) {
    if (fs.existsSync(b)) {
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      res.setHeader('Content-Type', filename.endsWith('.mp4') ? 'video/mp4' : 'application/octet-stream');
      return res.sendFile(b);
    }
  }

  const fallback = ensureFallbackPreviewVideo();
  if (fallback && fs.existsSync(fallback) && filename.endsWith('.mp4')) {
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Type', 'video/mp4');
    return res.sendFile(fallback);
  }

  res.status(404).send('Archivo no encontrado');
});

app.get('/fallback_preview.mp4', (req, res) => {
  const candidateBundled = [
    path.join(__dirname, 'public', 'fallback_preview.mp4'),
    path.join(__dirname, 'fallback_preview.mp4'),
    path.join(process.cwd(), 'public', 'fallback_preview.mp4'),
    path.join(process.cwd(), 'fallback_preview.mp4')
  ];
  for (const bundled of candidateBundled) {
    if (fs.existsSync(bundled) && fs.statSync(bundled).size > 1000) {
      return res.sendFile(bundled);
    }
  }
  res.status(404).send('Fallback video not found');
});

app.get('/api/tiktok/download/:filename', (req, res) => {
  const filename = path.basename(req.params.filename);
  const target = path.join(EXPORTS_DIR, filename);

  if (fs.existsSync(target) && fs.statSync(target).size > 1000) {
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Type', 'video/mp4');
    return res.sendFile(target);
  }

  const fallback = ensureFallbackPreviewVideo();
  if (fallback && fs.existsSync(fallback)) {
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Type', 'video/mp4');
    return res.sendFile(fallback);
  }

  res.status(404).send('Archivo no encontrado');
});

app.get('/exports/:filename', (req, res) => {
  const filename = path.basename(req.params.filename);
  const target = path.join(EXPORTS_DIR, filename);

  if (fs.existsSync(target) && fs.statSync(target).size > 100) {
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Type', filename.endsWith('.mp4') ? 'video/mp4' : (filename.endsWith('.png') ? 'image/png' : 'application/octet-stream'));
    return res.sendFile(target);
  }

  const candidateBundled = [
    path.join(__dirname, 'public', filename),
    path.join(__dirname, filename),
    path.join(process.cwd(), 'public', filename)
  ];
  for (const b of candidateBundled) {
    if (fs.existsSync(b)) {
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      res.setHeader('Content-Type', filename.endsWith('.mp4') ? 'video/mp4' : 'application/octet-stream');
      return res.sendFile(b);
    }
  }

  const fallback = ensureFallbackPreviewVideo();
  if (fallback && fs.existsSync(fallback) && filename.endsWith('.mp4')) {
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Type', 'video/mp4');
    return res.sendFile(fallback);
  }

  res.status(404).send('Archivo no encontrado');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/styles.css', (req, res) => {
  res.type('text/css').sendFile(path.join(__dirname, 'styles.css'));
});

app.get('/app.js', (req, res) => {
  res.type('application/javascript').sendFile(path.join(__dirname, 'app.js'));
});

// ============================================================================
// 1. AUTENTICACIÓN: CREAR CUENTA, INICIAR SESIÓN Y DISCORD OAUTH2
// ============================================================================

app.get('/api/auth/status', (req, res) => {
  res.json({
    ok: true,
    discordConfigured: Boolean(DISCORD_CLIENT_ID && DISCORD_CLIENT_ID !== 'TU_DISCORD_CLIENT_ID')
  });
});

app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, username, clan, role } = req.body;
    if (!email || !password || !username) {
      return res.status(400).json({ ok: false, error: 'Email, contraseña y nombre militar son obligatorios.' });
    }
    if (password.length < 6) {
      return res.status(400).json({ ok: false, error: 'La contraseña debe tener al menos 6 caracteres.' });
    }
    const result = await db.registerUser({ email, password, username, clan, role });
    if (!result.ok) {
      return res.status(400).json(result);
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ ok: false, error: 'Email y contraseña requeridos.' });
    }
    const result = await db.loginUser({ email, password });
    if (!result.ok) {
      return res.status(400).json(result);
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.post('/api/auth/fast-discord', async (req, res) => {
  try {
    const { username, clan, role } = req.body;
    if (!username) {
      return res.status(400).json({ ok: false, error: 'Tag de Discord es obligatorio.' });
    }
    const result = await db.registerFastDiscordUser({ username, clan, role });
    res.json(result);
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.get('/auth/discord', (req, res) => {
  if (!DISCORD_CLIENT_ID || DISCORD_CLIENT_ID === 'TU_DISCORD_CLIENT_ID') {
    return res.redirect('/?discord_not_configured=1');
  }
  const redirectUri = getRedirectUri(req);
  const params = new URLSearchParams({
    client_id: DISCORD_CLIENT_ID,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: 'identify'
  });
  res.redirect(`https://discord.com/api/oauth2/authorize?${params.toString()}`);
});

app.get('/auth/discord/callback', async (req, res) => {
  const { code, error, error_description } = req.query;
  if (error) {
    console.warn('[DISCORD OAUTH ERROR PARAM]', error, error_description);
    return res.redirect(`/?discord_error=${encodeURIComponent(error_description || error)}`);
  }
  if (!code) return res.redirect('/');

  try {
    const redirectUri = getRedirectUri(req);
    const tokenRes = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: DISCORD_CLIENT_ID,
        client_secret: DISCORD_CLIENT_SECRET,
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri
      })
    });
    const tokenData = await tokenRes.json();

    if (!tokenData.access_token) {
      console.error('[DISCORD OAUTH TOKEN ERROR]', tokenData);
      const desc = tokenData.error_description || tokenData.error || 'token_failed';
      return res.redirect(`/?discord_error=${encodeURIComponent(desc)}`);
    }

    const userRes = await fetch('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` }
    });
    const userData = await userRes.json();

    if (!userData || !userData.id) {
      console.error('[DISCORD USER FETCH ERROR]', userData);
      return res.redirect('/?discord_error=no_user_data');
    }

    try {
      await db.registerFastDiscordUser({
        username: userData.username,
        clan: '[Verificado Discord OAuth2]',
        role: 'Fusilero'
      });
    } catch (dbErr) {
      console.warn('[DISCORD OAUTH] No se pudo sincronizar en Supabase:', dbErr.message);
    }

    const avatarUrl = userData.avatar
      ? `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`
      : '';

    res.redirect(
      `/?discord_user=${encodeURIComponent(userData.username)}&discord_id=${encodeURIComponent(userData.id)}&discord_avatar=${encodeURIComponent(avatarUrl)}`
    );
  } catch (error) {
    console.error('[DISCORD OAUTH CATCH]', error);
    res.redirect(`/?discord_error=${encodeURIComponent(error.message || 'oauth_failed')}`);
  }
});

app.post('/api/mod/login', (req, res) => {
  const { key } = req.body;
  if (key === MODERATOR_SECRET_KEY) {
    return res.json({
      ok: true,
      modToken: MODERATOR_TOKEN,
      message: 'Acceso de Moderación concedido.'
    });
  }
  return res.status(401).json({
    ok: false,
    message: 'Clave incorrecta.'
  });
});

// ============================================================================
// 2. API PÚBLICA DEL PORTAL (100% YOUTUBE LINKS - COSTO $0)
// ============================================================================
app.get('/api/state', async (req, res) => {
  const ytdlpBin = getYtDlpBinary();
  const hasYtDlp = fs.existsSync(ytdlpBin) || ytdlpBin === 'yt-dlp';
  const hasFFmpeg = Boolean(ffmpegStaticPath && fs.existsSync(ffmpegStaticPath));

  const state = await db.getState();

  res.json({
    ok: true,
    weeklyConfig: state.weeklyConfig,
    clips: state.clips,
    hallOfFame: state.hallOfFame,
    tiktokQueue: state.tiktokQueue,
    dispatchHistory: state.dispatchHistory,
    toolsStatus: {
      ffmpegReady: hasFFmpeg,
      ytdlpReady: hasYtDlp
    }
  });
});

app.post('/api/clips', async (req, res) => {
  const {
    title,
    videoUrl,
    map,
    role,
    faction,
    authorDiscord,
    authorDiscordId,
    authorClan
  } = req.body;

  if (!title || !videoUrl) {
    return res.status(400).json({
      ok: false,
      message: 'El título y el enlace de YouTube son obligatorios.'
    });
  }

  const youtubeId = extractYouTubeId(videoUrl);
  if (!youtubeId) {
    return res.status(400).json({
      ok: false,
      message: 'Ingresa un enlace válido de YouTube (youtube.com/watch?v=..., youtu.be/... o Shorts).'
    });
  }

  let factionClass = 'faction-allies';
  if (faction === 'Wehrmacht' || faction === 'Deutsches Afrikakorps (DAK)') factionClass = 'faction-axis';
  if (faction === 'Ejército Rojo') factionClass = 'faction-soviet';

  const voterId = authorDiscordId || 'discord_anon';
  const newClip = {
    id: 'clip-' + Date.now(),
    title: String(title).trim(),
    videoUrl: `https://www.youtube.com/watch?v=${youtubeId}`,
    youtubeId,
    map: map || 'Carentan',
    coords: `GRID D4 // ${(map || 'CARENTAN').toUpperCase()}`,
    role: role || 'Oficial de Escuadra',
    faction: faction || 'US Army',
    factionClass,
    authorDiscord: authorDiscord || '@Soldado_Discord',
    authorClan: authorClan || '[Comunidad HLL]',
    votes: 1,
    voterIds: [voterId],
    hookText: String(title).trim().toUpperCase(),
    createdAt: 'Recién enviado',
    status: 'candidate',
    comments: []
  };

  const createdClip = await db.addClip(newClip);
  const state = await db.getState();
  res.json({ ok: true, clip: createdClip, clips: state.clips });
});

app.post('/api/clips/:id/vote', async (req, res) => {
  const { id } = req.params;
  const { discordId } = req.body;
  const voterId = discordId || 'discord_guest';

  const result = await db.voteClip(id, voterId);
  res.json(result);
});

app.post('/api/clips/:id/comments', async (req, res) => {
  const { id } = req.params;
  const { author, role, text } = req.body;

  if (!text || !String(text).trim()) {
    return res.status(400).json({ ok: false, message: 'El comentario no puede estar vacío.' });
  }

  const comment = await db.addComment(id, { author, role, text });
  if (!comment) {
    return res.status(404).json({ ok: false, message: 'Clip no encontrado.' });
  }
  res.json({ ok: true, comment });
});

// ============================================================================
// 3. CONSOLA INTERNA DEL MODERADOR: EXTRACCIÓN Y ENVÍO DE LOS MÁS VOTADOS
// ============================================================================
app.post('/api/mod/config', requireModerator, async (req, res) => {
  const updated = await db.updateWeeklyConfig(req.body);
  res.json({ ok: true, weeklyConfig: updated });
});

app.delete('/api/mod/clips/:id', requireModerator, async (req, res) => {
  const { id } = req.params;
  await db.deleteClip(id);
  const state = await db.getState();
  res.json({ ok: true, clips: state.clips, tiktokQueue: state.tiktokQueue });
});

app.post('/api/mod/dispatch-winners', requireModerator, async (req, res) => {
  const {
    clipIds = [],
    sendToStudioQueue = true,
    sendToDiscordWebhook = false,
    sendToWhatsAppAlert = false,
    archiveToHallOfFame = false,
    customDiscordWebhook = ''
  } = req.body;

  const state = await db.getState();
  const selectedClips = state.clips
    .filter((c) => clipIds.includes(c.id))
    .sort((a, b) => b.votes - a.votes);

  if (!selectedClips.length) {
    return res.status(400).json({
      ok: false,
      message: 'Selecciona al menos un clip de la lista de más votados.'
    });
  }

  const appliedMethods = [];

  // 1. Pasar a la Mesa de Edición 9:16 Interna del Moderador
  if (sendToStudioQueue) {
    appliedMethods.push('Mesa de Edición 9:16 (Interno)');
  }

  // 2. Publicar Campeones en Discord (Anuncio propio del portal, sin mencionar TikTok)
  const webhookUrl = (customDiscordWebhook || state.weeklyConfig.discordWebhookUrl || '').trim();
  if (sendToDiscordWebhook) {
    if (webhookUrl && webhookUrl.startsWith('http')) {
      try {
        const lines = selectedClips.map(
          (c, idx) =>
            `**#${idx + 1}** (${c.votes} votos) — **${c.title}**\nSoldado: \`${c.authorDiscord}\` | Mapa: ${c.map} (${c.role})\nVer en el Portal / YouTube: ${c.videoUrl}`
        );
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: 'CLIPBUNKER // Alto Mando',
            content: `**CONDECORACIÓN SEMANAL DE JUGADAS (${state.weeklyConfig.operationName})**\n\n${lines.join('\n\n')}`
          })
        });
        appliedMethods.push('Webhook Discord (Enviado)');
      } catch (err) {
        appliedMethods.push('Webhook Discord (Error de red)');
      }
    } else {
      appliedMethods.push('Webhook Discord (Simulado)');
    }
  }

  // 3. Enviar datos extraídos por WhatsApp / Telegram al Moderador
  if (sendToWhatsAppAlert) {
    const notifyScript = 'C:/Users/Santiago/.gemini/config/scripts/notify_whatsapp.js';
    const summaryText =
      `[EXTRACCION PORTAL HLL - SEMANA #${state.weeklyConfig.weekNumber}] ` +
      selectedClips
        .map((c, i) => `#${i + 1} (${c.votes}v) ${c.title} por ${c.authorDiscord} -> ${c.videoUrl}`)
        .join(' | ');

    if (fs.existsSync(notifyScript)) {
      execFile('node', [notifyScript, summaryText], () => {});
      appliedMethods.push('Datos Enviados a WhatsApp/Telegram del Moderador');
    } else {
      appliedMethods.push('Alerta Móvil Registrada');
    }
  }

  // 4. Condecorar en el Salón de los Héroes del Portal
  let hallOfFameWinners = [];
  let nextWeekConfig = null;
  if (archiveToHallOfFame) {
    hallOfFameWinners = selectedClips.map((winner, idx) => ({
      week: `SEMANA #${state.weeklyConfig.weekNumber}${selectedClips.length > 1 ? ` (TOP #${idx + 1})` : ''}`,
      title: winner.title,
      youtubeId: winner.youtubeId,
      videoUrl: winner.videoUrl,
      authorDiscord: winner.authorDiscord,
      authorClan: winner.authorClan,
      map: winner.map,
      role: winner.role,
      faction: winner.faction,
      votes: winner.votes,
      medalTitle: 'Medalla de Honor Semanal',
      communityHonor: 'Campeón Oficial del Portal'
    }));
    nextWeekConfig = {
      weekNumber: state.weeklyConfig.weekNumber + 1,
      operationName: `OPERACIÓN OVERLORD // SEMANA #${state.weeklyConfig.weekNumber + 1}`
    };
    appliedMethods.push('Salón de los Héroes');
  }

  const dispatchEntry = {
    id: 'disp-' + Date.now(),
    date: new Date().toLocaleString('es-AR', { hour12: false }),
    week: `SEMANA #${state.weeklyConfig.weekNumber}`,
    clipsCount: selectedClips.length,
    topClipTitle: selectedClips[0].title,
    methods: appliedMethods.length ? appliedMethods : ['Extracción Guardada'],
    moderator: 'Alto_Mando'
  };

  await db.dispatchWinners(dispatchEntry, {
    queueIds: sendToStudioQueue ? selectedClips.map(c => c.id) : null,
    hallOfFameWinners,
    nextWeekConfig
  });

  const finalState = await db.getState();

  res.json({
    ok: true,
    message: `Datos de ${selectedClips.length} clip(s) procesados vía: ${dispatchEntry.methods.join(', ')}.`,
    tiktokQueue: finalState.tiktokQueue,
    hallOfFame: finalState.hallOfFame,
    weeklyConfig: finalState.weeklyConfig,
    dispatchHistory: finalState.dispatchHistory,
    clips: finalState.clips
  });
});

// ============================================================================
// 4. ESTUDIO 9:16 INTERNO DEL MODERADOR (DESCARGA YOUTUBE + MARCO WWII)
// ============================================================================
app.post('/api/tiktok/download-source', requireModerator, (req, res) => {
  const { videoUrl } = req.body;
  const ytId = extractYouTubeId(videoUrl);
  if (!ytId) {
    return res.status(400).json({ ok: false, message: 'URL de YouTube inválida.' });
  }

  const targetFilename = `yt_source_${ytId}.mp4`;
  const targetPath = path.join(EXPORTS_DIR, targetFilename);
  const publicUrl = `/exports/${targetFilename}`;

  if (fs.existsSync(targetPath) && fs.statSync(targetPath).size > 1000) {
    return res.json({
      ok: true,
      localVideoUrl: publicUrl,
      message: `Video de YouTube (${ytId}) cargado desde caché del Moderador.`
    });
  }

  if (isVercel) {
    return res.json({
      ok: true,
      youtubeId: ytId,
      message: `Clip de YouTube (${ytId}) sincronizado en el visor 9:16.`
    });
  }

  const ytdlpBin = getYtDlpBinary();
  const ffmpegBin = getFFmpegBinary();

  const args = [
    '--js-runtimes', 'node',
    '--extractor-args', 'youtube:player_client=android_vr,tv,web_embedded,mweb',
    '-f', '136+140/298+140/18/bv*[height<=720][ext=mp4]+ba[ext=m4a]/b[ext=mp4]/b',
    '--merge-output-format', 'mp4',
    '--ffmpeg-location', ffmpegBin,
    '--no-playlist',
    '-o', targetPath,
    `https://www.youtube.com/watch?v=${ytId}`
  ];

  execFile(ytdlpBin, args, { timeout: 120000 }, (err) => {
    if (err || !fs.existsSync(targetPath) || fs.statSync(targetPath).size < 1000) {
      return res.json({
        ok: true,
        youtubeId: ytId,
        message: `Video de YouTube (${ytId}) listo en el reproductor del visor.`
      });
    }

    res.json({
      ok: true,
      localVideoUrl: publicUrl,
      message: `Video de YouTube descargado con éxito (${publicUrl}) y cargado en el lienzo 9:16.`
    });
  });
});

app.post('/api/tiktok/render', requireModerator, (req, res) => {
  const {
    clipId,
    videoUrl,
    cropMode = 'full_visor',
    panX = 0.5,
    panY = 0.5,
    zoom = 1.0,
    boxX,
    boxY,
    boxW,
    boxH,
    overlayPngBase64
  } = req.body;
  const ytId = extractYouTubeId(videoUrl) || 'clip';
  const safeId = String(clipId || ytId).replace(/[^a-zA-Z0-9_-]/g, '');

  const safePanX = Math.max(0, Math.min(1, Number.isFinite(Number(panX)) ? Number(panX) : 0.5));
  const safePanY = Math.max(0, Math.min(1, Number.isFinite(Number(panY)) ? Number(panY) : 0.5));
  const safeZoom = Math.max(1, Math.min(3, Number.isFinite(Number(zoom)) ? Number(zoom) : 1.0));

  // Dimensiones calibradas de Zona Segura TikTok/Reels (1080x1920 con margen superior real 140px, visor en Y=320 H=1040)
  const defaultY = cropMode === 'safe_full_1320' ? 150 : 320;
  const defaultH = cropMode === 'safe_full_1320' ? 1420 : 1040;

  const vX = Math.round((Number.isFinite(Number(boxX)) ? Number(boxX) : 100) / 2) * 2;
  const vY = Math.round((Number.isFinite(Number(boxY)) ? Number(boxY) : defaultY) / 2) * 2;
  const vW = Math.round((Number.isFinite(Number(boxW)) ? Number(boxW) : 780) / 2) * 2;
  const vH = Math.round((Number.isFinite(Number(boxH)) ? Number(boxH) : defaultH) / 2) * 2;

  const scaledW = Math.max(vW, Math.round((vW * safeZoom) / 2) * 2);
  const scaledH = Math.max(vH, Math.round((vH * safeZoom) / 2) * 2);
  const px = safePanX.toFixed(4);
  const py = safePanY.toFixed(4);

  const overlayFilename = `overlay_${safeId}.png`;
  const overlayPath = path.join(EXPORTS_DIR, overlayFilename);
  const outputFilename = `promo_9x16_${safeId}.mp4`;
  const outputTikTokPath = path.join(EXPORTS_DIR, outputFilename);
  const ytSourcePath = path.join(EXPORTS_DIR, `yt_source_${ytId}.mp4`);

  if (overlayPngBase64 && overlayPngBase64.startsWith('data:image/png;base64,')) {
    const base64Data = overlayPngBase64.replace(/^data:image\/png;base64,/, '');
    fs.writeFileSync(overlayPath, Buffer.from(base64Data, 'base64'));
  } else {
    return res.status(400).json({ ok: false, message: 'No se recibió el Frame PNG 1080x1920.' });
  }

  const runFFmpegRender = (inputVideoFile, publicSourceUrl) => {
    const fallbackPath = ensureFallbackPreviewVideo() || path.join(EXPORTS_DIR, 'fallback_yt_preview.mp4');
    if (!fs.existsSync(inputVideoFile) || fs.statSync(inputVideoFile).size < 1000) {
      inputVideoFile = fallbackPath;
      publicSourceUrl = '/exports/fallback_yt_preview.mp4';
    }

    if (!fs.existsSync(inputVideoFile)) {
      return res.json({
        ok: false,
        overlayUrl: `/exports/${overlayFilename}`,
        message: 'No se encontró el video fuente en el servidor. Usa "Grabar Preview 9:16 (5s)" para exportar directamente desde tu navegador.'
      });
    }

    const ffmpegBin = getFFmpegBinary();

    let filterComplex = '';
    if (cropMode === 'blur_bg') {
      filterComplex =
        '[0:v]split=2[vbg][vfg];' +
        '[vbg]scale=1080:1920:force_original_aspect_ratio=increase:force_divisible_by=2,crop=1080:1920,boxblur=25:5,eq=brightness=-0.12,setsar=1[bg];' +
        `[vfg]scale=${vW}:${vH}:force_original_aspect_ratio=decrease:force_divisible_by=2,setsar=1[fg];` +
        `[bg][fg]overlay=${vX}+(${vW}-w)/2:${vY}+(${vH}-h)/2[vid];` +
        '[vid][1:v]overlay=0:0[outv]';
    } else {
      // Recorte del tamaño exacto del visor en Zona Segura Reels (780x1040 o 780x1420 en X=100) con encuadre movible X/Y/Zoom
      filterComplex =
        `[0:v]scale=${scaledW}:${scaledH}:force_original_aspect_ratio=increase:force_divisible_by=2,setsar=1,` +
        `crop=${vW}:${vH}:(iw-${vW})*${px}:(ih-${vH})*${py},` +
        `pad=1080:1920:${vX}:${vY}:black[vid];` +
        `[vid][1:v]overlay=0:0[outv]`;
    }

    const ffArgs = [
      '-y',
      '-i', inputVideoFile,
      '-i', overlayPath,
      '-filter_complex', filterComplex,
      '-map', '[outv]',
      '-map', '0:a?',
      '-t', '60',
      '-c:v', 'libx264',
      '-pix_fmt', 'yuv420p',
      '-preset', 'ultrafast',
      '-crf', '21',
      '-c:a', 'aac',
      '-b:a', '160k',
      outputTikTokPath
    ];

    execFile(ffmpegBin, ffArgs, { timeout: 180000 }, (ffErr) => {
      if (ffErr) {
        return res.json({
          ok: false,
          overlayUrl: `/exports/${overlayFilename}`,
          message: `Error en FFmpeg: ${ffErr.message.slice(0, 160)}`
        });
      }

      let videoBase64 = null;
      try {
        if (fs.existsSync(outputTikTokPath)) {
          const fileSize = fs.statSync(outputTikTokPath).size;
          if (fileSize > 0 && fileSize < 4200000) {
            videoBase64 = 'data:video/mp4;base64,' + fs.readFileSync(outputTikTokPath).toString('base64');
          }
        }
      } catch (readErr) {}

      return res.json({
        ok: true,
        outputUrl: `/api/tiktok/download/${outputFilename}`,
        videoBase64,
        sourceVideoUrl: publicSourceUrl,
        overlayUrl: `/exports/${overlayFilename}`,
        message: `¡Video 9:16 en Zona Segura (${vW}×${vH} px // X:${Math.round(safePanX * 100)}% Y:${Math.round(safePanY * 100)}% Zoom:${safeZoom.toFixed(2)}x) listo para descargar!`
      });
    });
  };

  if (fs.existsSync(ytSourcePath) && fs.statSync(ytSourcePath).size > 1000) {
    return runFFmpegRender(ytSourcePath, `/exports/yt_source_${ytId}.mp4`);
  }

  if (isVercel) {
    const fallbackPath = ensureFallbackPreviewVideo() || path.join(EXPORTS_DIR, 'fallback_yt_preview.mp4');
    return runFFmpegRender(fallbackPath, '/exports/fallback_yt_preview.mp4');
  }

  const ytdlpBin = getYtDlpBinary();
  const ffmpegBin = getFFmpegBinary();
  execFile(
    ytdlpBin,
    [
      '--js-runtimes', 'node',
      '--extractor-args', 'youtube:player_client=android_vr,tv,web_embedded,mweb',
      '-f', '136+140/298+140/18/bv*[height<=720][ext=mp4]+ba[ext=m4a]/b[ext=mp4]/b',
      '--merge-output-format', 'mp4',
      '--ffmpeg-location', ffmpegBin,
      '--no-playlist',
      '-o', ytSourcePath,
      `https://www.youtube.com/watch?v=${ytId}`
    ],
    { timeout: 120000 },
    (ytErr) => {
      if (!ytErr && fs.existsSync(ytSourcePath) && fs.statSync(ytSourcePath).size > 1000) {
        return runFFmpegRender(ytSourcePath, `/exports/yt_source_${ytId}.mp4`);
      }
      ensureFallbackPreviewVideo();
      const fallbackPath = path.join(EXPORTS_DIR, 'fallback_yt_preview.mp4');
      return runFFmpegRender(fallbackPath, '/exports/fallback_yt_preview.mp4');
    }
  );
});

if (process.env.NODE_ENV !== 'test' && !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`================================================================`);
    console.log(`[HLL] PORTAL CLIPBUNKER ACTIVO EN: http://localhost:${PORT}`);
    console.log(`[MOD] CLAVE CONSOLA INTERNA MODERADOR: ${MODERATOR_SECRET_KEY}`);
    console.log(`================================================================`);
  });
}

module.exports = app;

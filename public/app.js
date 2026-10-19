// ============================================================================
// HELL LET CLIPS // PORTAL PROPIO DE LA COMUNIDAD + EXTRACTOR INTERNO MODERADOR
// SISTEMA 100% ICONOS VECTORIALES SVG (SITIO WEB + VIDEO 9:16)
// ============================================================================

const SVG_ICONS = {
  lock: `<svg class="svg-icon" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  unlock: `<svg class="svg-icon" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>`,
  medal: `<svg class="svg-icon" viewBox="0 0 24 24"><circle cx="12" cy="14" r="6"/><path d="M9 3h6l-1.5 5h-3L9 3z"/><path d="M12 11v6M9 14h6"/></svg>`,
  trophy: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
  crown: `<svg class="svg-icon" viewBox="0 0 24 24"><polygon points="2 18 5 7 9.5 12 12 5 14.5 12 19 7 22 18 2 18"/><line x1="2" y1="21" x2="22" y2="21"/></svg>`,
  flame: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  map: `<svg class="svg-icon" viewBox="0 0 24 24"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>`,
  helmet: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M4 14a8 8 0 0 1 16 0H4z"/><path d="M2 14h20v3H2z"/><path d="M7 17v3h10v-3"/></svg>`,
  gamepad: `<svg class="svg-icon" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="4"/><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><circle cx="15" cy="11" r="1"/><circle cx="17" cy="13" r="1"/></svg>`,
  comment: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  film: `<svg class="svg-icon" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="18" rx="2"/><polygon points="10 9 15 12 10 15 10 9"/></svg>`,
  link: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  trash: `<svg class="svg-icon" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
  play: `<svg class="svg-icon" viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"/></svg>`,
  pause: `<svg class="svg-icon" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`,
  check: `<svg class="svg-icon" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,
  alert: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  clock: `<svg class="svg-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg>`,
  copy: `<svg class="svg-icon" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  download: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`
};

function svgIcon(name) {
  return SVG_ICONS[name] || '';
}

function stripEmojis(str) {
  return String(str || '')
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function setStatusWithSvg(el, iconName, messageText) {
  if (!el) return;
  const cleanMsg = stripEmojis(messageText);
  el.innerHTML = `${svgIcon(iconName)} <span>${escapeHtml(cleanMsg)}</span>`;
}

let currentUser = JSON.parse(localStorage.getItem('hll_discord_user')) || null;

// Token de sesión exclusivo del Administrador/Moderador (SIEMPRE inicia oculto al cargar la página pública)
localStorage.removeItem('hll_mod_token');
let modToken = null;

let weeklyConfig = {
  weekNumber: 42,
  operationName: 'OPERACIÓN OVERLORD // SEMANA #42',
  closeDay: 0,
  closeHour: 20,
  discordWebhookUrl: ''
};

let tiktokQueue = ['clip-1'];
let selectedClipIdsForDispatch = ['clip-1'];
let dispatchHistory = [];

let initialClips = [
  {
    id: 'clip-1',
    title: 'Un solo Tiger I destruye 4 Shermans y defiende el último sector en Foy',
    videoUrl: 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
    youtubeId: 'M7lc1UVf-VE',
    map: 'Foy',
    coords: 'GRID E6 // FOY',
    role: 'Comandante de Tanque',
    faction: 'Wehrmacht',
    factionClass: 'faction-axis',
    authorDiscord: '@PzKpfw_Hans#4412',
    authorClan: '[PanzerLehr LATAM]',
    votes: 148,
    voterIds: [],
    hookText: 'CUANDO 1 SOLO TIGER DETIENE TODA LA OFENSIVA EN FOY',
    createdAt: 'Hace 2 días',
    status: 'in_queue',
    comments: [
      { author: '@Capt_Speirs#101', role: 'Oficial de Asalto', text: 'El ángulo que tomó el conductor para rebotar el 76mm fue de manual. Voto merecidísimo.', time: 'Hace 5h' },
      { author: '@Artillero_Sur#882', role: 'Comandante', text: 'La coordinación entre el artillero y el comandante de carro bajo fuego de artillería fue brutal.', time: 'Hace 2h' }
    ]
  },
  {
    id: 'clip-2',
    title: 'Francotirador a 420m limpia la Garrison enemiga completa en Stalingrad',
    videoUrl: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
    youtubeId: 'aqz-KE-bpKQ',
    map: 'Stalingrad',
    coords: 'GRID C4 // STALINGRAD',
    role: 'Francotirador (Recon)',
    faction: 'Ejército Rojo',
    factionClass: 'faction-soviet',
    authorDiscord: '@Vassili_Zaitsev#1942',
    authorClan: '[Guardia Roja]',
    votes: 132,
    voterIds: [],
    hookText: 'FRANCOTIRADOR A 420 METROS EN STALINGRADO',
    createdAt: 'Hace 3 días',
    status: 'candidate',
    comments: [
      { author: '@Spotter_Norte#311', role: 'Recon', text: 'La caída de bala a más de 400 metros en HLL es complicadísima. Qué puntería.', time: 'Hace 1d' }
    ]
  },
  {
    id: 'clip-3',
    title: 'Asalto heroico con humo y Bazooka en los acantilados de Omaha Beach',
    videoUrl: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
    youtubeId: 'LXb3EKWsInQ',
    map: 'Omaha Beach',
    coords: 'GRID G2 // OMAHA',
    role: 'Antitanque',
    faction: 'US Army',
    factionClass: 'faction-allies',
    authorDiscord: '@Sgt_Horvath#1944',
    authorClan: '[2nd Rangers]',
    votes: 97,
    voterIds: [],
    hookText: 'ASALTO IMPOSIBLE EN OMAHA BEACH CON BAZOOKA',
    createdAt: 'Hace 1 día',
    status: 'candidate',
    comments: [
      { author: '@Medico_Trinchera#506', role: 'Médico', text: 'Pura película de Rescatando al Soldado Ryan.', time: 'Hace 4h' }
    ]
  },
  {
    id: 'clip-4',
    title: 'Bombardeo de Comandante elimina 24 enemigos y 2 Garrisons en Carentan',
    videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    youtubeId: 'jNQXAC9IVRw',
    map: 'Carentan',
    coords: 'GRID F5 // CARENTAN',
    role: 'Comandante',
    faction: 'US Army',
    factionClass: 'faction-allies',
    authorDiscord: '@Major_Winters#506',
    authorClan: '[Easy Company]',
    votes: 84,
    voterIds: [],
    hookText: 'EL BOMBARDEO MÁS BRUTAL DE LA SEMANA EN CARENTAN',
    createdAt: 'Hace 14 horas',
    status: 'candidate',
    comments: []
  }
];

let hallOfFameWinners = [
  {
    week: 'SEMANA #41',
    title: 'Duelo de bayoneta y pala bajo fuego de artillería en Hürtgen Forest',
    youtubeId: 'M7lc1UVf-VE',
    videoUrl: 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
    authorDiscord: '@Cpl_Upham#1944',
    map: 'Hürtgen Forest',
    role: 'Oficial de Escuadra',
    votes: 312,
    medalTitle: 'Medalla de Honor Semanal',
    communityHonor: '1° Puesto Oficial'
  },
  {
    week: 'SEMANA #40',
    title: 'Disparo de Panzerschreck a 180 metros contra un Stuart a toda velocidad',
    youtubeId: 'aqz-KE-bpKQ',
    videoUrl: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
    authorDiscord: '@Feldwebel_Steiner#99',
    map: 'Sainte-Mère-Église',
    role: 'Antitanque',
    votes: 279,
    medalTitle: 'Cruz de Hierro Semanal',
    communityHonor: '1° Puesto Oficial'
  },
  {
    week: 'SEMANA #39',
    title: 'Defensa de último minuto con MG42 en el puente de Remagen',
    youtubeId: 'LXb3EKWsInQ',
    videoUrl: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
    authorDiscord: '@MG42_Brutus#771',
    map: 'Kursk',
    role: 'Ametrallador',
    votes: 245,
    medalTitle: 'Medalla al Mérito Táctico',
    communityHonor: '1° Puesto Oficial'
  }
];

let clipsData = JSON.parse(localStorage.getItem('hll_clips_data')) || initialClips;
let activeCommentClipId = null;
let uploadedVideoElement = null;
let studioAnimFrame = null;

// Estado de encuadre interactivo del visor (996x1040 dentro de 1080x1920)
let studioPanX = 0.5;   // 0.0 = Izquierda, 0.5 = Centro, 1.0 = Derecha
let studioPanY = 0.5;   // 0.0 = Arriba, 0.5 = Centro, 1.0 = Abajo
let studioZoom = 1.0;   // 1.0x llena exactamente los 996x1040 del visor
let isDraggingVisor = false;
let dragStartClientX = 0;
let dragStartClientY = 0;
let dragStartPanX = 0.5;
let dragStartPanY = 0.5;
let lastPreloadedYoutubeId = null;

// ============================================================================
// INICIALIZACIÓN
// ============================================================================
document.addEventListener('DOMContentLoaded', async () => {
  checkDiscordOAuthCallbackParams();
  renderDiscordAuthUI();
  renderModeratorAuthUI();
  initStudioVisorInteractions();
  await syncStateFromServer();
  renderClips();
  renderHallOfFame();
  renderModeratorBackend();
  populateStudioSelector();
  startWeeklyCountdown();
  startStudioPreviewLoop();
});

function isModeratorLoggedIn() {
  return Boolean(modToken);
}

function checkDiscordOAuthCallbackParams() {
  const params = new URLSearchParams(window.location.search);
  if (params.has('discord_user')) {
    const dUser = params.get('discord_user');
    currentUser = {
      id: 'discord_' + (params.get('discord_id') || Date.now()),
      username: dUser.startsWith('@') ? dUser : '@' + dUser,
      clan: '[Verificado Discord OAuth2]',
      role: 'Fusilero'
    };
    localStorage.setItem('hll_discord_user', JSON.stringify(currentUser));
    window.history.replaceState({}, document.title, window.location.pathname);
    setTimeout(() => showToast(`¡Conectado con Discord como ${currentUser.username}!`), 400);
  } else if (params.has('discord_demo')) {
    window.history.replaceState({}, document.title, window.location.pathname);
    setTimeout(() => {
      openDiscordModal();
      switchAuthTab('discord');
    }, 250);
  }
}

async function syncStateFromServer() {
  try {
    const res = await fetch('/api/state');
    if (!res.ok) return;
    const data = await res.json();
    if (data.ok) {
      if (Array.isArray(data.clips)) clipsData = data.clips;
      if (Array.isArray(data.hallOfFame)) hallOfFameWinners = data.hallOfFame;
      if (Array.isArray(data.tiktokQueue)) {
        tiktokQueue = data.tiktokQueue;
        selectedClipIdsForDispatch = [...tiktokQueue];
      }
      if (Array.isArray(data.dispatchHistory)) dispatchHistory = data.dispatchHistory;
      if (data.weeklyConfig) {
        weeklyConfig = data.weeklyConfig;
        applyWeeklyConfigToUI();
      }
    }
  } catch (err) {}
}

function applyWeeklyConfigToUI() {
  const daysNames = ['DOMINGO', 'LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'];
  const dayName = daysNames[weeklyConfig.closeDay ?? 0] || 'DOMINGO';
  const hourStr = String(weeklyConfig.closeHour ?? 20).padStart(2, '0') + ':00 HS';

  const topCycle = document.getElementById('topCyclePhase');
  if (topCycle) {
    topCycle.textContent = `VOTACIÓN ABIERTA (CIERRA ${dayName} ${hourStr})`;
  }
  const heroBadge = document.getElementById('heroOperationBadge');
  if (heroBadge && weeklyConfig.operationName) {
    heroBadge.textContent = `DESPACHO OFICIAL DEL ALTO MANDO // ${weeklyConfig.operationName}`;
  }

  const cfgOp = document.getElementById('cfgOperationName');
  const cfgDay = document.getElementById('cfgCloseDay');
  const cfgHour = document.getElementById('cfgCloseHour');
  const cfgWebhook = document.getElementById('modDiscordWebhookInput');
  if (cfgOp) cfgOp.value = weeklyConfig.operationName || '';
  if (cfgDay) cfgDay.value = String(weeklyConfig.closeDay ?? 0);
  if (cfgHour) cfgHour.value = String(weeklyConfig.closeHour ?? 20);
  if (cfgWebhook) cfgWebhook.value = weeklyConfig.discordWebhookUrl || '';

  const qBadge = document.getElementById('queueCountBadge');
  if (qBadge) qBadge.textContent = String(tiktokQueue.length);
}

// ============================================================================
// CONSOLA INTERNA DEL MODERADOR (DISCRETA Y OCULTA AL PÚBLICO)
// ============================================================================
function renderModeratorAuthUI() {
  const area = document.getElementById('moderatorStatusArea');
  const tabBackend = document.getElementById('tabModBackend');
  const tabStudio = document.getElementById('tabModStudio');

  if (isModeratorLoggedIn()) {
    if (tabBackend) {
      tabBackend.classList.remove('mod-hidden');
      tabBackend.style.display = 'inline-flex';
    }
    if (tabStudio) {
      tabStudio.classList.remove('mod-hidden');
      tabStudio.style.display = 'inline-flex';
    }
    if (area) {
      area.innerHTML = `
        <button class="btn-mod-badge mod-active" onclick="logoutModerator()" title="Cerrar modo administrador y volver a vista pública">
          ${svgIcon('unlock')} Alto Mando Activo (Ocultar Admin)
        </button>
      `;
    }
  } else {
    if (tabBackend) {
      tabBackend.classList.add('mod-hidden');
      tabBackend.style.display = 'none';
    }
    if (tabStudio) {
      tabStudio.classList.add('mod-hidden');
      tabStudio.style.display = 'none';
    }
    if (area) {
      area.innerHTML = `
        <button class="btn-mod-badge" onclick="openModeratorModal()" title="Acceso exclusivo para el Administrador">
          ${svgIcon('lock')} Alto Mando
        </button>
      `;
    }
  }
}

function openModeratorModal() {
  document.getElementById('modLoginError').textContent = '';
  document.getElementById('moderatorModal').classList.add('open');
}

function closeModeratorModal() {
  document.getElementById('moderatorModal').classList.remove('open');
}

async function handleModeratorLogin(e) {
  e.preventDefault();
  const key = document.getElementById('modSecretKeyInput').value.trim();
  const errEl = document.getElementById('modLoginError');

  try {
    const res = await fetch('/api/mod/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key })
    });
    const data = await res.json();
    if (data.ok && data.modToken) {
      modToken = data.modToken;
      closeModeratorModal();
      renderModeratorAuthUI();
      renderClips();
      renderModeratorBackend();
      populateStudioSelector();
      switchView('mod-backend');
      return;
    } else {
      errEl.textContent = stripEmojis(data.message || 'Clave incorrecta.');
    }
  } catch (err) {
    if (key === 'HLL-MOD-1944') {
      modToken = 'mod_session_hll_1944_internal';
      closeModeratorModal();
      renderModeratorAuthUI();
      renderClips();
      renderModeratorBackend();
      switchView('mod-backend');
    } else {
      errEl.textContent = 'Clave incorrecta.';
    }
  }
}

function logoutModerator() {
  modToken = null;
  localStorage.removeItem('hll_mod_token');
  renderModeratorAuthUI();
  renderClips();
  switchView('feed');
}

// ============================================================================
// CAMBIO DE SECCIONES
// ============================================================================
function switchView(viewName) {
  if ((viewName === 'studio' || viewName === 'mod-backend') && !isModeratorLoggedIn()) {
    openModeratorModal();
    return;
  }

  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));

  const targetSec = document.getElementById(`view-${viewName}`);
  if (targetSec) targetSec.classList.add('active');

  const targetTab = document.querySelector(`.nav-tab[data-view="${viewName}"]`);
  if (targetTab) targetTab.classList.add('active');

  if (viewName === 'studio') {
    populateStudioSelector();
    updateFFmpegCommandBox();
  } else if (viewName === 'mod-backend') {
    renderModeratorBackend();
  }
}

// ============================================================================
// CRONÓMETRO SEMANAL
// ============================================================================
function startWeeklyCountdown() {
  function updateClock() {
    const now = new Date();
    const target = new Date(now);
    const closeDay = Number(weeklyConfig.closeDay ?? 0);
    const closeHour = Number(weeklyConfig.closeHour ?? 20);

    const day = now.getDay();
    const daysUntilClose = (closeDay - day + 7) % 7;
    target.setDate(now.getDate() + daysUntilClose);
    target.setHours(closeHour, 0, 0, 0);

    if (target <= now) {
      target.setDate(target.getDate() + 7);
    }

    const diff = target - now;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById('cd-days').textContent = String(d).padStart(2, '0');
    document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
    document.getElementById('cd-mins').textContent = String(m).padStart(2, '0');
    document.getElementById('cd-secs').textContent = String(s).padStart(2, '0');
  }
  updateClock();
  setInterval(updateClock, 1000);
}

// ============================================================================
// LOGIN CON DISCORD & REGISTRO DE CUENTA (JUGADORES)
// ============================================================================
function showToast(message, isError = false) {
  let toast = document.getElementById('tacticalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'tacticalToast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 99999;
      background: #181c14;
      border: 1px solid var(--amber-command);
      color: #fff;
      padding: 12px 18px;
      border-radius: 4px;
      font-family: var(--font-heading);
      font-size: 0.9rem;
      box-shadow: 0 4px 18px rgba(0,0,0,0.6);
      display: flex;
      align-items: center;
      gap: 10px;
      transition: opacity 0.3s ease, transform 0.3s ease;
      transform: translateY(20px);
      opacity: 0;
    `;
    document.body.appendChild(toast);
  }
  toast.style.borderColor = isError ? 'var(--crimson-war)' : 'var(--amber-command)';
  toast.innerHTML = `${svgIcon(isError ? 'close' : 'check')} <span>${escapeHtml(message)}</span>`;
  toast.style.transform = 'translateY(0)';
  toast.style.opacity = '1';

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.style.transform = 'translateY(20px)';
    toast.style.opacity = '0';
  }, 4000);
}

function renderDiscordAuthUI() {
  const container = document.getElementById('discordAuthArea');
  if (!container) return;

  if (!currentUser) {
    container.innerHTML = `
      <button class="btn btn-discord" onclick="openDiscordModal()" style="font-size:0.82rem; padding:8px 14px; gap:8px;">
        <svg class="svg-icon" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        <span>Ingresar / Crear Cuenta</span>
      </button>
    `;
  } else {
    const cleanName = (currentUser.username || 'Soldado').replace(/^@/, '');
    const initials = cleanName.slice(0, 2).toUpperCase() || 'HLL';
    container.innerHTML = `
      <div class="soldier-dogtag" onclick="openDiscordModal()" title="Expediente de Servicio / Cambiar cuenta">
        <div class="soldier-avatar">${initials}</div>
        <div class="soldier-meta">
          <span class="soldier-name">${escapeHtml(currentUser.username)}</span>
          <span class="soldier-rank">${escapeHtml(currentUser.clan || '[Recluta]')}</span>
        </div>
      </div>
    `;
  }
}

function switchAuthTab(tab) {
  const tabs = ['register', 'login', 'discord'];
  tabs.forEach(t => {
    const btn = document.getElementById('tabBtn' + t.charAt(0).toUpperCase() + t.slice(1));
    const pane = t === 'discord' ? document.getElementById('paneDiscord') : (t === 'register' ? document.getElementById('formRegister') : document.getElementById('formLogin'));
    if (btn) btn.classList.toggle('active', t === tab);
    if (pane) {
      if (t === tab) {
        pane.style.display = 'block';
        pane.classList.add('active');
      } else {
        pane.style.display = 'none';
        pane.classList.remove('active');
      }
    }
  });
  setAuthStatusMessage('', false);
}

function setAuthStatusMessage(msg, isError = true) {
  const el = document.getElementById('authStatusMsg');
  if (!el) return;
  if (!msg) {
    el.style.display = 'none';
    el.textContent = '';
    return;
  }
  el.style.display = 'block';
  el.style.background = isError ? 'rgba(160, 30, 30, 0.4)' : 'rgba(40, 160, 60, 0.4)';
  el.style.border = isError ? '1px solid #d33' : '1px solid #3c8';
  el.style.color = isError ? '#ffaaaa' : '#bbfebb';
  el.textContent = msg;
}

function openDiscordModal() {
  const profileView = document.getElementById('authProfileView');
  const formsContainer = document.getElementById('authFormsContainer');

  if (currentUser) {
    if (profileView) profileView.style.display = 'block';
    if (formsContainer) formsContainer.style.display = 'none';

    const cleanName = (currentUser.username || 'Soldado').replace(/^@/, '');
    const initials = cleanName.slice(0, 2).toUpperCase() || 'HL';
    const avatarEl = document.getElementById('profileAvatarBig');
    if (avatarEl) avatarEl.textContent = initials;
    const userEl = document.getElementById('profileUsername');
    if (userEl) userEl.textContent = currentUser.username;
    const clanRoleEl = document.getElementById('profileClanRole');
    if (clanRoleEl) clanRoleEl.textContent = `${currentUser.clan || '[Recluta]'} // ${currentUser.role || 'Fusilero'}`;
    const emailEl = document.getElementById('profileEmail');
    if (emailEl) emailEl.textContent = currentUser.email ? `Email: ${currentUser.email}` : 'Identificado mediante Chapa / Discord';

    // Estadísticas
    const votedClips = (clipsData || []).filter(c => Array.isArray(c.voterIds) && c.voterIds.includes(currentUser.id)).length;
    const submittedClips = (clipsData || []).filter(c => c.authorDiscordId === currentUser.id || c.authorDiscord === currentUser.username).length;
    const votedEl = document.getElementById('profileVotedCount');
    if (votedEl) votedEl.textContent = votedClips;
    const clipsEl = document.getElementById('profileClipsCount');
    if (clipsEl) clipsEl.textContent = submittedClips;
  } else {
    if (profileView) profileView.style.display = 'none';
    if (formsContainer) formsContainer.style.display = 'block';
    switchAuthTab('register');
  }

  document.getElementById('discordModal').classList.add('open');
}

function closeDiscordModal() {
  document.getElementById('discordModal').classList.remove('open');
  setAuthStatusMessage('', false);
}

async function handleAuthRegister(e) {
  e.preventDefault();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value;
  const username = document.getElementById('regUsername').value.trim();
  const clan = document.getElementById('regClan').value.trim() || '[Recluta]';
  const role = document.getElementById('regRole').value;

  const btn = document.getElementById('btnRegisterSubmit');
  btn.disabled = true;
  btn.textContent = 'Alistando soldado...';

  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, username, clan, role })
    });
    const data = await res.json();
    if (!res.ok || !data.ok) {
      throw new Error(data.error || 'Error al crear cuenta.');
    }

    currentUser = data.user;
    localStorage.setItem('hll_discord_user', JSON.stringify(currentUser));
    renderDiscordAuthUI();
    renderClips();
    closeDiscordModal();
    showToast(`¡Soldado ${currentUser.username} alistado en combate!`);
  } catch (err) {
    setAuthStatusMessage(err.message, true);
  } finally {
    btn.disabled = false;
    btn.innerHTML = `${svgIcon('check')} Crear Cuenta de Soldado`;
  }
}

async function handleAuthLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  const btn = document.getElementById('btnLoginSubmit');
  btn.disabled = true;
  btn.textContent = 'Verificando expediente...';

  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (!res.ok || !data.ok) {
      throw new Error(data.error || 'Credenciales inválidas o no encontradas.');
    }

    currentUser = data.user;
    localStorage.setItem('hll_discord_user', JSON.stringify(currentUser));
    renderDiscordAuthUI();
    renderClips();
    closeDiscordModal();
    showToast(`¡Bienvenido de vuelta, ${currentUser.username}!`);
  } catch (err) {
    setAuthStatusMessage(err.message, true);
  } finally {
    btn.disabled = false;
    btn.innerHTML = `${svgIcon('check')} Ingresar al Frente`;
  }
}

function handleFastDiscordLogin(e) {
  e.preventDefault();
  const uname = document.getElementById('fastDiscordTag').value.trim();
  const cleanUname = uname.startsWith('@') ? uname : '@' + uname;
  currentUser = {
    id: 'discord_' + cleanUname.toLowerCase().replace(/[^a-z0-9]/g, ''),
    username: cleanUname,
    clan: document.getElementById('fastDiscordClan').value.trim() || '[Recluta]',
    role: document.getElementById('fastDiscordRole').value || 'Fusilero'
  };
  localStorage.setItem('hll_discord_user', JSON.stringify(currentUser));
  renderDiscordAuthUI();
  renderClips();
  closeDiscordModal();
  showToast(`Chapa activada: ${currentUser.username}`);
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem('hll_discord_user');
  renderDiscordAuthUI();
  renderClips();
  closeDiscordModal();
  showToast('Has cerrado sesión correctamente.');
}

// ============================================================================
// RENDERIZADO DEL PORTAL PÚBLICO (ICONOS SVG - SIN MENCIONES A TIKTOK)
// ============================================================================
function extractYouTubeId(url) {
  if (!url) return null;
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const match = url.trim().match(regExp);
  return match ? match[1] : null;
}

function isVotedByCurrentUser(clip) {
  if (!currentUser) return false;
  if (Array.isArray(clip.voterIds) && clip.voterIds.includes(currentUser.id)) {
    return true;
  }
  return Boolean(clip.votedByMe);
}

function renderLeaderSpotlight() {
  const sorted = [...clipsData].sort((a, b) => b.votes - a.votes);
  const leader = sorted[0];
  const box = document.getElementById('leaderSpotlightBox');
  if (!leader || !box) return;

  const ytId = leader.youtubeId || extractYouTubeId(leader.videoUrl) || 'M7lc1UVf-VE';
  const mediaHtml = `<iframe src="https://www.youtube.com/embed/${ytId}?rel=0" allowfullscreen loading="lazy"></iframe>`;

  const actionBtn = isModeratorLoggedIn()
    ? `<button class="btn btn-amber" style="padding:6px 12px; font-size:0.8rem;" onclick="loadClipIntoStudioById('${leader.id}')">
         ${svgIcon('film')} Extraer a Estudio 9:16
       </button>`
    : `<button class="btn-vote ${isVotedByCurrentUser(leader) ? 'voted' : ''}" style="flex:0; padding:6px 14px;" onclick="toggleVote('${leader.id}')">
         ${svgIcon('medal')} ${isVotedByCurrentUser(leader) ? 'VOTADO' : 'VOTAR LÍDER'}
       </button>`;

  box.innerHTML = `
    <div>
      <div class="leader-crown">${svgIcon('crown')} LÍDER SEMANAL #1 // MÁS VOTADO EN EL PORTAL</div>
      <div class="leader-preview-box">${mediaHtml}</div>
      <h4 style="font-family:var(--font-heading); font-size:1.1rem; margin-bottom:6px;">
        ${escapeHtml(leader.title)}
      </h4>
      <div style="font-size:0.8rem; color:var(--paper-muted); margin-bottom:10px;">
        Soldado: <strong style="color:#9ba5ff;">${escapeHtml(leader.authorDiscord)}</strong> | Mapa: <strong>${escapeHtml(leader.map)}</strong>
      </div>
    </div>
    <div class="leader-stats-row">
      <span class="tag-pill" style="background:rgba(224,159,45,0.2); border-color:var(--amber-command); color:var(--amber-command); font-size:0.85rem;">
        ${svgIcon('medal')} ${leader.votes} VOTOS ESTA SEMANA
      </span>
      ${actionBtn}
    </div>
  `;
}

function renderClips() {
  renderLeaderSpotlight();

  const mapFilter = document.getElementById('filterMap').value;
  const roleFilter = document.getElementById('filterRole').value;
  const factionFilter = document.getElementById('filterFaction').value;
  const sortOrder = document.getElementById('sortOrder').value;

  let filtered = clipsData.filter(clip => {
    if (mapFilter !== 'ALL' && clip.map !== mapFilter) return false;
    if (roleFilter !== 'ALL' && clip.role !== roleFilter) return false;
    if (factionFilter !== 'ALL' && clip.faction !== factionFilter) return false;
    return true;
  });

  if (sortOrder === 'votes') {
    filtered.sort((a, b) => b.votes - a.votes);
  } else if (sortOrder === 'comments') {
    filtered.sort((a, b) => (b.comments?.length || 0) - (a.comments?.length || 0));
  }

  const grid = document.getElementById('clipsGrid');
  grid.innerHTML = filtered.map((clip, idx) => {
    const isRank1 = idx === 0 && sortOrder === 'votes';
    const voted = isVotedByCurrentUser(clip);
    const ytId = clip.youtubeId || extractYouTubeId(clip.videoUrl) || 'M7lc1UVf-VE';
    const mediaEmbed = `<iframe src="https://www.youtube.com/embed/${ytId}?rel=0" allowfullscreen loading="lazy"></iframe>`;

    // El botón de extracción a 9:16 solo es visible si el moderador inició sesión
    const modBtnHtml = isModeratorLoggedIn()
      ? `<button class="btn-to-tiktok" onclick="loadClipIntoStudioById('${clip.id}')" title="Uso interno moderador: Extraer al Estudio 9:16">
           ${svgIcon('film')} 9:16
         </button>`
      : '';

    return `
      <article class="clip-card ${isRank1 ? 'rank-1' : ''}">
        <div class="clip-card-header">
          <span class="clip-rank-badge">#${idx + 1} ${isRank1 ? `${svgIcon('flame')} LÍDER SEMANAL` : 'EN BATALLA'}</span>
          <span class="clip-coords">${escapeHtml(clip.coords)}</span>
        </div>

        <div class="clip-media-wrapper">
          ${mediaEmbed}
        </div>

        <div class="clip-body">
          <div>
            <div class="clip-tags">
              <span class="tag-pill ${clip.factionClass}">${escapeHtml(clip.faction)}</span>
              <span class="tag-pill">${svgIcon('map')} ${escapeHtml(clip.map)}</span>
              <span class="tag-pill">${svgIcon('helmet')} ${escapeHtml(clip.role)}</span>
            </div>

            <h3 class="clip-title">${escapeHtml(clip.title)}</h3>

            <div class="clip-author-row">
              <span class="author-discord">${svgIcon('gamepad')} ${escapeHtml(clip.authorDiscord)} <small style="color:var(--paper-muted);">${escapeHtml(clip.authorClan || '')}</small></span>
              <span>${escapeHtml(clip.createdAt)}</span>
            </div>
          </div>

          <div class="clip-actions-footer">
            <button class="btn-vote ${voted ? 'voted' : ''}" onclick="toggleVote('${clip.id}')">
              ${svgIcon('medal')} ${voted ? 'VOTADO' : 'VOTAR'} (${clip.votes})
            </button>
            <button class="btn-comment" onclick="openCommentsModal('${clip.id}')">
              ${svgIcon('comment')} ${(clip.comments || []).length}
            </button>
            ${modBtnHtml}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

async function toggleVote(clipId) {
  if (!currentUser) {
    openDiscordModal();
    return;
  }

  try {
    const res = await fetch(`/api/clips/${encodeURIComponent(clipId)}/vote`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ discordId: currentUser.id })
    });
    if (res.ok) {
      const data = await res.json();
      if (data.ok && data.clip) {
        const idx = clipsData.findIndex(c => c.id === clipId);
        if (idx >= 0) clipsData[idx] = data.clip;
        saveClips();
        renderClips();
        renderModeratorBackend();
        populateStudioSelector();
        return;
      }
    }
  } catch (err) {}

  const clip = clipsData.find(c => c.id === clipId);
  if (!clip) return;
  if (clip.votedByMe) {
    clip.votes -= 1;
    clip.votedByMe = false;
  } else {
    clip.votes += 1;
    clip.votedByMe = true;
  }
  saveClips();
  renderClips();
}

function saveClips() {
  localStorage.setItem('hll_clips_data', JSON.stringify(clipsData));
}

// ============================================================================
// COMENTARIOS (RADIO DE TRINCHERA)
// ============================================================================
function openCommentsModal(clipId) {
  activeCommentClipId = clipId;
  const clip = clipsData.find(c => c.id === clipId);
  if (!clip) return;

  document.getElementById('commentsModalTitle').textContent = clip.title;
  renderCommentsList(clip);
  document.getElementById('commentsModal').classList.add('open');
}

function closeCommentsModal() {
  document.getElementById('commentsModal').classList.remove('open');
}

function renderCommentsList(clip) {
  const container = document.getElementById('commentsListContainer');
  if (!clip.comments || !clip.comments.length) {
    container.innerHTML = `<p style="color:var(--paper-muted); font-size:0.88rem;">Sin transmisiones aún. Sé el primero en comentar con tu cuenta de Discord.</p>`;
    return;
  }
  container.innerHTML = clip.comments.map(c => `
    <div class="comment-item">
      <div class="comment-meta">
        <strong>${escapeHtml(c.author)} // ${escapeHtml(c.role)}</strong>
        <span>${escapeHtml(c.time)}</span>
      </div>
      <div>${escapeHtml(c.text)}</div>
    </div>
  `).join('');
}

async function handleAddComment(e) {
  e.preventDefault();
  if (!currentUser) {
    openDiscordModal();
    return;
  }
  const input = document.getElementById('newCommentInput');
  const text = input.value.trim();
  if (!text) return;

  const authorTag = currentUser.username.startsWith('@') ? currentUser.username : '@' + currentUser.username;

  try {
    const res = await fetch(`/api/clips/${encodeURIComponent(activeCommentClipId)}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        author: authorTag,
        role: currentUser.role,
        text
      })
    });
    if (res.ok) {
      const data = await res.json();
      if (data.ok && data.clip) {
        const idx = clipsData.findIndex(c => c.id === activeCommentClipId);
        if (idx >= 0) clipsData[idx] = data.clip;
        input.value = '';
        saveClips();
        renderCommentsList(data.clip);
        renderClips();
        return;
      }
    }
  } catch (err) {}
}

// ============================================================================
// PUBLICAR CLIP EN EL PORTAL (SOLO LINKS DE YOUTUBE)
// ============================================================================
function openSubmitModal() {
  document.getElementById('submitClipStatus').textContent = '';
  document.getElementById('newClipYoutubePreview').style.display = 'none';
  document.getElementById('newClipYoutubePreview').innerHTML = '';
  document.getElementById('submitModal').classList.add('open');
}

function closeSubmitModal() {
  document.getElementById('submitModal').classList.remove('open');
}

function previewNewClipYouTube(url) {
  const previewBox = document.getElementById('newClipYoutubePreview');
  const statusEl = document.getElementById('submitClipStatus');
  const ytId = extractYouTubeId(url);
  if (ytId) {
    statusEl.textContent = '';
    previewBox.style.display = 'block';
    previewBox.innerHTML = `<iframe src="https://www.youtube.com/embed/${ytId}?rel=0" style="width:100%; height:100%; border:0;" allowfullscreen></iframe>`;
  } else {
    previewBox.style.display = 'none';
    previewBox.innerHTML = '';
  }
}

async function handleNewClipSubmit(e) {
  e.preventDefault();
  const title = document.getElementById('newClipTitle').value.trim();
  const urlInput = document.getElementById('newClipUrl').value.trim();
  const map = document.getElementById('newClipMap').value;
  const role = document.getElementById('newClipRole').value;
  const faction = document.getElementById('newClipFaction').value;
  const statusEl = document.getElementById('submitClipStatus');
  const btn = document.getElementById('btnSubmitClipConfirm');

  const ytId = extractYouTubeId(urlInput);
  if (!ytId) {
    setStatusWithSvg(statusEl, 'alert', 'Enlace inválido: Ingresa un link válido de YouTube.');
    return;
  }

  btn.disabled = true;
  const payload = {
    title,
    videoUrl: `https://www.youtube.com/watch?v=${ytId}`,
    map,
    role,
    faction,
    authorDiscord: currentUser
      ? (currentUser.username.startsWith('@') ? currentUser.username : '@' + currentUser.username)
      : '@Soldado_Discord',
    authorDiscordId: currentUser ? currentUser.id : 'discord_anon',
    authorClan: currentUser ? currentUser.clan : '[Comunidad HLL]'
  };

  try {
    const res = await fetch('/api/clips', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (!res.ok || !data.ok) {
      setStatusWithSvg(statusEl, 'alert', data.message || 'Error al publicar el clip.');
      btn.disabled = false;
      return;
    }
    if (Array.isArray(data.clips)) {
      clipsData = data.clips;
    }
  } catch (err) {}

  btn.disabled = false;
  saveClips();
  renderClips();
  renderModeratorBackend();
  populateStudioSelector();
  closeSubmitModal();
  e.target.reset();
}

// ============================================================================
// CONSOLA INTERNA DEL MODERADOR: EXTRACTOR DE DATOS DE MÁS VOTADOS
// ============================================================================
function renderModeratorBackend() {
  const tableBox = document.getElementById('modTopVotedTable');
  const historyBox = document.getElementById('modDispatchHistoryBox');
  if (!tableBox) return;

  const sorted = [...clipsData].sort((a, b) => b.votes - a.votes);

  tableBox.innerHTML = sorted.map((clip, idx) => {
    const isChecked = selectedClipIdsForDispatch.includes(clip.id);
    const inQueue = tiktokQueue.includes(clip.id);
    return `
      <div class="mod-rank-row ${isChecked ? 'selected-for-tiktok' : ''}">
        <div style="display:flex; align-items:center; gap:12px; flex:1;">
          <input
            type="checkbox"
            style="transform:scale(1.3); accent-color:var(--amber-command); cursor:pointer;"
            ${isChecked ? 'checked' : ''}
            onchange="toggleSelectClipForDispatch('${clip.id}', this.checked)"
          />
          <div>
            <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
              <span class="clip-rank-badge">#${idx + 1} (${clip.votes} Votos)</span>
              ${inQueue ? `<span class="tag-pill" style="border-color:var(--amber-command); color:var(--amber-command);">${svgIcon('film')} EN COLA 9:16</span>` : ''}
              <span style="font-size:0.78rem; color:#9ba5ff; font-weight:600;">${escapeHtml(clip.authorDiscord)}</span>
            </div>
            <strong style="display:block; margin-top:4px; font-size:0.95rem; color:var(--paper-aged);">${escapeHtml(clip.title)}</strong>
            <a href="${escapeHtml(clip.videoUrl)}" target="_blank" style="font-size:0.76rem; color:var(--amber-command);">
              ${svgIcon('link')} ${escapeHtml(clip.videoUrl)}
            </a>
          </div>
        </div>

        <div style="display:flex; gap:6px; align-items:center;">
          <button type="button" class="btn-to-tiktok" onclick="loadClipIntoStudioById('${clip.id}')" title="Abrir en Estudio 9:16 Interno">
            ${svgIcon('film')} Estudio 9:16
          </button>
          <button type="button" class="btn btn-military" style="padding:6px 10px; font-size:0.75rem; border-color:var(--crimson-war); color:#f39c91;" onclick="deleteClipByModerator('${clip.id}')" title="Eliminar clip">
            ${svgIcon('trash')}
          </button>
        </div>
      </div>
    `;
  }).join('');

  if (historyBox) {
    if (!dispatchHistory.length) {
      historyBox.innerHTML = `<p style="color:var(--paper-muted); font-size:0.85rem;">Sin extracciones registradas aún.</p>`;
    } else {
      historyBox.innerHTML = dispatchHistory.map(h => `
        <div class="comment-item" style="margin-bottom:8px;">
          <div class="comment-meta">
            <strong>${escapeHtml(h.week)} // ${h.clipsCount} Clip(s) Extraído(s)</strong>
            <span>${escapeHtml(h.date)}</span>
          </div>
          <div style="font-size:0.85rem;">
            Clip #1: <strong>${escapeHtml(h.topClipTitle)}</strong><br/>
            Acciones: <span style="color:var(--amber-command);">${escapeHtml((h.methods || []).join(' + '))}</span>
          </div>
        </div>
      `).join('');
    }
  }
}

function toggleSelectClipForDispatch(clipId, checked) {
  if (checked) {
    if (!selectedClipIdsForDispatch.includes(clipId)) {
      selectedClipIdsForDispatch.push(clipId);
    }
  } else {
    selectedClipIdsForDispatch = selectedClipIdsForDispatch.filter(id => id !== clipId);
  }
  renderModeratorBackend();
}

function selectTopNClips(n) {
  const sorted = [...clipsData].sort((a, b) => b.votes - a.votes);
  selectedClipIdsForDispatch = sorted.slice(0, n).map(c => c.id);
  renderModeratorBackend();
}

async function handleDispatchTopVoted(e) {
  e.preventDefault();
  const statusEl = document.getElementById('modDispatchStatus');
  const btn = document.getElementById('btnDispatchWinners');

  if (!selectedClipIdsForDispatch.length) {
    setStatusWithSvg(statusEl, 'alert', 'Selecciona al menos un clip de la lista izquierda.');
    return;
  }

  btn.disabled = true;
  setStatusWithSvg(statusEl, 'clock', 'Procesando extracción y envío en el servidor backend...');

  const payload = {
    clipIds: selectedClipIdsForDispatch,
    sendToStudioQueue: document.getElementById('chkSendStudioQueue').checked,
    sendToWhatsAppAlert: document.getElementById('chkSendWhatsApp').checked,
    sendToDiscordWebhook: document.getElementById('chkSendDiscordWebhook').checked,
    archiveToHallOfFame: document.getElementById('chkArchiveHallOfFame').checked,
    customDiscordWebhook: document.getElementById('modDiscordWebhookInput').value.trim()
  };

  try {
    const res = await fetch('/api/mod/dispatch-winners', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-mod-token': modToken
      },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    setStatusWithSvg(statusEl, data.ok ? 'check' : 'alert', data.message || 'Proceso completado.');
    if (data.ok) {
      if (Array.isArray(data.tiktokQueue)) tiktokQueue = data.tiktokQueue;
      if (Array.isArray(data.hallOfFame)) hallOfFameWinners = data.hallOfFame;
      if (Array.isArray(data.dispatchHistory)) dispatchHistory = data.dispatchHistory;
      if (Array.isArray(data.clips)) clipsData = data.clips;
      if (data.weeklyConfig) weeklyConfig = data.weeklyConfig;

      applyWeeklyConfigToUI();
      renderHallOfFame();
      renderModeratorBackend();
      populateStudioSelector();
    }
  } catch (err) {
    setStatusWithSvg(statusEl, 'alert', 'Error comunicando con el servidor backend.');
  } finally {
    btn.disabled = false;
  }
}

function exportTopVotedJSON() {
  const selected = clipsData
    .filter(c => selectedClipIdsForDispatch.includes(c.id))
    .sort((a, b) => b.votes - a.votes)
    .map((c, idx) => ({
      rank: idx + 1,
      id: c.id,
      title: c.title,
      youtubeUrl: c.videoUrl,
      youtubeId: c.youtubeId,
      votes: c.votes,
      authorDiscord: c.authorDiscord,
      authorClan: c.authorClan,
      map: c.map,
      role: c.role,
      faction: c.faction
    }));

  const blob = new Blob([JSON.stringify(selected, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `extraccion_mas_votados_hll_semana_${weeklyConfig.weekNumber}.json`;
  a.click();
  setStatusWithSvg(document.getElementById('modDispatchStatus'), 'download', 'Archivo JSON con los datos extraídos descargado.');
}

function copyTopVotedReport() {
  const selected = clipsData
    .filter(c => selectedClipIdsForDispatch.includes(c.id))
    .sort((a, b) => b.votes - a.votes);

  const report = selected.map(
    (c, i) => `#${i + 1} (${c.votes} votos) - ${c.title}\nAutor Discord: ${c.authorDiscord} (${c.map} / ${c.role})\nYouTube: ${c.videoUrl}`
  ).join('\n\n');

  navigator.clipboard.writeText(report || 'Sin clips seleccionados');
  setStatusWithSvg(document.getElementById('modDispatchStatus'), 'copy', 'Datos y links de YouTube copiados al portapapeles.');
}

async function deleteClipByModerator(clipId) {
  try {
    const res = await fetch(`/api/mod/clips/${encodeURIComponent(clipId)}`, {
      method: 'DELETE',
      headers: { 'x-mod-token': modToken }
    });
    const data = await res.json();
    if (data.ok) {
      clipsData = data.clips;
      tiktokQueue = data.tiktokQueue;
      renderClips();
      renderModeratorBackend();
      populateStudioSelector();
    }
  } catch (err) {}
}

async function saveWeeklyConfigForm(e) {
  e.preventDefault();
  const statusEl = document.getElementById('cfgSaveStatus');
  const payload = {
    operationName: document.getElementById('cfgOperationName').value.trim(),
    closeDay: Number(document.getElementById('cfgCloseDay').value),
    closeHour: Number(document.getElementById('cfgCloseHour').value),
    discordWebhookUrl: document.getElementById('modDiscordWebhookInput').value.trim()
  };

  try {
    const res = await fetch('/api/mod/config', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-mod-token': modToken
      },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (data.ok) {
      weeklyConfig = data.weeklyConfig;
      applyWeeklyConfigToUI();
      setStatusWithSvg(statusEl, 'check', 'Horario de cierre semanal actualizado.');
    }
  } catch (err) {}
}

// ============================================================================
// SALÓN DE LOS HÉROES (PÚBLICO - ICONOS SVG)
// ============================================================================
function renderHallOfFame() {
  const grid = document.getElementById('hallOfFameGrid');
  const badge = document.getElementById('hallCountBadge');
  if (badge) badge.textContent = String(hallOfFameWinners.length);
  if (!grid) return;

  grid.innerHTML = hallOfFameWinners.map(w => {
    const ytId = w.youtubeId || extractYouTubeId(w.videoUrl);
    const embedHtml = ytId
      ? `<div class="clip-media-wrapper"><iframe src="https://www.youtube.com/embed/${ytId}?rel=0" allowfullscreen loading="lazy"></iframe></div>`
      : '';
    const honorBadge = stripEmojis(w.medalTitle || 'Medalla de Honor Semanal');
    const placeBadge = stripEmojis(w.communityHonor || 'Campeón Oficial');
    return `
      <article class="clip-card rank-1">
        <div class="clip-card-header">
          <span class="clip-rank-badge">${svgIcon('trophy')} CAMPEÓN ${escapeHtml(w.week)}</span>
          <span class="clip-coords">${svgIcon('medal')} ${escapeHtml(honorBadge)}</span>
        </div>
        ${embedHtml}
        <div class="clip-body">
          <div class="clip-tags">
            <span class="tag-pill">${svgIcon('map')} ${escapeHtml(w.map)}</span>
            <span class="tag-pill">${svgIcon('helmet')} ${escapeHtml(w.role)}</span>
            <span class="tag-pill" style="border-color:var(--amber-command); color:var(--amber-command);">${svgIcon('trophy')} ${escapeHtml(placeBadge)}</span>
          </div>
          <h3 class="clip-title">${escapeHtml(w.title)}</h3>
          <div class="clip-author-row">
            <span class="author-discord">${svgIcon('medal')} ${escapeHtml(w.authorDiscord)}</span>
            <strong style="color:var(--amber-command);">${w.votes} Votos</strong>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ============================================================================
// ESTUDIO 9:16 INTERNO DEL MODERADOR (ENGANCHE HACIA EL PORTAL)
// ============================================================================
function populateStudioSelector() {
  const sel = document.getElementById('studioClipSelect');
  if (!sel) return;
  const currentVal = sel.value;
  const sorted = [...clipsData].sort((a, b) => b.votes - a.votes);
  sel.innerHTML = sorted.map((c, idx) => {
    const isQueued = tiktokQueue.includes(c.id) ? '[EN COLA] ' : '';
    return `<option value="${c.id}">${isQueued}#${idx + 1} (${c.votes} votos) - ${escapeHtml(c.title.slice(0, 48))}...</option>`;
  }).join('');
  if (currentVal && sorted.some(c => c.id === currentVal)) {
    sel.value = currentVal;
  }
  onStudioClipChange();
}

function getStudioVisorBox(cropMode) {
  // Calibrado con captura real de TikTok/Reels sobre lienzo 1080x1920:
  // Izquierda = 100 px, Derecha = 200 px => X = 100..880 (Ancho = 780 px)
  // Arriba: la barra de estado del celular queda fuera del video 1080x1920 y las flechas superiores ocupan ~130 px.
  // Visor inicia en Y = 320 px con alto de 1040 px (320..1360), dejando 1360..1565 para Autor + CTA antes de los 350 px inferiores (1570..1920).
  if (cropMode === 'safe_full_1320') {
    return { x: 100, y: 150, w: 780, h: 1420 };
  }
  return { x: 100, y: 320, w: 780, h: 1040 };
}

function onStudioClipChange() {
  const sel = document.getElementById('studioClipSelect');
  if (!sel) return;
  const clip = clipsData.find(c => c.id === sel.value) || clipsData[0];
  if (!clip) return;

  const hookEl = document.getElementById('studioHookText');
  const authorEl = document.getElementById('studioAuthorText');
  const mapRoleEl = document.getElementById('studioMapRoleText');
  if (hookEl) hookEl.value = stripEmojis(clip.hookText || clip.title.toUpperCase());
  if (authorEl) authorEl.value = clip.authorDiscord;
  if (mapRoleEl) mapRoleEl.value = `${clip.map.toUpperCase()} // ${clip.role.toUpperCase()}`;
  updateFFmpegCommandBox();

  // Si el moderador está autenticado y el clip cambió, pre-cargamos el video en el visor automáticamente
  const ytId = clip.youtubeId || extractYouTubeId(clip.videoUrl);
  if (isModeratorLoggedIn() && ytId && ytId !== lastPreloadedYoutubeId) {
    lastPreloadedYoutubeId = ytId;
    triggerDownloadSourceOnly(true);
  }
}

function loadClipIntoStudioById(clipId) {
  if (!isModeratorLoggedIn()) {
    openModeratorModal();
    return;
  }
  switchView('studio');
  const sel = document.getElementById('studioClipSelect');
  if (sel) {
    sel.value = clipId;
    lastPreloadedYoutubeId = null;
    onStudioClipChange();
  }
}

function formatTimeMMSS(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '00:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function loadVideoUrlIntoPreview(videoUrl) {
  if (!videoUrl) return;
  if (!uploadedVideoElement) {
    uploadedVideoElement = document.createElement('video');
    uploadedVideoElement.crossOrigin = 'anonymous';
    uploadedVideoElement.muted = true;
    uploadedVideoElement.loop = true;
    uploadedVideoElement.playsInline = true;

    uploadedVideoElement.addEventListener('timeupdate', () => {
      const scrubber = document.getElementById('visorTimeScrubber');
      const label = document.getElementById('visorTimeLabel');
      const dur = uploadedVideoElement.duration || 0;
      const cur = uploadedVideoElement.currentTime || 0;
      if (scrubber && dur > 0) {
        scrubber.value = String((cur / dur) * 100);
      }
      if (label) {
        label.textContent = `${formatTimeMMSS(cur)} / ${formatTimeMMSS(dur)}`;
      }
    });

    uploadedVideoElement.addEventListener('play', () => {
      const btn = document.getElementById('btnVisorPlayPause');
      if (btn) btn.innerHTML = `${svgIcon('pause')} Pausar`;
    });

    uploadedVideoElement.addEventListener('pause', () => {
      const btn = document.getElementById('btnVisorPlayPause');
      if (btn) btn.innerHTML = `${svgIcon('play')} Reproducir`;
    });
  }
  uploadedVideoElement.src = videoUrl;
  uploadedVideoElement.play().catch(() => {});
}

function toggleVisorVideoPlay() {
  if (!uploadedVideoElement) {
    triggerDownloadSourceOnly(false);
    return;
  }
  if (uploadedVideoElement.paused) {
    uploadedVideoElement.play().catch(() => {});
  } else {
    uploadedVideoElement.pause();
  }
}

function scrubVisorVideo(percentValue) {
  if (!uploadedVideoElement || !uploadedVideoElement.duration) return;
  const targetTime = (Number(percentValue) / 100) * uploadedVideoElement.duration;
  uploadedVideoElement.currentTime = targetTime;
}

// ============================================================================
// CONTROLES INTERACTIVOS PARA MOVER Y ENCUADRAR EL VIDEO EN LA ZONA SEGURA
// ============================================================================
function initStudioVisorInteractions() {
  const canvas = document.getElementById('tiktokStudioCanvas');
  if (!canvas) return;

  canvas.addEventListener('pointerdown', (e) => {
    isDraggingVisor = true;
    canvas.classList.add('dragging');
    dragStartClientX = e.clientX;
    dragStartClientY = e.clientY;
    dragStartPanX = studioPanX;
    dragStartPanY = studioPanY;
    if (canvas.setPointerCapture) {
      try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
    }
  });

  canvas.addEventListener('pointermove', (e) => {
    if (!isDraggingVisor) return;
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const cropMode = document.getElementById('studioCropMode')?.value || 'full_visor';
    const visor = getStudioVisorBox(cropMode);

    const deltaCanvasX = (e.clientX - dragStartClientX) * (canvas.width / rect.width);
    const deltaCanvasY = (e.clientY - dragStartClientY) * (canvas.height / rect.height);

    const vw = (uploadedVideoElement && uploadedVideoElement.videoWidth) || 1280;
    const vh = (uploadedVideoElement && uploadedVideoElement.videoHeight) || 720;
    const baseScale = Math.max(visor.w / vw, visor.h / vh);
    const scale = baseScale * studioZoom;
    const drawW = vw * scale;
    const drawH = vh * scale;

    const maxOffsetX = Math.max(220, drawW - visor.w);
    const maxOffsetY = Math.max(220, drawH - visor.h);

    // Arrastrar a la derecha muestra más del lado izquierdo (panX disminuye)
    studioPanX = Math.max(0, Math.min(1, dragStartPanX - deltaCanvasX / maxOffsetX));

    // Si hay margen vertical (zoom > 1.0 o video vertical), también movemos en eje Y
    if (drawH > visor.h + 2) {
      studioPanY = Math.max(0, Math.min(1, dragStartPanY - deltaCanvasY / maxOffsetY));
    }

    syncFramingUIFromState();
    updateFFmpegCommandBox();
  });

  const stopDrag = (e) => {
    if (!isDraggingVisor) return;
    isDraggingVisor = false;
    canvas.classList.remove('dragging');
    if (e && e.pointerId !== undefined && canvas.releasePointerCapture) {
      try { canvas.releasePointerCapture(e.pointerId); } catch (err) {}
    }
  };

  canvas.addEventListener('pointerup', stopDrag);
  canvas.addEventListener('pointercancel', stopDrag);

  // Rueda del mouse sobre el visor = Zoom de encuadre (1.00x a 2.50x)
  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    const step = e.deltaY < 0 ? 0.08 : -0.08;
    studioZoom = Math.max(1.0, Math.min(2.5, Math.round((studioZoom + step) * 100) / 100));
    syncFramingUIFromState();
    updateFFmpegCommandBox();
  }, { passive: false });
}

function syncFramingUIFromState() {
  const sliderX = document.getElementById('studioPanXSlider');
  const sliderY = document.getElementById('studioPanYSlider');
  const sliderZoom = document.getElementById('studioZoomSlider');
  const labelX = document.getElementById('panXValueLabel');
  const labelY = document.getElementById('panYValueLabel');
  const labelZoom = document.getElementById('zoomValueLabel');

  const pctX = Math.round(studioPanX * 100);
  const pctY = Math.round(studioPanY * 100);
  const zoomPct = Math.round(studioZoom * 100);

  if (sliderX) sliderX.value = String(pctX);
  if (sliderY) sliderY.value = String(pctY);
  if (sliderZoom) sliderZoom.value = String(zoomPct);

  if (labelX) {
    const posStr = pctX < 45 ? 'Izquierda' : (pctX > 55 ? 'Derecha' : 'Centro');
    labelX.textContent = `${pctX}% (${posStr})`;
  }
  if (labelY) {
    const posYStr = pctY < 45 ? 'Arriba' : (pctY > 55 ? 'Abajo' : 'Centro');
    labelY.textContent = `${pctY}% (${posYStr})`;
  }
  if (labelZoom) {
    labelZoom.textContent = `${studioZoom.toFixed(2)}x`;
  }
}

function onFramingSliderChange(isVerticalSlider = false) {
  const sliderX = document.getElementById('studioPanXSlider');
  const sliderY = document.getElementById('studioPanYSlider');
  const sliderZoom = document.getElementById('studioZoomSlider');

  if (sliderX) studioPanX = Math.max(0, Math.min(1, Number(sliderX.value) / 100));
  if (sliderY) studioPanY = Math.max(0, Math.min(1, Number(sliderY.value) / 100));
  if (sliderZoom) studioZoom = Math.max(1.0, Math.min(2.5, Number(sliderZoom.value) / 100));

  // Si el usuario mueve el deslizador vertical estando en zoom 1.0x, damos un ligero zoom automático (1.20x) para permitir desplazamiento vertical
  if (isVerticalSlider && studioZoom <= 1.02 && Math.abs(studioPanY - 0.5) > 0.02) {
    studioZoom = 1.2;
  }

  syncFramingUIFromState();
  drawStudioFrame(false);
  updateFFmpegCommandBox();
}

function setStudioFraming(panX, panY, zoom) {
  studioPanX = Math.max(0, Math.min(1, panX));
  studioPanY = Math.max(0, Math.min(1, panY));
  studioZoom = Math.max(1.0, Math.min(2.5, zoom));
  syncFramingUIFromState();
  drawStudioFrame(false);
  updateFFmpegCommandBox();
}

function resetStudioFraming() {
  setStudioFraming(0.5, 0.5, 1.0);
}

let radarAngle = 0;
function startStudioPreviewLoop() {
  function loop() {
    radarAngle += 0.025;
    drawStudioFrame(false);
    studioAnimFrame = requestAnimationFrame(loop);
  }
  loop();
}

// ============================================================================
// MOTOR DE ICONOS VECTORIALES SVG EN CANVAS 2D (PARA EL VIDEO 9:16 Y PNG)
// ============================================================================
const CANVAS_SVG_PATHS = {
  trophy: 'M 6 9 H 4.5 A 2.5 2.5 0 0 1 4.5 4 H 6 M 18 9 H 19.5 A 2.5 2.5 0 0 0 19.5 4 H 18 M 4 22 H 20 M 10 14.66 V 17 C 10 17.55 9.53 17.98 9.03 18.21 C 7.85 18.75 7 20.24 7 22 M 14 14.66 V 17 C 14 17.55 14.47 17.98 14.97 18.21 C 16.15 18.75 17 20.24 17 22 M 18 2 H 6 V 9 A 6 6 0 0 0 18 9 V 2 Z',
  gamepad: 'M 6 6 H 18 A 4 4 0 0 1 22 10 V 14 A 4 4 0 0 1 18 18 H 6 A 4 4 0 0 1 2 14 V 10 A 4 4 0 0 1 6 6 Z M 6 12 H 10 M 8 10 V 14 M 14.8 10.8 A 0.8 0.8 0 1 0 14.8 12.4 A 0.8 0.8 0 1 0 14.8 10.8 Z M 17.5 12.4 A 0.8 0.8 0 1 0 17.5 14 A 0.8 0.8 0 1 0 17.5 12.4 Z',
  map: 'M 3 6 L 9 3 L 15 6 L 21 3 V 18 L 15 21 L 9 18 L 3 21 Z M 9 3 V 18 M 15 6 V 21',
  globe: 'M 12 2 A 10 10 0 1 0 12 22 A 10 10 0 1 0 12 2 Z M 2 12 H 22 M 12 2 A 15.3 15.3 0 0 1 16 12 A 15.3 15.3 0 0 1 12 22 A 15.3 15.3 0 0 1 8 12 A 15.3 15.3 0 0 1 12 2 Z',
  crosshair: 'M 12 3 A 9 9 0 1 0 12 21 A 9 9 0 1 0 12 3 Z M 12 1 V 6 M 12 18 V 23 M 1 12 H 6 M 18 12 H 23'
};

function drawCanvasSvgIcon(ctx, iconName, x, y, size, color, strokeWidth = 2.2) {
  const pathStr = CANVAS_SVG_PATHS[iconName];
  if (!pathStr || typeof Path2D === 'undefined') return;
  ctx.save();
  ctx.translate(x, y);
  const scale = size / 24;
  ctx.scale(scale, scale);
  ctx.strokeStyle = color;
  ctx.lineWidth = strokeWidth;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  const p = new Path2D(pathStr);
  ctx.stroke(p);
  ctx.restore();
}

function drawCenteredTextWithSvgIcon(ctx, iconName, iconSize, iconColor, text, textColor, centerX, baselineY, gap = 10) {
  const cleanText = stripEmojis(text);
  const textWidth = ctx.measureText(cleanText).width;
  const totalW = iconSize + gap + textWidth;
  const startX = centerX - totalW / 2;
  const iconTopY = baselineY - iconSize + 4;

  drawCanvasSvgIcon(ctx, iconName, startX, iconTopY, iconSize, iconColor, 2.3);

  ctx.save();
  ctx.fillStyle = textColor;
  ctx.textAlign = 'left';
  ctx.fillText(cleanText, startX + iconSize + gap, baselineY);
  ctx.restore();
}

function drawStudioFrame(transparentOverlayOnly = false) {
  const canvas = document.getElementById('tiktokStudioCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width;   // 1080 px
  const H = canvas.height;  // 1920 px

  const frameStyle = document.getElementById('studioFrameStyle')?.value || 'bunker';
  const cropMode = document.getElementById('studioCropMode')?.value || 'full_visor';
  const hookText = stripEmojis(document.getElementById('studioHookText')?.value || 'JUGADA ÉPICA EN HELL LET LOOSE');
  const badgeText = stripEmojis(document.getElementById('studioBadgeText')?.value || 'JUGADA #1 VOTADA EN HELLLETCLIPS.COM');
  const authorText = stripEmojis(document.getElementById('studioAuthorText')?.value || '@Soldado_HLL');
  const mapRoleText = stripEmojis(document.getElementById('studioMapRoleText')?.value || 'CARENTAN // OFICIAL');
  const showSafeZoneGuide = Boolean(document.getElementById('chkShowSafeZoneGuide')?.checked);

  ctx.clearRect(0, 0, W, H);

  // =========================================================================
  // DIMENSIONES CALIBRADAS PARA TIKTOK / REELS REAL 9:16 (1080x1920):
  // Margen Superior Real en el Video (bajo íconos superiores): 140 px (Y: 0..140)
  // Margen Inferior (UI / Audio / Descripción): 350 px (Y: 1570..1920)
  // Margen Izquierdo: 100 px (X: 0..100)
  // Margen Derecho (Botones Like/Comment/Share): 200 px (X: 880..1080)
  // => Zona Segura Activa: X = 100, Y = 140, W = 780, H = 1430 (Centro X = 490)
  // =========================================================================
  const SAFE_X = 100;
  const SAFE_Y = 140;
  const SAFE_W = 780;
  const SAFE_H = 1430;
  const SAFE_CX = SAFE_X + SAFE_W / 2; // 490 px

  const visor = getStudioVisorBox(cropMode);
  const boxX = visor.x;         // 100 px
  const videoBoxY = visor.y;    // 320 px (subido desde 430/450 para eliminar el exceso de espacio superior)
  const boxW = visor.w;         // 780 px
  const videoBoxH = visor.h;    // 1040 px (Y: 320..1360)

  if (!transparentOverlayOnly) {
    const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
    bgGrad.addColorStop(0, '#0f120c');
    bgGrad.addColorStop(0.5, '#1b2116');
    bgGrad.addColorStop(1, '#0b0d09');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    ctx.save();
    ctx.beginPath();
    ctx.rect(boxX, videoBoxY, boxW, videoBoxH);
    ctx.clip();

    if (uploadedVideoElement && uploadedVideoElement.readyState >= 2) {
      const vw = uploadedVideoElement.videoWidth || 1280;
      const vh = uploadedVideoElement.videoHeight || 720;

      if (cropMode === 'blur_bg') {
        ctx.filter = 'blur(18px) brightness(0.45)';
        ctx.drawImage(uploadedVideoElement, boxX - 40, videoBoxY - 40, boxW + 80, videoBoxH + 80);
        ctx.filter = 'none';
        const vidW = boxW * studioZoom;
        const vidH = vidW * (vh / vw);
        const drawX = boxX - (vidW - boxW) * studioPanX;
        const drawY = videoBoxY + (videoBoxH - vidH) * studioPanY;
        ctx.drawImage(uploadedVideoElement, drawX, drawY, vidW, vidH);
      } else {
        // Recorte exacto al tamaño del visor en Zona Segura con desplazamiento X/Y/Zoom
        const baseScale = Math.max(boxW / vw, videoBoxH / vh);
        const scale = baseScale * studioZoom;
        const drawW = vw * scale;
        const drawH = vh * scale;
        const maxOffsetX = Math.max(0, drawW - boxW);
        const maxOffsetY = Math.max(0, drawH - videoBoxH);
        const drawX = boxX - maxOffsetX * studioPanX;
        const drawY = videoBoxY - maxOffsetY * studioPanY;
        ctx.drawImage(uploadedVideoElement, drawX, drawY, drawW, drawH);
      }
    } else {
      drawSimulatedCombatFeed(ctx, boxX, videoBoxY, boxW, videoBoxH, cropMode);
    }

    // Guía táctica de encuadre en vivo mientras el moderador arrastra el video en el visor
    if (isDraggingVisor) {
      ctx.strokeStyle = 'rgba(224, 159, 45, 0.8)';
      ctx.lineWidth = 2;
      ctx.setLineDash([12, 8]);
      ctx.beginPath();
      ctx.moveTo(boxX + boxW / 2, videoBoxY);
      ctx.lineTo(boxX + boxW / 2, videoBoxY + videoBoxH);
      ctx.moveTo(boxX, videoBoxY + videoBoxH / 2);
      ctx.lineTo(boxX + boxW, videoBoxY + videoBoxH / 2);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = 'rgba(14, 16, 12, 0.88)';
      ctx.fillRect(boxX + 90, videoBoxY + 24, boxW - 180, 50);
      ctx.strokeStyle = '#e09f2d';
      ctx.lineWidth = 2;
      ctx.strokeRect(boxX + 90, videoBoxY + 24, boxW - 180, 50);
      ctx.font = 'bold 21px "Chakra Petch", monospace';
      drawCenteredTextWithSvgIcon(
        ctx,
        'crosshair',
        24,
        '#e09f2d',
        `VISOR ${boxW}×${videoBoxH} // X:${Math.round(studioPanX * 100)}% Y:${Math.round(studioPanY * 100)}% ZOOM:${studioZoom.toFixed(2)}x`,
        '#e09f2d',
        boxX + boxW / 2,
        videoBoxY + 57,
        8
      );
    }

    ctx.restore();
  }

  const primaryColor = frameStyle === 'bunker' ? '#e09f2d' : (frameStyle === 'tactical_map' ? '#76b852' : '#d94b38');
  const panelBg = frameStyle === 'war_press' ? '#262118' : '#161a12';

  // Placas opacas del marco rodeando exactamente el visor (dejando transparente solo el hueco del visor)
  ctx.fillStyle = panelBg;
  ctx.fillRect(0, 0, W, videoBoxY);                                           // Arriba del visor
  ctx.fillRect(0, videoBoxY + videoBoxH, W, H - (videoBoxY + videoBoxH));     // Abajo del visor
  ctx.fillRect(0, videoBoxY, boxX, videoBoxH);                                // Margen izquierdo (100 px)
  ctx.fillRect(boxX + boxW, videoBoxY, W - (boxX + boxW), videoBoxH);         // Margen derecho (200 px)

  // Textura sutil de líneas tácticas sobre el blindaje exterior
  ctx.strokeStyle = 'rgba(224, 159, 45, 0.06)';
  ctx.lineWidth = 2;
  for (let x = 0; x < W; x += 60) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, videoBoxY);
    ctx.moveTo(x, videoBoxY + videoBoxH);
    ctx.lineTo(x, H);
    ctx.stroke();
  }

  // Marco y esquineros tácticos del visor dentro de la Zona Segura
  ctx.strokeStyle = primaryColor;
  ctx.lineWidth = 6;
  ctx.strokeRect(boxX, videoBoxY, boxW, videoBoxH);
  drawCornerBrackets(ctx, boxX, videoBoxY, boxW, videoBoxH, primaryColor);

  // =========================================================================
  // ENCABEZADO ANCLADO AL VISOR + ICONOS VECTORIALES SVG + NOMBRE SIN RECUADRO
  // =========================================================================
  if (cropMode === 'safe_full_1320') {
    // Modo visor 780x1420 completo (Y: 150..1570)
    ctx.fillStyle = 'rgba(14, 16, 12, 0.82)';
    ctx.fillRect(SAFE_X + 6, videoBoxY + 6, SAFE_W - 12, 168);

    ctx.fillStyle = primaryColor;
    ctx.fillRect(SAFE_X + 16, videoBoxY + 14, SAFE_W - 32, 42);
    ctx.font = 'bold 23px "Black Ops One", "Oswald", sans-serif';
    drawCenteredTextWithSvgIcon(ctx, 'trophy', 25, '#0e100c', badgeText.toUpperCase(), '#0e100c', SAFE_CX, videoBoxY + 43, 10);

    ctx.fillStyle = '#f2ead8';
    ctx.font = 'bold 38px "Oswald", sans-serif';
    ctx.textAlign = 'center';
    wrapTextCanvas(ctx, hookText.toUpperCase(), SAFE_CX, videoBoxY + 98, SAFE_W - 40, 44);

    // Datos del usuario y CTA en la parte baja de la Zona Segura (con íconos SVG y sin línea de recuadro)
    const botBase = videoBoxY + videoBoxH - 185;
    ctx.fillStyle = 'rgba(14, 16, 12, 0.78)';
    ctx.fillRect(SAFE_X + 6, botBase, SAFE_W - 12, 179);

    ctx.fillStyle = '#5865F2';
    ctx.fillRect(SAFE_X + 24, botBase + 14, 84, 84);
    drawCanvasSvgIcon(ctx, 'gamepad', SAFE_X + 42, botBase + 32, 48, '#ffffff', 2.2);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#a8b2ff';
    ctx.font = 'bold 19px "Chakra Petch", sans-serif';
    ctx.fillText('JUGADA COMPARTIDA EN EL PORTAL POR:', SAFE_X + 126, botBase + 34);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 34px "Oswald", sans-serif';
    ctx.fillText(authorText, SAFE_X + 126, botBase + 68);

    drawCanvasSvgIcon(ctx, 'map', SAFE_X + 126, botBase + 76, 22, primaryColor, 2.2);
    ctx.fillStyle = primaryColor;
    ctx.font = 'bold 20px "Chakra Petch", monospace';
    ctx.fillText(mapRoleText, SAFE_X + 156, botBase + 96);

    ctx.font = 'bold 24px "Oswald", sans-serif';
    drawCenteredTextWithSvgIcon(ctx, 'globe', 24, primaryColor, 'MIRA MÁS CLIPS Y VOTA EN: HELLLETCLIPS.COM', '#e2d9c5', SAFE_CX, botBase + 138, 10);

    ctx.textAlign = 'center';
    ctx.fillStyle = primaryColor;
    ctx.font = 'bold 18px "Chakra Petch", monospace';
    ctx.fillText('SUBE TUS JUGADAS DE HELL LET LOOSE CON TU DISCORD', SAFE_CX, botBase + 166);
  } else {
    // Modo estándar calibrado: Visor en Y = 320..1360 (H = 1040 px, X = 100..880)
    // El encabezado se ancla de abajo hacia arriba justo sobre el visor (Y = 320)
    // para que NO quede ningún hueco vacío entre el título y el visor sea de 1 o 2 líneas.

    // 1. Barra superior pegada al visor (Y = 282..314, X = 100..880)
    const teleBarY = videoBoxY - 38; // 282 px
    ctx.fillStyle = 'rgba(0,0,0,0.65)';
    ctx.fillRect(SAFE_X, teleBarY, SAFE_W, 32);
    ctx.fillStyle = primaryColor;
    ctx.font = 'bold 20px "Chakra Petch", monospace';
    ctx.textAlign = 'left';
    ctx.fillText('CLIPBUNKER // ARCHIVO COMUNITARIO', SAFE_X + 14, videoBoxY - 15);
    ctx.textAlign = 'right';
    ctx.fillText('REC ● 9:16 HD', SAFE_X + SAFE_W - 14, videoBoxY - 15);

    // 2. Título / Gancho anclado justo encima de la barra del visor (1 o 2 líneas dinámicas)
    ctx.fillStyle = '#f2ead8';
    ctx.font = 'bold 40px "Oswald", sans-serif';
    ctx.textAlign = 'center';
    const hookLines = getWrappedLines(ctx, hookText.toUpperCase(), SAFE_W - 20);
    const lineHeight = 44;
    const lastLineBaselineY = teleBarY - 18; // 264 px
    const firstLineBaselineY = lastLineBaselineY - (hookLines.length - 1) * lineHeight; // 264 px (1 línea) o 220 px (2 líneas)

    hookLines.forEach((lineText, idx) => {
      ctx.fillText(lineText, SAFE_CX, firstLineBaselineY + idx * lineHeight);
    });

    // 3. Insignia Superior con Trofeo Vectorial SVG pegada justo encima de la primera línea del título
    const badgeH = 44;
    const badgeY = firstLineBaselineY - 42 - badgeH; // 178 px (1 línea) o 134 px (2 líneas)
    ctx.fillStyle = primaryColor;
    ctx.fillRect(SAFE_X, badgeY, SAFE_W, badgeH);
    ctx.font = 'bold 24px "Black Ops One", "Oswald", sans-serif';
    drawCenteredTextWithSvgIcon(
      ctx,
      'trophy',
      26,
      '#0e100c',
      badgeText.toUpperCase(),
      '#0e100c',
      SAFE_CX,
      badgeY + 31,
      10
    );

    // 4. Bloque del Nombre del Usuario debajo del visor (Y = 1372..1480)
    // Con Ícono Control/Discord en SVG Vectorial y SIN línea de recuadro alrededor del nombre
    const footerY = videoBoxY + videoBoxH + 12; // 1372 px

    ctx.fillStyle = '#5865F2';
    ctx.fillRect(SAFE_X + 16, footerY + 10, 96, 96);
    drawCanvasSvgIcon(ctx, 'gamepad', SAFE_X + 36, footerY + 30, 56, '#ffffff', 2.2);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#a8b2ff';
    ctx.font = 'bold 21px "Chakra Petch", sans-serif';
    ctx.fillText('JUGADA COMPARTIDA EN EL PORTAL POR:', SAFE_X + 132, footerY + 34);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 38px "Oswald", sans-serif';
    ctx.fillText(authorText, SAFE_X + 132, footerY + 74);

    // Ícono de Mapa Vectorial SVG + Texto de Mapa y Rol
    drawCanvasSvgIcon(ctx, 'map', SAFE_X + 132, footerY + 86, 24, primaryColor, 2.2);
    ctx.fillStyle = primaryColor;
    ctx.font = 'bold 22px "Chakra Petch", monospace';
    ctx.fillText(mapRoleText, SAFE_X + 164, footerY + 106);

    // 5. Call to Action Inferior con Globo Vectorial SVG dentro de la Zona Segura (termina en Y = 1554 < 1570)
    ctx.font = 'bold 27px "Oswald", sans-serif';
    drawCenteredTextWithSvgIcon(
      ctx,
      'globe',
      26,
      primaryColor,
      'MIRA MÁS CLIPS Y VOTA EN: HELLLETCLIPS.COM',
      '#e2d9c5',
      SAFE_CX,
      footerY + 150,
      10
    );

    ctx.textAlign = 'center';
    ctx.fillStyle = primaryColor;
    ctx.font = '21px "Chakra Petch", monospace';
    ctx.fillText('SUBE TUS JUGADAS DE HELL LET LOOSE CON TU DISCORD', SAFE_CX, footerY + 182);
  }

  // =========================================================================
  // GUÍA VISUAL OPCIONAL DE ZONA SEGURA TIKTOK/REELS (SOLO EN VISTA PREVIA)
  // =========================================================================
  if (!transparentOverlayOnly && showSafeZoneGuide) {
    ctx.save();
    ctx.fillStyle = 'rgba(0, 242, 254, 0.12)';
    ctx.fillRect(0, 0, W, SAFE_Y);                                  // Top 140 px
    ctx.fillRect(0, SAFE_Y + SAFE_H, W, H - (SAFE_Y + SAFE_H));     // Bottom 350 px
    ctx.fillRect(0, SAFE_Y, SAFE_X, SAFE_H);                        // Left 100 px
    ctx.fillRect(SAFE_X + SAFE_W, SAFE_Y, W - (SAFE_X + SAFE_W), SAFE_H); // Right 200 px

    ctx.strokeStyle = '#00f2fe';
    ctx.lineWidth = 4;
    ctx.setLineDash([14, 10]);
    ctx.strokeRect(SAFE_X, SAFE_Y, SAFE_W, SAFE_H);
    ctx.setLineDash([]);

    ctx.fillStyle = '#00f2fe';
    ctx.font = 'bold 24px "Chakra Petch", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('MARGEN SUPERIOR TIKTOK (ICONOS SUPERIORES): 140 PX', W / 2, 85);
    ctx.fillText('MARGEN INFERIOR TIKTOK (UI / AUDIO): 350 PX', W / 2, 1745);

    ctx.font = 'bold 22px "Chakra Petch", monospace';
    ctx.fillText('100px', 50, SAFE_Y + SAFE_H / 2);
    ctx.fillText('200px', 980, SAFE_Y + SAFE_H / 2 - 120);
    ctx.fillText('(Íconos)', 980, SAFE_Y + SAFE_H / 2 - 90);
    ctx.restore();
  }
}

function drawSimulatedCombatFeed(ctx, x, y, w, h, cropMode) {
  const offsetX = (0.5 - studioPanX) * 280 * studioZoom;
  const offsetY = (0.5 - studioPanY) * 180 * studioZoom;
  const cx = x + w / 2 + offsetX;
  const cy = y + h / 2 + offsetY;

  const grad = ctx.createRadialGradient(cx, cy, 40, cx, cy, w * 0.85 * studioZoom);
  grad.addColorStop(0, '#2c3624');
  grad.addColorStop(1, '#0d110a');
  ctx.fillStyle = grad;
  ctx.fillRect(x, y, w, h);

  ctx.strokeStyle = 'rgba(224, 159, 45, 0.55)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, 160 * studioZoom, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(cx, cy, 80 * studioZoom, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(cx - 220 * studioZoom, cy);
  ctx.lineTo(cx + 220 * studioZoom, cy);
  ctx.moveTo(cx, cy - 220 * studioZoom);
  ctx.lineTo(cx, cy + 220 * studioZoom);
  ctx.stroke();

  const rx = cx + Math.cos(radarAngle) * 120 * studioZoom;
  const ry = cy + Math.sin(radarAngle) * 70 * studioZoom;
  ctx.fillStyle = '#c93b2b';
  ctx.beginPath();
  ctx.arc(rx, ry, 12 * studioZoom, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#e2d9c5';
  ctx.font = 'bold 24px "Chakra Petch", monospace';
  ctx.textAlign = 'center';
  ctx.fillText(`ZONA SEGURA (${w}×${h} PX) // ARRASTRA PARA ENCUADRAR`, x + w / 2, y + h - 100);
  ctx.font = '20px "Chakra Petch", sans-serif';
  ctx.fillStyle = '#a9a28f';
  ctx.fillText(`Encuadre: X=${Math.round(studioPanX * 100)}% | Y=${Math.round(studioPanY * 100)}% | Zoom=${studioZoom.toFixed(2)}x`, x + w / 2, y + h - 64);
}

function drawCornerBrackets(ctx, x, y, w, h, color) {
  const len = 40;
  ctx.strokeStyle = color;
  ctx.lineWidth = 12;

  ctx.beginPath();
  ctx.moveTo(x, y + len);
  ctx.lineTo(x, y);
  ctx.lineTo(x + len, y);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x + w - len, y);
  ctx.lineTo(x + w, y);
  ctx.lineTo(x + w, y + len);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x, y + h - len);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x + len, y + h);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x + w - len, y + h);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x + w, y + h - len);
  ctx.stroke();
}

function getWrappedLines(ctx, text, maxWidth) {
  const words = text.split(' ');
  let line = '';
  const lines = [];
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && n > 0) {
      lines.push(line.trim());
      line = words[n] + ' ';
    } else {
      line = testLine;
    }
  }
  lines.push(line.trim());
  return lines.slice(0, 2);
}

function wrapTextCanvas(ctx, text, x, y, maxWidth, lineHeight) {
  const lines = getWrappedLines(ctx, text, maxWidth);
  lines.forEach((l, i) => {
    ctx.fillText(l, x, y + i * lineHeight);
  });
}

function downloadOverlayPNG() {
  const canvas = document.getElementById('tiktokStudioCanvas');
  drawStudioFrame(true);
  const dataUrl = canvas.toDataURL('image/png');
  drawStudioFrame(false);

  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = 'frame_overlay_hll_ww2_1080x1920.png';
  a.click();
}

function recordTikTokVideo() {
  const canvas = document.getElementById('tiktokStudioCanvas');
  const statusEl = document.getElementById('recordStatusText');
  const btn = document.getElementById('btnRecordCanvas');

  if (!canvas.captureStream || typeof MediaRecorder === 'undefined') {
    setStatusWithSvg(statusEl, 'alert', 'Usa el botón de Renderizar MP4 en Servidor.');
    return;
  }

  const stream = canvas.captureStream(30);
  const chunks = [];
  const recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });

  recorder.ondataavailable = e => {
    if (e.data.size > 0) chunks.push(e.data);
  };

  recorder.onstop = () => {
    const blob = new Blob(chunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'promo_hll_9x16_con_frame.webm';
    a.click();
    btn.disabled = false;
    setStatusWithSvg(statusEl, 'check', 'Preview 9:16 descargado.');
  };

  btn.disabled = true;
  setStatusWithSvg(statusEl, 'film', 'Grabando preview 9:16 (1080x1920) durante 5 segundos...');
  recorder.start();
  setTimeout(() => recorder.stop(), 5000);
}

function updateFFmpegCommandBox() {
  const sel = document.getElementById('studioClipSelect');
  const clip = clipsData.find(c => c.id === sel?.value) || clipsData[0];
  const box = document.getElementById('ffmpegCommandBox');
  if (!box || !clip) return;

  const cropMode = document.getElementById('studioCropMode')?.value || 'full_visor';
  const visor = getStudioVisorBox(cropMode);
  const scaledW = Math.max(visor.w, Math.round((visor.w * studioZoom) / 2) * 2);
  const scaledH = Math.max(visor.h, Math.round((visor.h * studioZoom) / 2) * 2);
  const px = studioPanX.toFixed(4);
  const py = studioPanY.toFixed(4);

  const cmd = `# 1. Extraer y descargar el clip desde YouTube con yt-dlp (usando Node JS runtime):
.\\bin\\yt-dlp.exe --js-runtimes node --extractor-args "youtube:player_client=android_vr,tv,web_embedded,mweb" -f "136+140/298+140/18/bv*[height<=720][ext=mp4]+ba[ext=m4a]/b" --merge-output-format mp4 -o "exports/yt_source_${clip.youtubeId}.mp4" "${clip.videoUrl}"

# 2. Recortar a Zona Segura TikTok (${visor.w}x${visor.h} en X=${visor.x}, Y=${visor.y}) con encuadre (X=${Math.round(studioPanX * 100)}%, Y=${Math.round(studioPanY * 100)}%, Zoom=${studioZoom.toFixed(2)}x) + Marco WWII SVG:
ffmpeg -y -i "exports/yt_source_${clip.youtubeId}.mp4" -i "exports/overlay_${clip.id}.png" -filter_complex "[0:v]scale=${scaledW}:${scaledH}:force_original_aspect_ratio=increase:force_divisible_by=2,setsar=1,crop=${visor.w}:${visor.h}:(iw-${visor.w})*${px}:(ih-${visor.h})*${py},pad=1080:1920:${visor.x}:${visor.y}:black[vid];[vid][1:v]overlay=0:0[outv]" -map "[outv]" -map "0:a?" -c:v libx264 -pix_fmt yuv420p -preset ultrafast -crf 21 -c:a aac -b:a 160k "exports/promo_9x16_${clip.id}.mp4"`;

  box.textContent = cmd;
}

function copyFFmpegCommand() {
  const box = document.getElementById('ffmpegCommandBox');
  if (!box) return;
  navigator.clipboard.writeText(box.textContent);
  setStatusWithSvg(document.getElementById('recordStatusText'), 'copy', 'Comando yt-dlp + FFmpeg copiado al portapapeles.');
}

async function triggerDownloadSourceOnly(isAutoPreload = false) {
  const sel = document.getElementById('studioClipSelect');
  const clip = clipsData.find(c => c.id === sel?.value) || clipsData[0];
  const statusEl = document.getElementById('recordStatusText');
  const btn = document.getElementById('btnDownloadSource');
  if (!clip) return;

  if (btn) btn.disabled = true;
  if (statusEl) {
    setStatusWithSvg(
      statusEl,
      'clock',
      isAutoPreload
        ? 'Cargando video de YouTube en la Zona Segura para encuadrar...'
        : `Descargando video de YouTube (${clip.videoUrl}) con yt-dlp.exe...`
    );
  }

  try {
    const res = await fetch('/api/tiktok/download-source', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-mod-token': modToken
      },
      body: JSON.stringify({
        clipId: clip.id,
        videoUrl: clip.videoUrl
      })
    });
    const data = await res.json();
    if (statusEl) setStatusWithSvg(statusEl, data.ok ? 'check' : 'alert', data.message);
    const videoToLoad = data.localVideoUrl || data.fallbackVideoUrl;
    if (videoToLoad) {
      loadVideoUrlIntoPreview(videoToLoad);
    }
  } catch (err) {
    if (statusEl) setStatusWithSvg(statusEl, 'alert', 'Error comunicando con el servidor backend.');
  } finally {
    if (btn) btn.disabled = false;
  }
}

async function triggerBackendRender() {
  const sel = document.getElementById('studioClipSelect');
  const clip = clipsData.find(c => c.id === sel?.value) || clipsData[0];
  const statusEl = document.getElementById('recordStatusText');
  const btn = document.getElementById('btnBackendRender');
  const resultBox = document.getElementById('renderedMp4ResultBox');
  const player = document.getElementById('renderedMp4Player');
  const dlLink = document.getElementById('renderedMp4DownloadLink');

  const cropMode = document.getElementById('studioCropMode')?.value || 'full_visor';
  const visor = getStudioVisorBox(cropMode);

  const canvas = document.getElementById('tiktokStudioCanvas');
  drawStudioFrame(true);
  const overlayBase64 = canvas.toDataURL('image/png');
  drawStudioFrame(false);

  btn.disabled = true;
  setStatusWithSvg(
    statusEl,
    'clock',
    `Renderizando MP4 9:16 en Zona Segura (${visor.w}×${visor.h} en X:${visor.x}, Y:${visor.y} // Encuadre X:${Math.round(studioPanX * 100)}% Y:${Math.round(studioPanY * 100)}% Zoom:${studioZoom.toFixed(2)}x)...`
  );

  try {
    const res = await fetch('/api/tiktok/render', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-mod-token': modToken
      },
      body: JSON.stringify({
        clipId: clip.id,
        videoUrl: clip.videoUrl,
        cropMode,
        panX: studioPanX,
        panY: studioPanY,
        zoom: studioZoom,
        boxX: visor.x,
        boxY: visor.y,
        boxW: visor.w,
        boxH: visor.h,
        overlayPngBase64: overlayBase64
      })
    });
    const data = await res.json();
    setStatusWithSvg(statusEl, data.ok ? 'check' : 'alert', data.message || 'Render completado.');

    if (data.sourceVideoUrl) {
      loadVideoUrlIntoPreview(data.sourceVideoUrl);
    }

    if (data.ok && data.outputUrl) {
      const cacheBustedUrl = `${data.outputUrl}?t=${Date.now()}`;
      resultBox.style.display = 'block';
      player.src = cacheBustedUrl;
      dlLink.href = data.outputUrl;
      dlLink.download = `promo_9x16_${clip.id}.mp4`;
      dlLink.click();
    }
  } catch (err) {
    setStatusWithSvg(statusEl, 'alert', 'Asegúrate de que el servidor esté activo en http://localhost:3044.');
  } finally {
    btn.disabled = false;
  }
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

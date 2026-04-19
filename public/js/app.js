/* ── Settings & cloaking ────────────────────────────────────── */
const DEFAULT_SETTINGS = {
  panicKey: 'Escape',
  panicUrl: 'https://classroom.google.com',
  tabTitle: 'Study Hub',
  tabFavicon: 'docs',
};

const FAVICON_MAP = {
  docs: 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico',
  classroom: 'https://ssl.gstatic.com/classroom/favicon.png',
  drive: 'https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png',
  khan: 'https://cdn.kastatic.org/images/favicon.ico',
};

function loadSettings() {
  try {
    return Object.assign({}, DEFAULT_SETTINGS, JSON.parse(localStorage.getItem('gs-settings') || '{}'));
  } catch { return DEFAULT_SETTINGS; }
}

function applySettings(s) {
  document.title = s.tabTitle;
  const link = document.querySelector("link[rel~='icon']") || Object.assign(document.createElement('link'), { rel: 'icon' });
  link.href = FAVICON_MAP[s.tabFavicon] || FAVICON_MAP.docs;
  document.head.appendChild(link);
}

let settings = loadSettings();
applySettings(settings);

/* ── Panic key ──────────────────────────────────────────────── */
document.addEventListener('keydown', (e) => {
  if (e.key === settings.panicKey) {
    window.location.replace(settings.panicUrl);
  }
});

/* ── UV Service Worker is registered in index.html ─────────── */

function encodeProxyUrl(url) {
  // Use UV encoding if available, else base64 fallback
  if (typeof __uv$config !== 'undefined' && __uv$config.encodeUrl) {
    return '/service/' + __uv$config.encodeUrl(url);
  }
  return '/proxy?url=' + encodeURIComponent(url);
}

/* ── DOM refs ───────────────────────────────────────────────── */
const navItems       = document.querySelectorAll('.nav-item[data-page]');
const searchInput    = document.getElementById('search-input');
const gameCountEl    = document.getElementById('game-count');
const featuredGrid   = document.getElementById('featured-grid');
const recentGrid     = document.getElementById('recent-grid');
const allGamesGrid   = document.getElementById('all-games-grid');
const catBtns        = document.querySelectorAll('.cat-btn');
const gameModal      = document.getElementById('game-modal');
const modalBackdrop  = document.getElementById('modal-backdrop');
const gameFrame      = document.getElementById('game-frame');
const modalTitle     = document.getElementById('modal-game-title');
const closeModalBtn  = document.getElementById('close-modal-btn');
const fullscreenBtn  = document.getElementById('fullscreen-btn');
const newTabBtn      = document.getElementById('new-tab-btn');
const gameOverlay    = document.getElementById('game-overlay');
const overlayThumb   = document.getElementById('overlay-thumb');
const overlayTitle   = document.getElementById('overlay-title');
const playBtn        = document.getElementById('play-btn');
const zoomBtn        = document.getElementById('zoom-btn');
const settingsBtn    = document.getElementById('settings-btn');
const settingsModal  = document.getElementById('settings-modal');
const closeSettings  = document.getElementById('close-settings');
const saveSettings   = document.getElementById('save-settings');

/* ── Navigation ─────────────────────────────────────────────── */
navItems.forEach(item => {
  const page = item.dataset.page;
  if (page === 'browse' || page === 'music' || page === 'links') return;

  item.querySelector('.nav-link').addEventListener('click', (e) => {
    if (page === 'settings') { openSettings(); return; }
    e.preventDefault();
    navItems.forEach(n => n.classList.remove('active'));
    item.classList.add('active');
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + page);
    if (target) target.classList.add('active');
  });
});

/* ── Build a game card element ──────────────────────────────── */
function buildCard(game) {
  const card = document.createElement('div');
  card.className = 'game-card';
  card.dataset.gameId = game.id;

  const imgEl = document.createElement('img');
  imgEl.className = 'game-card-thumb';
  imgEl.alt = game.name;
  imgEl.loading = 'lazy';
  imgEl.src = game.img;
  imgEl.onerror = function () {
    this.style.display = 'none';
    const placeholder = document.createElement('div');
    placeholder.className = 'game-card-thumb-placeholder';
    placeholder.style.background = game.color || '#1a1a2a';
    placeholder.textContent = game.name.slice(0, 2).toUpperCase();
    card.insertBefore(placeholder, card.firstChild);
  };

  const info = document.createElement('div');
  info.className = 'game-card-info';
  const nameEl = document.createElement('div');
  nameEl.className = 'game-card-name';
  nameEl.textContent = game.name;
  info.appendChild(nameEl);

  if (game.featured) {
    const badge = document.createElement('div');
    badge.className = 'game-card-badge';
    badge.textContent = 'Hot';
    card.appendChild(badge);
  }

  card.appendChild(imgEl);
  card.appendChild(info);

  card.addEventListener('click', () => openGame(game));
  return card;
}

/* ── Open game ──────────────────────────────────────────────── */
let currentGameUrl = '';
let currentProxyUrl = '';

function openGame(game) {
  currentGameUrl = game.url;
  // CrazyGames blocks cross-origin iframes (X-Frame-Options), always proxy those
  // All other embed:true games load directly
  const mustProxy = game.embed !== true || game.url.includes('crazygames.com');
  currentProxyUrl = mustProxy ? encodeProxyUrl(game.url) : game.url;

  // Reset to overlay state
  gameFrame.src = '';
  gameFrame.classList.remove('active');
  gameOverlay.classList.remove('hidden');

  // Set overlay content
  modalTitle.textContent = game.name;
  overlayTitle.textContent = game.name;
  overlayThumb.src = game.img || '';
  overlayThumb.onerror = () => { overlayThumb.style.display = 'none'; };

  gameModal.classList.add('open');
  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function startGame() {
  gameFrame.src = currentProxyUrl;
  gameFrame.classList.add('active');
  gameOverlay.classList.add('hidden');
  zoomBtn.classList.add('visible');
  // Focus iframe so pointer-lock and keyboard events work immediately
  setTimeout(() => gameFrame.focus(), 300);
}

function closeGame() {
  gameFrame.src = '';
  gameFrame.classList.remove('active');
  gameOverlay.classList.remove('hidden');
  zoomBtn.classList.remove('visible');
  gameModal.classList.remove('open');
  modalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

function goFullscreen() {
  const el = gameFrame;
  if (el.requestFullscreen) el.requestFullscreen();
  else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
}

playBtn.addEventListener('click', startGame);
closeModalBtn.addEventListener('click', closeGame);
modalBackdrop.addEventListener('click', closeGame);
zoomBtn.addEventListener('click', goFullscreen);
fullscreenBtn.addEventListener('click', goFullscreen);

newTabBtn.addEventListener('click', () => {
  window.open(currentGameUrl, '_blank', 'noopener,noreferrer');
});

/* ── Category filter ────────────────────────────────────────── */
let activeCategory = 'all';
catBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    catBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.cat;
    renderAllGames(activeCategory, searchInput.value);
  });
});

/* ── Search ─────────────────────────────────────────────────── */
searchInput.addEventListener('input', () => {
  // Auto-switch to Games page so results are always visible
  if (searchInput.value.trim()) {
    navItems.forEach(n => n.classList.remove('active'));
    document.querySelector('.nav-item[data-page="games"]').classList.add('active');
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-games').classList.add('active');
  }
  renderAllGames(activeCategory, searchInput.value);
});

/* ── Render functions ───────────────────────────────────────── */
function renderGrid(container, games) {
  container.innerHTML = '';
  if (games.length === 0) {
    container.innerHTML = '<p style="color:var(--subtext);padding:16px 0;grid-column:1/-1;">No games found.</p>';
    return;
  }
  games.forEach(g => container.appendChild(buildCard(g)));
}

function renderHome(query = '') {
  const q = query.toLowerCase();
  const filtered = q ? GAMES.filter(g => g.name.toLowerCase().includes(q)) : GAMES;
  renderGrid(featuredGrid, filtered.filter(g => g.featured).slice(0, 12));
  renderGrid(recentGrid, [...filtered].reverse().slice(0, 12));
}

function renderAllGames(cat = 'all', query = '') {
  const q = query.toLowerCase();
  let list = GAMES;
  if (cat !== 'all') list = list.filter(g => g.category === cat);
  if (q) list = list.filter(g => g.name.toLowerCase().includes(q));
  renderGrid(allGamesGrid, list);
}

/* ── Init ───────────────────────────────────────────────────── */
function init() {
  gameCountEl.textContent = GAMES.length + ' games';
  renderHome();
  renderAllGames();
  // Ensure Games nav item is highlighted on load
  navItems.forEach(n => n.classList.remove('active'));
  const gamesNav = document.querySelector('.nav-item[data-page="games"]');
  if (gamesNav) gamesNav.classList.add('active');
}
init();

/* ── Settings ───────────────────────────────────────────────── */
function openSettings() {
  document.getElementById('panic-key-select').value = settings.panicKey;
  document.getElementById('panic-url').value = settings.panicUrl;
  document.getElementById('tab-title').value = settings.tabTitle;
  document.getElementById('tab-favicon').value = settings.tabFavicon;
  settingsModal.classList.add('open');
}

settingsBtn.addEventListener('click', (e) => { e.preventDefault(); openSettings(); });
closeSettings.addEventListener('click', () => settingsModal.classList.remove('open'));
settingsModal.addEventListener('click', (e) => { if (e.target === settingsModal) settingsModal.classList.remove('open'); });

saveSettings.addEventListener('click', () => {
  settings = {
    panicKey:   document.getElementById('panic-key-select').value,
    panicUrl:   document.getElementById('panic-url').value,
    tabTitle:   document.getElementById('tab-title').value,
    tabFavicon: document.getElementById('tab-favicon').value,
  };
  localStorage.setItem('gs-settings', JSON.stringify(settings));
  applySettings(settings);
  settingsModal.classList.remove('open');
});

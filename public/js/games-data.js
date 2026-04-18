// embed: true  → loads directly in iframe (no proxy needed)
// embed: false → routes through UV proxy
const GAMES = [

  // ── Shooting / Action ─────────────────────────────────────
  {
    id: 'shell-shockers',
    name: 'Shell Shockers',
    category: 'shooting',
    featured: true,
    img: 'https://images.crazygames.com/games/shell-shockers/cover_16x9.png',
    url: 'https://shellshock.io',
    embed: true,   // direct load - proxy breaks WebRTC
    color: '#1e3a5f'
  },
  {
    id: 'venge',
    name: 'Venge.io',
    category: 'shooting',
    featured: true,
    img: 'https://images.crazygames.com/games/venge-io/cover_16x9.png',
    url: 'https://venge.io',
    embed: true,
    color: '#2a1a3a'
  },
  {
    id: 'rooftop-snipers',
    name: 'Rooftop Snipers',
    category: 'shooting',
    img: 'https://images.crazygames.com/games/rooftop-snipers/cover_16x9.png',
    url: 'https://rooftop-snipers.com',
    embed: true,
    color: '#3a1a1a'
  },
  {
    id: 'getaway-shootout',
    name: 'Getaway Shootout',
    category: 'shooting',
    img: 'https://images.crazygames.com/games/getaway-shootout/cover_16x9.png',
    url: 'https://getawayshootout.com',
    embed: true,
    color: '#1a3a1a'
  },
  {
    id: 'smash-karts',
    name: 'Smash Karts',
    category: 'shooting',
    featured: true,
    img: 'https://images.crazygames.com/games/smash-karts/cover_16x9.png',
    url: 'https://smashkarts.io',
    embed: true,
    color: '#1a2a1a'
  },
  {
    id: 'bullet-force',
    name: 'Bullet Force',
    category: 'shooting',
    img: 'https://images.crazygames.com/games/bullet-force-multiplayer/cover_16x9.png',
    url: 'https://www.crazygames.com/embed/bullet-force-multiplayer',
    embed: true,
    color: '#2a2a1a'
  },

  // ── IO Games ────────────────────────────────────────────────
  {
    id: 'slither',
    name: 'Slither.io',
    category: 'io',
    featured: true,
    img: 'https://images.crazygames.com/games/slither-io/cover_16x9.png',
    url: 'https://slither.io',
    embed: true,   // direct load - proxy breaks pointer-lock & WebSocket
    color: '#0f2a0f'
  },
  {
    id: 'agar',
    name: 'Agar.io',
    category: 'io',
    img: 'https://images.crazygames.com/games/agar-io/cover_16x9.png',
    url: 'https://agar.io',
    embed: true,
    color: '#1a1a3a'
  },
  {
    id: 'paper-io',
    name: 'Paper.io 2',
    category: 'io',
    img: 'https://images.crazygames.com/games/paper-io-2/cover_16x9.png',
    url: 'https://paper-io.com',
    embed: true,
    color: '#2a1a2a'
  },
  {
    id: 'diep',
    name: 'Diep.io',
    category: 'io',
    img: 'https://images.crazygames.com/games/diep-io/cover_16x9.png',
    url: 'https://diep.io',
    embed: true,
    color: '#1a2a1a'
  },
  {
    id: 'bonk',
    name: 'Bonk.io',
    category: 'io',
    img: 'https://images.crazygames.com/games/bonk-io/cover_16x9.png',
    url: 'https://bonk.io',
    embed: true,
    color: '#2a2a1a'
  },
  {
    id: 'skribbl',
    name: 'Skribbl.io',
    category: 'io',
    img: 'https://images.crazygames.com/games/skribbl-io/cover_16x9.png',
    url: 'https://skribbl.io',
    embed: true,   // direct load - Socket.IO disconnects through proxy
    color: '#1a1a2a'
  },
  {
    id: 'wormate',
    name: 'Wormate.io',
    category: 'io',
    img: 'https://images.crazygames.com/games/wormate-io/cover_16x9.png',
    url: 'https://wormate.io',
    embed: true,
    color: '#2a1a1a'
  },
  {
    id: 'deeeep',
    name: 'Deeeep.io',
    category: 'io',
    img: 'https://images.crazygames.com/games/deeeep-io/cover_16x9.png',
    url: 'https://deeeep.io',
    embed: true,
    color: '#0f1a2a'
  },

  // ── Platformer ──────────────────────────────────────────────
  {
    id: 'slope',
    name: 'Slope',
    category: 'platformer',
    featured: true,
    img: 'https://images.crazygames.com/games/slope/cover_16x9.png',
    url: 'https://slopegame.io',   // slope.game domain is dead
    embed: true,
    color: '#1a0f2a'
  },
  {
    id: 'ovo',
    name: 'OvO',
    category: 'platformer',
    img: 'https://images.crazygames.com/games/ovo/cover_16x9.png',
    url: 'https://ovo.sbga.org',
    embed: true,
    color: '#1e1e1e'
  },
  {
    id: 'ovo-2',
    name: 'OvO 2',
    category: 'platformer',
    img: 'https://images.crazygames.com/games/ovo-2/cover_16x9.png',
    url: 'https://ovo2.sbga.org',
    embed: true,
    color: '#222222'
  },
  {
    id: 'moto-x3m',
    name: 'Moto X3M',
    category: 'platformer',
    img: 'https://images.crazygames.com/games/moto-x3m/cover_16x9.png',
    url: 'https://www.motox3m.com',
    embed: true,
    color: '#2a1a0f'
  },
  {
    id: 'short-life',
    name: 'Short Life',       // stickman-hook.com is parked on GoDaddy → replaced
    category: 'platformer',
    featured: true,
    img: 'https://images.crazygames.com/games/short-life/cover_16x9.png',
    url: 'https://www.crazygames.com/embed/short-life',
    embed: true,
    color: '#1a2a1a'
  },
  {
    id: 'fireboy-watergirl',
    name: 'Fireboy & Watergirl',
    category: 'platformer',
    img: 'https://images.crazygames.com/games/fireboy-and-watergirl-in-the-forest-temple/cover_16x9.png',
    url: 'https://www.fireboy-watergirl.com',
    embed: true,
    color: '#1a0f0f'
  },
  {
    id: 'vex-5',
    name: 'Vex 5',
    category: 'platformer',
    img: 'https://images.crazygames.com/games/vex-5/cover_16x9.png',
    url: 'https://www.crazygames.com/embed/vex-5',
    embed: true,
    color: '#0f1a1a'
  },
  {
    id: 'cat-ninja',
    name: 'Cat Ninja',
    category: 'platformer',
    img: 'https://images.crazygames.com/games/cat-ninja/cover_16x9.png',
    url: 'https://www.crazygames.com/embed/cat-ninja',
    embed: true,
    color: '#2a1a2a'
  },
  {
    id: 'happy-wheels',
    name: 'Happy Wheels',
    category: 'platformer',
    img: 'https://images.crazygames.com/games/happy-wheels/cover_16x9.png',
    url: 'https://www.totaljerkface.com/happy_wheels.tjf',
    embed: true,
    color: '#2a2a0f'
  },

  // ── Sports ──────────────────────────────────────────────────
  {
    id: 'retro-bowl',
    name: 'Retro Bowl',
    category: 'sports',
    featured: true,
    img: 'https://images.crazygames.com/games/retro-bowl/cover_16x9.png',
    url: 'https://www.crazygames.com/embed/retro-bowl',   // /embed/ = just the game
    embed: true,
    color: '#1a1a0f'
  },
  {
    id: 'basketball-stars',
    name: 'Basketball Stars',
    category: 'sports',
    img: 'https://images.crazygames.com/games/basketball-stars/cover_16x9.png',
    url: 'https://www.crazygames.com/embed/basketball-stars',
    embed: true,
    color: '#2a1a0f'
  },
  {
    id: 'soccer-random',
    name: 'Soccer Random',
    category: 'sports',
    img: 'https://images.crazygames.com/games/soccer-random/cover_16x9.png',
    url: 'https://www.crazygames.com/embed/soccer-random',
    embed: true,
    color: '#0f2a0f'
  },
  {
    id: 'bowmasters',
    name: 'Bowmasters',
    category: 'sports',
    img: 'https://images.crazygames.com/games/bowmasters/cover_16x9.png',
    url: 'https://www.crazygames.com/embed/bowmasters',
    embed: true,
    color: '#1a2a2a'
  },
  {
    id: 'gladihoppers',
    name: 'Gladihoppers',
    category: 'sports',
    img: 'https://images.crazygames.com/games/gladihoppers/cover_16x9.png',
    url: 'https://www.crazygames.com/embed/gladihoppers',
    embed: true,
    color: '#2a1a0a'
  },

  // ── Racing ──────────────────────────────────────────────────
  {
    id: 'drift-hunters',
    name: 'Drift Hunters',
    category: 'racing',
    featured: true,
    img: 'https://images.crazygames.com/games/drift-hunters/cover_16x9.png',
    url: 'https://www.crazygames.com/embed/drift-hunters',  // drifthunters.io was broken
    embed: true,
    color: '#1a0f0a'
  },
  {
    id: 'madalin-cars',
    name: 'Madalin Stunt Cars',
    category: 'racing',
    img: 'https://images.crazygames.com/games/madalin-stunt-cars-2/cover_16x9.png',
    url: 'https://www.crazygames.com/embed/madalin-stunt-cars-2',
    embed: true,
    color: '#0f1a1a'
  },
  {
    id: 'road-fury',
    name: 'Road Fury',
    category: 'racing',
    img: 'https://images.crazygames.com/games/road-fury/cover_16x9.png',
    url: 'https://www.crazygames.com/embed/road-fury',
    embed: true,
    color: '#2a0f0f'
  },

  // ── Puzzle ──────────────────────────────────────────────────
  {
    id: '2048',
    name: '2048',
    category: 'puzzle',
    img: 'https://images.crazygames.com/games/2048/cover_16x9.png',
    url: 'https://play2048.co',
    embed: true,
    color: '#2a1a0f'
  },
  {
    id: 'minesweeper',
    name: 'Minesweeper',
    category: 'puzzle',
    img: 'https://images.crazygames.com/games/minesweeper/cover_16x9.png',
    url: 'https://minesweeper.online',
    embed: true,
    color: '#0f1a2a'
  },
  {
    id: 'block-blast',
    name: 'Block Blast',
    category: 'puzzle',
    img: 'https://images.crazygames.com/games/block-blast/cover_16x9.png',
    url: 'https://www.crazygames.com/embed/block-blast',
    embed: true,
    color: '#0f2a2a'
  },
  {
    id: 'wordle',
    name: 'Wordle Unlimited',
    category: 'puzzle',
    img: 'https://images.crazygames.com/games/wordle-unlimited/cover_16x9.png',
    url: 'https://wordleunlimited.org',
    embed: true,
    color: '#1a1a0f'
  },
  {
    id: 'cut-the-rope',
    name: 'Cut the Rope',
    category: 'puzzle',
    img: 'https://images.crazygames.com/games/cut-the-rope/cover_16x9.png',
    url: 'https://www.crazygames.com/embed/cut-the-rope',
    embed: true,
    color: '#1a2a0f'
  },

  // ── Arcade ──────────────────────────────────────────────────
  {
    id: 'cookie-clicker',
    name: 'Cookie Clicker',
    category: 'arcade',
    featured: true,
    img: 'https://images.crazygames.com/games/cookie-clicker/cover_16x9.png',
    url: 'https://orteil.dashnet.org/cookieclicker/',
    embed: false,   // proxy spoofs origin - direct embed shows "wrong address" error
    color: '#2a1a0a'
  },
  {
    id: 'pac-man',
    name: 'Pac-Man',
    category: 'arcade',
    img: 'https://images.crazygames.com/games/pacman/cover_16x9.png',
    url: 'https://www.google.com/logos/2010/pacman10-i.html',
    embed: true,
    color: '#2a1a0f'
  },
  {
    id: 'tetris',
    name: 'Tetris',
    category: 'arcade',
    img: 'https://images.crazygames.com/games/tetris/cover_16x9.png',
    url: 'https://jstris.jezevec10.com',
    embed: true,
    color: '#0f0f2a'
  },
  {
    id: 'snake',
    name: 'Snake',
    category: 'arcade',
    img: 'https://images.crazygames.com/games/snake/cover_16x9.png',
    url: 'https://playsnake.org',
    embed: true,
    color: '#0f2a0f'
  },
  {
    id: 'flappy-bird',
    name: 'Flappy Bird',
    category: 'arcade',
    img: 'https://images.crazygames.com/games/flappy-bird/cover_16x9.png',
    url: 'https://flappybird.io',
    embed: true,
    color: '#0f1a2a'
  },
  {
    id: 'dino-game',
    name: 'Dino Game',
    category: 'arcade',
    img: 'https://images.crazygames.com/games/chrome-dinosaur/cover_16x9.png',
    url: 'https://chromedino.com',
    embed: true,
    color: '#2a2a2a'
  },
  {
    id: 'tunnel-rush',
    name: 'Tunnel Rush',
    category: 'arcade',
    img: 'https://images.crazygames.com/games/tunnel-rush/cover_16x9.png',
    url: 'https://www.crazygames.com/embed/tunnel-rush',
    embed: true,
    color: '#1a0a2a'
  },

  // ── Strategy ────────────────────────────────────────────────
  {
    id: 'bloons-td',
    name: 'Bloons TD 5',
    category: 'strategy',
    img: 'https://images.crazygames.com/games/bloons-tower-defense-5/cover_16x9.png',
    url: 'https://www.crazygames.com/embed/bloons-tower-defense-5',
    embed: true,
    color: '#0f1a2a'
  },
  {
    id: 'chess',
    name: 'Chess',
    category: 'strategy',
    img: 'https://images.crazygames.com/games/chess/cover_16x9.png',
    url: 'https://lichess.org',
    embed: true,
    color: '#1a1a1a'
  },
  {
    id: 'kingdom-rush',
    name: 'Kingdom Rush',
    category: 'strategy',
    img: 'https://images.crazygames.com/games/kingdom-rush/cover_16x9.png',
    url: 'https://www.crazygames.com/embed/kingdom-rush',
    embed: true,
    color: '#1a0f0a'
  },

  // ── Runner ──────────────────────────────────────────────────
  {
    id: 'temple-run-2',
    name: 'Temple Run 2',
    category: 'runner',
    featured: true,
    img: 'https://images.crazygames.com/games/temple-run-2/cover_16x9.png',
    url: 'https://www.crazygames.com/embed/temple-run-2',   // /embed/ = game only, no CG nav
    embed: true,
    color: '#1a0f0a'
  },
  {
    id: 'subway-surfers',
    name: 'Subway Surfers',
    category: 'runner',
    featured: true,
    img: 'https://images.crazygames.com/games/subway-surfers/cover_16x9.png',
    url: 'https://www.crazygames.com/embed/subway-surfers',
    embed: true,
    color: '#1a0a2a'
  },
  {
    id: 'endless-truck',
    name: 'Endless Truck',
    category: 'runner',
    img: 'https://images.crazygames.com/games/endless-truck/cover_16x9.png',
    url: 'https://www.crazygames.com/embed/endless-truck',
    embed: true,
    color: '#2a1a0f'
  },
  {
    id: 'jetpack-joyride',
    name: 'Jetpack Joyride',
    category: 'runner',
    img: 'https://images.crazygames.com/games/jetpack-joyride/cover_16x9.png',
    url: 'https://www.crazygames.com/embed/jetpack-joyride',
    embed: true,
    color: '#0a1a2a'
  },

  // ── Rhythm / Music ──────────────────────────────────────────
  {
    id: 'friday-night-funkin',
    name: 'Friday Night Funkin',
    category: 'rhythm',
    featured: true,
    img: 'https://images.crazygames.com/games/friday-night-funkin/cover_16x9.png',
    url: 'https://funkin.me',   // official FNF web port - fnf.lol was broken
    embed: true,
    color: '#2a0f2a'
  },
  {
    id: 'sprunki',
    name: 'Sprunki',
    category: 'rhythm',
    img: 'https://images.crazygames.com/games/sprunki/cover_16x9.png',
    url: 'https://sprunki.io',
    embed: true,
    color: '#1a1a2a'
  },

  // ── Multiplayer ─────────────────────────────────────────────
  {
    id: 'minecraft',
    name: '1.12.2 Eaglercraft',
    category: 'multiplayer',
    featured: true,
    img: 'https://images.crazygames.com/games/minecraft-classic/cover_16x9.png',
    url: '/minecraft.html',
    embed: true,
    color: '#1a2a0f'
  },
  {
    id: 'gartic-phone',
    name: 'Gartic Phone',
    category: 'multiplayer',
    img: 'https://images.crazygames.com/games/gartic-phone/cover_16x9.png',
    url: 'https://garticphone.com',
    embed: true,
    color: '#0f1a2a'
  },
  {
    id: 'skribbl-multi',
    name: 'Skribbl.io',
    category: 'multiplayer',
    img: 'https://images.crazygames.com/games/skribbl-io/cover_16x9.png',
    url: 'https://skribbl.io',
    embed: true,   // direct - Socket.IO needs direct WebSocket, not proxied
    color: '#1a0a2a'
  },
];

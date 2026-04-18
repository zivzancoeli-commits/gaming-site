// embed: true  → loads directly in iframe (no proxy, game allows embedding)
// embed: false → routes through UV proxy (default)
const GAMES = [
  // ── Shooting / Action ─────────────────────────────────────
  {
    id: 'shell-shockers',
    name: 'Shell Shockers',
    category: 'shooting',
    featured: true,
    img: 'https://images.crazygames.com/games/shell-shockers/cover_16x9.png',
    url: 'https://shellshock.io',
    embed: false,
    color: '#1e3a5f'
  },
  {
    id: 'krunker',
    name: 'Krunker.io',
    category: 'shooting',
    featured: true,
    img: 'https://images.crazygames.com/games/krunker-io/cover_16x9.png',
    url: 'https://krunker.io',
    embed: false,
    color: '#1a3a2a'
  },
  {
    id: '1v1lol',
    name: '1v1.LOL',
    category: 'shooting',
    featured: true,
    img: 'https://images.crazygames.com/games/1v1-lol/cover_16x9.png',
    url: 'https://1v1.lol',
    embed: false,
    color: '#1a2a3a'
  },
  {
    id: 'venge',
    name: 'Venge.io',
    category: 'shooting',
    img: 'https://images.crazygames.com/games/venge-io/cover_16x9.png',
    url: 'https://venge.io',
    embed: false,
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

  // ── IO Games ────────────────────────────────────────────────
  {
    id: 'slither',
    name: 'Slither.io',
    category: 'io',
    featured: true,
    img: 'https://images.crazygames.com/games/slither-io/cover_16x9.png',
    url: 'https://slither.io',
    color: '#0f2a0f'
  },
  {
    id: 'agar',
    name: 'Agar.io',
    category: 'io',
    img: 'https://images.crazygames.com/games/agar-io/cover_16x9.png',
    url: 'https://agar.io',
    color: '#1a1a3a'
  },
  {
    id: 'paper-io',
    name: 'Paper.io 2',
    category: 'io',
    img: 'https://images.crazygames.com/games/paper-io-2/cover_16x9.png',
    url: 'https://paper-io.com',
    color: '#2a1a2a'
  },
  {
    id: 'diep',
    name: 'Diep.io',
    category: 'io',
    img: 'https://images.crazygames.com/games/diep-io/cover_16x9.png',
    url: 'https://diep.io',
    color: '#1a2a1a'
  },
  {
    id: 'bonk',
    name: 'Bonk.io',
    category: 'io',
    img: 'https://images.crazygames.com/games/bonk-io/cover_16x9.png',
    url: 'https://bonk.io',
    color: '#2a2a1a'
  },
  {
    id: 'skribbl',
    name: 'Skribbl.io',
    category: 'io',
    img: 'https://images.crazygames.com/games/skribbl-io/cover_16x9.png',
    url: 'https://skribbl.io',
    color: '#1a1a2a'
  },
  {
    id: 'wormate',
    name: 'Wormate.io',
    category: 'io',
    img: 'https://images.crazygames.com/games/wormate-io/cover_16x9.png',
    url: 'https://wormate.io',
    color: '#2a1a1a'
  },
  {
    id: 'deeeep',
    name: 'Deeeep.io',
    category: 'io',
    img: 'https://images.crazygames.com/games/deeeep-io/cover_16x9.png',
    url: 'https://deeeep.io',
    color: '#0f1a2a'
  },

  // ── Platformer ──────────────────────────────────────────────
  {
    id: 'slope',
    name: 'Slope',
    category: 'platformer',
    featured: true,
    img: 'https://images.crazygames.com/games/slope/cover_16x9.png',
    url: 'https://slope.game',
    color: '#1a0f2a'
  },
  {
    id: 'run-3',
    name: 'Run 3',
    category: 'platformer',
    featured: true,
    img: 'https://images.crazygames.com/games/run-3/cover_16x9.png',
    url: 'https://www.crazygames.com/game/run-3',
    color: '#2a1a0f'
  },
  {
    id: 'ovo',
    name: 'OvO',
    category: 'platformer',
    img: 'https://images.crazygames.com/games/ovo/cover_16x9.png',
    url: 'https://www.crazygames.com/game/ovo',
    color: '#1e1e1e'
  },
  {
    id: 'ovo-2',
    name: 'OvO 2',
    category: 'platformer',
    img: 'https://images.crazygames.com/games/ovo-2/cover_16x9.png',
    url: 'https://www.crazygames.com/game/ovo-2',
    color: '#222222'
  },
  {
    id: 'ovo-3d',
    name: 'OvO 3 Dimensions',
    category: 'platformer',
    img: 'https://images.crazygames.com/games/ovo-3d/cover_16x9.png',
    url: 'https://www.crazygames.com/game/ovo-3d',
    color: '#1a1a2a'
  },
  {
    id: 'moto-x3m',
    name: 'Moto X3M',
    category: 'platformer',
    img: 'https://images.crazygames.com/games/moto-x3m/cover_16x9.png',
    url: 'https://www.crazygames.com/game/moto-x3m',
    color: '#2a1a0f'
  },
  {
    id: 'fireboy-watergirl',
    name: 'Fireboy & Watergirl',
    category: 'platformer',
    img: 'https://images.crazygames.com/games/fireboy-and-watergirl-in-the-forest-temple/cover_16x9.png',
    url: 'https://www.crazygames.com/game/fireboy-and-watergirl-in-the-forest-temple',
    color: '#1a0f0f'
  },
  {
    id: 'vex-5',
    name: 'Vex 5',
    category: 'platformer',
    img: 'https://images.crazygames.com/games/vex-5/cover_16x9.png',
    url: 'https://www.crazygames.com/game/vex-5',
    color: '#0f1a1a'
  },
  {
    id: 'geometry-dash',
    name: 'Geometry Dash',
    category: 'platformer',
    featured: true,
    img: 'https://images.crazygames.com/games/geometry-dash/cover_16x9.png',
    url: 'https://www.crazygames.com/game/geometry-dash',
    color: '#1a0a2a'
  },
  {
    id: 'stickman-hook',
    name: 'Stickman Hook',
    category: 'platformer',
    img: 'https://images.crazygames.com/games/stickman-hook/cover_16x9.png',
    url: 'https://www.crazygames.com/game/stickman-hook',
    color: '#1a2a1a'
  },
  {
    id: 'happy-wheels',
    name: 'Happy Wheels',
    category: 'platformer',
    img: 'https://images.crazygames.com/games/happy-wheels/cover_16x9.png',
    url: 'https://www.totaljerkface.com/happy_wheels.tjf',
    color: '#2a2a0f'
  },

  // ── Sports ──────────────────────────────────────────────────
  {
    id: 'retro-bowl',
    name: 'Retro Bowl',
    category: 'sports',
    featured: true,
    img: 'https://images.crazygames.com/games/retro-bowl/cover_16x9.png',
    url: 'https://retrobowl.me',
    color: '#1a1a0f'
  },
  {
    id: 'basketball-stars',
    name: 'Basketball Stars',
    category: 'sports',
    img: 'https://images.crazygames.com/games/basketball-stars/cover_16x9.png',
    url: 'https://www.crazygames.com/game/basketball-stars',
    color: '#2a1a0f'
  },
  {
    id: 'soccer-random',
    name: 'Soccer Random',
    category: 'sports',
    img: 'https://images.crazygames.com/games/soccer-random/cover_16x9.png',
    url: 'https://www.crazygames.com/game/soccer-random',
    color: '#0f2a0f'
  },
  {
    id: 'bowmasters',
    name: 'Bowmasters',
    category: 'sports',
    img: 'https://images.crazygames.com/games/bowmasters/cover_16x9.png',
    url: 'https://www.crazygames.com/game/bowmasters',
    color: '#1a2a2a'
  },
  {
    id: 'gladihoppers',
    name: 'Gladihoppers',
    category: 'sports',
    img: 'https://images.crazygames.com/games/gladihoppers/cover_16x9.png',
    url: 'https://www.crazygames.com/game/gladihoppers',
    color: '#2a1a0a'
  },

  // ── Racing ──────────────────────────────────────────────────
  {
    id: 'drift-hunters',
    name: 'Drift Hunters',
    category: 'racing',
    featured: true,
    img: 'https://images.crazygames.com/games/drift-hunters/cover_16x9.png',
    url: 'https://www.crazygames.com/game/drift-hunters',
    color: '#1a0f0a'
  },
  {
    id: 'madalin-cars',
    name: 'Madalin Stunt Cars',
    category: 'racing',
    img: 'https://images.crazygames.com/games/madalin-stunt-cars-2/cover_16x9.png',
    url: 'https://www.crazygames.com/game/madalin-stunt-cars-2',
    color: '#0f1a1a'
  },

  // ── Puzzle ──────────────────────────────────────────────────
  {
    id: '2048',
    name: '2048',
    category: 'puzzle',
    img: 'https://images.crazygames.com/games/2048/cover_16x9.png',
    url: 'https://play2048.co',
    color: '#2a1a0f'
  },
  {
    id: 'minesweeper',
    name: 'Minesweeper',
    category: 'puzzle',
    img: 'https://images.crazygames.com/games/minesweeper/cover_16x9.png',
    url: 'https://minesweeper.online',
    color: '#0f1a2a'
  },
  {
    id: 'cut-the-rope',
    name: 'Cut the Rope',
    category: 'puzzle',
    img: 'https://images.crazygames.com/games/cut-the-rope/cover_16x9.png',
    url: 'https://www.crazygames.com/game/cut-the-rope',
    color: '#1a2a0f'
  },
  {
    id: 'block-blast',
    name: 'Block Blast',
    category: 'puzzle',
    img: 'https://images.crazygames.com/games/block-blast/cover_16x9.png',
    url: 'https://www.crazygames.com/game/block-blast',
    color: '#0f2a2a'
  },
  {
    id: 'color-water-sort',
    name: 'Color Water Sort',
    category: 'puzzle',
    img: 'https://images.crazygames.com/games/color-water-sort/cover_16x9.png',
    url: 'https://www.crazygames.com/game/color-water-sort',
    color: '#1a0f2a'
  },
  {
    id: 'wordle',
    name: 'Wordle',
    category: 'puzzle',
    img: 'https://images.crazygames.com/games/wordle-unlimited/cover_16x9.png',
    url: 'https://wordleunlimited.org',
    color: '#1a1a0f'
  },

  // ── Arcade ──────────────────────────────────────────────────
  {
    id: 'pac-man',
    name: 'Pac-Man',
    category: 'arcade',
    img: 'https://images.crazygames.com/games/pacman/cover_16x9.png',
    url: 'https://www.crazygames.com/game/pacman',
    color: '#2a1a0f'
  },
  {
    id: 'tetris',
    name: 'Tetris',
    category: 'arcade',
    img: 'https://images.crazygames.com/games/tetris/cover_16x9.png',
    url: 'https://tetris.com/play-tetris',
    color: '#0f0f2a'
  },
  {
    id: 'snake',
    name: 'Snake',
    category: 'arcade',
    img: 'https://images.crazygames.com/games/snake/cover_16x9.png',
    url: 'https://www.crazygames.com/game/snake',
    color: '#0f2a0f'
  },
  {
    id: 'flappy-bird',
    name: 'Flappy Bird',
    category: 'arcade',
    img: 'https://images.crazygames.com/games/flappy-bird/cover_16x9.png',
    url: 'https://flappybird.io',
    color: '#0f1a2a'
  },
  {
    id: 'dino-game',
    name: 'Dino Game',
    category: 'arcade',
    img: 'https://images.crazygames.com/games/chrome-dinosaur/cover_16x9.png',
    url: 'https://chromedino.com',
    color: '#2a2a2a'
  },
  {
    id: 'tunnel-rush',
    name: 'Tunnel Rush',
    category: 'arcade',
    img: 'https://images.crazygames.com/games/tunnel-rush/cover_16x9.png',
    url: 'https://www.crazygames.com/game/tunnel-rush',
    color: '#1a0a2a'
  },
  {
    id: 'cookie-clicker',
    name: 'Cookie Clicker',
    category: 'arcade',
    featured: true,
    img: 'https://images.crazygames.com/games/cookie-clicker/cover_16x9.png',
    url: 'https://orteil.dashnet.org/cookieclicker/',
    color: '#2a1a0a'
  },

  // ── Strategy ────────────────────────────────────────────────
  {
    id: 'bloons-td',
    name: 'Bloons TD 6',
    category: 'strategy',
    img: 'https://images.crazygames.com/games/bloons-tower-defense-6/cover_16x9.png',
    url: 'https://www.crazygames.com/game/bloons-tower-defense-6',
    color: '#0f1a2a'
  },
  {
    id: 'chess',
    name: 'Chess',
    category: 'strategy',
    img: 'https://images.crazygames.com/games/chess/cover_16x9.png',
    url: 'https://www.chess.com/play/computer',
    color: '#1a1a1a'
  },
  {
    id: 'kingdom-rush',
    name: 'Kingdom Rush',
    category: 'strategy',
    img: 'https://images.crazygames.com/games/kingdom-rush/cover_16x9.png',
    url: 'https://www.crazygames.com/game/kingdom-rush',
    color: '#1a0f0a'
  },

  // ── Runner ──────────────────────────────────────────────────
  {
    id: 'temple-run-2',
    name: 'Temple Run 2',
    category: 'runner',
    featured: true,
    img: 'https://images.crazygames.com/games/temple-run-2/cover_16x9.png',
    url: 'https://www.crazygames.com/game/temple-run-2',
    color: '#1a0f0a'
  },
  {
    id: 'jetpack-joyride',
    name: 'Jetpack Joyride',
    category: 'runner',
    img: 'https://images.crazygames.com/games/jetpack-joyride/cover_16x9.png',
    url: 'https://www.crazygames.com/game/jetpack-joyride',
    color: '#0a1a2a'
  },
  {
    id: 'subway-surfers',
    name: 'Subway Surfers',
    category: 'runner',
    featured: true,
    img: 'https://images.crazygames.com/games/subway-surfers/cover_16x9.png',
    url: 'https://www.crazygames.com/game/subway-surfers',
    color: '#1a0a2a'
  },

  // ── Rhythm / Music ──────────────────────────────────────────
  {
    id: 'friday-night-funkin',
    name: 'Friday Night Funkin',
    category: 'rhythm',
    featured: true,
    img: 'https://images.crazygames.com/games/friday-night-funkin/cover_16x9.png',
    url: 'https://www.crazygames.com/game/friday-night-funkin',
    color: '#2a0f2a'
  },
  {
    id: 'sprunki',
    name: 'Sprunki',
    category: 'rhythm',
    img: 'https://images.crazygames.com/games/sprunki/cover_16x9.png',
    url: 'https://sprunki.io',
    color: '#1a1a2a'
  },

  // ── Multiplayer ─────────────────────────────────────────────
  {
    id: 'minecraft-classic',
    name: 'Minecraft Classic',
    category: 'multiplayer',
    featured: true,
    img: 'https://images.crazygames.com/games/minecraft-classic/cover_16x9.png',
    url: 'https://classic.minecraft.net',
    color: '#1a2a0f'
  },
  {
    id: 'among-us',
    name: 'Among Us',
    category: 'multiplayer',
    img: 'https://images.crazygames.com/games/among-us-single-player/cover_16x9.png',
    url: 'https://www.crazygames.com/game/among-us-single-player',
    color: '#1a0a1a'
  },
  {
    id: 'gartic-phone',
    name: 'Gartic Phone',
    category: 'multiplayer',
    img: 'https://images.crazygames.com/games/gartic-phone/cover_16x9.png',
    url: 'https://garticphone.com',
    color: '#0f1a2a'
  },

  // ── Adventure ───────────────────────────────────────────────
  {
    id: 'tag',
    name: 'Tag (Playground)',
    category: 'multiplayer',
    img: 'https://images.crazygames.com/games/tag-io/cover_16x9.png',
    url: 'https://www.crazygames.com/game/tag-io',
    color: '#2a1a1a'
  },
];

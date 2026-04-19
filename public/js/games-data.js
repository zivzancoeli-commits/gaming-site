// embed: true  → loads directly in iframe (no proxy needed)
// embed: false → routes through UV proxy
// GitHub.io sources used throughout — they have no X-Frame-Options restrictions
const UBP  = 'https://unblockedgamespremium.github.io/';      // unblockedgamespremium
const UB76 = 'https://unblockedgames-76-premium.github.io/';  // unblocked76premium
const CGI  = (slug) => `https://images.crazygames.com/games/${slug}/cover_16x9.png`;

const GAMES = [

  // ── Action / Shooting ──────────────────────────────────────
  { id:'shell-shockers',   name:'Shell Shockers',        category:'action',    featured:true,  img:CGI('shell-shockers'),                   url:'https://shellshock.io',                         embed:true },
  { id:'venge',            name:'Venge.io',               category:'action',    featured:true,  img:CGI('venge-io'),                         url:'https://venge.io',                              embed:true },
  { id:'rooftop-snipers',  name:'Rooftop Snipers',        category:'action',                   img:CGI('rooftop-snipers'),                  url:'https://rooftop-snipers.com',                   embed:true },
  { id:'rooftop-2',        name:'Rooftop Snipers 2',      category:'action',                   img:CGI('rooftop-snipers-2'),                url: UBP+'rooftop-snipers-2.html',                   embed:true },
  { id:'getaway-shootout', name:'Getaway Shootout',       category:'action',                   img:CGI('getaway-shootout'),                 url:'https://getawayshootout.com',                   embed:true },
  { id:'smash-karts',      name:'Smash Karts',            category:'action',    featured:true,  img:CGI('smash-karts'),                      url:'https://smashkarts.io',                         embed:true },
  { id:'1v1lol',           name:'1v1.LoL',                category:'action',    featured:true,  img:CGI('1v1lol'),                           url: UB76+'1v1-lol/',                                embed:true },
  { id:'gun-mayhem',       name:'Gun Mayhem 2',           category:'action',                   img:CGI('gun-mayhem-2'),                     url: UBP+'gun-mayhem-2.html',                        embed:true },
  { id:'time-shooter',     name:'Time Shooter 3',         category:'action',                   img:CGI('time-shooter-3'),                   url: UBP+'time-shooter-3.html',                      embed:true },
  { id:'just-fall',        name:'Just Fall LOL',          category:'action',                   img:CGI('just-fall-lol'),                    url: UBP+'just-fall-lol.html',                       embed:true },

  // ── IO Games ───────────────────────────────────────────────
  { id:'slither',          name:'Slither.io',             category:'io',        featured:true,  img:CGI('slither-io'),                       url:'https://slither.io',                            embed:true },
  { id:'agar',             name:'Agar.io',                category:'io',                       img:CGI('agar-io'),                          url:'https://agar.io',                               embed:true },
  { id:'paper-io',         name:'Paper.io 2',             category:'io',                       img:CGI('paper-io-2'),                       url:'https://paper-io.com',                          embed:true },
  { id:'diep',             name:'Diep.io',                category:'io',                       img:CGI('diep-io'),                          url:'https://diep.io',                               embed:true },
  { id:'bonk',             name:'Bonk.io',                category:'io',                       img:CGI('bonk-io'),                          url:'https://bonk.io',                               embed:true },
  { id:'skribbl',          name:'Skribbl.io',             category:'io',                       img:CGI('skribbl-io'),                       url:'https://skribbl.io',                            embed:true },
  { id:'state-io',         name:'State.io',               category:'io',                       img:CGI('state-io'),                         url:'https://state.io',                              embed:true },
  { id:'krunker',          name:'Krunker.io',             category:'io',                       img:CGI('krunker-io'),                       url:'https://krunker.io',                            embed:true },

  // ── Platformer ─────────────────────────────────────────────
  { id:'slope',            name:'Slope',                  category:'platformer',featured:true,  img:CGI('slope'),                            url: UB76+'slope/',                                  embed:true },
  { id:'ovo',              name:'OvO',                    category:'platformer',               img:CGI('ovo'),                              url:'https://ovo.sbga.org',                          embed:true },
  { id:'ovo-2',            name:'OvO 2',                  category:'platformer',               img:CGI('ovo-2'),                            url:'https://ovo2.sbga.org',                         embed:true },
  { id:'moto-x3m',         name:'Moto X3M',               category:'platformer',               img:CGI('moto-x3m'),                         url:'https://www.motox3m.com',                       embed:true },
  { id:'moto-x3m-2',       name:'Moto X3M 2',             category:'platformer',               img:CGI('moto-x3m-2'),                       url: UBP+'moto-x3m-2.html',                         embed:true },
  { id:'moto-x3m-3',       name:'Moto X3M 3',             category:'platformer',               img:CGI('moto-x3m-3'),                       url: UBP+'moto-x3m-3.html',                         embed:true },
  { id:'moto-x3m-winter2', name:'Moto X3M Winter',        category:'platformer',               img:CGI('moto-x3m-winter'),                  url: UBP+'moto-x3m-winter-2.html',                  embed:true },
  { id:'fireboy-wg1',      name:'Fireboy & Watergirl',    category:'platformer',               img:CGI('fireboy-and-watergirl-in-the-forest-temple'), url:'https://www.fireboy-watergirl.com', embed:true },
  { id:'fireboy-wg6',      name:'Fireboy & Watergirl 6',  category:'platformer',               img:CGI('fireboy-and-watergirl-6-fairy-forest'), url: UBP+'fireboy-and-watergirl-6.html',        embed:true },
  { id:'vex-6',            name:'Vex 6',                  category:'platformer',               img:CGI('vex-6'),                            url: UBP+'vex-6.html',                               embed:true },
  { id:'vex-8',            name:'Vex 8',                  category:'platformer',               img:CGI('vex-8'),                            url: UBP+'vex-8.html',                               embed:true },
  { id:'vex-5',            name:'Vex 5',                  category:'platformer',               img:CGI('vex-5'),                            url:'https://vex5.io',                               embed:true },
  { id:'happy-wheels',     name:'Happy Wheels',           category:'platformer',               img:CGI('happy-wheels'),                     url: UBP+'happy-wheels.html',                        embed:true },
  { id:'bob-robber-4',     name:'Bob The Robber 4',       category:'platformer',               img:CGI('bob-the-robber-4'),                 url: UBP+'bob-the-robber-4.html',                    embed:true },
  { id:'fleeing-complex',  name:'Fleeing the Complex',    category:'platformer',               img:CGI('fleeing-the-complex'),              url: UBP+'fleeing-the-complex.html',                 embed:true },
  { id:'escaping-prison',  name:'Escaping the Prison',    category:'platformer',               img:CGI('escaping-the-prison'),              url: UBP+'escaping-the-prison.html',                 embed:true },
  { id:'learn-to-fly',     name:'Learn to Fly',           category:'platformer',               img:CGI('learn-to-fly'),                     url: UBP+'learn-to-fly.html',                        embed:true },
  { id:'getting-over-it',  name:'Getting Over It',        category:'platformer',               img:CGI('getting-over-it'),                  url: UBP+'getting-over-it.html',                     embed:true },
  { id:'death-run-3d',     name:'Death Run 3D',           category:'platformer',               img:CGI('death-run-3d'),                     url: UBP+'death-run-3d.html',                        embed:true },
  { id:'geometry-dash',    name:'Geometry Dash Lite',     category:'platformer',featured:true,  img:CGI('geometry-dash-lite'),               url:'https://geometrylite.github.io/',               embed:true },
  { id:'cluster-rush',     name:'Cluster Rush',           category:'platformer',featured:true,  img:CGI('cluster-rush'),                     url:'https://cluster-rush-games.github.io/',         embed:true },

  // ── Sports ─────────────────────────────────────────────────
  { id:'retro-bowl',       name:'Retro Bowl',             category:'sports',    featured:true,  img:CGI('retro-bowl'),                       url: UB76+'retro-bowl/',                             embed:true },
  { id:'retro-bowl-col',   name:'Retro Bowl College',     category:'sports',                   img:CGI('retro-bowl-college'),               url:'https://retrobowlcollege.github.io/',            embed:true },
  { id:'basketball-stars', name:'Basketball Stars',       category:'sports',                   img:CGI('basketball-stars'),                 url:'https://basketball-stars.io',                   embed:true },
  { id:'head-soccer',      name:'Head Soccer',            category:'sports',                   img:CGI('head-soccer-2023'),                 url: UBP+'head-soccer-2023.html',                    embed:true },
  { id:'rocket-soccer',    name:'Rocket Soccer Derby',    category:'sports',                   img:CGI('rocket-soccer-derby'),              url: UBP+'rocket-soccer-derby.html',                 embed:true },
  { id:'a-small-worldcup', name:'A Small World Cup',      category:'sports',                   img:CGI('a-small-world-cup'),                url: UBP+'a-small-world-cup.html',                   embed:true },
  { id:'archery-world',    name:'Archery World Tour',     category:'sports',                   img:CGI('archery-world-tour'),               url:'https://archeryworldtour.io',                   embed:true },
  { id:'line-rider',       name:'Line Rider',             category:'sports',                   img:CGI('line-rider'),                       url:'https://linerider.com',                         embed:true },

  // ── Racing ─────────────────────────────────────────────────
  { id:'drift-hunters',    name:'Drift Hunters',          category:'racing',    featured:true,  img:CGI('drift-hunters'),                    url:'https://drift-hunters-game.github.io/',         embed:true },
  { id:'madalin-cars',     name:'Madalin Stunt Cars 3',  category:'racing',                   img:CGI('madalin-stunt-cars-3'),             url: UBP+'madalin-stunt-cars-3.html',                embed:true },
  { id:'poly-track',       name:'Poly Track',             category:'racing',    featured:true,  img:CGI('polytrack'),                        url:'https://polytrack.kubz.dev',                    embed:true },
  { id:'snow-rider',       name:'Snow Rider 3D',          category:'racing',                   img:CGI('snow-rider-3d'),                    url: UB76+'snow-rider-3d/',                          embed:true },
  { id:'moto-road',        name:'Moto Road Rash 3D',      category:'racing',                   img:CGI('moto-road-rash-3d'),                url: UBP+'moto-road-rash-3d.html',                   embed:true },
  { id:'slope-racing',     name:'Slope Racing 3D',        category:'racing',                   img:CGI('slope-racing-3d'),                  url: UBP+'slope-racing-3d.html',                     embed:true },
  { id:'highway-racer-3d', name:'Highway Racer 3D',       category:'racing',                   img:CGI('highway-racer-3d'),                 url: UBP+'highway-racer-3d.html',                    embed:true },
  { id:'scrap-metal',      name:'Scrap Metal 3',          category:'racing',                   img:CGI('scrap-metal-3'),                    url: UBP+'scrap-metal-3.html',                       embed:true },

  // ── Puzzle ─────────────────────────────────────────────────
  { id:'2048',             name:'2048',                   category:'puzzle',                   img:CGI('2048'),                             url:'https://play2048.co',                           embed:true },
  { id:'minesweeper',      name:'Minesweeper',            category:'puzzle',                   img:CGI('minesweeper'),                      url:'https://minesweeper.online',                    embed:true },
  { id:'wordle',           name:'Wordle Unlimited',       category:'puzzle',                   img:CGI('wordle-unlimited'),                 url:'https://wordleunlimited.org',                   embed:true },
  { id:'cut-the-rope',     name:'Cut the Rope',           category:'puzzle',                   img:CGI('cut-the-rope'),                     url: UBP+'cut-the-rope-holiday.html',                embed:true },
  { id:'dance-fire-ice',   name:'A Dance of Fire & Ice',  category:'puzzle',    featured:true,  img:CGI('a-dance-of-fire-and-ice'),          url: UBP+'a-dance-of-fire-and-ice.html',             embed:true },
  { id:'blumgi-slime',     name:'Blumgi Slime',           category:'puzzle',                   img:CGI('blumgi-slime'),                     url:'https://blumgislime.com',                       embed:true },
  { id:'the-final-earth',  name:'The Final Earth 2',      category:'puzzle',                   img:CGI('the-final-earth-2'),                url: UBP+'the-final-earth-2.html',                   embed:true },
  { id:'tank-trouble',     name:'Tank Trouble 2',         category:'puzzle',                   img:CGI('tank-trouble-2'),                   url: UBP+'tank-trouble-2.html',                      embed:true },
  { id:'there-is-no-game', name:'There Is No Game',       category:'puzzle',                   img:CGI('there-is-no-game'),                 url: UBP+'there-is-no-game.html',                    embed:true },

  // ── Arcade ─────────────────────────────────────────────────
  { id:'cookie-clicker',   name:'Cookie Clicker',         category:'arcade',    featured:true,  img:CGI('cookie-clicker'),                   url:'https://orteil.dashnet.org/cookieclicker/',     embed:false },
  { id:'pac-man',          name:'Pac-Man',                category:'arcade',                   img:CGI('pacman'),                           url:'https://www.google.com/logos/2010/pacman10-i.html', embed:true },
  { id:'tetris',           name:'Tetris',                 category:'arcade',                   img:CGI('tetris'),                           url:'https://jstris.jezevec10.com',                  embed:true },
  { id:'snake',            name:'Snake',                  category:'arcade',                   img:CGI('snake'),                            url:'https://playsnake.org',                         embed:true },
  { id:'flappy-bird',      name:'Flappy Bird',            category:'arcade',                   img:CGI('flappy-bird'),                      url: UB76+'flappy-bird/',                            embed:true },
  { id:'dino-game',        name:'Dino Game',              category:'arcade',                   img:CGI('chrome-dinosaur'),                  url:'https://chromedino.com',                        embed:true },
  { id:'tunnel-rush',      name:'Tunnel Rush',            category:'arcade',                   img:CGI('tunnel-rush'),                      url: UB76+'tunnel-rush/',                            embed:true },
  { id:'burrito-bison',    name:'Burrito Bison',          category:'arcade',                   img:CGI('burrito-bison'),                    url: UBP+'burrito-bison-launcha-libre.html',         embed:true },
  { id:'tiny-fishing',     name:'Tiny Fishing',           category:'arcade',                   img:CGI('tiny-fishing'),                     url:'https://tinyfishing.io',                        embed:true },
  { id:'8-ball-pool',      name:'8 Ball Pool',            category:'arcade',                   img:CGI('8-ball-pool'),                      url: UB76+'8-ball-pool/',                            embed:true },
  { id:'solar-smash',      name:'Solar Smash',            category:'arcade',    featured:true,  img:CGI('solar-smash'),                      url:'https://solar-smash.com',                       embed:true },
  { id:'bitlife',          name:'BitLife',                category:'arcade',    featured:true,  img:CGI('bitlife'),                          url: UBP+'bitlife.html',                             embed:true },
  { id:'idle-breakout',    name:'Idle Breakout',          category:'arcade',                   img:CGI('idle-breakout'),                    url:'https://loonride.com/idle-breakout/',            embed:true },
  { id:'snail-bob',        name:'Snail Bob 2',            category:'arcade',                   img:CGI('snail-bob-2'),                      url: UBP+'snail-bob-2.html',                         embed:true },
  { id:'10-min-dawn',      name:'10 Minutes Till Dawn',   category:'arcade',                   img:CGI('10-minutes-till-dawn'),             url: UBP+'10-min-till-dawn.html',                    embed:true },
  { id:'bloons-td-2',      name:'Bloons TD 2',            category:'arcade',                   img:CGI('bloons-td-2'),                      url: UBP+'bloons-td2.html',                          embed:true },
  { id:'super-mario-64',   name:'Super Mario 64',         category:'arcade',    featured:true,  img:CGI('super-mario-64'),                   url: UBP+'supper-mario-64.html',                     embed:true },
  { id:'rise-neon',        name:'Rise of Neon Square',    category:'arcade',                   img:CGI('rise-of-neon-square'),              url: UBP+'rise-of-neon-square.html',                 embed:true },

  // ── Strategy ───────────────────────────────────────────────
  { id:'chess',            name:'Chess',                  category:'strategy',                 img:CGI('chess'),                            url:'https://lichess.org',                           embed:true },
  { id:'riddle-school',    name:'Riddle School 5',        category:'strategy',                 img:CGI('riddle-school-5'),                  url: UBP+'riddle-school-5.html',                     embed:true },
  { id:'slime-rush-td',    name:'Slime Rush TD',          category:'strategy',                 img:CGI('slime-rush-td'),                    url: UBP+'slime-rush-td.html',                       embed:true },
  { id:'big-tower-1',      name:'Big Tower Tiny Square',  category:'strategy',                 img:CGI('big-tower-tiny-square'),            url:'https://bigtowertinysquare.com',                embed:true },

  // ── Runner ─────────────────────────────────────────────────
  { id:'temple-run-2',     name:'Temple Run 2',           category:'runner',    featured:true,  img:CGI('temple-run-2'),                     url: UBP+'temple-run-2.html',                        embed:true },
  { id:'subway-surfers',   name:'Subway Surfers',         category:'runner',    featured:true,  img:CGI('subway-surfers'),                   url: UBP+'subway-surfers-san-francisco.html',        embed:true },

  // ── Rhythm ─────────────────────────────────────────────────
  { id:'friday-night-funkin',name:'Friday Night Funkin',  category:'rhythm',    featured:true,  img:CGI('friday-night-funkin'),              url:'https://funkin.me',                             embed:true },
  { id:'sprunki',          name:'Sprunki',                category:'rhythm',    featured:true,  img:CGI('sprunki'),                          url:'https://sprunki.io',                            embed:true },

  // ── Horror ─────────────────────────────────────────────────
  { id:'fnaf-1',           name:"Five Nights at Freddy's",category:'horror',    featured:true,  img:CGI('five-nights-at-freddys'),           url: UB76+'five-nights-at-freddys/',                 embed:true },
  { id:'fnaf-2',           name:"Five Nights at Freddy's 2",category:'horror',                 img:CGI('five-nights-at-freddys-2'),         url:'https://www.fnaf2unblocked.com/',               embed:true },
  { id:'fnaf-3',           name:"Five Nights at Freddy's 3",category:'horror',                 img:CGI('five-nights-at-freddys-3'),         url:'https://fnaf3.com/',                            embed:true },
  { id:'granny-1',         name:'Granny',                 category:'horror',                   img:CGI('granny'),                           url:'https://grannygame.io',                         embed:true },
  { id:'backrooms',        name:'Backrooms',              category:'horror',                   img:CGI('backrooms'),                        url:'https://thebackrooms.io',                       embed:true },
  { id:'baldis-basics',    name:"Baldi's Basics",         category:'horror',                   img:CGI('baldis-basics-online'),             url: UBP+'baldis-basics-camping-trip.html',          embed:true },

  // ── Multiplayer ────────────────────────────────────────────
  { id:'minecraft',        name:'1.12.2 Eaglercraft',     category:'multiplayer',featured:true, img:CGI('minecraft-classic'),               url:'/minecraft.html',                               embed:true },
  { id:'gartic-phone',     name:'Gartic Phone',           category:'multiplayer',              img:CGI('gartic-phone'),                     url:'https://garticphone.com',                       embed:true },
];

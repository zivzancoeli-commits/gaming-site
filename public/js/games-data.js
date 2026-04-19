// embed: true  → loads directly in iframe
// embed: false → routes through UV proxy
//
// IFR = iframe.unblocked-76-games.org — pure game iframes, zero wrapper UI
const IFR = 'https://iframe.unblocked-76-games.org/';
const CGI = (slug) => `https://images.crazygames.com/games/${slug}/cover_16x9.png`;

const GAMES = [

  // ── Shooter ────────────────────────────────────────────────────────
  { id:'shell-shockers',   name:'Shell Shockers',           category:'shooter',    featured:true,  img:CGI('shell-shockers'),                           url:'https://shellshock.io',                                           embed:true },
  { id:'krunker',          name:'Krunker.io',               category:'shooter',    featured:true,  img:CGI('krunker-io'),                               url:'https://krunker.io',                                              embed:true },
  { id:'deadshot',         name:'DEADSHOT.io',              category:'shooter',    featured:true,  img:CGI('deadshot-io'),                              url:'https://deadshot.io',                                             embed:true },
  { id:'voxiom',           name:'Voxiom.io',                category:'shooter',    featured:true,  img:CGI('voxiom-io'),                                url:'https://voxiom.io',                                               embed:false },
  { id:'repuls',           name:'Repuls.io',                category:'shooter',                   img:CGI('repuls-io'),                                url:'https://repuls.io',                                               embed:true },
  { id:'war-brokers',      name:'War Brokers',              category:'shooter',                   img:CGI('war-brokers'),                              url:'https://warbrokers.io',                                           embed:true },
  { id:'combat-online',    name:'Combat Online',            category:'shooter',                   img:CGI('combat-online'),                            url:'https://combaton.io',                                             embed:true },
  { id:'venge',            name:'Venge.io',                  category:'shooter',    featured:true,  img:CGI('venge-io'),                                 url:'https://venge.io',                                                embed:true },
  { id:'1v1lol',           name:'1v1.LoL',                   category:'shooter',    featured:true,  img:CGI('1v1lol'),                                   url:IFR+'1v1-lol-main',                                                embed:true },
  { id:'smash-karts',      name:'Smash Karts',               category:'shooter',    featured:true,  img:CGI('smash-karts'),                              url:'https://smashkarts.io',                                           embed:true },
  { id:'getaway-shootout', name:'Getaway Shootout',          category:'shooter',                   img:CGI('getaway-shootout'),                         url:'https://getawayshootout.com',                                     embed:true },
  { id:'rooftop-snipers',  name:'Rooftop Snipers',           category:'shooter',                   img:CGI('rooftop-snipers'),                          url:'https://rooftop-snipers.com',                                     embed:true },
  { id:'rooftop-2',        name:'Rooftop Snipers 2',         category:'shooter',                   img:CGI('rooftop-snipers-2'),                        url:IFR+'rooftop-snipers-2-main',                                      embed:true },
  { id:'gun-mayhem',       name:'Gun Mayhem 2',              category:'shooter',                   img:CGI('gun-mayhem-2'),                             url:'https://gunmayhemunblocked.github.io/2/',                         embed:true },
  { id:'funny-shooter-2',  name:'Funny Shooter 2',           category:'shooter',                   img:CGI('funny-shooter-2'),                          url:IFR+'funny-shooter-2-main',                                        embed:true },
  { id:'temple-of-boom',   name:'Temple of Boom',            category:'shooter',                   img:CGI('temple-of-boom'),                           url:IFR+'temple-of-boom-main',                                         embed:true },

  // ── IO Games ───────────────────────────────────────────────────────
  { id:'slither',          name:'Slither.io',                category:'io',         featured:true,  img:CGI('slither-io'),                               url:'https://slither.io',                                              embed:true },
  { id:'agar',             name:'Agar.io',                   category:'io',                        img:CGI('agar-io'),                                  url:'https://agar.io',                                                 embed:true },
  { id:'paper-io',         name:'Paper.io 2',                category:'io',                        img:CGI('paper-io-2'),                               url:'https://paper-io.com',                                            embed:true },
  { id:'diep',             name:'Diep.io',                   category:'io',                        img:CGI('diep-io'),                                  url:'https://diep.io',                                                 embed:true },
  { id:'bonk',             name:'Bonk.io',                   category:'io',                        img:CGI('bonk-io'),                                  url:'https://bonk.io',                                                 embed:true },
  { id:'skribbl',          name:'Skribbl.io',                category:'io',                        img:CGI('skribbl-io'),                               url:'https://skribbl.io',                                              embed:true },
  { id:'state-io',         name:'State.io',                  category:'io',                        img:CGI('state-io'),                                 url:'https://state.io',                                                embed:true },

  // ── Platformer ─────────────────────────────────────────────────────
  { id:'slope',            name:'Slope',                     category:'platformer', featured:true,  img:CGI('slope'),                                    url:IFR+'slope-main',                                                  embed:true },
  { id:'geometry-dash',    name:'Geometry Dash',             category:'platformer', featured:true,  img:CGI('geometry-dash-lite'),                       url:IFR+'geometry-dash-main',                                          embed:true },
  { id:'geometry-dash-lite',name:'Geometry Dash Lite',       category:'platformer',                img:CGI('geometry-dash-lite'),                       url:'https://geometrylite.github.io/embed/geometry-dash-lite',         embed:true },
  { id:'cluster-rush',     name:'Cluster Rush',              category:'platformer', featured:true,  img:CGI('cluster-rush'),                             url:'https://cluster-rush-games.github.io/embed/cluster-rush.html',   embed:true },
  { id:'ovo',              name:'OvO',                       category:'platformer',                img:CGI('ovo'),                                      url:IFR+'ovo-main',                                                    embed:true },
  { id:'stickman-hook',    name:'Stickman Hook',             category:'platformer',                img:CGI('stickman-hook'),                            url:IFR+'stickman-hook-main',                                          embed:true },
  { id:'dreadhead',        name:'Dreadhead Parkour',         category:'platformer',                img:CGI('dreadhead-parkour'),                        url:IFR+'dreadhead-parkour-main',                                      embed:true },
  { id:'red-ball-4',       name:'Red Ball 4',                category:'platformer',                img:CGI('red-ball-4'),                               url:IFR+'red-ball-4-main',                                             embed:true },
  { id:'moto-x3m',         name:'Moto X3M',                  category:'platformer',                img:CGI('moto-x3m'),                                 url:IFR+'moto-x3m-main',                                               embed:true },
  { id:'moto-x3m-2',       name:'Moto X3M 2',               category:'platformer',                img:CGI('moto-x3m-2'),                               url:'https://motox3munblocked.github.io/2/',                           embed:true },
  { id:'moto-x3m-pool',    name:'Moto X3M Pool Party',      category:'platformer',                img:CGI('moto-x3m-5-pool-party'),                    url:IFR+'moto-x3m-pool-party-main',                                    embed:true },
  { id:'moto-x3m-winter',  name:'Moto X3M Winter',          category:'platformer',                img:CGI('moto-x3m-winter'),                          url:IFR+'moto-x3m-winter-main',                                        embed:true },
  { id:'vex-5',            name:'Vex 5',                     category:'platformer',                img:CGI('vex-5'),                                    url:'https://vex5.io',                                                 embed:true },
  { id:'vex-6',            name:'Vex 6',                     category:'platformer',                img:CGI('vex-6'),                                    url:'https://vexunblocked.github.io/6/',                               embed:true },
  { id:'vex-8',            name:'Vex 8',                     category:'platformer',                img:CGI('vex-8'),                                    url:IFR+'vex-8-main',                                                  embed:true },
  { id:'fireboy-wg1',      name:'Fireboy & Watergirl',       category:'platformer',                img:CGI('fireboy-and-watergirl-in-the-forest-temple'),url:'https://www.fireboy-watergirl.com',                             embed:true },
  { id:'fireboy-wg6',      name:'Fireboy & Watergirl 6',     category:'platformer',                img:CGI('fireboy-and-watergirl-6-fairy-forest'),     url:'https://fireboyandwatergirlunblocked.github.io/6/',               embed:true },
  { id:'bob-robber-4',     name:'Bob the Robber 4',          category:'platformer',                img:CGI('bob-the-robber-4'),                         url:IFR+'bob-the-robber-4-main',                                       embed:true },
  { id:'fleeing-complex',  name:'Fleeing the Complex',       category:'platformer',                img:CGI('fleeing-the-complex'),                      url:'https://henrystickmanunblocked.github.io/fleeing-the-complex/',   embed:true },
  { id:'escaping-prison',  name:'Escaping the Prison',       category:'platformer',                img:CGI('escaping-the-prison'),                      url:'https://henrystickmanunblocked.github.io/escaping-the-prison/',   embed:true },
  { id:'getting-over-it',  name:'Getting Over It',           category:'platformer',                img:CGI('getting-over-it'),                          url:'https://ubg98.github.io/GettingOverIt/',                          embed:true },
  { id:'big-tower',        name:'Big Tower Tiny Square',     category:'platformer',                img:CGI('big-tower-tiny-square'),                    url:'https://bigtowertinysquare.github.io/',                           embed:true },
  { id:'burrito-bison',    name:'Burrito Bison',             category:'platformer',                img:CGI('burrito-bison'),                            url:'https://burritobison.github.io/',                                 embed:true },

  // ── Sports ─────────────────────────────────────────────────────────
  { id:'retro-bowl',       name:'Retro Bowl',                category:'sports',     featured:true,  img:CGI('retro-bowl'),                               url:IFR+'retro-bowl-main',                                             embed:true },
  { id:'basket-bros',      name:'Basket Bros',               category:'sports',                    img:CGI('basket-bros'),                              url:IFR+'basket-bros-main',                                            embed:true },
  { id:'volleyball-challenge',name:'Volleyball Challenge',   category:'sports',                    img:CGI('volleyball-challenge'),                     url:IFR+'volleyball-challenge-main',                                   embed:true },
  { id:'volley-random',    name:'Volley Random',             category:'sports',                    img:CGI('volley-random'),                            url:IFR+'volley-random-main',                                          embed:true },
  { id:'wrassling',        name:'Wrassling',                 category:'sports',                    img:CGI('wrassling'),                                url:IFR+'wrassling-main',                                              embed:true },
  { id:'a-small-worldcup', name:'A Small World Cup',         category:'sports',                    img:CGI('a-small-world-cup'),                        url:'https://unblockedgames66.gitlab.io/a-small-world-cup/',           embed:true },
  { id:'rocket-soccer',    name:'Rocket Soccer Derby',       category:'sports',                    img:CGI('rocket-soccer-derby'),                      url:'https://ubg77.github.io/edit/rocket-soccer-derby/',               embed:true },
  { id:'head-soccer',      name:'Head Soccer',               category:'sports',                    img:CGI('head-soccer-2023'),                         url:'https://ubg98.github.io/HeadSoccer2023/',                         embed:true },
  { id:'unicycle-hero',    name:'Unicycle Hero',             category:'sports',                    img:CGI('unicycle-hero'),                            url:IFR+'unicycle-hero-main',                                          embed:true },
  { id:'tag',              name:'Tag: Playground',           category:'sports',                    img:CGI('tag'),                                      url:IFR+'tag-main',                                                    embed:true },

  // ── Racing ─────────────────────────────────────────────────────────
  { id:'drift-hunters',    name:'Drift Hunters',             category:'racing',     featured:true,  img:CGI('drift-hunters'),                            url:IFR+'drift-hunters-main',                                          embed:true },
  { id:'poly-track',       name:'Poly Track',                category:'racing',     featured:true,  img:CGI('polytrack'),                                url:'https://polytrack.kubz.dev',                                      embed:true },
  { id:'snow-rider',       name:'Snow Rider 3D',             category:'racing',                    img:CGI('snow-rider-3d'),                            url:IFR+'snow-rider-3d-main',                                          embed:true },
  { id:'eggy-car',         name:'Eggy Car',                  category:'racing',                    img:CGI('eggy-car'),                                 url:IFR+'eggy-car-main',                                               embed:true },
  { id:'drift-boss',       name:'Drift Boss',                category:'racing',                    img:CGI('drift-boss'),                               url:IFR+'drift-boss-main',                                             embed:true },
  { id:'slope-tunnel',     name:'Slope Tunnel',              category:'racing',                    img:CGI('slope-tunnel'),                             url:IFR+'slope-tunnel-main',                                           embed:true },
  { id:'traffic-rider',    name:'Traffic Rider',             category:'racing',                    img:CGI('traffic-rider'),                            url:IFR+'traffic-rider-main',                                          embed:true },
  { id:'moto-road',        name:'Moto Road Rash 3D',         category:'racing',                    img:CGI('moto-road-rash-3d'),                        url:'https://ubg77.github.io/edit/motoroadrash3d/',                    embed:true },
  { id:'drive-mad',        name:'Drive Mad',                 category:'racing',                    img:CGI('drive-mad'),                                url:IFR+'drive-mad-main',                                              embed:true },
  { id:'highway-racer',    name:'Highway Racer 3D',          category:'racing',                    img:CGI('highway-racer-3d'),                         url:'https://ubg77.github.io/edit/highway-racer-3d/',                  embed:true },
  { id:'scrap-metal',      name:'Scrap Metal 3',             category:'racing',                    img:CGI('scrap-metal-3'),                            url:'https://unblockedgames66.gitlab.io/scrap-metal-3-infernal-trap/', embed:true },

  // ── Puzzle ─────────────────────────────────────────────────────────
  { id:'2048',             name:'2048',                      category:'puzzle',                    img:CGI('2048'),                                     url:'https://play2048.co',                                             embed:true },
  { id:'minesweeper',      name:'Minesweeper',               category:'puzzle',                    img:CGI('minesweeper'),                              url:'https://minesweeper.online',                                      embed:true },
  { id:'wordle',           name:'Wordle Unlimited',          category:'puzzle',                    img:CGI('wordle-unlimited'),                         url:'https://wordleunlimited.org',                                     embed:true },
  { id:'level-devil',      name:'Level Devil',               category:'puzzle',                    img:CGI('level-devil'),                              url:IFR+'level-devil-main',                                            embed:true },
  { id:'dance-fire-ice',   name:'A Dance of Fire & Ice',     category:'puzzle',     featured:true,  img:CGI('a-dance-of-fire-and-ice'),                  url:'https://unblockedgames66.gitlab.io/a-dance-of-fire-and-ice/',    embed:true },
  { id:'short-life',       name:'Short Life',                category:'puzzle',                    img:CGI('short-life'),                               url:IFR+'short-life-main',                                             embed:true },
  { id:'tank-trouble',     name:'Tank Trouble 2',            category:'puzzle',                    img:CGI('tank-trouble-2'),                           url:'https://unblockedgames66.gitlab.io/tank-trouble-2/',             embed:true },
  { id:'there-is-no-game', name:'There Is No Game',          category:'puzzle',                    img:CGI('there-is-no-game'),                         url:'https://23azostore.github.io/s/there-is-no-game/',               embed:true },
  { id:'blumgi-slime',     name:'Blumgi Slime',              category:'puzzle',                    img:CGI('blumgi-slime'),                             url:IFR+'blumgi-slime-main',                                           embed:true },

  // ── Arcade ─────────────────────────────────────────────────────────
  { id:'cookie-clicker',   name:'Cookie Clicker',            category:'arcade',     featured:true,  img:CGI('cookie-clicker'),                           url:IFR+'cookie-clicker-main',                                         embed:true },
  { id:'bitlife',          name:'BitLife',                   category:'arcade',     featured:true,  img:CGI('bitlife'),                                  url:IFR+'bitlife-main',                                                embed:true },
  { id:'super-mario-64',   name:'Super Mario 64',            category:'arcade',     featured:true,  img:CGI('super-mario-64'),                           url:'https://unblockedgames66.gitlab.io/super-mario-64/',             embed:true },
  { id:'pac-man',          name:'Pac-Man',                   category:'arcade',                    img:CGI('pacman'),                                   url:'https://www.google.com/logos/2010/pacman10-i.html',               embed:true },
  { id:'tetris',           name:'Tetris',                    category:'arcade',                    img:CGI('tetris'),                                   url:'https://jstris.jezevec10.com',                                    embed:true },
  { id:'snake',            name:'Snake',                     category:'arcade',                    img:CGI('snake'),                                    url:'https://playsnake.org',                                           embed:true },
  { id:'flappy-bird',      name:'Flappy Bird',               category:'arcade',                    img:CGI('flappy-bird'),                              url:IFR+'flappy-bird-main',                                            embed:true },
  { id:'dino-game',        name:'Dino Game',                 category:'arcade',                    img:CGI('chrome-dinosaur'),                          url:'https://chromedino.com',                                          embed:true },
  { id:'tunnel-rush',      name:'Tunnel Rush',               category:'arcade',                    img:CGI('tunnel-rush'),                              url:IFR+'tunnel-rush-main',                                            embed:true },
  { id:'8-ball-pool',      name:'8 Ball Pool',               category:'arcade',                    img:CGI('8-ball-pool'),                              url:IFR+'8-ball-pool-main',                                            embed:true },
  { id:'solar-smash',      name:'Solar Smash',               category:'arcade',     featured:true,  img:CGI('solar-smash'),                              url:'https://solar-smash.com',                                         embed:true },
  { id:'tiny-fishing',     name:'Tiny Fishing',              category:'arcade',                    img:CGI('tiny-fishing'),                             url:'https://tinyfishing.io',                                          embed:true },
  { id:'bloons-td-2',      name:'Bloons TD 2',               category:'arcade',                    img:CGI('bloons-td-2'),                              url:'https://unblockedgames66.gitlab.io/bloons-td-2/',                 embed:true },
  { id:'snail-bob',        name:'Snail Bob 2',               category:'arcade',                    img:CGI('snail-bob-2'),                              url:'https://snailbobunblocked.github.io/2/',                          embed:true },
  { id:'10-min-dawn',      name:'10 Minutes Till Dawn',      category:'arcade',                    img:CGI('10-minutes-till-dawn'),                     url:'https://unblockedgames66.gitlab.io/10-minutes-till-dawn/',       embed:true },
  { id:'bubble-shooter',   name:'Bubble Shooter',            category:'arcade',                    img:CGI('bubble-shooter'),                           url:IFR+'bubble-shooter-main',                                         embed:true },
  { id:'happy-wheels',     name:'Happy Wheels',              category:'arcade',                    img:CGI('happy-wheels'),                             url:'https://happywheels.ubg235.com/',                                 embed:true },
  { id:'rise-neon',        name:'Rise of Neon Square',       category:'arcade',                    img:CGI('rise-of-neon-square'),                      url:'https://unblockedgames66.gitlab.io/rise-of-neon-square/',        embed:true },

  // ── Strategy ───────────────────────────────────────────────────────
  { id:'chess',            name:'Chess',                     category:'strategy',                  img:CGI('chess'),                                    url:'https://lichess.org',                                             embed:true },
  { id:'slime-rush-td',    name:'Slime Rush TD',             category:'strategy',                  img:CGI('slime-rush-td'),                            url:'https://66games.minecraftapk.com/slime-rush-td/',                 embed:true },
  { id:'riddle-school',    name:'Riddle School 5',           category:'strategy',                  img:CGI('riddle-school-5'),                          url:'https://66games.minecraftapk.com/riddle-school-5/',               embed:true },

  // ── Runner ─────────────────────────────────────────────────────────
  { id:'temple-run-2',     name:'Temple Run 2',              category:'runner',     featured:true,  img:CGI('temple-run-2'),                             url:'https://rebemanae.github.io/temple-run-2-jungle-fall/',           embed:true },
  { id:'subway-surfers',   name:'Subway Surfers',            category:'runner',     featured:true,  img:CGI('subway-surfers'),                           url:IFR+'subway-surfers-main',                                         embed:true },

  // ── Rhythm ─────────────────────────────────────────────────────────
  { id:'friday-night-funkin',name:'Friday Night Funkin',    category:'rhythm',     featured:true,  img:CGI('friday-night-funkin'),                       url:'https://funkin.me',                                               embed:true },
  { id:'sprunki',          name:'Sprunki',                   category:'rhythm',     featured:true,  img:CGI('sprunki'),                                  url:'https://sprunki.io',                                              embed:true },

  // ── Horror ─────────────────────────────────────────────────────────
  { id:'fnaf-1',           name:"Five Nights at Freddy's",  category:'horror',     featured:true,  img:CGI('five-nights-at-freddys'),                   url:IFR+'five-nights-at-freddys-main',                                 embed:true },
  { id:'fnaf-2',           name:"Five Nights at Freddy's 2",category:'horror',                    img:CGI('five-nights-at-freddys-2'),                 url:'https://www.fnaf2unblocked.com/',                                 embed:true },
  { id:'fnaf-3',           name:"Five Nights at Freddy's 3", category:'horror',                    img:CGI('five-nights-at-freddys-3'),                 url:'https://www.fnaf3unblocked.com/',                                 embed:true },

  // ── Multiplayer ────────────────────────────────────────────────────
  { id:'minecraft',        name:'1.12.2 Eaglercraft',        category:'multiplayer',featured:true, img:CGI('minecraft-classic'),                        url:'/minecraft.html',                                                 embed:true },
  { id:'gartic-phone',     name:'Gartic Phone',              category:'multiplayer',               img:CGI('gartic-phone'),                             url:'https://garticphone.com',                                         embed:true },
  { id:'skribbl',          name:'Skribbl.io',                category:'multiplayer',               img:CGI('skribbl-io'),                               url:'https://skribbl.io',                                              embed:true },
];

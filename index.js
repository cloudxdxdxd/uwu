// ============================================================================
// UWU Collective — Vanilla JS Application (index.js)
// Edit member portrait `src` URLs and Discord `discordId` snowflakes below.
// ============================================================================

const BACKGROUND_MUSIC = {
  videoId: 'b3yUwewEY3A',
  startSeconds: 30,
  startVolume: 45,
};

const INTRO_IMAGE_URL = '/src/assets/images/hello_kitty_emblem_1795347637635.jpg';

const ROSTER = [
  {
    id: 'com',
    name: 'Com',
    plateCode: 'PLATE 01',
    discipline: 'visual',
    disciplineLabel: 'Harmless',
    location: 'nz',
    joinedYear: '2014',
    motif: 'mob',
    src: 'https://media.discordapp.net/attachments/1572240532741038224/1574080948453244968/c80c53d2278f746a91ed39d91205528e.jpg?ex=6b04589f&is=6b03071f&hm=51ecddb2a9ac3419afe1cc392735b20e2e55e19b995a313a56889e72ad096a22&format=webp',
    discordId: '1561715349911507046',
    statement: 'i love lavi mwa',
    medium: 'Silver-gelatin lithograph',
    handle: '@comlovelavi ',
    sound: {
      trackTitle: 'Hollow Ground Study I',
      durationSec: 194,
      baseHz: 55,
      harmonicRatio: 1.5,
      lfoRate: 0.14,
      texture: 'drone',
    },
    defaultAdjustments: {
      contrast: 1.35,
      grain: 0.55,
      vignette: 0.72,
      inverted: false,
    },
  },
  {
    id: 'conv',
    name: 'conv',
    plateCode: 'PLATE 02',
    discipline: 'audio',
    disciplineLabel: 'Audio & Tape',
    location: 'amsterdam',
    joinedYear: '2021',
    motif: 'aze',
    src: 'https://i.pinimg.com/736x/df/50/8d/df508d6b9bbee8ff8a9f3f6b0ded9740.jpg',
    discordId: '1522722271028842637',
    statement: 'drain my wallet',
    medium: 'Chiaroscuro film still',
    handle: '@aze.tape',
    sound: {
      trackTitle: 'Sodium Lamp Corridor',
      durationSec: 228,
      baseHz: 61.74,
      harmonicRatio: 1.414,
      lfoRate: 0.22,
      texture: 'hiss',
    },
    defaultAdjustments: {
      contrast: 1.45,
      grain: 0.42,
      vignette: 0.65,
      inverted: false,
    },
  },
  {
    id: 'xeire',
    name: 'xeire',
    plateCode: 'PLATE 03',
    discipline: 'archival',
    disciplineLabel: 'Wet-Plate & Archival',
    location: 'Glasgow',
    joinedYear: '2022',
    motif: 'mourn',
    src: 'https://i.pinimg.com/736x/59/38/f3/5938f346117970fec938330cb786deab.jpg',
    discordId: '1455329615986823424',
    statement: 'harmless idiot',
    medium: 'Wet-plate collodion',
    handle: '@mourn.collodion',
    sound: {
      trackTitle: 'Glass Plate Drift',
      durationSec: 261,
      baseHz: 49,
      harmonicRatio: 1.333,
      lfoRate: 0.1,
      texture: 'metallic',
    },
    defaultAdjustments: {
      contrast: 1.25,
      grain: 0.6,
      vignette: 0.78,
      inverted: false,
    },
  },
  {
    id: 'kkace',
    name: 'kkace',
    plateCode: 'PLATE 04',
    discipline: 'visual',
    disciplineLabel: 'Double Exposure',
    location: 'Montreal',
    joinedYear: '2022',
    motif: 'jah',
    src: 'https://i.pinimg.com/736x/80/29/7b/80297b38394e1659583244d3011fab40.jpg',
    discordId: '1256819934416081039',
    statement: 'too evil for good girl ',
    medium: 'Polaroid 665 negative',
    handle: '@jah.665',
    sound: {
      trackTitle: 'Winter Branches Over Exposed',
      durationSec: 176,
      baseHz: 65.41,
      harmonicRatio: 1.2,
      lfoRate: 0.18,
      texture: 'drone',
    },
    defaultAdjustments: {
      contrast: 1.3,
      grain: 0.5,
      vignette: 0.58,
      inverted: false,
    },
  },
  {
    id: 'bull',
    name: 'bull',
    plateCode: 'PLATE 05',
    discipline: 'audio',
    disciplineLabel: 'Sub-Bass & Field',
    location: 'Detroit',
    joinedYear: '2022',
    motif: 'corbin',
    src: 'https://media.discordapp.net/attachments/1572240532741038224/1574074725678719157/88AF3700-2E6C-41D8-AFED-C1335D422A1C.png?ex=6b0452d3&is=6b030153&hm=efb31664b35a9769ec5681fa0f5ef9e91fe087321f25de699f71fde9aaae27ce&format=webp&quality=lossless',
    discordId: '1301759229937455144',
    statement: 'too evil for u',
    medium: 'Low-key gelatin print',
    handle: '@corbin.sub',
    sound: {
      trackTitle: 'Basement Organ IV',
      durationSec: 304,
      baseHz: 43.65,
      harmonicRatio: 1.5,
      lfoRate: 0.08,
      texture: 'pulse',
    },
    defaultAdjustments: {
      contrast: 1.4,
      grain: 0.48,
      vignette: 0.85,
      inverted: false,
    },
  },
  {
    id: 'uzi',
    name: 'uzi',
    plateCode: 'PLATE 06',
    discipline: 'visual',
    disciplineLabel: 'Directing & Stills',
    location: 'Tokyo',
    joinedYear: '2023',
    motif: 'raizo',
    src: 'https://i.pinimg.com/736x/aa/3e/4f/aa3e4ff2ee1ecf77e175ec40dc741133.jpg',
    discordId: '1465944191371837453',
    statement: 'ill blast u with my shotgun',
    medium: '16mm pushed reversal',
    handle: '@raizo.16mm',
    sound: {
      trackTitle: 'Four Stops Pushed',
      durationSec: 212,
      baseHz: 73.42,
      harmonicRatio: 1.25,
      lfoRate: 0.25,
      texture: 'hiss',
    },
    defaultAdjustments: {
      contrast: 1.38,
      grain: 0.62,
      vignette: 0.62,
      inverted: false,
    },
  },
  {
    id: 'seth',
    name: 'seth',
    plateCode: 'PLATE 07',
    discipline: 'archival',
    disciplineLabel: 'Print & Sound',
    location: 'Antwerp',
    joinedYear: '2024',
    motif: 'quin',
    src: 'https://i.pinimg.com/736x/6c/be/53/6cbe532ee9d6f93786c65154c9695a4f.jpg',
    discordId: '1508756650469625956',
    statement: 'trendsetter',
    medium: 'Contact sheet projection',
    handle: '@quin.contact',
    sound: {
      trackTitle: 'Shutter Blind Nocturne',
      durationSec: 245,
      baseHz: 51.91,
      harmonicRatio: 1.498,
      lfoRate: 0.16,
      texture: 'metallic',
    },
    defaultAdjustments: {
      contrast: 1.42,
      grain: 0.52,
      vignette: 0.74,
      inverted: false,
    },
  },
  {
    id: 'lavi',
    name: 'lavi',
    plateCode: 'PLATE 08',
    discipline: 'archival',
    disciplineLabel: 'Cold Storage & Tape',
    location: 'nz',
    joinedYear: '2025',
    motif: 'lavi',
    src: 'https://media.discordapp.net/attachments/1572240532741038224/1574022267418054717/IMG_3190.jpg?ex=6b0421f8&is=6b02d078&hm=2811da0ce5551a1526ec0b5b8a7b81a31af036f74e1d7ea89e3fc854fd13ffff&format=webp&width=1024&height=1024',
    discordId: '1458715644379009135',
    statement: 'i love com',
    medium: 'Silver-halide contact print',
    handle: '@lavilovecom ',
    sound: {
      trackTitle: 'Vault Lock Study VIII',
      durationSec: 232,
      baseHz: 58.27,
      harmonicRatio: 1.414,
      lfoRate: 0.13,
      texture: 'drone',
    },
    defaultAdjustments: {
      contrast: 1.38,
      grain: 0.54,
      vignette: 0.76,
      inverted: false,
    },
  },
  {
    id: 'xea',
    name: 'xea',
    plateCode: 'PLATE 09',
    discipline: 'visual',
    disciplineLabel: 'Ribbon & Stills',
    location: 'Seoul',
    joinedYear: '2025',
    motif: 'xea',
    src: 'https://media.discordapp.net/attachments/1572240532741038224/1574064867474931733/IMG_5231.jpg?ex=6b0449a5&is=6b02f825&hm=e24eeaf41ef0fefeecb28de92cc6d7b49b6f5d10130b856aee8f9b189b335f78&format=webp',
    discordId: '937952428526018590',
    statement: 'no war, no fun xx',
    medium: 'Pastel instant film',
    handle: '@mimi.ribbon',
    sound: {
      trackTitle: 'Strawberry Milk Study IX',
      durationSec: 218,
      baseHz: 69.3,
      harmonicRatio: 1.5,
      lfoRate: 0.15,
      texture: 'drone',
    },
    defaultAdjustments: {
      contrast: 1.32,
      grain: 0.45,
      vignette: 0.68,
      inverted: false,
    },
  },
  {
    id: 'esther',
    name: 'esther',
    plateCode: 'PLATE 10',
    discipline: 'audio',
    disciplineLabel: 'Tape & Chimes',
    location: 'Paris',
    joinedYear: '2026',
    motif: 'esther',
    src: 'https://media.discordapp.net/attachments/1572240532741038224/1574063483539034192/19ffc4145fa2919fae2b09563492d387.jpg?ex=6b04485b&is=6b02f6db&hm=83c51c207889f4d408ebce2208dd92f9b37c76de14e0305f5e94b8ccd9cbe7b6&format=webp',
    discordId: '',
    statement: 'di porke me regla, no casta amigo 😭',
    medium: 'Pearl cassette loop',
    handle: '@esther',
    sound: {
      trackTitle: 'Porcelain Bow Nocturne X',
      durationSec: 204,
      baseHz: 65.41,
      harmonicRatio: 1.333,
      lfoRate: 0.19,
      texture: 'metallic',
    },
    defaultAdjustments: {
      contrast: 1.34,
      grain: 0.48,
      vignette: 0.7,
      inverted: false,
    },
  },
  {
    id: 'koa',
    name: 'koa',
    plateCode: 'PLATE 11',
    discipline: 'visual',
    disciplineLabel: 'Ribbon & Stills',
    location: 'Manila',
    joinedYear: '2026',
    motif: 'kaide',
    src: 'https://media.discordapp.net/attachments/1572240532741038224/1574084644746559670/IMG_3272.jpg?ex=6b045c10&is=6b030a90&hm=5179c7dfa6ff9913c03f39546de5977a135712072e3672a7a309b05a08b66b63&format=webp',
    discordId: '1382399245054906468',
    statement: 'i love solo',
    medium: 'i love solo',
    handle: '@koa',
    sound: {
      trackTitle: 'Honey Ribbon Study XI',
      durationSec: 198,
      baseHz: 77.78,
      harmonicRatio: 1.5,
      lfoRate: 0.14,
      texture: 'drone',
    },
    defaultAdjustments: {
      contrast: 1.32,
      grain: 0.46,
      vignette: 0.68,
      inverted: false,
    },
  },
  {
    id: 'kaide',
    name: 'kaide',
    plateCode: 'PLATE 12',
    discipline: 'audio',
    disciplineLabel: 'Music Box & Tape',
    location: 'Osaka',
    joinedYear: '2026',
    motif: 'kaide',
    src: 'https://media.discordapp.net/attachments/1572240532741038224/1574069622964092959/IMG_7453.jpg?ex=6b044e12&is=6b02fc92&hm=8fbc49cb9495eac151d619452c57fd5163e4cc513b6d8a37cfec952f999afa7e&format=webp&width=287&height=384',
    discordId: '1518908341101920377',
    statement: 'kaide love asawa alex',
    medium: 'MiniDisc ribbon loop',
    handle: '@kaide',
    sound: {
      trackTitle: 'Midnight Chime Box XII',
      durationSec: 215,
      baseHz: 82.41,
      harmonicRatio: 1.333,
      lfoRate: 0.2,
      texture: 'hiss',
    },
    defaultAdjustments: {
      contrast: 1.34,
      grain: 0.44,
      vignette: 0.66,
      inverted: false,
    },
  },
  {
    id: 'alex',
    name: 'alex',
    plateCode: 'PLATE 13',
    discipline: 'archival',
    disciplineLabel: 'Keepsake & Print',
    location: 'Taipei',
    joinedYear: '2026',
    motif: 'alex',
    src: 'https://media.discordapp.net/attachments/1572240532741038224/1574070459329421332/63126f734164723471ad252cc6abba10.jpg?ex=6b044eda&is=6b02fd5a&hm=aa1755a8895e9d0a1c847de0deea4b234fb8a28ac73b3ac115ed222a81e46fea&format=webp',
    discordId: '1537805000821047367',
    statement: 'saving every cute receipt',
    medium: 'Frosted polaroid print',
    handle: '@alex',
    sound: {
      trackTitle: 'Velvet Diary Reel XIII',
      durationSec: 234,
      baseHz: 69.3,
      harmonicRatio: 1.25,
      lfoRate: 0.12,
      texture: 'metallic',
    },
    defaultAdjustments: {
      contrast: 1.3,
      grain: 0.5,
      vignette: 0.72,
      inverted: false,
    },
  },
  {
    id: 'solo',
    name: 'solo',
    plateCode: 'PLATE 14',
    discipline: 'visual',
    disciplineLabel: 'Glitter & Film',
    location: 'Busan',
    joinedYear: '2026',
    motif: 'solo',
    src: 'https://media.discordapp.net/attachments/1572240532741038224/1574081726890643577/IMG_3270.jpg?ex=6b045958&is=6b0307d8&hm=5b80f4515c95b02d9690db65d50d35515c5df585519c750a9e1b23dacb53f17c&format=webp&width=289&height=384',
    discordId: '1222176925376708719',
    statement: 'i love koa',
    medium: 'Sparkle contact sheet',
    handle: '@solo',
    sound: {
      trackTitle: 'Pastel Bow Waltz XIV',
      durationSec: 206,
      baseHz: 87.31,
      harmonicRatio: 1.5,
      lfoRate: 0.17,
      texture: 'pulse',
    },
    defaultAdjustments: {
      contrast: 1.36,
      grain: 0.48,
      vignette: 0.7,
      inverted: false,
    },
  },
  {
    id: 'end',
    name: 'end',
    plateCode: 'PLATE 15',
    discipline: 'audio',
    disciplineLabel: 'Tape & Bells',
    location: 'Manila',
    joinedYear: '2026',
    motif: 'end',
    src: 'https://media.discordapp.net/attachments/1572240532741038224/1574066117482127440/7c253cc21999735aacdfe5e9faee0fe5.jpg?ex=6b044acf&is=6b02f94f&hm=5e3c8dd24b3ab95451abc003d1c0c84cfad77e329cb89daa73f93e4e76728743&format=webp',
    discordId: '',
    statement: 'prettylies, uwu, sntz, mysb',
    medium: 'Strawberry film negative',
    handle: '@miel.ribbon',
    sound: {
      trackTitle: 'Honey Ribbon Study XV',
      durationSec: 202,
      baseHz: 92.5,
      harmonicRatio: 1.5,
      lfoRate: 0.15,
      texture: 'drone',
    },
    defaultAdjustments: {
      contrast: 1.32,
      grain: 0.46,
      vignette: 0.68,
      inverted: false,
    },
  },
  {
    id: 'slimey',
    name: 'slimey',
    plateCode: 'PLATE 16',
    discipline: 'archival',
    disciplineLabel: 'Keepsake & Chimes',
    location: 'Osaka',
    joinedYear: '2026',
    motif: 'nori',
    src: 'https://media.discordapp.net/attachments/1572240532741038224/1574068581627465848/b05bfe6a5e82ecad3e8107ec1fab13e9.png?ex=6b044d1a&is=6b02fb9a&hm=9e5ba90b0fe631f06dcea12e0b514b6104bc7ab4f5ecad529d3afaf99eb5e7a2&format=webp&quality=lossless&width=384&height=384',
    discordId: '1538978329082863796',
    statement: ' sitting pretty sakin trono habang ka call bf nyang insecure',
    medium: 'Pearl cassette loop',
    handle: '@nori.chime',
    sound: {
      trackTitle: 'Midnight Chime Box XVI',
      durationSec: 218,
      baseHz: 98.0,
      harmonicRatio: 1.333,
      lfoRate: 0.19,
      texture: 'metallic',
    },
    defaultAdjustments: {
      contrast: 1.34,
      grain: 0.44,
      vignette: 0.66,
      inverted: false,
    },
  },
  {
    id: 'moss',
    name: 'moss',
    plateCode: 'PLATE 17',
    discipline: 'visual',
    disciplineLabel: 'Keepsake & Film',
    location: 'Taipei',
    joinedYear: '2026',
    motif: 'moss',
    src: 'https://media.discordapp.net/attachments/1572240532741038224/1574073448307761322/046EC6F7-C6A7-44B0-8999-524004034A95.jpg?ex=6b0451a2&is=6b030022&hm=31ec13512315ec6531272978177180cc9740d68ae83551ccf984ce091781f166&format=webp',
    discordId: '1457031373167657224',
    statement: 'rise from the dead son',
    medium: 'Frosted polaroid print',
    handle: '@cocoa.keepsake',
    sound: {
      trackTitle: 'Velvet Diary Reel XVII',
      durationSec: 224,
      baseHz: 103.83,
      harmonicRatio: 1.25,
      lfoRate: 0.16,
      texture: 'pulse',
    },
    defaultAdjustments: {
      contrast: 1.3,
      grain: 0.5,
      vignette: 0.72,
      inverted: false,
    },
  },
  {
    id: 'jami',
    name: 'jami',
    plateCode: 'PLATE 18',
    discipline: 'audio',
    disciplineLabel: 'Glitter & Chimes',
    location: 'Busan',
    joinedYear: '2026',
    motif: 'jami',
    src: '',
    discordId: '',
    statement: 'matcha & strawberry bows',
    medium: 'Sparkle contact sheet',
    handle: '@jami',
    sound: {
      trackTitle: 'Pastel Bow Waltz XVIII',
      durationSec: 210,
      baseHz: 110.0,
      harmonicRatio: 1.5,
      lfoRate: 0.21,
      texture: 'hiss',
    },
    defaultAdjustments: {
      contrast: 1.36,
      grain: 0.48,
      vignette: 0.7,
      inverted: false,
    },
  },
];

const HALL_OF_FAME_IDS = ['kaide', 'koa', 'lavi', 'com'];

const DISCORD_STATUS_META = {
  online: {
    label: 'Online',
    shortLabel: 'Online',
    dotClass: 'status-dot--online',
    textClass: 'status-text--online',
  },
  idle: {
    label: 'Idle',
    shortLabel: 'Idle',
    dotClass: 'status-dot--idle',
    textClass: 'status-text--idle',
  },
  dnd: {
    label: 'Do Not Disturb',
    shortLabel: 'DND',
    dotClass: 'status-dot--dnd',
    textClass: 'status-text--dnd',
  },
  offline: {
    label: 'Offline',
    shortLabel: 'Offline',
    dotClass: 'status-dot--offline',
    textClass: 'status-text--offline',
  },
};

const ICONS = {
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-xs icon-berry" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
  pause: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-xs icon-berry" aria-hidden="true"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-xs icon-muted" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-xs icon-berry" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',
  music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-md icon-emerald" aria-hidden="true"><circle cx="8" cy="18" r="4"/><path d="M12 18V2l7 4"/></svg>',
  gamepad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-md" aria-hidden="true"><line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/><line x1="15" y1="12" x2="15.01" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg>',
  bow: '<svg viewBox="0 0 28 18" width="14" height="10" aria-hidden="true"><path d="M7,4 C3,1 1,6 3,12 C5,16 10,14 12,11 L12,7 C10,4 8,3 7,4 Z" fill="currentColor" /><path d="M21,4 C25,1 27,6 25,12 C23,16 18,14 16,11 L16,7 C18,4 20,3 21,4 Z" fill="currentColor" /><circle cx="14" cy="9" r="3.2" fill="#ff94b8" stroke="currentColor" stroke-width="1.2" /></svg>',
  cardRibbon: '<svg viewBox="0 0 64 58" class="card-ribbon-svg" aria-hidden="true"><g stroke="#4a1829" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M26,24 L14,48 L22,44 L27,51 L31,26 Z" fill="#c9144a" /><path d="M38,24 L50,48 L42,44 L37,51 L33,26 Z" fill="#e61e5a" /><path d="M13,10 C5,3 2,15 6,25 C10,34 21,30 27,23 L27,15 C22,10 17,7 13,10 Z" fill="#e61e5a" /><path d="M51,10 C59,3 62,15 58,25 C54,34 43,30 37,23 L37,15 C42,10 47,7 51,10 Z" fill="#e61e5a" /><ellipse cx="15" cy="18" rx="4.5" ry="3" fill="#ff8ab3" stroke="none" opacity="0.72" /><ellipse cx="49" cy="18" rx="4.5" ry="3" fill="#ff8ab3" stroke="none" opacity="0.72" /><circle cx="32" cy="19" r="7.5" fill="#ff427e" /><circle cx="30" cy="16.8" r="2" fill="#ffe6f0" stroke="none" /></g></svg>',
};

// ============================================================================
// Web Audio Synthesizer Engine
// ============================================================================

class DarkroomAudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.activeTrackNodes = [];
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.35;
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      void this.ctx.resume();
    }
    return this.ctx;
  }

  setMasterVolume(vol) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(
        Math.max(0, Math.min(1, vol)),
        this.ctx.currentTime,
        0.08
      );
    }
  }

  playMemberTrack(sound) {
    this.stopMemberTrack();
    const ctx = this.ensureContext();
    if (!this.masterGain) return;

    const now = ctx.currentTime;
    const trackGain = ctx.createGain();
    trackGain.gain.setValueAtTime(0.0001, now);
    trackGain.gain.exponentialRampToValueAtTime(0.42, now + 0.6);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(sound.texture === 'metallic' ? 880 : 420, now);
    filter.Q.value = sound.texture === 'metallic' ? 4.2 : 1.5;

    const osc1 = ctx.createOscillator();
    osc1.type = sound.texture === 'pulse' ? 'sawtooth' : 'triangle';
    osc1.frequency.setValueAtTime(sound.baseHz, now);

    const osc2 = ctx.createOscillator();
    osc2.type = sound.texture === 'metallic' ? 'sawtooth' : 'sine';
    osc2.frequency.setValueAtTime(sound.baseHz * sound.harmonicRatio, now);
    osc2.detune.setValueAtTime(-7, now);

    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(sound.lfoRate, now);

    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(180, now);
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    const osc1Gain = ctx.createGain();
    osc1Gain.gain.value = 0.55;
    const osc2Gain = ctx.createGain();
    osc2Gain.gain.value = 0.35;

    osc1.connect(osc1Gain);
    osc2.connect(osc2Gain);
    osc1Gain.connect(filter);
    osc2Gain.connect(filter);

    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * (sound.texture === 'hiss' ? 0.16 : 0.06);
    }
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.value = 1400;
    noiseFilter.Q.value = 0.8;

    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.25;

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(trackGain);

    filter.connect(trackGain);
    trackGain.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    lfo.start(now);
    noise.start(now);

    this.activeTrackNodes = [
      osc1,
      osc2,
      lfo,
      noise,
      osc1Gain,
      osc2Gain,
      lfoGain,
      filter,
      noiseFilter,
      noiseGain,
      trackGain,
    ];
  }

  stopMemberTrack() {
    this.activeTrackNodes.forEach((node) => {
      try {
        if ('stop' in node && typeof node.stop === 'function') {
          node.stop();
        }
        node.disconnect();
      } catch {
        // Ignore already stopped nodes
      }
    });
    this.activeTrackNodes = [];
  }
}

const audioEngine = new DarkroomAudioEngine();

// ============================================================================
// Procedural Hello Kitty Pastel Keepsake Fallback Canvas
// ============================================================================

function createRng(seedStr) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < seedStr.length; i++) {
    h ^= seedStr.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h += 0x6d2b79f5;
    let t = Math.imul(h ^ (h >>> 15), 1 | h);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function drawPastelRibbonBow(ctx, cx, cy, scale, fillColor) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);
  ctx.fillStyle = fillColor;
  ctx.strokeStyle = '#4a1829';
  ctx.lineWidth = 3;
  ctx.lineJoin = 'round';

  // Left loop
  ctx.beginPath();
  ctx.moveTo(-8, -8);
  ctx.bezierCurveTo(-36, -24, -42, -4, -36, 12);
  ctx.bezierCurveTo(-30, 24, -14, 18, -8, 8);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Right loop
  ctx.beginPath();
  ctx.moveTo(8, -8);
  ctx.bezierCurveTo(36, -24, 42, -4, 36, 12);
  ctx.bezierCurveTo(30, 24, 14, 18, 8, 8);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Center knot
  ctx.fillStyle = '#ff548e';
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function createPastelKittyFallbackCanvas(member, size) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  canvas.className = 'plate-media';
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', member.name);

  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;

  const s = size;
  const rng = createRng(`${member.motif}-${member.id}`);

  // Soft pastel gingham backdrop
  ctx.fillStyle = '#fff5f9';
  ctx.fillRect(0, 0, s, s);

  const cell = Math.max(18, Math.round(s / 10));
  ctx.fillStyle = 'rgba(255, 186, 212, 0.34)';
  for (let x = 0; x < s; x += cell * 2) {
    ctx.fillRect(x, 0, cell, s);
  }
  for (let y = 0; y < s; y += cell * 2) {
    ctx.fillRect(0, y, s, cell);
  }

  // Soft porcelain radial glow
  const glow = ctx.createRadialGradient(s * 0.5, s * 0.5, s * 0.08, s * 0.5, s * 0.5, s * 0.52);
  glow.addColorStop(0, 'rgba(255, 255, 255, 0.92)');
  glow.addColorStop(0.7, 'rgba(255, 240, 246, 0.45)');
  glow.addColorStop(1, 'rgba(255, 214, 230, 0.35)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, s, s);

  // Minimalist Kitty silhouette
  ctx.save();
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#4a1829';
  ctx.lineWidth = Math.max(2.5, s * 0.012);
  ctx.lineJoin = 'round';

  // Left & Right ears + rounded face
  ctx.beginPath();
  ctx.moveTo(s * 0.28, s * 0.41);
  ctx.quadraticCurveTo(s * 0.25, s * 0.23, s * 0.38, s * 0.33);
  ctx.quadraticCurveTo(s * 0.5, s * 0.3, s * 0.62, s * 0.33);
  ctx.quadraticCurveTo(s * 0.75, s * 0.23, s * 0.72, s * 0.41);
  ctx.bezierCurveTo(s * 0.81, s * 0.49, s * 0.8, s * 0.72, s * 0.5, s * 0.72);
  ctx.bezierCurveTo(s * 0.2, s * 0.72, s * 0.19, s * 0.49, s * 0.28, s * 0.41);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Eyes
  ctx.fillStyle = '#4a1829';
  ctx.beginPath();
  ctx.ellipse(s * 0.39, s * 0.53, s * 0.02, s * 0.028, 0, 0, Math.PI * 2);
  ctx.ellipse(s * 0.61, s * 0.53, s * 0.02, s * 0.028, 0, 0, Math.PI * 2);
  ctx.fill();

  // Rosy blush cheeks
  ctx.fillStyle = 'rgba(255, 134, 178, 0.5)';
  ctx.beginPath();
  ctx.ellipse(s * 0.33, s * 0.59, s * 0.04, s * 0.022, 0, 0, Math.PI * 2);
  ctx.ellipse(s * 0.67, s * 0.59, s * 0.04, s * 0.022, 0, 0, Math.PI * 2);
  ctx.fill();

  // Golden nose
  ctx.fillStyle = '#f5b82e';
  ctx.strokeStyle = '#4a1829';
  ctx.lineWidth = Math.max(1.5, s * 0.008);
  ctx.beginPath();
  ctx.ellipse(s * 0.5, s * 0.57, s * 0.024, s * 0.017, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Whiskers
  ctx.strokeStyle = '#4a1829';
  ctx.lineWidth = Math.max(1.8, s * 0.009);
  ctx.lineCap = 'round';
  const whiskers = [
    [0.16, 0.5, 0.26, 0.52],
    [0.15, 0.57, 0.26, 0.57],
    [0.17, 0.64, 0.27, 0.62],
    [0.84, 0.5, 0.74, 0.52],
    [0.85, 0.57, 0.74, 0.57],
    [0.83, 0.64, 0.73, 0.62],
  ];
  whiskers.forEach(([x1, y1, x2, y2]) => {
    ctx.beginPath();
    ctx.moveTo(s * x1, s * y1);
    ctx.lineTo(s * x2, s * y2);
    ctx.stroke();
  });
  ctx.restore();

  // Signature bow on right ear
  ctx.save();
  ctx.translate(s * 0.67, s * 0.34);
  ctx.rotate(0.28);
  drawPastelRibbonBow(ctx, 0, 0, s / 420, '#e61e5a');
  ctx.restore();

  // Gentle sparkles
  ctx.fillStyle = 'rgba(245, 184, 46, 0.75)';
  for (let i = 0; i < 6; i++) {
    const sx = s * (0.12 + rng() * 0.76);
    const sy = s * (0.12 + rng() * 0.76);
    if (Math.hypot(sx - s * 0.5, sy - s * 0.5) > s * 0.34) {
      ctx.beginPath();
      ctx.arc(sx, sy, Math.max(2, s * 0.008), 0, Math.PI * 2);
      ctx.fill();
    }
  }

  return canvas;
}

function createPortraitMedia(member, size) {
  if (member.src && member.src.trim()) {
    const img = document.createElement('img');
    img.src = member.src;
    img.alt = member.name;
    img.referrerPolicy = 'no-referrer';
    img.loading = 'eager';
    img.decoding = 'async';
    img.className = 'plate-media';
    img.addEventListener('error', () => {
      const fallback = createPastelKittyFallbackCanvas(member, size);
      img.replaceWith(fallback);
    });
    return img;
  }
  return createPastelKittyFallbackCanvas(member, size);
}

// ============================================================================
// Formatting & Lanyard Helpers
// ============================================================================

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatSeconds(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function formatDurationMs(ms) {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function getDiscordAvatarUrl(user) {
  if (!user.avatar) {
    const idx =
      user.discriminator && user.discriminator !== '0'
        ? Number(user.discriminator) % 5
        : Number((BigInt(user.id) >> 22n) % 6n);
    return `https://cdn.discordapp.com/embed/avatars/${idx}.png`;
  }
  const ext = user.avatar.startsWith('a_') ? 'gif' : 'png';
  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${ext}?size=128`;
}

function getActivityAssetUrl(activity) {
  const raw = activity.assets?.large_image;
  if (!raw) return null;

  if (raw.startsWith('mp:external/')) {
    return `https://media.discordapp.net/external/${raw.slice('mp:external/'.length)}`;
  }
  if (raw.startsWith('spotify:')) {
    return `https://i.scdn.co/image/${raw.slice('spotify:'.length)}`;
  }
  if (activity.application_id) {
    return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${raw}.png`;
  }
  return null;
}

// ============================================================================
// Application State & Lanyard Live Presence
// ============================================================================

const presenceMap = new Map();
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

let selectedIndex = -1;
let activeFanIndex = -1;
let fanCycleRafId = 0;
let fanElapsedMs = 0;
let fanLastTickMs = 0;
let fanPausedByHover = false;
let isLoaderActive = false;
let isPlayingTrack = false;
let trackElapsedSec = 0;
let trackIntervalId = null;
let deckHideTimeoutId = null;
let dealEpoch = 0;
let modalNavEpoch = 0;
let activeModalFlipAnim = null;
let activeBackdropAnim = null;
const card3dFlipAnims = new WeakMap();

function startLanyard() {
  const validIds = Array.from(
    new Set(
      ROSTER.map((m) => m.discordId?.trim()).filter((id) => Boolean(id && /^\d{15,22}$/.test(id)))
    )
  );

  if (validIds.length === 0) return;

  validIds.forEach((id) => {
    presenceMap.set(id, { status: 'loading' });
  });

  // 1. Initial REST fetch
  validIds.forEach((id) => {
    fetch(`https://api.lanyard.rest/v1/users/${id}`)
      .then((res) => res.json())
      .then((json) => {
        if (json && json.success && json.data) {
          presenceMap.set(id, { status: 'ready', data: json.data });
        } else {
          presenceMap.set(id, {
            status: 'error',
            error:
              json?.error?.message ||
              'User is not monitored by Lanyard yet. Join discord.gg/lanyard.',
          });
        }
        syncPresenceUI(id);
      })
      .catch(() => {
        presenceMap.set(id, {
          status: 'error',
          error: 'Unable to reach Lanyard API.',
        });
        syncPresenceUI(id);
      });
  });

  // 2. Real-time WebSocket stream
  let ws = null;
  let heartbeatTimer = null;

  const connect = () => {
    try {
      ws = new WebSocket('wss://api.lanyard.rest/socket');
    } catch {
      return;
    }

    ws.onmessage = (event) => {
      let msg;
      try {
        msg = JSON.parse(String(event.data));
      } catch {
        return;
      }

      if (msg.op === 1 && msg.d && typeof msg.d === 'object') {
        const interval = msg.d.heartbeat_interval || 30000;
        if (heartbeatTimer !== null) window.clearInterval(heartbeatTimer);
        heartbeatTimer = window.setInterval(() => {
          if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ op: 3 }));
          }
        }, interval);

        if (ws.readyState === WebSocket.OPEN) {
          ws.send(
            JSON.stringify({
              op: 2,
              d: { subscribe_to_ids: validIds },
            })
          );
        }
      }

      if (msg.op === 0 && msg.d && typeof msg.d === 'object') {
        if (msg.t === 'INIT_STATE') {
          Object.entries(msg.d).forEach(([userId, data]) => {
            if (data && data.discord_user) {
              presenceMap.set(userId, { status: 'ready', data });
              syncPresenceUI(userId);
            }
          });
        } else if (msg.t === 'PRESENCE_UPDATE') {
          const userId = msg.d?.discord_user?.id;
          if (userId) {
            presenceMap.set(userId, { status: 'ready', data: msg.d });
            syncPresenceUI(userId);
          }
        }
      }
    };

    ws.onclose = () => {
      if (heartbeatTimer !== null) {
        window.clearInterval(heartbeatTimer);
        heartbeatTimer = null;
      }
      window.setTimeout(connect, 4000);
    };
  };

  connect();

  // Keep Spotify progress & activity elapsed timers ticking every second when modal is open
  window.setInterval(() => {
    if (selectedIndex < 0) return;
    const member = ROSTER[selectedIndex];
    const p = member?.discordId ? presenceMap.get(member.discordId.trim()) : null;
    if (
      p?.status === 'ready' &&
      p.data &&
      (p.data.listening_to_spotify || p.data.activities?.some((a) => a.timestamps?.start))
    ) {
      renderModalPresence(member);
    }
  }, 1000);
}

function updateCardPresence(member) {
  const containers = document.querySelectorAll(`[data-card-presence="${member.id}"]`);
  if (containers.length === 0) return;

  const trimmedId = member.discordId?.trim();
  const state = trimmedId ? presenceMap.get(trimmedId) : null;
  if (!state || state.status !== 'ready' || !state.data) {
    containers.forEach((container) => {
      container.innerHTML = '';
      container.classList.add('is-hidden');
    });
    return;
  }

  const data = state.data;
  const meta = DISCORD_STATUS_META[data.discord_status] || DISCORD_STATUS_META.offline;
  const activityLine =
    data.listening_to_spotify && data.spotify
      ? `Spotify · ${data.spotify.song}`
      : data.activities?.find((a) => a.type !== 4)?.name ||
        data.activities?.find((a) => a.type === 4)?.state ||
        '';

  const html = `
    <span class="card-status-row">
      <span aria-hidden="true" class="status-dot ${meta.dotClass}"></span>
      <span class="${meta.textClass}">${meta.shortLabel}</span>
    </span>
    ${
      activityLine
        ? `<span class="card-activity">${escapeHtml(activityLine)}</span>`
        : ''
    }
  `;

  containers.forEach((container) => {
    container.classList.remove('is-hidden');
    container.innerHTML = html;
  });
}

function syncPresenceUI(discordId) {
  ROSTER.forEach((member) => {
    if (member.discordId?.trim() === discordId) {
      updateCardPresence(member);
    }
  });
  if (selectedIndex >= 0) {
    const activeMember = ROSTER[selectedIndex];
    if (activeMember?.discordId?.trim() === discordId) {
      renderModalPresence(activeMember);
    }
  }
}

// ============================================================================
// Roster Rendering, Fanned Card Picker & Central Dealer Deck Distribution
// ============================================================================

const FAN_SWITCH_INTERVAL_MS = 3200;

function updateFanTimerBar() {
  const fill = document.getElementById('fan-timer-fill');
  if (!fill) return;
  const ratio =
    activeFanIndex < 0 ? 0 : Math.max(0, Math.min(1, fanElapsedMs / FAN_SWITCH_INTERVAL_MS));
  fill.style.transform = `scaleX(${ratio})`;
}

function renderFanPips() {
  const pipsHost = document.getElementById('fan-pips');
  if (!pipsHost) return;
  pipsHost.innerHTML = '';

  ROSTER.forEach((member, index) => {
    const pip = document.createElement('button');
    pip.type = 'button';
    pip.className = 'fan-pip';
    pip.dataset.index = String(index);
    pip.setAttribute('role', 'tab');
    pip.setAttribute('aria-label', `Pick ${member.name} (${member.plateCode})`);
    pip.setAttribute('aria-selected', String(index === activeFanIndex));
    pip.addEventListener('click', () => {
      setPickedFanCard(index);
      fanElapsedMs = 0;
      fanLastTickMs = performance.now();
      updateFanTimerBar();
    });
    pipsHost.appendChild(pip);
  });
}

function syncFanReadout(index) {
  const counterEl = document.getElementById('fan-counter');
  const nameEl = document.getElementById('fan-active-name');
  const displayIdx = index >= 0 && index < ROSTER.length ? index : 0;
  const member = ROSTER[displayIdx];

  if (counterEl) {
    counterEl.textContent = `${String(displayIdx + 1).padStart(2, '0')} / ${String(ROSTER.length).padStart(2, '0')}`;
  }
  if (nameEl && member) {
    const changed = nameEl.textContent !== member.name;
    nameEl.textContent = member.name;
    if (changed && activeFanIndex >= 0 && !reducedMotionQuery.matches) {
      nameEl.animate(
        [
          { opacity: 0.25, transform: 'translateY(4px)' },
          { opacity: 1, transform: 'translateY(0px)' },
        ],
        { duration: 280, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
      );
    }
  }

  const pips = document.querySelectorAll('#fan-pips .fan-pip');
  pips.forEach((pip) => {
    const isActive = Number(pip.dataset.index) === displayIdx && activeFanIndex >= 0;
    pip.classList.toggle('is-active', isActive);
    pip.setAttribute('aria-selected', String(isActive));
  });
}

function resetCardTilt(card3d, innerShell) {
  if (card3d) {
    card3d.style.setProperty('--tilt-x', '0deg');
    card3d.style.setProperty('--tilt-y', '0deg');
  }
  if (innerShell) {
    innerShell.style.setProperty('--glare-x', '50%');
    innerShell.style.setProperty('--glare-y', '35%');
  }
}

const BACK_WING_OFFSETS = [-2.6, -1.75, -0.95, 0.95, 1.75, 2.6];
const BACK_WING_OFFSETS_7 = [-3.05, -2.3, -1.58, -0.9, 0.95, 1.8, 2.65];
const BACK_WING_OFFSETS_9 = [-3.2, -2.6, -2.0, -1.42, -0.86, 0.9, 1.58, 2.26, 2.94];
const BACK_WING_OFFSETS_13 = [
  -3.6, -3.15, -2.7, -2.25, -1.8, -1.35, -0.9, 0.92, 1.44, 1.96, 2.48, 3.0, 3.52,
];
const BACK_WING_OFFSETS_15 = [
  -3.7, -3.3, -2.9, -2.5, -2.1, -1.7, -1.3, -0.9, 0.92, 1.38, 1.84, 2.3, 2.76, 3.22, 3.68,
];
const BACK_WING_OFFSETS_17 = [
  -3.75, -3.4, -3.05, -2.7, -2.35, -2.0, -1.65, -1.3, -0.95, 0.94, 1.34, 1.74, 2.14, 2.54, 2.94,
  3.34, 3.74,
];

function getWingOffsets(count) {
  if (count === BACK_WING_OFFSETS.length) return BACK_WING_OFFSETS;
  if (count === BACK_WING_OFFSETS_7.length) return BACK_WING_OFFSETS_7;
  if (count === BACK_WING_OFFSETS_9.length) return BACK_WING_OFFSETS_9;
  if (count === BACK_WING_OFFSETS_13.length) return BACK_WING_OFFSETS_13;
  if (count === BACK_WING_OFFSETS_15.length) return BACK_WING_OFFSETS_15;
  if (count === BACK_WING_OFFSETS_17.length) return BACK_WING_OFFSETS_17;
  const result = [];
  const half = count / 2;
  for (let i = 0; i < count; i += 1) {
    const pos = i < half ? i - half - 0.35 : i - half + 0.35;
    result.push(pos);
  }
  return result;
}

const returningSlotTimers = new WeakMap();

function markSlotReturning(slot) {
  if (!slot) return;
  const prevTimer = returningSlotTimers.get(slot);
  if (prevTimer) {
    window.clearTimeout(prevTimer);
  }
  slot.classList.add('is-returning');
  const timerId = window.setTimeout(() => {
    slot.classList.remove('is-returning');
    returningSlotTimers.delete(slot);
  }, 680);
  returningSlotTimers.set(slot, timerId);
}

function triggerCardSettleAnimation(slot, dir) {
  if (!slot || reducedMotionQuery.matches || !slot.classList.contains('is-landed')) return;
  const card3d = slot.querySelector('.card-3d');
  if (!card3d) return;

  const prevAnim = card3dFlipAnims.get(card3d);
  if (prevAnim) {
    prevAnim.cancel();
  }

  const sign = dir >= 0 ? 1 : -1;
  const anim = card3d.animate(
    [
      {
        offset: 0,
        transform: 'translate3d(0px, 0px, 0px) rotateY(0deg) rotateX(0deg) scale(1)',
      },
      {
        offset: 0.42,
        transform: `translate3d(0px, 6px, -24px) rotateY(${sign * -18}deg) rotateX(-4deg) scale(0.97)`,
      },
      {
        offset: 1,
        transform: 'translate3d(0px, 0px, 0px) rotateY(0deg) rotateX(0deg) scale(1)',
      },
    ],
    {
      duration: 620,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fill: 'none',
    }
  );

  card3dFlipAnims.set(card3d, anim);
  anim.onfinish = () => {
    if (card3dFlipAnims.get(card3d) === anim) {
      card3dFlipAnims.delete(card3d);
    }
  };
}

function triggerCardFlipAnimation(slot, dir, wasHovered = false) {
  if (!slot || reducedMotionQuery.matches || !slot.classList.contains('is-landed')) return;
  const card3d = slot.querySelector('.card-3d');
  const innerShell = slot.querySelector('.card-inner-shell');
  if (!card3d) return;

  resetCardTilt(card3d, innerShell);

  const prevAnim = card3dFlipAnims.get(card3d);
  if (prevAnim) {
    prevAnim.cancel();
  }

  const startY = wasHovered ? -14 : 0;
  const startScale = wasHovered ? 1.03 : 1;
  const sign = dir >= 0 ? 1 : -1;
  const anim = card3d.animate(
    [
      {
        offset: 0,
        transform: `translate3d(0px, ${startY}px, 0px) rotateY(0deg) rotateX(0deg) scale(${startScale})`,
      },
      {
        offset: 0.28,
        transform: `translate3d(0px, -30px, 54px) rotateY(${sign * 105}deg) rotateX(7deg) scale(1.06)`,
      },
      {
        offset: 0.54,
        transform: `translate3d(0px, -24px, 48px) rotateY(${sign * 195}deg) rotateX(4deg) scale(1.05)`,
      },
      {
        offset: 0.82,
        transform: `translate3d(0px, -4px, 8px) rotateY(${sign * 352}deg) rotateX(-1.5deg) scale(1.012)`,
      },
      {
        offset: 1,
        transform: `translate3d(0px, 0px, 0px) rotateY(${sign * 360}deg) rotateX(0deg) scale(1)`,
      },
    ],
    {
      duration: 680,
      easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
      fill: 'none',
    }
  );

  card3dFlipAnims.set(card3d, anim);
  anim.onfinish = () => {
    if (card3dFlipAnims.get(card3d) === anim) {
      card3dFlipAnims.delete(card3d);
    }
  };
}

function setPickedFanCard(index, explicitDir = 0) {
  if (ROSTER.length === 0) return;
  const prevIndex = activeFanIndex;
  const normalized = ((index % ROSTER.length) + ROSTER.length) % ROSTER.length;
  activeFanIndex = normalized;

  const slots = Array.from(document.querySelectorAll('#roster-grid .card-slot'));
  const unpickedSlots = slots.filter((slot) => Number(slot.dataset.index) !== normalized);
  const wingOffsets = getWingOffsets(unpickedSlots.length);

  let pickedSlot = null;
  let prevSlot = null;
  const targetSlot = slots.find((slot) => Number(slot.dataset.index) === normalized);
  const targetWasHovered = Boolean(targetSlot && targetSlot.matches(':hover'));

  slots.forEach((slot) => {
    const slotIdx = Number(slot.dataset.index);
    const isPicked = slotIdx === normalized;
    if (slotIdx === prevIndex && prevIndex !== normalized) {
      prevSlot = slot;
    }
    if (isPicked) {
      const prevTimer = returningSlotTimers.get(slot);
      if (prevTimer) {
        window.clearTimeout(prevTimer);
        returningSlotTimers.delete(slot);
      }
      slot.classList.remove('is-returning');
      pickedSlot = slot;
      slot.classList.add('is-picked');
      slot.style.setProperty('--fan-offset', '0');
      slot.style.setProperty('--fan-arch-y', '0px');
      slot.style.setProperty('--fan-rot', '0deg');
      slot.style.setProperty('--fan-z', '65');
    } else {
      slot.classList.remove('is-picked');
      resetCardTilt(slot.querySelector('.card-3d'), slot.querySelector('.card-inner-shell'));
    }
  });

  const rotScale =
    unpickedSlots.length > 15
      ? 6.2
      : unpickedSlots.length > 13
        ? 6.5
        : unpickedSlots.length > 9
          ? 7.0
          : 8.5;
  const archScale =
    unpickedSlots.length > 15
      ? 6.3
      : unpickedSlots.length > 13
        ? 6.8
        : unpickedSlots.length > 9
          ? 7.2
          : 9.5;

  unpickedSlots.forEach((slot, wingIdx) => {
    const offset = wingOffsets[wingIdx] ?? 0;
    const fanRot = offset * rotScale;
    const archY = Math.round(Math.pow(Math.abs(offset), 1.75) * archScale);
    const fanZ = Math.max(6, Math.round(24 - Math.abs(offset) * 3.8));
    slot.dataset.fanRotDeg = String(fanRot);
    slot.style.setProperty('--fan-offset', String(offset));
    slot.style.setProperty('--fan-arch-y', `${archY}px`);
    slot.style.setProperty('--fan-rot', `${fanRot}deg`);
    slot.style.setProperty('--fan-z', String(fanZ));
  });

  if (pickedSlot && prevIndex >= 0 && prevIndex !== normalized) {
    const flipDir = explicitDir !== 0 ? explicitDir : normalized > prevIndex ? -1 : 1;
    if (prevSlot) {
      markSlotReturning(prevSlot);
      triggerCardSettleAnimation(prevSlot, flipDir);
    }
    triggerCardFlipAnimation(pickedSlot, flipDir, targetWasHovered);
  }

  syncFanReadout(normalized);
}

function stopFanAutoCycle() {
  if (fanCycleRafId !== 0) {
    window.cancelAnimationFrame(fanCycleRafId);
    fanCycleRafId = 0;
  }
  fanElapsedMs = 0;
  updateFanTimerBar();
}

function tickFanCycle(now) {
  if (fanCycleRafId === 0) return;

  const dt = Math.min(100, Math.max(0, now - fanLastTickMs));
  fanLastTickMs = now;

  const canAdvance =
    !fanPausedByHover &&
    selectedIndex < 0 &&
    !isLoaderActive &&
    activeFanIndex >= 0 &&
    document.visibilityState === 'visible';

  if (canAdvance) {
    fanElapsedMs += dt;
    if (fanElapsedMs >= FAN_SWITCH_INTERVAL_MS) {
      fanElapsedMs = 0;
      setPickedFanCard((activeFanIndex + 1) % ROSTER.length, 1);
    }
    updateFanTimerBar();
  }

  fanCycleRafId = window.requestAnimationFrame(tickFanCycle);
}

function startFanAutoCycle() {
  if (ROSTER.length <= 1) return;
  fanElapsedMs = 0;
  fanLastTickMs = performance.now();
  updateFanTimerBar();
  if (fanCycleRafId === 0) {
    fanCycleRafId = window.requestAnimationFrame(tickFanCycle);
  }
}

function stepPickedFanCard(delta) {
  if (ROSTER.length === 0) return;
  const base = activeFanIndex >= 0 ? activeFanIndex : 0;
  setPickedFanCard(base + delta, delta >= 0 ? 1 : -1);
  fanElapsedMs = 0;
  fanLastTickMs = performance.now();
  updateFanTimerBar();
}

function renderRosterGrid() {
  const grid = document.getElementById('roster-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const mid = (ROSTER.length - 1) / 2;
  const initialSpan = ROSTER.length > 14 ? 3.72 : ROSTER.length > 10 ? 3.65 : mid;

  ROSTER.forEach((member, index) => {
    const rawOffset = index - mid;
    const offset = mid > 0 ? (rawOffset / mid) * initialSpan : 0;
    const fanRot = offset * (ROSTER.length > 14 ? 6.0 : 6.3);
    const archY = Math.round(
      Math.pow(Math.abs(offset), 1.75) * (ROSTER.length > 14 ? 6.3 : ROSTER.length > 10 ? 6.8 : 9)
    );
    const fanZ = Math.max(6, Math.round(24 - Math.abs(offset) * 3.8));

    const slot = document.createElement('div');
    slot.className = 'card-slot';
    slot.dataset.index = String(index);
    slot.dataset.fanRotDeg = String(fanRot);
    slot.style.setProperty('--fan-offset', String(offset));
    slot.style.setProperty('--fan-arch-y', `${archY}px`);
    slot.style.setProperty('--fan-rot', `${fanRot}deg`);
    slot.style.setProperty('--fan-z', String(fanZ));

    const card3d = document.createElement('div');
    card3d.className = 'card-3d';

    // Card Back
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    cardBack.setAttribute('aria-hidden', 'true');
    cardBack.innerHTML = `
      <div class="card-back-inner">
        <div class="card-back-corners"><span>♥</span><span>♥</span></div>
        <div class="card-back-emblem">
          <svg viewBox="0 0 64 40" class="card-back-bow" aria-hidden="true">
            <path d="M14,10 C8,4 4,14 8,24 C12,32 22,28 28,22 L28,14 C24,10 18,8 14,10 Z" fill="#e61e5a" stroke="#4a1829" stroke-width="2" />
            <path d="M50,10 C56,4 60,14 56,24 C52,32 42,28 36,22 L36,14 C40,10 46,8 50,10 Z" fill="#e61e5a" stroke="#4a1829" stroke-width="2" />
            <circle cx="32" cy="18" r="6" fill="#ff4d88" stroke="#4a1829" stroke-width="2" />
          </svg>
          <span class="card-back-title">UWU</span>
        </div>
        <div class="card-back-corners"><span>♥</span><span>♥</span></div>
      </div>
    `;

    // Card Front Button (Rigid Toploader Sleeve + Inner Card Shell)
    const frontBtn = document.createElement('button');
    frontBtn.type = 'button';
    frontBtn.className = 'card-front-btn';
    frontBtn.setAttribute('aria-label', `Inspect ${member.name} (${member.disciplineLabel})`);

    const innerShell = document.createElement('div');
    innerShell.className = 'card-inner-shell';

    // Pause auto-switch when hovering/aiming, never auto-switch on mere crosshair contact
    frontBtn.addEventListener('pointerenter', () => {
      fanPausedByHover = true;
    });

    frontBtn.addEventListener('pointermove', (e) => {
      if (
        activeFanIndex !== index ||
        !slot.classList.contains('is-landed') ||
        reducedMotionQuery.matches
      ) {
        return;
      }
      const rect = frontBtn.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      const nx = Math.max(-0.5, Math.min(0.5, (e.clientX - rect.left) / rect.width - 0.5));
      const ny = Math.max(-0.5, Math.min(0.5, (e.clientY - rect.top) / rect.height - 0.5));
      card3d.style.setProperty('--tilt-y', `${(nx * 14).toFixed(2)}deg`);
      card3d.style.setProperty('--tilt-x', `${(-ny * 12).toFixed(2)}deg`);
      innerShell.style.setProperty('--glare-x', `${((nx + 0.5) * 100).toFixed(1)}%`);
      innerShell.style.setProperty('--glare-y', `${((ny + 0.5) * 100).toFixed(1)}%`);
    });

    frontBtn.addEventListener('pointerleave', (e) => {
      resetCardTilt(card3d, innerShell);
      const nextTarget = e.relatedTarget;
      const stillOnCard =
        nextTarget instanceof Element && Boolean(nextTarget.closest('#roster-grid .card-front-btn'));
      if (!stillOnCard) {
        fanPausedByHover = false;
        fanLastTickMs = performance.now();
      }
    });

    frontBtn.addEventListener('click', () => {
      if (!slot.classList.contains('is-landed')) return;
      if (activeFanIndex !== index) {
        setPickedFanCard(index);
        fanElapsedMs = 0;
        fanLastTickMs = performance.now();
        updateFanTimerBar();
        return;
      }
      openMemberModal(index);
    });

    const topTag = document.createElement('div');
    topTag.className = 'card-top-tag tabular-nums';
    topTag.innerHTML = `
      <span>${escapeHtml(member.plateCode)}</span>
    `;

    const cornerRibbon = document.createElement('div');
    cornerRibbon.className = 'card-corner-ribbon';
    cornerRibbon.setAttribute('aria-hidden', 'true');

    const imgFrame = document.createElement('div');
    imgFrame.className = 'card-image-frame';
    imgFrame.appendChild(createPortraitMedia(member, 420));

    const gleam = document.createElement('div');
    gleam.className = 'card-gleam';
    gleam.setAttribute('aria-hidden', 'true');
    imgFrame.appendChild(gleam);

    const caption = document.createElement('div');
    caption.className = 'card-caption';
    caption.innerHTML = `
      <span class="card-name">${escapeHtml(member.name)}</span>
      <div class="card-presence is-hidden" data-card-presence="${escapeHtml(member.id)}"></div>
    `;

    const sleeveGlare = document.createElement('div');
    sleeveGlare.className = 'card-sleeve-glare';
    sleeveGlare.setAttribute('aria-hidden', 'true');

    const cardRibbon = document.createElement('div');
    cardRibbon.className = 'card-ribbon';
    cardRibbon.setAttribute('aria-hidden', 'true');
    cardRibbon.innerHTML = ICONS.cardRibbon;

    innerShell.appendChild(cornerRibbon);
    innerShell.appendChild(topTag);
    innerShell.appendChild(imgFrame);
    innerShell.appendChild(caption);
    innerShell.appendChild(sleeveGlare);

    frontBtn.appendChild(innerShell);
    frontBtn.appendChild(cardRibbon);

    card3d.appendChild(cardBack);
    card3d.appendChild(frontBtn);
    slot.appendChild(card3d);
    grid.appendChild(slot);

    updateCardPresence(member);
  });

  if (!grid.dataset.fanHoverBound) {
    grid.dataset.fanHoverBound = 'true';
    grid.addEventListener('pointerleave', () => {
      fanPausedByHover = false;
      fanLastTickMs = performance.now();
    });
  }

  renderFanPips();
  syncFanReadout(0);
}

function hideDealerDeck() {
  const deck = document.getElementById('dealer-deck');
  if (!deck) return;
  deck.classList.add('is-exiting');
  window.setTimeout(() => {
    deck.classList.add('is-hidden');
  }, 280);
}

function triggerDealAnimation() {
  dealEpoch += 1;
  const currentEpoch = dealEpoch;

  stopFanAutoCycle();
  activeFanIndex = -1;
  fanPausedByHover = false;

  if (deckHideTimeoutId !== null) {
    window.clearTimeout(deckHideTimeoutId);
    deckHideTimeoutId = null;
  }

  renderRosterGrid();

  const deck = document.getElementById('dealer-deck');
  const slots = Array.from(document.querySelectorAll('#roster-grid .card-slot'));

  const activateInitialPick = () => {
    if (currentEpoch !== dealEpoch) return;
    if (activeFanIndex < 0) {
      setPickedFanCard(0);
      startFanAutoCycle();
    }
  };

  if (reducedMotionQuery.matches) {
    if (deck) deck.classList.add('is-hidden');
    slots.forEach((slot) => slot.classList.add('is-landed'));
    activateInitialPick();
    return;
  }

  if (deck) {
    deck.classList.remove('is-hidden', 'is-exiting');
  }

  const deckRect = deck?.getBoundingClientRect();

  slots.forEach((slot, index) => {
    const card3d = slot.querySelector('.card-3d');
    if (!card3d) return;

    const slotRect = slot.getBoundingClientRect();
    let dx = 0;
    let dy = -220;
    if (deckRect && deckRect.width > 0) {
      const slotCenterX = slotRect.left + slotRect.width / 2;
      const slotCenterY = slotRect.top + slotRect.height / 2;
      const deckCenterX = deckRect.left + deckRect.width / 2;
      const deckCenterY = deckRect.top + deckRect.height / 2;
      dx = deckCenterX - slotCenterX;
      dy = deckCenterY - slotCenterY;
    }

    const fanRot = Number(slot.dataset.fanRotDeg || '0');
    const angleRad = (-fanRot * Math.PI) / 180;
    const cosA = Math.cos(angleRad);
    const sinA = Math.sin(angleRad);
    const localDx = (dx * cosA - dy * sinA) / 0.88;
    const localDy = (dx * sinA + dy * cosA) / 0.88;
    const rot = Math.max(-18, Math.min(18, -dx * 0.035)) - fanRot;

    const anim = card3d.animate(
      [
        {
          offset: 0,
          opacity: 0,
          transform: `translate3d(${localDx}px, ${localDy}px, 0) scale(0.48) rotateY(180deg) rotateZ(${rot}deg)`,
        },
        {
          offset: 0.18,
          opacity: 1,
          transform: `translate3d(${localDx * 0.68}px, ${localDy * 0.55 - 18}px, 0) scale(0.78) rotateY(175deg) rotateZ(${rot * 0.55}deg)`,
        },
        {
          offset: 0.68,
          opacity: 1,
          transform: `translate3d(${localDx * 0.06}px, ${localDy * 0.05}px, 0) scale(0.96) rotateY(95deg) rotateZ(${rot * 0.12}deg)`,
        },
        {
          offset: 1,
          opacity: 1,
          transform: 'translate3d(0px, 0px, 0) scale(1) rotateY(0deg) rotateZ(0deg)',
        },
      ],
      {
        delay: index * 150,
        duration: 640,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        fill: 'both',
      }
    );

    anim.onfinish = () => {
      if (currentEpoch !== dealEpoch) return;
      slot.classList.add('is-landed');
      if (index === slots.length - 1) {
        window.setTimeout(() => {
          if (currentEpoch !== dealEpoch) return;
          hideDealerDeck();
          activateInitialPick();
        }, 160);
      }
    };
  });

  // Safety timeout in case animation events are skipped in background tabs
  deckHideTimeoutId = window.setTimeout(() => {
    if (currentEpoch !== dealEpoch) return;
    slots.forEach((slot) => slot.classList.add('is-landed'));
    hideDealerDeck();
    activateInitialPick();
  }, ROSTER.length * 150 + 920);
}

// ============================================================================
// Loading Screen Controller
// ============================================================================

let activeLoaderCleanup = null;

function runLoadingScreen() {
  if (activeLoaderCleanup) {
    activeLoaderCleanup();
    activeLoaderCleanup = null;
  }

  const screen = document.getElementById('loading-screen');
  const introWrap = document.getElementById('intro-image-wrap');
  const bar = document.getElementById('loader-bar');
  const percentEl = document.getElementById('loader-percent');
  const skipBtn = document.getElementById('loader-skip');
  const deck = document.getElementById('dealer-deck');

  if (!screen || !bar || !percentEl) {
    isLoaderActive = false;
    triggerDealAnimation();
    return;
  }

  isLoaderActive = true;
  stopFanAutoCycle();

  if (introWrap) {
    introWrap.innerHTML = `
      <div class="intro-image-frame">
        <img
          src="${escapeHtml(INTRO_IMAGE_URL)}"
          alt="UWU intro"
          referrerpolicy="no-referrer"
          class="intro-image"
        />
      </div>
    `;
  }

  if (deck && !reducedMotionQuery.matches) {
    deck.classList.remove('is-hidden', 'is-exiting');
  }

  screen.classList.remove('is-hidden', 'is-fading');
  bar.style.transform = 'scaleX(0)';
  percentEl.textContent = '0%';

  const urls = [
    INTRO_IMAGE_URL,
    ...ROSTER.map((m) => m.src).filter((u) => Boolean(u && u.trim())),
  ];
  let imagesLoaded = 0;
  const totalImages = urls.length;

  urls.forEach((url) => {
    const img = new Image();
    img.referrerPolicy = 'no-referrer';
    const done = () => {
      imagesLoaded += 1;
    };
    img.onload = done;
    img.onerror = done;
    img.src = url;
  });

  let finished = false;
  let rafId = 0;

  const finish = () => {
    if (finished) return;
    finished = true;
    isLoaderActive = false;
    window.cancelAnimationFrame(rafId);
    window.removeEventListener('keydown', onLoaderKey);
    skipBtn?.removeEventListener('click', onSkip);

    bar.style.transform = 'scaleX(1)';
    percentEl.textContent = '100%';
    screen.classList.add('is-fading');

    window.setTimeout(() => {
      screen.classList.add('is-hidden');
      if (introWrap) {
        introWrap.innerHTML = '';
      }
      triggerDealAnimation();
    }, 450);
  };

  const onSkip = () => {
    unlockAndPlayMusic();
    finish();
  };
  const onLoaderKey = (e) => {
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
      unlockAndPlayMusic();
      finish();
    }
  };

  skipBtn?.addEventListener('click', onSkip);
  window.addEventListener('keydown', onLoaderKey);

  const startTime = performance.now();
  const durationMs = 2400;

  const tick = (now) => {
    if (finished) return;
    const elapsed = now - startTime;
    const timeRatio = Math.min(1, elapsed / durationMs);
    const imageRatio = totalImages === 0 ? 1 : imagesLoaded / totalImages;
    const easedTime = 1 - Math.pow(1 - timeRatio, 2.2);
    const targetRatio =
      elapsed >= 3200 ? 1 : Math.min(easedTime, 0.78 + imageRatio * 0.22);

    const pct = Math.min(100, Math.round(targetRatio * 100));
    bar.style.transform = `scaleX(${pct / 100})`;
    percentEl.textContent = `${pct}%`;

    if (pct >= 100 && elapsed >= durationMs) {
      window.setTimeout(finish, 320);
      return;
    }

    rafId = window.requestAnimationFrame(tick);
  };

  rafId = window.requestAnimationFrame(tick);

  activeLoaderCleanup = () => {
    finished = true;
    isLoaderActive = false;
    window.cancelAnimationFrame(rafId);
    window.removeEventListener('keydown', onLoaderKey);
    skipBtn?.removeEventListener('click', onSkip);
  };
}

// ============================================================================
// Hall of Fame (4 Honored Cards) & Soundscape Mixer
// ============================================================================

function renderHallOfFame() {
  const grid = document.getElementById('hall-of-fame-grid');
  const countEl = document.getElementById('hall-of-fame-count');
  if (!grid) return;

  const featured = HALL_OF_FAME_IDS.map((id) => {
    const memberIdx = ROSTER.findIndex((m) => m.id === id);
    return memberIdx >= 0 ? { member: ROSTER[memberIdx], memberIdx } : null;
  }).filter(Boolean);

  if (countEl) {
    countEl.textContent = `${String(featured.length).padStart(2, '0')} Honored Keepsake Cards · Click any card to inspect`;
  }

  grid.innerHTML = '';

  featured.forEach((entry, rankIdx) => {
    if (!entry) return;
    const { member, memberIdx } = entry;

    const cardBtn = document.createElement('button');
    cardBtn.type = 'button';
    cardBtn.className = 'hof-card';
    cardBtn.setAttribute('aria-label', `Inspect Hall of Fame card ${member.name} (${member.plateCode})`);
    cardBtn.addEventListener('click', () => openMemberModal(memberIdx));

    const inner = document.createElement('div');
    inner.className = 'hof-card-inner';

    const cornerRibbon = document.createElement('div');
    cornerRibbon.className = 'card-corner-ribbon';
    cornerRibbon.setAttribute('aria-hidden', 'true');

    const topRow = document.createElement('div');
    topRow.className = 'hof-card-top tabular-nums';
    topRow.innerHTML = `
      <span>NO. ${String(rankIdx + 1).padStart(2, '0')} · ${escapeHtml(member.plateCode)}</span>
    `;

    const mediaFrame = document.createElement('div');
    mediaFrame.className = 'hof-card-media';
    mediaFrame.appendChild(createPortraitMedia(member, 480));

    const gleam = document.createElement('div');
    gleam.className = 'card-gleam';
    gleam.setAttribute('aria-hidden', 'true');
    mediaFrame.appendChild(gleam);

    const body = document.createElement('div');
    body.className = 'hof-card-body';
    body.innerHTML = `
      <h3 class="hof-card-name">${escapeHtml(member.name)}</h3>
      <p class="hof-card-quote">${escapeHtml(member.statement)}</p>
      <div class="card-presence hof-card-presence is-hidden" data-card-presence="${escapeHtml(member.id)}"></div>
      <div class="hof-card-meta tabular-nums">
        <span class="hof-card-handle">${escapeHtml(member.handle)}</span>
        <span aria-hidden="true">·</span>
        <span>${escapeHtml(member.location)}</span>
      </div>
    `;

    const cardRibbon = document.createElement('div');
    cardRibbon.className = 'card-ribbon hof-card-ribbon';
    cardRibbon.setAttribute('aria-hidden', 'true');
    cardRibbon.innerHTML = ICONS.cardRibbon;

    inner.appendChild(cornerRibbon);
    inner.appendChild(topRow);
    inner.appendChild(mediaFrame);
    inner.appendChild(body);

    cardBtn.appendChild(inner);
    cardBtn.appendChild(cardRibbon);
    grid.appendChild(cardBtn);

    updateCardPresence(member);
  });
}

// ============================================================================
// Member Dossier Lightbox Modal
// ============================================================================

function renderModalPresence(member) {
  const host = document.getElementById('modal-presence');
  if (!host) return;

  const trimmedId = member.discordId?.trim();
  if (!trimmedId) {
    host.innerHTML = `
      <div class="lanyard-box lanyard-box--muted">
        <div class="lanyard-top-row">
          <span class="lanyard-label">Discord · Lanyard</span>
          <span class="lanyard-tag">Not Linked</span>
        </div>
        <p class="lanyard-note">
          Add <code>discordId</code> in <code>index.js</code> to stream live Discord status,
          Spotify playback, and activities via Lanyard.
        </p>
      </div>
    `;
    return;
  }

  const presence = presenceMap.get(trimmedId);
  if (!presence || presence.status === 'loading') {
    host.innerHTML = `
      <div class="lanyard-box lanyard-box--muted">
        <div class="lanyard-top-row">
          <span class="lanyard-label">Discord · Lanyard</span>
          <span class="lanyard-tag">Connecting...</span>
        </div>
      </div>
    `;
    return;
  }

  if (presence.status === 'error' || !presence.data) {
    host.innerHTML = `
      <div class="lanyard-box lanyard-box--error">
        <div class="lanyard-top-row">
          <span class="lanyard-label">Discord · Lanyard</span>
          <span class="status-text--dnd" style="font-family: var(--font-mono); font-size: 12px;">Unavailable</span>
        </div>
        <p class="lanyard-note lanyard-note--error">
          ${escapeHtml(presence.error || 'User is not monitored by Lanyard.')} Make sure this Discord ID has joined the Lanyard Discord server.
        </p>
      </div>
    `;
    return;
  }

  const data = presence.data;
  const statusMeta = DISCORD_STATUS_META[data.discord_status] || DISCORD_STATUS_META.offline;
  const avatarUrl = getDiscordAvatarUrl(data.discord_user);
  const displayName = data.discord_user.global_name || data.discord_user.username;
  const platforms = [
    data.active_on_discord_desktop && 'Desktop',
    data.active_on_discord_mobile && 'Mobile',
    data.active_on_discord_web && 'Web',
  ].filter(Boolean);

  const customStatus = data.activities?.find((a) => a.type === 4);
  const primaryActivity = data.activities?.find(
    (a) => a.type !== 4 && a.name.toLowerCase() !== 'spotify'
  );

  let spotifyHtml = '';
  if (data.listening_to_spotify && data.spotify) {
    const nowMs = Date.now();
    const { start, end } = data.spotify.timestamps;
    const total = Math.max(1, end - start);
    const elapsed = Math.max(0, Math.min(total, nowMs - start));
    const pct = Math.round((elapsed / total) * 100);

    spotifyHtml = `
      <div class="lanyard-divider-block">
        <div class="lanyard-activity-row">
          ${
            data.spotify.album_art_url
              ? `<img src="${escapeHtml(data.spotify.album_art_url)}" alt="${escapeHtml(data.spotify.album)}" referrerpolicy="no-referrer" class="lanyard-asset-img" />`
              : `<div class="lanyard-asset-fallback">${ICONS.music}</div>`
          }
          <div class="lanyard-activity-text">
            <p class="lanyard-spotify-label">Listening on Spotify</p>
            <p class="lanyard-activity-title">${escapeHtml(data.spotify.song)}</p>
            <p class="lanyard-activity-sub">${escapeHtml(data.spotify.artist)} · ${escapeHtml(data.spotify.album)}</p>
          </div>
        </div>
        <div class="spotify-progress-row">
          <div class="spotify-progress-track">
            <div class="spotify-progress-fill" style="width: ${pct}%"></div>
          </div>
          <span class="spotify-progress-time tabular-nums">${formatDurationMs(elapsed)} / ${formatDurationMs(total)}</span>
        </div>
      </div>
    `;
  }

  let activityHtml = '';
  if (primaryActivity) {
    const assetUrl = getActivityAssetUrl(primaryActivity);
    const elapsedHtml = primaryActivity.timestamps?.start
      ? `<p class="lanyard-elapsed tabular-nums">${formatDurationMs(Date.now() - primaryActivity.timestamps.start)} elapsed</p>`
      : '';

    activityHtml = `
      <div class="lanyard-divider-block">
        <div class="lanyard-activity-row">
          ${
            assetUrl
              ? `<img src="${escapeHtml(assetUrl)}" alt="${escapeHtml(primaryActivity.name)}" referrerpolicy="no-referrer" class="lanyard-asset-img lanyard-asset-img--app" />`
              : `<div class="lanyard-asset-fallback lanyard-asset-fallback--app">${ICONS.gamepad}</div>`
          }
          <div class="lanyard-activity-text">
            <p class="lanyard-activity-title">${escapeHtml(primaryActivity.name)}</p>
            ${
              primaryActivity.details
                ? `<p class="lanyard-activity-sub lanyard-activity-detail">${escapeHtml(primaryActivity.details)}</p>`
                : ''
            }
            ${
              primaryActivity.state
                ? `<p class="lanyard-activity-sub">${escapeHtml(primaryActivity.state)}</p>`
                : ''
            }
            ${elapsedHtml}
          </div>
        </div>
      </div>
    `;
  }

  const customStatusHtml =
    customStatus && (customStatus.state || customStatus.emoji?.name)
      ? `
        <div class="lanyard-divider-block lanyard-custom-status">
          ${customStatus.emoji?.name ? `<span aria-hidden="true" style="margin-right: 6px;">${escapeHtml(customStatus.emoji.name)}</span>` : ''}
          <span>${escapeHtml(customStatus.state || '')}</span>
        </div>
      `
      : '';

  host.innerHTML = `
    <div class="lanyard-box">
      <div class="lanyard-top-row">
        <div class="lanyard-user-row">
          <div class="lanyard-avatar-wrap">
            <img src="${escapeHtml(avatarUrl)}" alt="${escapeHtml(displayName)}" referrerpolicy="no-referrer" class="lanyard-avatar" />
            <span aria-hidden="true" class="lanyard-avatar-dot ${statusMeta.dotClass}"></span>
          </div>
          <div class="lanyard-user-meta">
            <div class="lanyard-name-line">
              <span class="lanyard-display-name">${escapeHtml(displayName)}</span>
              <span class="lanyard-username">@${escapeHtml(data.discord_user.username)}</span>
            </div>
            <div class="lanyard-status-line">
              <span class="${statusMeta.textClass}">${statusMeta.label}</span>
              ${
                platforms.length > 0
                  ? `<span class="lanyard-sep" aria-hidden="true">·</span><span class="lanyard-platforms">${escapeHtml(platforms.join(' · '))}</span>`
                  : ''
              }
            </div>
          </div>
        </div>
        <span class="lanyard-tag">Lanyard</span>
      </div>
      ${customStatusHtml}
      ${spotifyHtml}
      ${activityHtml}
    </div>
  `;
}

function stopMemberAudioUI() {
  isPlayingTrack = false;
  trackElapsedSec = 0;
  if (trackIntervalId !== null) {
    window.clearInterval(trackIntervalId);
    trackIntervalId = null;
  }
  audioEngine.stopMemberTrack();
  syncMemberAudioUI();
}

function syncMemberAudioUI() {
  const playBtn = document.getElementById('modal-play-btn');
  const progressBar = document.getElementById('modal-track-progress');
  const timeEl = document.getElementById('modal-track-time');
  const member = selectedIndex >= 0 ? ROSTER[selectedIndex] : null;
  const duration = member ? member.sound.durationSec : 0;

  if (playBtn) {
    playBtn.innerHTML = isPlayingTrack
      ? `${ICONS.pause}<span>Pause</span>`
      : `${ICONS.play}<span>Play Track</span>`;
  }

  if (progressBar) {
    const pct = duration > 0 ? Math.min(100, (trackElapsedSec / duration) * 100) : 0;
    progressBar.style.width = `${pct}%`;
  }

  if (timeEl) {
    timeEl.textContent = `${formatSeconds(trackElapsedSec)} / ${formatSeconds(duration)}`;
  }
}

function cancelModalAnimations() {
  if (activeModalFlipAnim) {
    activeModalFlipAnim.cancel();
    activeModalFlipAnim = null;
  }
  if (activeBackdropAnim) {
    activeBackdropAnim.cancel();
    activeBackdropAnim = null;
  }
}

function populateModal(member) {
  const plateCode = document.getElementById('modal-plate-code');
  const counter = document.getElementById('modal-counter');
  const mediaBox = document.getElementById('modal-media-box');
  const metaLine = document.getElementById('modal-meta-line');
  const titleEl = document.getElementById('modal-title');
  const statementEl = document.getElementById('modal-statement');
  const mediumEl = document.getElementById('modal-medium');
  const handleTextEl = document.getElementById('modal-handle-text');
  const handleIconEl = document.getElementById('modal-handle-icon');
  const tuningEl = document.getElementById('modal-tuning');
  const trackTitleEl = document.getElementById('modal-track-title');

  if (plateCode) plateCode.textContent = member.plateCode;
  if (counter) {
    counter.textContent = `${String(selectedIndex + 1).padStart(2, '0')} of ${String(ROSTER.length).padStart(2, '0')}`;
  }

  if (mediaBox) {
    mediaBox.innerHTML = '';
    mediaBox.appendChild(createPortraitMedia(member, 560));
  }

  if (metaLine) {
    metaLine.innerHTML = `
      <span>${escapeHtml(member.disciplineLabel)}</span>
      <span aria-hidden="true">·</span>
      <span>${escapeHtml(member.location)}</span>
      <span aria-hidden="true">·</span>
      <span class="tabular-nums">Since ${escapeHtml(member.joinedYear)}</span>
    `;
  }

  if (titleEl) titleEl.textContent = member.name;
  if (statementEl) statementEl.textContent = member.statement;
  if (mediumEl) mediumEl.textContent = member.medium;
  if (handleTextEl) handleTextEl.textContent = member.handle;
  if (handleIconEl) handleIconEl.innerHTML = ICONS.copy;
  if (tuningEl) tuningEl.textContent = `${member.sound.baseHz.toFixed(2)} Hz · ${member.sound.texture}`;
  if (trackTitleEl) trackTitleEl.textContent = member.sound.trackTitle;

  renderModalPresence(member);
  stopMemberAudioUI();
}

function openMemberModal(index, direction = 0) {
  if (index < 0 || index >= ROSTER.length) return;
  const modal = document.getElementById('member-modal');
  const dialog = document.getElementById('modal-dialog');
  if (!modal || !dialog) return;

  modalNavEpoch += 1;
  const currentEpoch = modalNavEpoch;
  const wasClosed = modal.classList.contains('is-hidden');
  selectedIndex = index;

  if (wasClosed) {
    cancelModalAnimations();
    setPickedFanCard(index);
    populateModal(ROSTER[index]);
    modal.classList.remove('is-hidden');
    dialog.focus({ preventScroll: true });

    if (!reducedMotionQuery.matches) {
      activeBackdropAnim = modal.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 260,
        easing: 'ease-out',
        fill: 'none',
      });
      activeModalFlipAnim = dialog.animate(
        [
          {
            offset: 0,
            opacity: 0,
            transform: 'rotateY(-88deg) rotateX(4deg) scale(0.88)',
          },
          {
            offset: 0.62,
            opacity: 1,
            transform: 'rotateY(7deg) rotateX(-1deg) scale(1.012)',
          },
          {
            offset: 1,
            opacity: 1,
            transform: 'rotateY(0deg) rotateX(0deg) scale(1)',
          },
        ],
        {
          duration: 480,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          fill: 'none',
        }
      );
      activeModalFlipAnim.onfinish = () => {
        if (currentEpoch === modalNavEpoch) {
          activeModalFlipAnim = null;
        }
      };
    }
    return;
  }

  const dir = direction >= 0 ? 1 : -1;
  setPickedFanCard(index, dir);

  if (reducedMotionQuery.matches) {
    cancelModalAnimations();
    populateModal(ROSTER[index]);
    return;
  }

  cancelModalAnimations();

  // Phase 1: Flip current profile edge-on
  const outAnim = dialog.animate(
    [
      {
        offset: 0,
        opacity: 1,
        transform: 'rotateY(0deg) rotateX(0deg) scale(1)',
      },
      {
        offset: 1,
        opacity: 0.3,
        transform: `rotateY(${dir * -88}deg) rotateX(2deg) scale(0.94)`,
      },
    ],
    {
      duration: 170,
      easing: 'cubic-bezier(0.4, 0, 0.7, 0.2)',
      fill: 'forwards',
    }
  );
  activeModalFlipAnim = outAnim;

  outAnim.onfinish = () => {
    if (currentEpoch !== modalNavEpoch || selectedIndex < 0) {
      outAnim.cancel();
      return;
    }

    populateModal(ROSTER[selectedIndex]);
    outAnim.cancel();

    // Phase 2: Flip new profile into place from the opposite edge
    const inAnim = dialog.animate(
      [
        {
          offset: 0,
          opacity: 0.3,
          transform: `rotateY(${dir * 88}deg) rotateX(-2deg) scale(0.94)`,
        },
        {
          offset: 0.72,
          opacity: 1,
          transform: `rotateY(${dir * -5}deg) rotateX(0deg) scale(1.008)`,
        },
        {
          offset: 1,
          opacity: 1,
          transform: 'rotateY(0deg) rotateX(0deg) scale(1)',
        },
      ],
      {
        duration: 340,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        fill: 'none',
      }
    );
    activeModalFlipAnim = inAnim;
    inAnim.onfinish = () => {
      if (currentEpoch === modalNavEpoch) {
        activeModalFlipAnim = null;
      }
    };
  };
}

function closeMemberModal() {
  const modal = document.getElementById('member-modal');
  const dialog = document.getElementById('modal-dialog');
  if (!modal || modal.classList.contains('is-hidden') || selectedIndex < 0) return;

  modalNavEpoch += 1;
  const currentEpoch = modalNavEpoch;
  cancelModalAnimations();
  selectedIndex = -1;
  stopMemberAudioUI();

  if (!dialog || reducedMotionQuery.matches) {
    modal.classList.add('is-hidden');
    fanPausedByHover = Boolean(document.querySelector('#roster-grid .card-front-btn:hover'));
    startFanAutoCycle();
    return;
  }

  activeBackdropAnim = modal.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 210,
    easing: 'ease-in',
    fill: 'forwards',
  });
  activeModalFlipAnim = dialog.animate(
    [
      { opacity: 1, transform: 'rotateY(0deg) rotateX(0deg) scale(1)' },
      { opacity: 0, transform: 'rotateY(52deg) rotateX(3deg) scale(0.92)' },
    ],
    {
      duration: 210,
      easing: 'cubic-bezier(0.4, 0, 1, 1)',
      fill: 'forwards',
    }
  );
  activeModalFlipAnim.onfinish = () => {
    if (currentEpoch !== modalNavEpoch || selectedIndex >= 0) return;
    cancelModalAnimations();
    modal.classList.add('is-hidden');
    fanPausedByHover = Boolean(document.querySelector('#roster-grid .card-front-btn:hover'));
    startFanAutoCycle();
  };
}

function navigateModal(step) {
  if (selectedIndex < 0) return;
  const nextIdx = (selectedIndex + step + ROSTER.length) % ROSTER.length;
  openMemberModal(nextIdx, step);
}

function initModalEvents() {
  const modal = document.getElementById('member-modal');
  const dialog = document.getElementById('modal-dialog');
  const prevBtn = document.getElementById('modal-prev-btn');
  const nextBtn = document.getElementById('modal-next-btn');
  const closeBtn = document.getElementById('modal-close-btn');
  const playBtn = document.getElementById('modal-play-btn');
  const handleBtn = document.getElementById('modal-handle-btn');

  modal?.addEventListener('click', closeMemberModal);
  dialog?.addEventListener('click', (e) => e.stopPropagation());
  prevBtn?.addEventListener('click', () => navigateModal(-1));
  nextBtn?.addEventListener('click', () => navigateModal(1));
  closeBtn?.addEventListener('click', closeMemberModal);

  playBtn?.addEventListener('click', () => {
    if (selectedIndex < 0) return;
    const member = ROSTER[selectedIndex];
    if (isPlayingTrack) {
      stopMemberAudioUI();
      return;
    }

    audioEngine.playMemberTrack(member.sound);
    isPlayingTrack = true;
    syncMemberAudioUI();

    trackIntervalId = window.setInterval(() => {
      if (!isPlayingTrack || selectedIndex < 0) return;
      const current = ROSTER[selectedIndex];
      if (trackElapsedSec + 1 >= current.sound.durationSec) {
        stopMemberAudioUI();
      } else {
        trackElapsedSec += 1;
        syncMemberAudioUI();
      }
    }, 1000);
  });

  handleBtn?.addEventListener('click', async () => {
    if (selectedIndex < 0) return;
    const iconEl = document.getElementById('modal-handle-icon');
    try {
      await navigator.clipboard.writeText(ROSTER[selectedIndex].handle);
      if (iconEl) iconEl.innerHTML = ICONS.check;
      window.setTimeout(() => {
        if (iconEl) iconEl.innerHTML = ICONS.copy;
      }, 1800);
    } catch {
      // Clipboard restricted
    }
  });

  window.addEventListener('keydown', (e) => {
    if (selectedIndex < 0) return;
    const target = e.target;
    const isTyping =
      target instanceof HTMLElement &&
      (target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable);

    if (e.key === 'Escape') {
      e.preventDefault();
      closeMemberModal();
    } else if (!isTyping && e.key === 'ArrowLeft') {
      e.preventDefault();
      navigateModal(-1);
    } else if (!isTyping && e.key === 'ArrowRight') {
      e.preventDefault();
      navigateModal(1);
    }
  });
}

// ============================================================================
// YouTube Background Music Controller
// ============================================================================

let ytPlayer = null;
let ytReady = false;
let musicPlaying = false;
let musicMutedFallback = false;
let userPausedMusic = false;
let wantsAutoPlayMusic = true;
let musicVolume = BACKGROUND_MUSIC.startVolume;

function syncMusicUI() {
  const playerBox = document.getElementById('music-player');
  const toggleBtn = document.getElementById('music-toggle-btn');
  const iconHost = document.getElementById('music-toggle-icon');
  const statusEl = document.getElementById('music-status');

  const isAudiblePlaying = musicPlaying && !musicMutedFallback;

  if (playerBox) {
    playerBox.classList.toggle('is-playing', isAudiblePlaying);
  }
  if (iconHost) {
    iconHost.innerHTML = isAudiblePlaying ? ICONS.pause : ICONS.play;
  }
  if (toggleBtn) {
    toggleBtn.setAttribute(
      'aria-label',
      isAudiblePlaying ? 'Pause background music' : 'Play background music'
    );
  }
  if (statusEl) {
    if (musicPlaying && musicMutedFallback) {
      statusEl.textContent = 'Click anywhere for sound';
    } else if (musicPlaying) {
      statusEl.textContent = 'Playing';
    } else if (userPausedMusic) {
      statusEl.textContent = 'Paused';
    } else {
      statusEl.textContent = 'Starting audio...';
    }
  }
}

function tryPlayMusic() {
  wantsAutoPlayMusic = true;
  if (!ytReady || !ytPlayer || userPausedMusic) return;
  try {
    musicMutedFallback = false;
    ytPlayer.unMute();
    ytPlayer.setVolume(musicVolume);
    ytPlayer.playVideo();
    syncMusicUI();
  } catch {
    // Autoplay blocked until direct user interaction
  }
}

function unlockAndPlayMusic() {
  if (userPausedMusic) return;
  tryPlayMusic();
}

function initBackgroundMusic() {
  const toggleBtn = document.getElementById('music-toggle-btn');
  const volumeSlider = document.getElementById('music-volume');
  const titleEl = document.getElementById('music-title');

  if (volumeSlider) {
    volumeSlider.value = String(musicVolume);
    volumeSlider.addEventListener('input', (e) => {
      const val = Number(e.target.value);
      if (Number.isNaN(val)) return;
      musicVolume = val;
      if (ytReady && ytPlayer) {
        try {
          if (val > 0 && ytPlayer.isMuted?.()) {
            musicMutedFallback = false;
            ytPlayer.unMute();
          }
          ytPlayer.setVolume(val);
          syncMusicUI();
        } catch {
          // Ignore player volume error
        }
      }
    });
  }

  toggleBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!ytReady || !ytPlayer) {
      wantsAutoPlayMusic = !wantsAutoPlayMusic;
      return;
    }
    try {
      if (musicPlaying && musicMutedFallback) {
        userPausedMusic = false;
        musicMutedFallback = false;
        wantsAutoPlayMusic = true;
        ytPlayer.unMute();
        ytPlayer.setVolume(musicVolume);
        ytPlayer.playVideo();
        syncMusicUI();
      } else if (musicPlaying) {
        userPausedMusic = true;
        wantsAutoPlayMusic = false;
        ytPlayer.pauseVideo();
        musicPlaying = false;
        syncMusicUI();
      } else {
        userPausedMusic = false;
        musicMutedFallback = false;
        wantsAutoPlayMusic = true;
        ytPlayer.unMute();
        ytPlayer.setVolume(musicVolume);
        ytPlayer.playVideo();
        syncMusicUI();
      }
    } catch {
      // Ignore player toggle error
    }
  });

  // Unlock / unmute playback immediately on the first user gesture anywhere
  const detachGestureListeners = () => {
    window.removeEventListener('pointerdown', onUnlockGesture, true);
    window.removeEventListener('keydown', onUnlockGesture, true);
    window.removeEventListener('touchstart', onUnlockGesture, true);
  };

  const onUnlockGesture = (e) => {
    const target = e.target;
    if (target instanceof Element && target.closest('#music-player')) return;
    if (!userPausedMusic && (!musicPlaying || musicMutedFallback || ytPlayer?.isMuted?.())) {
      musicMutedFallback = false;
      tryPlayMusic();
    }
    if (ytReady && !musicMutedFallback) {
      detachGestureListeners();
    }
  };
  window.addEventListener('pointerdown', onUnlockGesture, true);
  window.addEventListener('keydown', onUnlockGesture, true);
  window.addEventListener('touchstart', onUnlockGesture, true);

  syncMusicUI();

  const mountPlayer = () => {
    if (!window.YT || typeof window.YT.Player !== 'function') return;
    const origin =
      window.location.origin && window.location.origin !== 'null'
        ? window.location.origin
        : undefined;

    ytPlayer = new window.YT.Player('yt-music-host', {
      height: '1',
      width: '1',
      videoId: BACKGROUND_MUSIC.videoId,
      playerVars: {
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        fs: 0,
        loop: 1,
        modestbranding: 1,
        mute: 0,
        playlist: BACKGROUND_MUSIC.videoId,
        playsinline: 1,
        rel: 0,
        start: BACKGROUND_MUSIC.startSeconds,
        origin,
      },
      events: {
        onReady: (event) => {
          ytReady = true;
          try {
            const iframe = event.target.getIframe?.();
            if (iframe) {
              iframe.setAttribute('allow', 'autoplay; encrypted-media');
            }
            const data = event.target.getVideoData?.();
            if (titleEl && data?.title) {
              titleEl.textContent = data.title;
            }
            if (wantsAutoPlayMusic && !userPausedMusic) {
              musicMutedFallback = false;
              event.target.unMute();
              event.target.setVolume(musicVolume);
              event.target.seekTo?.(BACKGROUND_MUSIC.startSeconds, true);
              event.target.playVideo();

              // Only fall back to muted autoplay if genuinely stuck unstarted/cued (never while buffering)
              window.setTimeout(() => {
                if (userPausedMusic || musicMutedFallback) return;
                const state = event.target.getPlayerState?.();
                if (state === -1 || state === 5 || state === 2) {
                  try {
                    musicMutedFallback = true;
                    event.target.mute();
                    event.target.playVideo();
                    syncMusicUI();
                  } catch {
                    // Ignore muted autoplay fallback error
                  }
                }
              }, 1600);
            }
          } catch {
            // Ignore initial setup error
          }
        },
        onAutoplayBlocked: (event) => {
          if (userPausedMusic) return;
          try {
            musicMutedFallback = true;
            event.target.mute();
            event.target.playVideo();
            syncMusicUI();
          } catch {
            // Wait for user gesture
          }
        },
        onStateChange: (event) => {
          const state = event.data;
          if (state === 1) {
            musicPlaying = true;
            try {
              musicMutedFallback = Boolean(event.target.isMuted?.());
            } catch {
              // Keep current flag
            }
            const data = event.target.getVideoData?.();
            if (titleEl && data?.title) {
              titleEl.textContent = data.title;
            }
            if (!musicMutedFallback) {
              detachGestureListeners();
            }
            syncMusicUI();
          } else if (state === 2) {
            musicPlaying = false;
            syncMusicUI();
          } else if (state === 0) {
            try {
              event.target.seekTo(BACKGROUND_MUSIC.startSeconds, true);
              event.target.playVideo();
            } catch {
              // Ignore loop replay error
            }
          }
        },
        onError: () => {
          const statusEl = document.getElementById('music-status');
          if (statusEl) statusEl.textContent = 'Track unavailable';
        },
      },
    });
  };

  if (window.YT && typeof window.YT.Player === 'function') {
    mountPlayer();
  } else {
    const prevReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof prevReady === 'function') prevReady();
      mountPlayer();
    };
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    tag.async = true;
    document.head.appendChild(tag);
  }
}

// ============================================================================
// Cursor-Chasing Hello Kitty Chibi Cat
// ============================================================================

function initCursorChaserCat() {
  const catEl = document.getElementById('cursor-cat');
  const flipEl = document.getElementById('cursor-cat-flip');
  if (!catEl || !flipEl) return;

  let hasPointer = false;
  let targetX = window.innerWidth * 0.5;
  let targetY = window.innerHeight * 0.5;
  let catX = targetX - 90;
  let catY = targetY + 32;
  let facing = 1;
  let runPhase = 0;
  let rafId = 0;
  let lastTick = 0;
  let lastHeartAt = 0;
  let activePuffs = 0;

  const stopRadius = 34;

  const spawnHeartPuff = (x, y) => {
    if (activePuffs >= 5 || reducedMotionQuery.matches) return;
    activePuffs += 1;
    const puff = document.createElement('span');
    puff.className = 'cursor-cat-puff';
    puff.setAttribute('aria-hidden', 'true');
    puff.textContent = '♥';
    puff.style.left = `${x}px`;
    puff.style.top = `${y}px`;
    document.body.appendChild(puff);
    window.setTimeout(() => {
      puff.remove();
      activePuffs = Math.max(0, activePuffs - 1);
    }, 580);
  };

  const applyTransform = (tiltDeg, bobY) => {
    catEl.style.transform = `translate3d(${(catX - 27).toFixed(1)}px, ${(catY - 30 - bobY).toFixed(1)}px, 0)`;
    flipEl.style.setProperty('--cat-dir', String(facing));
    flipEl.style.setProperty('--cat-tilt', `${tiltDeg.toFixed(1)}deg`);
  };

  const tick = (now) => {
    if (reducedMotionQuery.matches) {
      catEl.classList.add('is-hidden');
      rafId = 0;
      return;
    }

    const dt = lastTick === 0 ? 0.016 : Math.min(0.05, Math.max(0.001, (now - lastTick) / 1000));
    lastTick = now;

    const dx = targetX - catX;
    const dy = targetY - catY;
    const dist = Math.hypot(dx, dy);

    if (Math.abs(dx) > 8) {
      facing = dx >= 0 ? 1 : -1;
    }

    if (dist > stopRadius + 0.8) {
      const travelDist = dist - stopRadius;
      const desiredSpeed = Math.min(640, Math.max(70, travelDist * 5.6));
      const step = Math.min(travelDist, desiredSpeed * dt);
      catX += (dx / dist) * step;
      catY += (dy / dist) * step;

      const speed = step / dt;
      const isSprinting = speed > 45;
      catEl.classList.toggle('is-running', isSprinting);

      runPhase += dt * (10 + Math.min(12, speed * 0.018));
      const bobY = isSprinting ? Math.abs(Math.sin(runPhase)) * 5.5 : 0;
      const tiltDeg = isSprinting ? Math.min(11, speed * 0.018) : 0;
      applyTransform(tiltDeg, bobY);

      if (speed > 260 && now - lastHeartAt > 200) {
        lastHeartAt = now;
        spawnHeartPuff(catX - facing * 16, catY + 8);
      }

      rafId = window.requestAnimationFrame(tick);
    } else {
      catEl.classList.remove('is-running');
      applyTransform(0, 0);
      rafId = 0;
      lastTick = 0;
    }
  };

  const ensureLoop = () => {
    if (rafId === 0 && hasPointer && !reducedMotionQuery.matches) {
      lastTick = 0;
      rafId = window.requestAnimationFrame(tick);
    }
  };

  const onPointerMove = (e) => {
    if (e.pointerType === 'touch' || reducedMotionQuery.matches) return;
    targetX = e.clientX;
    targetY = e.clientY;

    if (!hasPointer) {
      hasPointer = true;
      catX = Math.max(24, Math.min(window.innerWidth - 24, targetX - 96));
      catY = Math.max(24, Math.min(window.innerHeight - 24, targetY + 34));
      catEl.classList.remove('is-hidden', 'is-faded');
      applyTransform(0, 0);
    } else {
      catEl.classList.remove('is-faded');
    }

    ensureLoop();
  };

  window.addEventListener('pointermove', onPointerMove, { passive: true });

  document.documentElement.addEventListener('mouseleave', () => {
    catEl.classList.add('is-faded');
  });

  document.documentElement.addEventListener('mouseenter', () => {
    if (hasPointer && !reducedMotionQuery.matches) {
      catEl.classList.remove('is-faded');
      ensureLoop();
    }
  });
}

// ============================================================================
// Bootstrap
// ============================================================================

function initApp() {
  initBackgroundMusic();
  initCursorChaserCat();
  renderRosterGrid();
  renderHallOfFame();
  initModalEvents();
  startLanyard();

  document.getElementById('fan-prev-btn')?.addEventListener('click', () => {
    stepPickedFanCard(-1);
  });

  document.getElementById('fan-next-btn')?.addEventListener('click', () => {
    stepPickedFanCard(1);
  });

  document.getElementById('replay-intro-btn')?.addEventListener('click', () => {
    runLoadingScreen();
  });

  runLoadingScreen();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

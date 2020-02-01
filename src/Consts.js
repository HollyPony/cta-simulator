const ifDefined = (condition, fct) => condition && fct(condition)

export const RARITIES = {
  COMMON: 1,
  RARE: 2,
  EPIC: 3,
  LEGENDARY: 4
}

export const getRarityName = infos => ifDefined(Object.entries(RARITIES).find(value => value[1] === infos.rarity), res => res[0])

export const TYPES = {
  LIGHT: 1,
  DARK: 2,
  FIRE: 4,
  WATER: 8,
  EARTH: 16
}

export const getTypeName = infos => ifDefined(Object.entries(TYPES).find(value => value[1] === infos.type), res => res[0])

export const JOBS = {
  BRAWLER: 1,
  BARBARIAN: 2,
  KNIGHT: 4,
  ROGUE: 8,
  LANCER: 16,
  SAMURAI: 32,
  RANGER: 64,
  MAGICIAN: 128,
  GUNNER: 256,
  SUPPORT: 512
}

export const getJobName = infos => ifDefined(Object.entries(JOBS).find(value => value[1] === infos.job), res => res[0])

/**
 * `%` : for percentage
 * `*` : for ratio (multiplier)
 */
export const DEFAULT_STATS = {
  atk: 0, // Attack
  hp: 0, // Life
  def: 0, // defense
  ctkRate: 0, // Critical rate %
  ctkDam: 100, // Cricical damage %
  aps: 1.00, // Attack per second *
  atkRange: 0, // Attack range
  moveSpeed: 0, // Move speed
  effectResistance: 0, // Effect resistance %
  frenzy: 0, // Frenzy Chance %
  dodge: 0, // Dodge Rate %
  stunChance: undefined, // Stun chance %
  stunTime: undefined, // Stun time %
  atkAoe: undefined, // Attack Area of Effect %
  ultimateAtk: 0, // Ultimate attack %
  knightShield: undefined, // Knight Shield HP %
  bonusGold: 0, // Bonus gold %
  freezeChance: undefined, // Freeze chance %
  freezeTime: undefined, // Freeze time %
  freezeExplosionDmg: undefined, // Freeze explosion damage %
  burnChance: undefined, // Burn chance %
  burnTime: undefined, // Burn time %
  burnDmg: undefined, // Burn damage %
  poisonChance: undefined, // Poison chance %
  poisonTime: undefined, // Poison time %
  poisonDmg: undefined // Poison damage %
}

export const CHARACTERS = {
  'akwa': {
    rarity: RARITIES.RARE,
    type: TYPES.WATER,
    job: JOBS.BRAWLER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {
      atk: 48,
      hp: 360,
      def: 20,
      ctkRate: 20,
      atkRange: 200,
      moveSpeed: 140,
      effectResistance: 24,
      freezeChance: 0,
    }),
    buff: {
      water: 'aps +10%',
    },
  },
  'alda': {
    rarity: RARITIES.EPIC,
    type: TYPES.FIRE,
    job: JOBS.RANGER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {
      atk: 38,
      hp: 240,
      def: 6,
      ctkRate: 25,
      atkRange: 555,
      moveSpeed: 150,
      effectResistance: 6,
      burnChance: 0,
      burnTime: 0,
      burnDmg: 0,
    }),
    buff: {
      all: 'ctkDam + 300%',
    },
  },
  'angelica': {
    rarity: RARITIES.LEGENDARY,
    type: TYPES.LIGHT,
    job: JOBS.SUPPORT,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {
      atk: 14,
      hp: 500,
      def: 20,
      aps: 0.33,
      atkRange: 650,
      moveSpeed: 100,
      effectResistance: 35,
    }),
    buff: {
      all: 'hp + 500%'
    },
  },
  'arcana': {
    rarity: RARITIES.RARE,
    type: TYPES.LIGHT,
    job: JOBS.RANGER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'atlantus': {
    rarity: RARITIES.RARE,
    type: TYPES.WATER,
    job: JOBS.LANCER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'bat': {
    rarity: RARITIES.COMMON,
    type: TYPES.DARK,
    job: JOBS.MAGICIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {
      atk: 52,
      hp: 220,
      def: 8,
      ctkRate: 15,
      atkRange: 150,
      moveSpeed: 250,
      effectResistance: 18
    }),
  },
  'big-eye': {
    rarity: RARITIES.COMMON,
    type: TYPES.LIGHT,
    job: JOBS.MAGICIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'black-beard': {
    rarity: RARITIES.RARE,
    type: TYPES.WATER,
    job: JOBS.KNIGHT,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'blue-fish': {
    rarity: RARITIES.COMMON,
    type: TYPES.WATER,
    job: JOBS.MAGICIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'bugonaut-archer': {
    rarity: RARITIES.COMMON,
    type: TYPES.WATER,
    job: JOBS.RANGER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'bugonaut-fighter': {
    rarity: RARITIES.COMMON,
    type: TYPES.WATER,
    job: JOBS.ROGUE,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'bugonaut-giant': {
    rarity: RARITIES.COMMON,
    type: TYPES.WATER,
    job: JOBS.BARBARIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'bugonaut-spear': {
    rarity: RARITIES.COMMON,
    type: TYPES.WATER,
    job: JOBS.LANCER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'chaos': {
    rarity: RARITIES.RARE,
    type: TYPES.DARK,
    job: JOBS.BARBARIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'circe': {
    rarity: RARITIES.RARE,
    type: TYPES.DARK,
    job: JOBS.MAGICIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'clawdette': {
    rarity: RARITIES.EPIC,
    type: TYPES.EARTH,
    job: JOBS.BRAWLER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'dark-hunter': {
    rarity: RARITIES.RARE,
    type: TYPES.DARK,
    job: JOBS.RANGER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'dark-knight': {
    rarity: RARITIES.RARE,
    type: TYPES.DARK,
    job: JOBS.KNIGHT,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'dark-wolf': {
    rarity: RARITIES.RARE,
    type: TYPES.DARK,
    job: JOBS.MAGICIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'fire-monk': {
    rarity: RARITIES.RARE,
    type: TYPES.FIRE,
    job: JOBS.MAGICIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'frost-queen': {
    rarity: RARITIES.EPIC,
    type: TYPES.WATER,
    job: JOBS.MAGICIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'furiosa': {
    rarity: RARITIES.RARE,
    type: TYPES.FIRE,
    job: JOBS.KNIGHT,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'gladiator': {
    rarity: RARITIES.RARE,
    type: TYPES.EARTH,
    job: JOBS.BARBARIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'goddess': {
    rarity: RARITIES.RARE,
    type: TYPES.WATER,
    job: JOBS.SUPPORT,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'gold-knight': {
    rarity: RARITIES.RARE,
    type: TYPES.LIGHT,
    job: JOBS.KNIGHT,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'green-faery': {
    rarity: RARITIES.EPIC,
    type: TYPES.EARTH,
    job: JOBS.SUPPORT,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'groovine': {
    rarity: RARITIES.RARE,
    type: TYPES.EARTH,
    job: JOBS.MAGICIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'hikari': {
    rarity: RARITIES.EPIC,
    type: TYPES.LIGHT,
    job: JOBS.SAMURAI,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'hooky': {
    rarity: RARITIES.EPIC,
    type: TYPES.EARTH,
    job: JOBS.GUNNER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'ice-cube': {
    rarity: RARITIES.EPIC,
    type: TYPES.EARTH,
    job: JOBS.BARBARIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'ice-knight': {
    rarity: RARITIES.RARE,
    type: TYPES.WATER,
    job: JOBS.KNIGHT,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'jasmine': {
    rarity: RARITIES.RARE,
    type: TYPES.FIRE,
    job: JOBS.ROGUE,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'joan-of-arc': {
    rarity: RARITIES.RARE,
    type: TYPES.LIGHT,
    job: JOBS.LANCER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'kage': {
    rarity: RARITIES.RARE,
    type: TYPES.DARK,
    job: JOBS.SAMURAI,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'kasai': {
    rarity: RARITIES.RARE,
    type: TYPES.FIRE,
    job: JOBS.SAMURAI,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'kasumi': {
    rarity: RARITIES.RARE,
    type: TYPES.DARK,
    job: JOBS.ROGUE,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'krouki': {
    rarity: RARITIES.RARE,
    type: TYPES.EARTH,
    job: JOBS.GUNNER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'krunk': {
    rarity: RARITIES.RARE,
    type: TYPES.LIGHT,
    job: JOBS.GUNNER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'leaf-blade': {
    rarity: RARITIES.EPIC,
    type: TYPES.EARTH,
    job: JOBS.KNIGHT,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'light-knight': {
    rarity: RARITIES.COMMON,
    type: TYPES.LIGHT,
    job: JOBS.ROGUE,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'luka': {
    rarity: RARITIES.RARE,
    type: TYPES.WATER,
    job: JOBS.ROGUE,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'magmus': {
    rarity: RARITIES.RARE,
    type: TYPES.FIRE,
    job: JOBS.BARBARIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'mecha-valken': {
    rarity: RARITIES.RARE,
    type: TYPES.FIRE,
    job: JOBS.BRAWLER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'merlinus': {
    rarity: RARITIES.RARE,
    type: TYPES.LIGHT,
    job: JOBS.SUPPORT,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'misty': {
    rarity: RARITIES.RARE,
    type: TYPES.EARTH,
    job: JOBS.GUNNER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'mizu': {
    rarity: RARITIES.RARE,
    type: TYPES.WATER,
    job: JOBS.SAMURAI,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'monki-king': {
    rarity: RARITIES.RARE,
    type: TYPES.FIRE,
    job: JOBS.LANCER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'monki-mortar': {
    rarity: RARITIES.RARE,
    type: TYPES.DARK,
    job: JOBS.GUNNER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'monki-robot': {
    rarity: RARITIES.EPIC,
    type: TYPES.LIGHT,
    job: JOBS.BRAWLER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'musashi': {
    rarity: RARITIES.RARE,
    type: TYPES.EARTH,
    job: JOBS.SAMURAI,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'namida': {
    rarity: RARITIES.EPIC,
    type: TYPES.WATER,
    job: JOBS.GUNNER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'natura': {
    rarity: RARITIES.RARE,
    type: TYPES.EARTH,
    job: JOBS.LANCER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'necromancer': {
    rarity: RARITIES.EPIC,
    type: TYPES.DARK,
    job: JOBS.MAGICIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'neko': {
    rarity: RARITIES.RARE,
    type: TYPES.DARK,
    job: JOBS.BRAWLER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'oceana': {
    rarity: RARITIES.RARE,
    type: TYPES.WATER,
    job: JOBS.MAGICIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'one-eye': {
    rarity: RARITIES.RARE,
    type: TYPES.LIGHT,
    job: JOBS.ROGUE,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'onyx': {
    rarity: RARITIES.EPIC,
    type: TYPES.DARK,
    job: JOBS.LANCER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'ornok': {
    rarity: RARITIES.LEGENDARY,
    type: TYPES.DARK,
    job: JOBS.KNIGHT,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'paladin': {
    rarity: RARITIES.EPIC,
    type: TYPES.LIGHT,
    job: JOBS.KNIGHT,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'petunia': {
    rarity: RARITIES.EPIC,
    type: TYPES.EARTH,
    job: JOBS.MAGICIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'pinky': {
    rarity: RARITIES.RARE,
    type: TYPES.EARTH,
    job: JOBS.ROGUE,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'pirato': {
    rarity: RARITIES.RARE,
    type: TYPES.WATER,
    job: JOBS.GUNNER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'pumpking': {
    rarity: RARITIES.RARE,
    type: TYPES.EARTH,
    job: JOBS.BARBARIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'ra': {
    rarity: RARITIES.RARE,
    type: TYPES.LIGHT,
    job: JOBS.MAGICIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'robin-hood': {
    rarity: RARITIES.RARE,
    type: TYPES.EARTH,
    job: JOBS.RANGER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'rufus': {
    rarity: RARITIES.RARE,
    type: TYPES.WATER,
    job: JOBS.GUNNER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'scud': {
    rarity: RARITIES.EPIC,
    type: TYPES.FIRE,
    job: JOBS.GUNNER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'ser-shu': {
    rarity: RARITIES.RARE,
    type: TYPES.LIGHT,
    job: JOBS.LANCER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'siegfried': {
    rarity: RARITIES.RARE,
    type: TYPES.LIGHT,
    job: JOBS.BARBARIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'skeleton-giant': {
    rarity: RARITIES.COMMON,
    type: TYPES.DARK,
    job: JOBS.BARBARIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'skeleton-infantry': {
    rarity: RARITIES.COMMON,
    type: TYPES.DARK,
    job: JOBS.ROGUE,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'skeleton-ranger': {
    rarity: RARITIES.COMMON,
    type: TYPES.DARK,
    job: JOBS.RANGER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'snowman': {
    rarity: RARITIES.RARE,
    type: TYPES.WATER,
    job: JOBS.RANGER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'sorrow': {
    rarity: RARITIES.RARE,
    type: TYPES.DARK,
    job: JOBS.GUNNER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'spark': {
    rarity: RARITIES.RARE,
    type: TYPES.FIRE,
    job: JOBS.RANGER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'spike': {
    rarity: RARITIES.COMMON,
    type: TYPES.LIGHT,
    job: JOBS.BARBARIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'sprout': {
    rarity: RARITIES.COMMON,
    type: TYPES.EARTH,
    job: JOBS.MAGICIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'spyro': {
    rarity: RARITIES.RARE,
    type: TYPES.FIRE,
    job: JOBS.LANCER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'swift': {
    rarity: RARITIES.COMMON,
    type: TYPES.LIGHT,
    job: JOBS.RANGER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'tellus': {
    rarity: RARITIES.RARE,
    type: TYPES.EARTH,
    job: JOBS.BRAWLER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'tesla': {
    rarity: RARITIES.EPIC,
    type: TYPES.LIGHT,
    job: JOBS.MAGICIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'thor': {
    rarity: RARITIES.RARE,
    type: TYPES.LIGHT,
    job: JOBS.BARBARIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'thorn': {
    rarity: RARITIES.EPIC,
    type: TYPES.EARTH,
    job: JOBS.MAGICIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'tiny-dragon': {
    rarity: RARITIES.COMMON,
    type: TYPES.FIRE,
    job: JOBS.MAGICIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'torch': {
    rarity: RARITIES.EPIC,
    type: TYPES.FIRE,
    job: JOBS.GUNNER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'valkyrie': {
    rarity: RARITIES.EPIC,
    type: TYPES.WATER,
    job: JOBS.RANGER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'vlad': {
    rarity: RARITIES.EPIC,
    type: TYPES.DARK,
    job: JOBS.SUPPORT,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'voodoo-archer': {
    rarity: RARITIES.COMMON,
    type: TYPES.EARTH,
    job: JOBS.RANGER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'voodoo-dagger': {
    rarity: RARITIES.COMMON,
    type: TYPES.EARTH,
    job: JOBS.ROGUE,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'voodoo-spear': {
    rarity: RARITIES.COMMON,
    type: TYPES.EARTH,
    job: JOBS.LANCER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'vulcan-archer': {
    rarity: RARITIES.COMMON,
    type: TYPES.FIRE,
    job: JOBS.RANGER,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'vulcan-fighter': {
    rarity: RARITIES.COMMON,
    type: TYPES.FIRE,
    job: JOBS.ROGUE,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'vulcan-hammer': {
    rarity: RARITIES.COMMON,
    type: TYPES.FIRE,
    job: JOBS.BARBARIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'wolfie': {
    rarity: RARITIES.RARE,
    type: TYPES.EARTH,
    job: JOBS.BARBARIAN,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
  'xak': {
    rarity: RARITIES.RARE,
    type: TYPES.FIRE,
    job: JOBS.SUPPORT,
    statsFor: 1,
    stats: Object.assign({}, DEFAULT_STATS, {}),
  },
}

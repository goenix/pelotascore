import { add_stats } from '../add_stats';

const _52MatchStats = {
  GP: 1,
  W: 1,
  D: 0,
  L: 0,
  GF: 5,
  GA: 2,
  GD: 3,
  Pts: 3,
  FTS: 0,
  CS: 0,
  BTS: 1,
  S2G: 1,
  C2G: 1,
  S3G: 1,
  C3G: 0,
  WW: 0,
  WD: 0,
  WL: 0,
  DW: 1,
  DD: 0,
  DL: 0,
  LW: 0,
  LD: 0,
  LL: 0,
  P15: 1,
  P25: 1,
  P35: 1,
  P45: 1,
  _1HT: {
    W: 0,
    D: 1,
    L: 0,
    FTS: 0,
    CS: 0,
    BTS: 1,
    S1G: 1,
    C1G: 1,
    S2G: 0,
    C2G: 0,
    P15: 1,
  },
  _2HT: {
    W: 1,
    D: 0,
    L: 0,
    FTS: 0,
    CS: 0,
    BTS: 1,
    S1G: 1,
    C1G: 1,
    S2G: 1,
    C2G: 0,
    P15: 1,
  },
  FORM: { GP: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, Pts: 0, STR: '' },
};

const _02MatchStats = {
  GP: 1,
  W: 0,
  D: 0,
  L: 1,
  GF: 0,
  GA: 2,
  GD: -2,
  Pts: 0,
  FTS: 1,
  CS: 0,
  BTS: 0,
  S2G: 0,
  C2G: 1,
  S3G: 0,
  C3G: 0,
  WW: 0,
  WD: 0,
  WL: 0,
  DW: 0,
  DD: 0,
  DL: 1,
  LW: 0,
  LD: 0,
  LL: 0,
  P15: 1,
  P25: 0,
  P35: 0,
  P45: 0,
  _1HT: {
    W: 0,
    D: 1,
    L: 0,
    FTS: 1,
    CS: 1,
    BTS: 0,
    S1G: 0,
    C1G: 0,
    S2G: 0,
    C2G: 0,
    P15: 0,
  },
  _2HT: {
    W: 0,
    D: 0,
    L: 1,
    FTS: 1,
    CS: 0,
    BTS: 0,
    S1G: 0,
    C1G: 1,
    S2G: 0,
    C2G: 1,
    P15: 1,
  },
  FORM: { GP: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, Pts: 0, STR: '' },
};

const addedStats = {
  GP: 2,
  W: 1,
  D: 0,
  L: 1,
  GF: 5,
  GA: 4,
  GD: 1,
  Pts: 3,
  FTS: 1,
  CS: 0,
  BTS: 1,
  S2G: 1,
  C2G: 2,
  S3G: 1,
  C3G: 0,
  WW: 0,
  WD: 0,
  WL: 0,
  DW: 1,
  DD: 0,
  DL: 1,
  LW: 0,
  LD: 0,
  LL: 0,
  P15: 2,
  P25: 1,
  P35: 1,
  P45: 1,
  _1HT: {
    W: 0,
    D: 2,
    L: 0,
    FTS: 1,
    CS: 1,
    BTS: 1,
    S1G: 1,
    C1G: 1,
    S2G: 0,
    C2G: 0,
    P15: 1,
  },
  _2HT: {
    W: 1,
    D: 0,
    L: 1,
    FTS: 1,
    CS: 0,
    BTS: 1,
    S1G: 1,
    C1G: 2,
    S2G: 1,
    C2G: 1,
    P15: 2,
  },
  FORM: { GP: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, Pts: 0, STR: '' },
};

test('It adds 2 stats objects', () => {
  expect(add_stats(_02MatchStats, _52MatchStats)).toEqual(addedStats);
});

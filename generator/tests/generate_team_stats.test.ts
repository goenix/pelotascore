import { Match } from '../../types/Match';
import generate_team_stats from '../generate_team_stats';

const homeMatches: Match[] = [
  {
    home_name: 'Chelsea',
    away_name: 'Crystal Palace',
    home_FullTimeGoals: 3,
    away_FullTimeGoals: 0,
    home_FirstHalfGoals: 2,
    away_FirstHalfGoals: 0,
    home_SecondHalfGoals: 1,
    away_SecondHalfGoals: 0,
  },
  {
    home_name: 'Chelsea',
    away_name: 'Aston Villa',
    home_FullTimeGoals: 3,
    away_FullTimeGoals: 0,
    home_FirstHalfGoals: 1,
    away_FirstHalfGoals: 0,
    home_SecondHalfGoals: 2,
    away_SecondHalfGoals: 0,
  },
  {
    home_name: 'Chelsea',
    away_name: 'Manchester City',
    home_FullTimeGoals: 0,
    away_FullTimeGoals: 1,
    home_FirstHalfGoals: 0,
    away_FirstHalfGoals: 0,
    home_SecondHalfGoals: 0,
    away_SecondHalfGoals: 1,
  },
  {
    home_name: 'Chelsea',
    away_name: 'Southampton',
    home_FullTimeGoals: 3,
    away_FullTimeGoals: 1,
    home_FirstHalfGoals: 1,
    away_FirstHalfGoals: 0,
    home_SecondHalfGoals: 2,
    away_SecondHalfGoals: 1,
  },
  {
    home_name: 'Chelsea',
    away_name: 'Norwich City',
    home_FullTimeGoals: 7,
    away_FullTimeGoals: 0,
    home_FirstHalfGoals: 3,
    away_FirstHalfGoals: 0,
    home_SecondHalfGoals: 4,
    away_SecondHalfGoals: 0,
  },
  {
    home_name: 'Chelsea',
    away_name: 'Burnley',
    home_FullTimeGoals: 1,
    away_FullTimeGoals: 1,
    home_FirstHalfGoals: 1,
    away_FirstHalfGoals: 0,
    home_SecondHalfGoals: 0,
    away_SecondHalfGoals: 1,
  },
];

const awayMatches: Match[] = [
  {
    home_name: 'Arsenal',
    away_name: 'Chelsea',
    home_FullTimeGoals: 0,
    away_FullTimeGoals: 2,
    home_FirstHalfGoals: 0,
    away_FirstHalfGoals: 2,
    home_SecondHalfGoals: 0,
    away_SecondHalfGoals: 0,
  },
  {
    home_name: 'Liverpool',
    away_name: 'Chelsea',
    home_FullTimeGoals: 1,
    away_FullTimeGoals: 1,
    home_FirstHalfGoals: 1,
    away_FirstHalfGoals: 1,
    home_SecondHalfGoals: 0,
    away_SecondHalfGoals: 0,
  },
  {
    home_name: 'Tottenham',
    away_name: 'Chelsea',
    home_FullTimeGoals: 0,
    away_FullTimeGoals: 3,
    home_FirstHalfGoals: 0,
    away_FirstHalfGoals: 0,
    home_SecondHalfGoals: 0,
    away_SecondHalfGoals: 3,
  },
  {
    home_name: 'Brentford',
    away_name: 'Chelsea',
    home_FullTimeGoals: 0,
    away_FullTimeGoals: 1,
    home_FirstHalfGoals: 0,
    away_FirstHalfGoals: 1,
    home_SecondHalfGoals: 0,
    away_SecondHalfGoals: 0,
  },
  {
    home_name: 'Newcastle Utd',
    away_name: 'Chelsea',
    home_FullTimeGoals: 0,
    away_FullTimeGoals: 3,
    home_FirstHalfGoals: 0,
    away_FirstHalfGoals: 0,
    home_SecondHalfGoals: 0,
    away_SecondHalfGoals: 3,
  },
];

const homeTeamStats = {
  GP: 6,
  W: 4,
  D: 1,
  L: 1,
  GF: 17,
  GA: 3,
  GD: 14,
  Pts: 13,
  FTS: 1,
  CS: 3,
  BTS: 2,
  S2G: 4,
  C2G: 0,
  S3G: 4,
  C3G: 0,
  WW: 4,
  WD: 1,
  WL: 0,
  DW: 0,
  DD: 0,
  DL: 1,
  LW: 0,
  LD: 0,
  LL: 0,
  P15: 5,
  P25: 4,
  P35: 2,
  P45: 1,
  _1HT: {
    W: 5,
    D: 1,
    L: 0,
    FTS: 1,
    CS: 6,
    BTS: 0,
    S1G: 5,
    C1G: 0,
    S2G: 2,
    C2G: 0,
    P15: 2,
  },
  _2HT: {
    W: 4,
    D: 0,
    L: 2,
    FTS: 2,
    CS: 3,
    BTS: 1,
    S1G: 4,
    C1G: 3,
    S2G: 3,
    C2G: 0,
    P15: 3,
  },
  FORM: {
    GP: 5,
    W: 3,
    D: 1,
    L: 1,
    GF: 14,
    GA: 3,
    GD: 11,
    Pts: 10,
    STR: ',D,W,W,L,W',
  },
};

const awayTeamStats = {
  GP: 5,
  W: 4,
  D: 1,
  L: 0,
  GF: 10,
  GA: 1,
  GD: 9,
  Pts: 13,
  FTS: 0,
  CS: 4,
  BTS: 1,
  S2G: 3,
  C2G: 0,
  S3G: 2,
  C3G: 0,
  WW: 2,
  WD: 0,
  WL: 0,
  DW: 2,
  DD: 1,
  DL: 0,
  LW: 0,
  LD: 0,
  LL: 0,
  P15: 4,
  P25: 2,
  P35: 0,
  P45: 0,
  _1HT: {
    W: 2,
    D: 3,
    L: 0,
    FTS: 2,
    CS: 4,
    BTS: 1,
    S1G: 3,
    C1G: 1,
    S2G: 1,
    C2G: 0,
    P15: 2,
  },
  _2HT: {
    W: 2,
    D: 3,
    L: 0,
    FTS: 3,
    CS: 5,
    BTS: 0,
    S1G: 2,
    C1G: 0,
    S2G: 2,
    C2G: 0,
    P15: 2,
  },
  FORM: {
    GP: 5,
    W: 4,
    D: 1,
    L: 0,
    GF: 10,
    GA: 1,
    GD: 9,
    Pts: 13,
    STR: ',W,W,W,D,W',
  },
};

test('It generates HOME team stats correctly', () => {
  expect(generate_team_stats('HOME', homeMatches)).toEqual(homeTeamStats);
});

test('It generates AWAY team stats correctly', () => {
  expect(generate_team_stats('AWAY', awayMatches)).toEqual(awayTeamStats);
});
import { LeagueEntity, MatchEntity } from "../entities/all.entity";
import { FixtureStatsDTO } from "../types/FixtureStatsDTO";
import { LeagueStatsDTO } from "../types/LeagueStatsDTO";
import { MatchDTO } from "../types/MatchDTO";
import { MatchStatsDTO } from "../types/MatchStatsDTO";

export const matchEntityToMatchDTO = (matchEntity: MatchEntity): MatchDTO => {
  const {
    id,
    status,
    date,
    home_team: { name: home_name },
    home_FullTimeGoals,
    home_FirstHalfGoals,
    home_SecondHalfGoals,
    away_team: { name: away_name },
    away_FullTimeGoals,
    away_FirstHalfGoals,
    away_SecondHalfGoals,
  } = matchEntity;

  const matchDTO = {
    id,
    status,
    date:
      date.toDateString() +
      "#" +
      ("0" + date.getHours()).slice(-2) +
      ":" +
      ("0" + date.getMinutes()).slice(-2),
    home_name,
    home_FullTimeGoals,
    home_FirstHalfGoals,
    home_SecondHalfGoals,
    away_name,
    away_FullTimeGoals,
    away_FirstHalfGoals,
    away_SecondHalfGoals,
  };

  return matchDTO;
};

export const matchEntityToMatchStatsDTO = (
  matchEntity: MatchEntity
): MatchStatsDTO => {
  const {
    id,
    status,
    date,
    league: { name: league_name },
    home_team: { name: home_name, stats: home_stats },
    home_FullTimeGoals,
    home_FirstHalfGoals,
    home_SecondHalfGoals,
    away_team: { name: away_name, stats: away_stats },
    away_FullTimeGoals,
    away_FirstHalfGoals,
    away_SecondHalfGoals,
  } = matchEntity;

  const matchStatsDTO = {
    id,
    status,
    date: date.toISOString(),
    league_name,
    home_name,
    home_stats: {
      GP: home_stats.overall_GP,
      W: home_stats.overall_W,
      S2G: home_stats.overall_S2G,
      C2G: home_stats.overall_C2G,
      S3G: home_stats.overall_S3G,
      C3G: home_stats.overall_C3G,
      P25: home_stats.overall_P25,
      P35: home_stats.overall_P35,
      P45: home_stats.overall_P45,
    },
    home_FullTimeGoals,
    home_FirstHalfGoals,
    home_SecondHalfGoals,
    away_name,
    away_stats: {
      GP: away_stats.overall_GP,
      W: away_stats.overall_W,
      S2G: away_stats.overall_S2G,
      C2G: away_stats.overall_C2G,
      S3G: away_stats.overall_S3G,
      C3G: away_stats.overall_C3G,
      P25: away_stats.overall_P25,
      P35: away_stats.overall_P35,
      P45: away_stats.overall_P45,
    },
    away_FullTimeGoals,
    away_FirstHalfGoals,
    away_SecondHalfGoals,
  };

  return matchStatsDTO;
};

export const matchEntityToFixtureStatsDTO = (
  matchEntity: MatchEntity
): FixtureStatsDTO => {
  const {
    id,
    status,
    date,
    league: { name: league_name },
    home_team: { name: home_name, stats: home_stats },
    away_team: { name: away_name, stats: away_stats },
  } = matchEntity;

  const fixtureStatsDTO: FixtureStatsDTO = {
    id: matchEntity.id,
    status,
    date: date.toISOString(),
    league_name,
    home_name,
    away_name,
    FT: {
      home: {
        GP: home_stats.home_GP,
        W: home_stats.home_W,
        FTS: home_stats.home_FTS,
        CS: home_stats.home_CS,
        BTS: home_stats.home_BTS,
        S2G: home_stats.home_S2G,
        C2G: home_stats.home_C2G,
        S3G: home_stats.home_S3G,
        C3G: home_stats.home_C3G,
        P25: home_stats.home_P25,
        P35: home_stats.home_P35,
      },
      away: {
        GP: away_stats.away_GP,
        W: away_stats.away_W,
        FTS: away_stats.away_FTS,
        CS: away_stats.away_CS,
        BTS: away_stats.away_BTS,
        S2G: away_stats.away_S2G,
        C2G: away_stats.away_C2G,
        S3G: away_stats.away_S3G,
        C3G: away_stats.away_C3G,
        P25: away_stats.away_P25,
        P35: away_stats.away_P35,
      },
    },
    _1HT: {
      home: {
        GP: home_stats.home_GP,
        W: home_stats.home_1HT_W,
        FTS: home_stats.home_1HT_FTS,
        CS: home_stats.home_1HT_CS,
        BTS: home_stats.home_1HT_BTS,
        S1G: home_stats.home_1HT_S1G,
        C1G: home_stats.home_1HT_C1G,
        S2G: home_stats.home_1HT_S2G,
        C2G: home_stats.home_1HT_C2G,
        P15: home_stats.home_1HT_P15,
        P25: home_stats.home_1HT_P25,
      },
      away: {
        GP: away_stats.away_GP,
        W: away_stats.away_1HT_W,
        FTS: away_stats.away_1HT_FTS,
        CS: away_stats.away_1HT_CS,
        BTS: away_stats.away_1HT_BTS,
        S1G: away_stats.away_1HT_S1G,
        C1G: away_stats.away_1HT_C1G,
        S2G: away_stats.away_1HT_S2G,
        C2G: away_stats.away_1HT_C2G,
        P15: away_stats.away_1HT_P15,
        P25: away_stats.away_1HT_P25,
      },
    },
    _2HT: {
      home: {
        GP: home_stats.home_GP,
        W: home_stats.home_2HT_W,
        FTS: home_stats.home_2HT_FTS,
        CS: home_stats.home_2HT_CS,
        BTS: home_stats.home_2HT_BTS,
        S1G: home_stats.home_2HT_S1G,
        C1G: home_stats.home_2HT_C1G,
        S2G: home_stats.home_2HT_S2G,
        C2G: home_stats.home_2HT_C2G,
        P15: home_stats.home_2HT_P15,
        P25: home_stats.home_2HT_P25,
      },
      away: {
        GP: away_stats.away_GP,
        W: away_stats.away_2HT_W,
        FTS: away_stats.away_2HT_FTS,
        CS: away_stats.away_2HT_CS,
        BTS: away_stats.away_2HT_BTS,
        S1G: away_stats.away_2HT_S1G,
        C1G: away_stats.away_2HT_C1G,
        S2G: away_stats.away_2HT_S2G,
        C2G: away_stats.away_2HT_C2G,
        P15: away_stats.away_2HT_P15,
        P25: away_stats.away_2HT_P25,
      },
    },
  };

  return fixtureStatsDTO;
};

export const leagueEntityToLeagueStatsDTO = (
  leagueEntity: LeagueEntity
): LeagueStatsDTO => {
  const {
    id,
    name,
    country,
    country_code,
    GP,
    FT_home_w,
    FT_draws,
    FT_away_w,
    FT_P15,
    FT_P25,
    FT_P35,
    FT_BTS,
    FT_CS,
    FT_FTS,
    _1HT_home_w,
    _1HT_draws,
    _1HT_away_w,
    _1HT_P15,
    _1HT_P25,
    _1HT_BTS,
    _1HT_CS,
    _1HT_FTS,
    _2HT_home_w,
    _2HT_draws,
    _2HT_away_w,
    _2HT_P15,
    _2HT_P25,
    _2HT_BTS,
    _2HT_CS,
    _2HT_FTS,
  } = leagueEntity;
  return {
    FT: {
      id,
      name,
      country,
      country_code,
      GP: GP,
      home_w: FT_home_w,
      draws: FT_draws,
      away_w: FT_away_w,
      P15: FT_P15,
      P25: FT_P25,
      P35: FT_P35,
      BTS: FT_BTS,
      CS: FT_CS,
      FTS: FT_FTS,
    },
    _1HT: {
      id,
      name,
      country,
      country_code,
      GP: GP,
      home_w: _1HT_home_w,
      draws: _1HT_draws,
      away_w: _1HT_away_w,
      P15: _1HT_P15,
      P25: _1HT_P25,
      BTS: _1HT_BTS,
      CS: _1HT_CS,
      FTS: _1HT_FTS,
    },
    _2HT: {
      id,
      name,
      country,
      country_code,
      GP: GP,
      home_w: _2HT_home_w,
      draws: _2HT_draws,
      away_w: _2HT_away_w,
      P15: _2HT_P15,
      P25: _2HT_P25,
      BTS: _2HT_BTS,
      CS: _2HT_CS,
      FTS: _2HT_FTS,
    },
  };
};

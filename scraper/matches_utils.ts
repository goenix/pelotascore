import { MatchEntity } from '../entities/match.entity';

export const getMatchResult = (match: any): MatchEntity => {
  let matchModel = new MatchEntity();

  const matchDate = match.children[0].children[0].children[0].data.trim();
  const home_name = match.children[1].children[0].data.trim();
  const away_name = match.children[3].children[0].data.trim();

  matchModel.date = matchDate;
  matchModel.status = 1;
  matchModel.home_name = home_name;
  matchModel.away_name = away_name;

  if (match.children[2].children[0].children[0].data !== 'Aw. L') {
    const fullTimeScoreStr =
      match.children[2].children[0].children[0].children[0].data;
    const firstHalfTimeScoreStr =
      match.children[5].children[0].children[0].data.replace(/[{()}]/g, '');
    const home_FullTimeGoals = parseInt(fullTimeScoreStr.split(' - ')[0]);
    const away_FullTimeGoals = parseInt(fullTimeScoreStr.split(' - ')[1]);

    const home_FirstHalfGoals = parseInt(firstHalfTimeScoreStr.split('-')[0]);
    const away_FirstHalfGoals = parseInt(firstHalfTimeScoreStr.split('-')[1]);

    const home_SecondHalfGoals = home_FullTimeGoals - home_FirstHalfGoals;
    const away_SecondHalfGoals = away_FullTimeGoals - away_FirstHalfGoals;

    matchModel.home_FullTimeGoals = home_FullTimeGoals;
    matchModel.home_FirstHalfGoals = home_FirstHalfGoals;
    matchModel.home_SecondHalfGoals = home_SecondHalfGoals;

    matchModel.away_FullTimeGoals = away_FullTimeGoals;
    matchModel.away_FirstHalfGoals = away_FirstHalfGoals;
    matchModel.away_SecondHalfGoals = away_SecondHalfGoals;
  } else if (match.children[2].children[0].children[0].data === 'Aw. L') {
    const matchTime = match.children[2].children[0].children[0].data;

    matchModel.time = matchTime;
  }
  return matchModel;
};

export const getMatchFixture = (match: any) => {
  let matchModel = new MatchEntity();

  const fixtureDate = match.children[0].children[0].children[0].data.trim();
  const fixtureTime =
    match.children[2].children[0].data === 'pp.'
      ? match.children[2].children[0].data
      : match.children[2].children[0].children[0].data;
  const home_name = match.children[1].children[0].data.trim();
  const away_name = match.children[3].children[0].data.trim();

  matchModel.date = fixtureDate;
  matchModel.time = fixtureTime;
  matchModel.status = 0;
  matchModel.home_name = home_name;
  matchModel.away_name = away_name;
  return matchModel;
};

export const getMatch = (match: any): MatchEntity | null => {
  if (match.children.length === 9) {
    return getMatchResult(match);
  } else if (match.children.length === 7) {
    return getMatchFixture(match);
  } else return null;
};

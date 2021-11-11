export interface StandingsType {
  id: number;
  leagueId: string;
  team_name: string;
  GP: number;
  W: number;
  D: number;
  L: number;
  GF: number;
  GA: number;
  GD: number;
  Pts: number;
}

export interface StandingsDTOType {
  normal: {
    overall: StandingsType[];
    home: StandingsType[];
    away: StandingsType[];
  };
}

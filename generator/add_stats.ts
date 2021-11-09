import { initialStats } from '../utils/constants';
import { StatsType } from './types';

export const add_stats = (a: StatsType, b: StatsType): StatsType => {
  let addedStats = { ...initialStats };

  addedStats.GP = a.GP + b.GP;
  addedStats.W = a.W + b.W;
  addedStats.D = a.D + b.D;
  addedStats.L = a.L + b.L;
  addedStats.GF = a.GF + b.GF;
  addedStats.GA = a.GA + b.GA;
  addedStats.GD = a.GD + b.GD;
  addedStats.Pts = a.Pts + b.Pts;

  addedStats.FTS = a.FTS + b.FTS;
  addedStats.CS = a.CS + b.CS;
  addedStats.BTS = a.BTS + b.BTS;
  addedStats.S2G = a.S2G + b.S2G;
  addedStats.C2G = a.C2G + b.C2G;
  addedStats.S3G = a.S3G + b.S3G;
  addedStats.C3G = a.C3G + b.C3G;

  addedStats.W_W = a.W_W + b.W_W;
  addedStats.W_D = a.W_D + b.W_D;
  addedStats.W_L = a.W_L + b.W_L;
  addedStats.D_W = a.D_W + b.D_W;
  addedStats.D_D = a.D_D + b.D_D;
  addedStats.D_L = a.D_L + b.D_L;
  addedStats.L_W = a.L_W + b.L_W;
  addedStats.L_D = a.L_D + b.L_D;
  addedStats.L_L = a.L_L + b.L_L;

  addedStats.P15 = a.P15 + b.P15;
  addedStats.P25 = a.P25 + b.P25;
  addedStats.P35 = a.P35 + b.P35;
  addedStats.P45 = a.P45 + b.P45;

  addedStats._1HT.W = a._1HT.W + b._1HT.W;
  addedStats._1HT.D = a._1HT.D + b._1HT.D;
  addedStats._1HT.L = a._1HT.L + b._1HT.L;
  addedStats._1HT.FTS = a._1HT.FTS + b._1HT.FTS;
  addedStats._1HT.CS = a._1HT.CS + b._1HT.CS;
  addedStats._1HT.BTS = a._1HT.BTS + b._1HT.BTS;
  addedStats._1HT.S1G = a._1HT.S1G + b._1HT.S1G;
  addedStats._1HT.C1G = a._1HT.C1G + b._1HT.C1G;
  addedStats._1HT.S2G = a._1HT.S2G + b._1HT.S2G;
  addedStats._1HT.C2G = a._1HT.C2G + b._1HT.C2G;
  addedStats._1HT.P15 = a._1HT.P15 + b._1HT.P15;

  addedStats._2HT.W = a._2HT.W + b._2HT.W;
  addedStats._2HT.D = a._2HT.D + b._2HT.D;
  addedStats._2HT.L = a._2HT.L + b._2HT.L;
  addedStats._2HT.FTS = a._2HT.FTS + b._2HT.FTS;
  addedStats._2HT.CS = a._2HT.CS + b._2HT.CS;
  addedStats._2HT.BTS = a._2HT.BTS + b._2HT.BTS;
  addedStats._2HT.S1G = a._2HT.S1G + b._2HT.S1G;
  addedStats._2HT.C1G = a._2HT.C1G + b._2HT.C1G;
  addedStats._2HT.S2G = a._2HT.S2G + b._2HT.S2G;
  addedStats._2HT.C2G = a._2HT.C2G + b._2HT.C2G;
  addedStats._2HT.P15 = a._2HT.P15 + b._2HT.P15;

  return addedStats;
};

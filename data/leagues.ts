import { League } from '../scraper';

export const leagues: League[] = [
  {
    id: 'england_1',
    name: 'Premier League',
    country: 'England',
    link: 'https://www.soccerstats.com/results.asp?league=england&pmtype=bydate',
  },
  {
    id: 'england_2',
    name: 'Championship',
    country: 'England',
    link: 'https://www.soccerstats.com/results.asp?league=england2&pmtype=bydate',
  },
  {
    id: 'england_3',
    name: 'League One',
    country: 'England',
    link: 'https://www.soccerstats.com/results.asp?league=england3&pmtype=bydate',
  },
  {
    id: 'england_4',
    name: 'League Two',
    country: 'England',
    link: 'https://www.soccerstats.com/results.asp?league=england4&pmtype=bydate',
  },
  {
    id: 'england_5',
    name: 'England - National League',
    country: 'England',
    link: 'https://www.soccerstats.com/results.asp?league=england5&pmtype=bydate',
  },
];

/*export const leagues: League[] = [
  {
    id: 'argentina_1',
    name: 'Argentina - Liga Profesional',
    country: 'Argentina',
    link: 'https://www.soccerstats.com/results.asp?league=argentina&pmtype=bydate',
  },
  {
    id: 'austria_1',
    name: 'Austria - Bundesliga',
    country: 'Austria',
    link: 'https://www.soccerstats.com/results.asp?league=austria&pmtype=bydate',
  },
  {
    id: 'austria_2',
    name: 'Austria - 2. Liga',
    country: 'Austria',
    link: 'https://www.soccerstats.com/results.asp?league=austria2&pmtype=bydate',
  },
  {
    id: 'belgium_1',
    name: 'Belgium - Jupiler League',
    country: 'Belgium',
    link: 'https://www.soccerstats.com/results.asp?league=belgium&pmtype=bydate',
  },
  {
    id: 'belarus_1',
    name: 'Belarus - Premier League',
    country: 'Belarus',
    link: 'https://www.soccerstats.com/results.asp?league=belarus&pmtype=bydate',
  },
  {
    id: 'brazil_1',
    name: 'Brazil - Serie A',
    country: 'Brazil',
    link: 'https://www.soccerstats.com/results.asp?league=brazil&pmtype=bydate',
  },
  {
    id: 'brazil_2',
    name: 'Brazil - Serie B',
    country: 'Brazil',
    link: 'https://www.soccerstats.com/results.asp?league=brazil2&pmtype=bydate',
  },
  {
    id: 'denmark_1',
    name: 'Denmark - Superligaen',
    country: 'Denmark',
    link: 'https://www.soccerstats.com/results.asp?league=denmark&pmtype=bydate',
  },
  {
    id: 'england_1',
    name: 'Premier League',
    country: 'England',
    link: 'https://www.soccerstats.com/results.asp?league=england&pmtype=bydate',
  },
  {
    id: 'england_2',
    name: 'Championship',
    country: 'England',
    link: 'https://www.soccerstats.com/results.asp?league=england2&pmtype=bydate',
  },
  {
    id: 'england_3',
    name: 'League One',
    country: 'England',
    link: 'https://www.soccerstats.com/results.asp?league=england3&pmtype=bydate',
  },
  {
    id: 'england_4',
    name: 'League Two',
    country: 'England',
    link: 'https://www.soccerstats.com/results.asp?league=england4&pmtype=bydate',
  },
  {
    id: 'england_5',
    name: 'England - National League',
    country: 'England',
    link: 'https://www.soccerstats.com/results.asp?league=england5&pmtype=bydate',
  },
  {
    id: 'france_1',
    name: 'France - Ligue 1',
    country: 'France',
    link: 'https://www.soccerstats.com/results.asp?league=france&pmtype=bydate',
  },
  {
    id: 'france_2',
    name: 'France - Ligue 2',
    country: 'France',
    link: 'https://www.soccerstats.com/results.asp?league=france2&pmtype=bydate',
  },
  {
    id: 'france_3',
    name: 'France - National',
    country: 'France',
    link: 'https://www.soccerstats.com/results.asp?league=france3&pmtype=bydate',
  },
  {
    id: 'egypt_1',
    name: 'Egypt - Premier League',
    country: 'Egypt',
    link: 'https://www.soccerstats.com/results.asp?league=egypt&pmtype=bydate',
  },
  {
    id: 'germany_1',
    name: 'Bundesliga',
    country: 'Germany',
    link: 'https://www.soccerstats.com/results.asp?league=germany&pmtype=bydate',
  },
  {
    id: 'germany_2',
    name: 'Germany - 2. Bundesliga',
    country: 'Germany',
    link: 'https://www.soccerstats.com/results.asp?league=germany2&pmtype=bydate',
  },
  {
    id: 'italy_1',
    name: 'Italy - Serie A',
    country: 'Italy',
    link: 'https://www.soccerstats.com/results.asp?league=italy&pmtype=bydate',
  },
  {
    id: 'italy_2',
    name: 'Italy - Serie B',
    country: 'Italy',
    link: 'https://www.soccerstats.com/results.asp?league=italy2&pmtype=bydate',
  },
  {
    id: 'ireland_1',
    name: 'Ireland - Premier Division',
    country: 'Ireland',
    link: 'https://www.soccerstats.com/results.asp?league=ireland&pmtype=bydate',
  },
  {
    id: 'morocco_1',
    name: 'Morocco - Botola Pro',
    country: 'Morocco',
    link: 'https://www.soccerstats.com/results.asp?league=morocco&pmtype=bydate',
  },
  {
    id: 'netherlands_1',
    name: 'Netherlands - Eredivisie',
    country: 'Netherlands',
    link: 'https://www.soccerstats.com/results.asp?league=netherlands&pmtype=bydate',
  },
  {
    id: 'netherlands_2',
    name: 'Netherlands - Eerste Divisie',
    country: 'Netherlands',
    link: 'https://www.soccerstats.com/results.asp?league=netherlands2&pmtype=bydate',
  },
  {
    id: 'norway_1',
    name: 'Norway - Eliteserien',
    country: 'Norway',
    link: 'https://www.soccerstats.com/results.asp?league=norway&pmtype=bydate',
  },
  {
    id: 'norway_2',
    name: 'Norway - 1st Division',
    country: 'Norway',
    link: 'https://www.soccerstats.com/results.asp?league=norway2&pmtype=bydate',
  },
  {
    id: 'poland_1',
    name: 'Poland - Ekstraklasa',
    country: 'Poland',
    link: 'https://www.soccerstats.com/results.asp?league=poland&pmtype=bydate',
  },
  {
    id: 'poland_2',
    name: 'Poland - 1. Liga',
    country: 'Poland',
    link: 'https://www.soccerstats.com/results.asp?league=poland2&pmtype=bydate',
  },
  {
    id: 'portugal_1',
    name: 'Portugal - Primeira Liga',
    country: 'Portugal',
    link: 'https://www.soccerstats.com/results.asp?league=portugal&pmtype=bydate',
  },
  {
    id: 'romania_1',
    name: 'Romania - Liga 1',
    country: 'Romania',
    link: 'https://www.soccerstats.com/results.asp?league=romania&pmtype=bydate',
  },
  {
    id: 'russia_1',
    name: 'Russia - Premier League',
    country: 'Russia',
    link: 'https://www.soccerstats.com/results.asp?league=russia&pmtype=bydate',
  },
  {
    id: 'russia_2',
    name: 'Russia - FNL',
    country: 'Russia',
    link: 'https://www.soccerstats.com/results.asp?league=russia2&pmtype=bydate',
  },
  {
    id: 'sweden_1',
    name: 'Sweden - Allsvenskan',
    country: 'Sweden',
    link: 'https://www.soccerstats.com/results.asp?league=sweden&pmtype=bydate',
  },
  {
    id: 'sweden_2',
    name: 'Sweden - Superettan',
    country: 'Sweden',
    link: 'https://www.soccerstats.com/results.asp?league=sweden2&pmtype=bydate',
  },
  {
    id: 'sweden_3',
    name: 'Sweden - Div 1 - Norra',
    country: 'Sweden',
    link: 'https://www.soccerstats.com/results.asp?league=sweden3&pmtype=bydate',
  },
  {
    id: 'sweden_4',
    name: 'Sweden - Div 1 - Södra',
    country: 'Sweden',
    link: 'https://www.soccerstats.com/results.asp?league=sweden4&pmtype=bydate',
  },
  {
    id: 'switzerland_1',
    name: 'Switzerland - Super League',
    country: 'Switzerland',
    link: 'https://www.soccerstats.com/results.asp?league=switzerland&pmtype=bydate',
  },
  {
    id: 'switzerland_2',
    name: 'Switzerland - Challenge League',
    country: 'Switzerland',
    link: 'https://www.soccerstats.com/results.asp?league=switzerland2&pmtype=bydate',
  },
  {
    id: 'spain_1',
    name: 'La Liga',
    country: 'Spain',
    link: 'https://www.soccerstats.com/results.asp?league=spain&pmtype=bydate',
  },
  {
    id: 'spain_2',
    name: 'Spain - La Liga 2',
    country: 'Spain',
    link: 'https://www.soccerstats.com/results.asp?league=spain2&pmtype=bydate',
  },
  {
    id: 'turkey_1',
    name: 'Turkey - Super Lig',
    country: 'Turkey',
    link: 'https://www.soccerstats.com/results.asp?league=turkey&pmtype=bydate',
  },
  {
    id: 'wales_1',
    name: 'Wales - Cymru Premier',
    country: 'Wales',
    link: 'https://www.soccerstats.com/results.asp?league=wales&pmtype=bydate',
  },
];*/

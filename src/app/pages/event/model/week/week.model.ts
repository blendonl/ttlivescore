import { Team } from '../../../team/model/team.model';
import { LeagueShort } from '../../../league/models/league.short.model';

export type Week = {
  id: number;
  name: string;
  league: LeagueShort;
  category: string;
  gender: string;
  date: string;
  teams: Team[];
};

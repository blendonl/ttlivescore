import { Team } from '../../team/model/team.model';

export type League = {
  id: number;
  name: string;
  category: string;
  yearCreated: number;
  teams: Team[];
};

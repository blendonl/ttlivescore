import { Team } from './team.model';

export type League = {
  id: number;
  name: string;
  category: string;
  yearCreated: number;
  teams: Team[];
};

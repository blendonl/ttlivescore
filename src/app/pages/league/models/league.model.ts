import { Team } from './team.model';

export type League = {
  id: number;
  name: string;
  category: string;
  year: number;
  teams: Team[];
};

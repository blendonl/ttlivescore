import { Category } from '../../user/models/category.model';

export type TournamentShort = {
  id: number;
  name: string;
  category: Category;
  gender: string;
  date: string;
};

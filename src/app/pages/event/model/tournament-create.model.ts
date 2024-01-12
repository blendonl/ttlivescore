import { Category } from '../../user/models/category.model';

export type TournamentCreate = {
  name: string;
  category: Category;
  gender: string;
  date: Date;
};

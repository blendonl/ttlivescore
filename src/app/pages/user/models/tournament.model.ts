import { Category } from './category.model';
import { User } from '../../../shared/models/user.model';

export type Tournament = {
  id: number;
  name: string;
  gender: string;
  category: Category;
  date: Date;
  users: User[];
};

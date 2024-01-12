import { User } from '../../../shared/models/user.model';

export type Team = {
  id: number;
  name: string;
  isActive: boolean;
  users: User[];
};

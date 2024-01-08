import { User } from '../../../shared/models/user.model';

export type UserCreate = User & { password: string };

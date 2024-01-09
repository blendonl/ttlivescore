import { User } from '../../../shared/models/user.model';
import { Role } from './role.model';

export type UserCreate = User & { password: string; role: Role };

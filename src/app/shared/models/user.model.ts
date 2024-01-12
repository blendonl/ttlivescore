import { Role } from '../../pages/user/models/role.model';

export type User = {
  id?: number;
  profilePicture?: File;
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: Date;
  email: string;
  teamName?: string;
  roles?: Role[];
};

export type User = {
  id?: number;
  profilePicture?: File;
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: Date;
  email: string;
  teamName?: string;
};

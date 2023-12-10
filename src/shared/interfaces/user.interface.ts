export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  role?: 'user' | 'admin';
}

export interface IUserAll {
  users: IUser[];
  count: number;
}

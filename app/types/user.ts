export interface UserType {
  id: number;
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  token: string;
  profile : object;
  createdAt: Date;
  updatedAt: Date;
}

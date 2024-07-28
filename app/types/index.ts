import { Profile } from "@prisma/client";

export interface UserType {
  id?: string;
  name: string;
  email: string;
  password?: string;
  createdAt?: string;
  updatedAt?: string;
  profile?: Profile
}

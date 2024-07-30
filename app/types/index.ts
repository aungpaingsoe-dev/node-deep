export type UserType = {
  id: number;
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  token: string;
  profile: ProfileType;
  createdAt: Date;
  updatedAt: Date;
};

export type ProfileType = {
  id: number;
  dob: string;
  bio: string;
  gender: any;
  userId: number;
  user: UserType;
  createdAt: Date;
  updatedAt: Date;
};

export type PaginateType = {
  data: object[];
  page: number;
  perPage: number;
  totalCount: number;
  totalPage: number;
  nextPage: number | null;
  previousPage: number | null;
};


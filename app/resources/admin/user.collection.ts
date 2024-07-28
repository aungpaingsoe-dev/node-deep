import { UserType } from "../../types";

const userCollection = (users: UserType[]) => {
  users.map((user: UserType) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      profile : user.profile
    };
  });
  return users;
};

export default userCollection;

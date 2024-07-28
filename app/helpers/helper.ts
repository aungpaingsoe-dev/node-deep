import bcrypt from "bcrypt";

const hashPassword = (password: string) => bcrypt.hashSync(password, 10);

const comparePassword = (password: string, hashPassword: string) =>
  bcrypt.compareSync(password, hashPassword);

const generateToken = (userId: number, expiresIn: string) => {};

export default {
  hashPassword,
  comparePassword,
  generateToken
};



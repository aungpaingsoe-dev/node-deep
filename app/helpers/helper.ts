import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const hashPassword = (password: string) => bcrypt.hashSync(password, 10);

const comparePassword = (password: string, hashPassword: string) =>
  bcrypt.compareSync(password, hashPassword);

const generateToken = (userId: number, expiresIn: string) => {
  return jwt.sign(
    {
      id: userId,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: expiresIn || "30d" }
  );
};

const decodeToken = (token: string) =>
  jwt.verify(token, process.env.JWT_SECRET as string);

export default {
  hashPassword,
  comparePassword,
  generateToken,
  decodeToken,
};

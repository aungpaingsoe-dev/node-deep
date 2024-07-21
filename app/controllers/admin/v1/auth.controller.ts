import { Request, Response } from "express";

const signIn = (req: Request, res: Response) => {
  return res.json(req.user);
};

const signOut = (req: Request, res: Response) => {
  if (!req.user) return res.sendStatus(401);
  req.logout((error) => {
    if (error) return res.sendStatus(400);
    res.send(200);
  });
};

export default {
  signIn,
  signOut,
};

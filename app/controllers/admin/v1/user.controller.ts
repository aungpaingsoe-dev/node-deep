import { NextFunction, Request, Response } from "express";

const getUsers = (req: Request, res: Response) => {
  if(!req.user) return res.sendStatus(401);
  return res.json(req.session);
};

const getUser = (req: Request, res: Response) => {};

const createUser = (req: Request, res: Response, next : NextFunction) => {
  try {
    
  } catch (error) {
    next(error)
  }
};

const updateUser = (req: Request, res: Response) => {};

const deleteUser = (req: Request, res: Response) => {};

export default {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};

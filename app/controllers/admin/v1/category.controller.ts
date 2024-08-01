import { NextFunction, Request, Response } from "express";

const getCategories = (req: Request, res: Response, next: NextFunction) => {};

const getCategory = (req: Request, res: Response, next: NextFunction) => {};

const createCategory = (req: Request, res: Response, next: NextFunction) => {};

const updateCategory = (req: Request, res: Response, next: NextFunction) => {};

const deleteCategory = (req: Request, res: Response, next: NextFunction) => {};

export default {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};

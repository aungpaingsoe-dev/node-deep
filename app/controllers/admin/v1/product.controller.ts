import { NextFunction, Request, Response } from "express";

const getProducts = (req: Request, res: Response, next: NextFunction) => {};

const getProduct = (req: Request, res: Response, next: NextFunction) => {};

const createProduct = (req: Request, res: Response, next: NextFunction) => {};

const updateProduct = (req: Request, res: Response, next: NextFunction) => {};

const deleteProduct = (req: Request, res: Response, next: NextFunction) => {};

export default {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};

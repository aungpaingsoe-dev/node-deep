import express from "express";
import productController from "../../../app/controllers/admin/v1/product.controller";
import passport from "passport";
import validationHandler from "../../../app/middlewares/validationHandler";
import roleSchema from "../../../app/schema/admin/role.schema";
const router = express.Router();

router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    productController.getProducts
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    validationHandler.validateBody(roleSchema.createRoleSchema),
    productController.createProduct
  );

router
  .route("/:id")
  .get(productController.getProduct)
  .put(
    passport.authenticate("jwt", { session: false }),
    validationHandler.validateBody(roleSchema.updateRoleSchema),
    productController.updateProduct
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    productController.deleteProduct
  );

export default router;

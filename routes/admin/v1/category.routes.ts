import express from "express";
import categoryController from "../../../app/controllers/admin/v1/category.controller";
import passport from "passport";
import validationHandler from "../../../app/middlewares/validationHandler";
import roleSchema from "../../../app/schema/admin/role.schema";
const router = express.Router();

router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    categoryController.getCategories
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    validationHandler.validateBody(roleSchema.createRoleSchema),
    categoryController.createCategory
  );

router
  .route("/:id")
  .get(categoryController.getCategory)
  .put(
    passport.authenticate("jwt", { session: false }),
    validationHandler.validateBody(roleSchema.updateRoleSchema),
    categoryController.updateCategory
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    categoryController.deleteCategory
  );

export default router;

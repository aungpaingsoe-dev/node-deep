import express from "express";
import roleController from "../../../app/controllers/admin/v1/role.controller";
import passport from "passport";
import validationHandler from "../../../app/middlewares/validationHandler";
import roleSchema from "../../../app/schema/admin/role.schema";
const router = express.Router();

router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    roleController.getRoles
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    validationHandler.validateBody(roleSchema.createRoleSchema),
    roleController.createRole
  );

router
  .route("/:id")
  .get(roleController.getRole)
  .put(
    passport.authenticate("jwt", { session: false }),
    validationHandler.validateBody(roleSchema.updateRoleSchema),
    roleController.updateRole
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    roleController.deleteRole
  );

export default router;

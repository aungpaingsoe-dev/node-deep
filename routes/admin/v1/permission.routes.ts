import express from "express";
import permissionController from "../../../app/controllers/admin/v1/permission.controller";
import passport from "passport";
const router = express.Router();

router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    permissionController.getPermissions
  );

router
  .route("/:id")
  .get(
    passport.authenticate("jwt", { session: false }),
    permissionController.getPermission
  );

export default router;

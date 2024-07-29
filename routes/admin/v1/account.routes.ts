import express from "express";
import accountController from "../../../app/controllers/admin/v1/account.controller";
import passport from "passport";
import validationHandler from "../../../app/middlewares/validationHandler";
import accountSchema from "../../../app/schema/admin/account.schema";
const router = express.Router();

router.get(
  "/my-profile",
  passport.authenticate("jwt", { session: false }),
  accountController.myProfile
);
router.put(
  "/update-profile",
  validationHandler.validateBody(accountSchema.updateProfileSchema),
  passport.authenticate("jwt", { session: false }),
  accountController.updateProfile
);
router.put(
  "/change-password",
  validationHandler.validateBody(accountSchema.changePasswordSchema),
  passport.authenticate("jwt", { session: false }),
  accountController.changePassword
);
router.delete(
  "/delete-account",
  passport.authenticate("jwt", { session: false }),
  accountController.deleteAccount
);

export default router;

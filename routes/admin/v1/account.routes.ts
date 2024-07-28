import express from "express";
import accountController from "../../../app/controllers/admin/v1/account.controller";
import passport from "passport";
const router = express.Router();

router.get(
  "/my-profile",
  passport.authenticate("jwt", { session: false }),
  accountController.myProfile
);
router.put(
  "/update-profile",
  passport.authenticate("jwt", { session: false }),
  accountController.updateProfile
);
router.put(
  "/change-password",
  passport.authenticate("jwt", { session: false }),
  accountController.changePassword
);
router.delete(
  "/delete-account",
  passport.authenticate("jwt", { session: false }),
  accountController.deleteAccount
);

export default router;

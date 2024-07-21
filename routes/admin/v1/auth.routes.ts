import express from "express";
import authController from "../../../app/controllers/admin/v1/auth.controller";
import passport from "passport";
const router = express.Router();

router.post("/sign-in", passport.authenticate("local"), authController.signIn);
router.post("/sign-out", authController.signOut);

export default router;

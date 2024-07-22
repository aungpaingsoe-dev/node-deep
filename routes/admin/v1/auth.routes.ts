import express from "express";
import authController from "../../../app/controllers/admin/v1/auth.controller";
const router = express.Router();

router.post("/sign-in", authController.signIn);
router.post("/sign-out", authController.signOut);

export default router;

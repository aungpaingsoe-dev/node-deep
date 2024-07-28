import express from "express";
import authController from "../../../app/controllers/admin/v1/auth.controller";
import authSchema from "../../../app/schema/admin/auth.schema";
import validationHandler from "../../../app/middlewares/validationHandler";
const router = express.Router();

router.post(
  "/sign-in",
  validationHandler.validateBody(authSchema.signInSchema),
  authController.signIn
);
router.post("/sign-out", authController.signOut);

export default router;

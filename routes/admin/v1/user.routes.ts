import express from "express";
import userController from "../../../app/controllers/admin/v1/user.controller";
import passport from "passport";
import validationHandler from "../../../app/middlewares/validationHandler";
import userSchema from "../../../app/schema/admin/user.schema";
const router = express.Router();

router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    userController.getUsers
  )
  .post(
    validationHandler.validateBody(userSchema.createUserSchema),
    userController.createUser
  );

router
  .route("/:id")
  .get(userController.getUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

export default router;

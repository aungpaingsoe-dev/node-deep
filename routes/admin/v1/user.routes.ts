import express from "express";
import userController from "../../../app/controllers/admin/v1/user.controller";
import passport from "passport";
const router = express.Router();

router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    userController.getUsers
  )
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

export default router;

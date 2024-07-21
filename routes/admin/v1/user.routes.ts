import express from "express";
import userController from "../../../app/controllers/admin/v1/user.controller";
const router = express.Router();

router.route("/").get(userController.getUsers).post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

export default router;

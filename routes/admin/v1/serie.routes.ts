import express from "express";
import serieController from "../../../app/controllers/admin/v1/serie.controller";
import passport from "passport";
import validationHandler from "../../../app/middlewares/validationHandler";
import roleSchema from "../../../app/schema/admin/role.schema";
const router = express.Router();

router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    serieController.getSeries
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    validationHandler.validateBody(roleSchema.createRoleSchema),
    serieController.createSerie
  );

router
  .route("/:id")
  .get(serieController.getSerie)
  .put(
    passport.authenticate("jwt", { session: false }),
    validationHandler.validateBody(roleSchema.updateRoleSchema),
    serieController.updateSerie
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    serieController.deleteSerie
  );

export default router;

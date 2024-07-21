import express from "express";
import adminV1Routes from "./admin/v1";
import frontendV1Routes from "./frontend/v1";
const router = express.Router();

router.use("/admin/v1", adminV1Routes);
router.use("/frontend/v1", frontendV1Routes);

export default router;

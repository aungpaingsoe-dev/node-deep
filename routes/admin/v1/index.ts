import express from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import accountRoutes from "./account.routes";
import roleRoutes from "./role.routes";
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/account", accountRoutes);
router.use("/roles", roleRoutes)

export default router;

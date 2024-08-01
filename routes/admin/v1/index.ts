import express from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import accountRoutes from "./account.routes";
import roleRoutes from "./role.routes";
import permissionRoutes from "./permission.routes";
import mediaRoutes from "./media.routes";
import serieRoutes from "./serie.routes";
import categoryRoutes from "./category.routes";
import productRoutes from "./product.routes";
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/account", accountRoutes);
router.use("/roles", roleRoutes);
router.use("/permissions", permissionRoutes);
router.use("/medias", mediaRoutes);
router.use("/series", serieRoutes);
router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);

export default router;

import express from 'express';

import verifyConnectionRoutes from "./connection"
import appActionRoutes from "./appAction"
import appInstalledRoutes from "./appInstalled"

const router = express.Router();

router.use("/connection", verifyConnectionRoutes);
router.use("/appAction", appActionRoutes)
router.use("/appInstalled", appInstalledRoutes)

export default router;
import express from "express";

import ping from "./routes/ping";

const router = express.Router({ mergeParams: true });

router.use(ping);

export default router;

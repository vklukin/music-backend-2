import express from "express";

import ping from "./routes/ping";
import audio from "./routes/audio/router";

const router = express.Router({ mergeParams: true });

router.use(ping);
router.use("/audio", audio);

export default router;

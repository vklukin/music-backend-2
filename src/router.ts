import express from "express";

import ping from "./routes/ping";
import audio from "./routes/audio/router";

const router = express.Router({ mergeParams: true });

/**
 * @swagger
 * components:
 *   schemas:
 *     AudioList:
 *       description: An array with audios list
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 title:
 *                   type: string
 *                 author:
 *                   type: string
 *                 path:
 *                   type: string
 *     DefaultError:
 *       description: An object with message property
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 */
router.use(ping);
router.use("/audio", audio);

export default router;

import express from "express";

import { getAudioList } from "./getAudioList";
import { streamAudio } from "./streamAudio.js";

const router = express.Router({ mergeParams: true });

/**
 * @swagger
 * /audio/list:
 *   get:
 *     summary: Get a pong from server
 *     tags:
 *       - Server
 *     responses:
 *       200:
 *         description: Responses audio list in the music folder
 *         $ref: '#/components/schemas/AudioList'
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
 */
router.get("/list", getAudioList);

router.get("/:id", streamAudio);

export default router;

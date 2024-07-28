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
 */
router.get("/list", getAudioList);

/**
 * @swagger
 * /audio/stream/:id:
 *   get:
 *     summary: Get a pong from server
 *     tags:
 *       - Server
 *     responses:
 *       200:
 *         description: Streaming audio by id
 *       404:
 *         description: Couldn't found audio with provided id
 *         $ref: '#/components/schemas/DefaultError'
 *       500:
 *         description: Returns default error object
 *         $ref: '#/components/schemas/DefaultError'
 */
router.get("/stream/:id", streamAudio);

export default router;

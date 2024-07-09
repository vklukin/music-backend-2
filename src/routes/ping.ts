import express from "express";

const router = express.Router({ mergeParams: true });

/**
 * @swagger
 * /ping:
 *   get:
 *     summary: Get a pong from server
 *     tags:
 *       - Server
 *     responses:
 *       200:
 *         description: Responses Pong message and status 200
 */
const ping = (_: express.Request, res: express.Response) => {
    return res.status(200).send("Pong");
};

router.use("/ping", ping);

export default router;

import express from "express";
import dotenv from "dotenv";
import path from "path";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

import { swaggerSpec } from "./environment";
import { logger } from "./logger";
import router from "./router";
import { setupAudioList } from "./utils/setupAudioList";

dotenv.config({
    path: path.join(__dirname, `../.env`)
});

const PORT = process.env.PORT;
setupAudioList();

export const app = express();

app.use(cors());

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec()));
app.use("/api/v1", router);

app.listen(PORT, () => console.log(`Server is running on ${PORT}. http://localhost:${PORT}`));
logger.log({
    Action: `Server is running on ${PORT}`
});

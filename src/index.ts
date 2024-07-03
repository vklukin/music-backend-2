import express from "express";
import dotenv from "dotenv";
import path from "path";
import swaggerUi from "swagger-ui-express";

import { swaggerSpec } from "./environment";
import { logger } from "./logger";
import router from "./router";

dotenv.config({
    path: path.join(__dirname, `../.env`)
});

const PORT = process.env.PORT;

const app = express();

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec()));
app.use("/api/v1", router);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
logger.log({
    Action: `Server is running on ${PORT}`
});
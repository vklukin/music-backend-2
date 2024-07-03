import swaggerJSDoc from "swagger-jsdoc";
import "dotenv/config";

export const swaggerSpec = () => {
    const swaggerDefinition = {
        openapi: "3.0.0",
        info: {
            title: "Express API for music application",
            version: "1.0.0",
            description: "This is a REST API application made with Express."
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT}`,
                description: "Default server"
            }
        ]
    };

    const options = {
        swaggerDefinition,
        apis: ["./routes/*.ts"]
    };

    return swaggerJSDoc(options);
};

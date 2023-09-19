// Import modules from node_modules
import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./swagger_output.json";

// Import from other .ts files
import { api } from "./routes";

// Create express app
const app = express();

// Using third party middleware
app.use(bodyParser.json());
app.use(cors());

// Using router level middleware 
app.use("/api", api);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

export default app;
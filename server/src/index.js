const express = require("express");
const config = require("./config/config");
const logger = require("./config/logger");
const connectDB = require("./config/db");
const helmet = require("helmet");
const corsMiddleware = require("./middlewares/cors.middleware");
const reqLogger = require("./middlewares/req.middleware");
const cookieParser = require("cookie-parser");
const apiRoutes = require("./routes");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

connectDB();

app.use(helmet());
app.use(corsMiddleware);
app.use(reqLogger);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Server running ...");
})

app.get("/health", (req, res) => {
    res.status(200).json({
        message: "ok"
    });
})

app.use("/api", apiRoutes);

app.use(errorHandler);

const startServer = () => {
    try {
        app.listen(config.PORT, () => {
            logger.info(`Server listening on port ${config.PORT}`);
        })
    } catch (error) {
        logger.error(error);
        process.exit(1);
    }
}

startServer();
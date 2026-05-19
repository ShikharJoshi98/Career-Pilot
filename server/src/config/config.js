require("dotenv").config();

module.exports = {
    PORT: Number(process.env.PORT),
    LOG_LEVEL: process.env.LOG_LEVEL,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET
}
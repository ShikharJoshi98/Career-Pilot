const mongoose = require("mongoose")
const config = require("./config");
const logger = require("./logger");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(config.MONGO_URI);
        if (conn.connection.host) {
            logger.info("Connected to DB successfully");
        }
    } catch (error) {
        logger.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;
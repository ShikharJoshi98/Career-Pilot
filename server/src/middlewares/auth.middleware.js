const config = require("../config/config");
const AppError = require("../utils/error");
const authService = require("../services/auth.service");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return next(
                new AppError("No token provided", 401)
            );
        }

        const decoded = jwt.verify(token, config.JWT_SECRET);

        req.user = await authService.getUserById(decoded.id);
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = authMiddleware;
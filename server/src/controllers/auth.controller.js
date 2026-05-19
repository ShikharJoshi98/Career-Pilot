const authService = require("../services/auth.service");
const successResponse = require("../utils/successResponse");

const register = async (req, res, next) => {
    try {
        const user = await authService.createUser(req.body);
        successResponse(res, user, "User created successfully", 201);
    } catch (error) {
        next(error);
    }
}

const login = async (req, res, next) => {
    try {
        const { user, token } = await authService.loginUser(req.body);
        res.cookie(
            "token",
            token,
            {
                httpOnly: true,
                secure: false,
                sameSite: "strict",
                maxAge: 7 * 24 * 60 * 60 * 1000
            }
        );
        successResponse(res, user, "Logged in successfully", 200);
    } catch (error) {
        next(error);
    }
}

const logout = async (req, res, next) => {
    try {
        res.clearCookie("token");
        successResponse(res, null, "Logged out successfully", 200);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    register,
    login,
    logout
}
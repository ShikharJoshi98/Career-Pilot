const AuthRepository = require("../repositories/AuthRepository");
const AppError = require("../utils/error");
const generateToken = require("../utils/generateToken");

const authRepository = new AuthRepository();

const createUser = async (data) => {
    try {
        const userExist = await authRepository.findByEmail(data.email);
        if (userExist) {
            throw new AppError("User already exists", 409);
        }
        const user = await authRepository.create(data);
        return user;
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError("Error Registering User", 500);
    }
}

const loginUser = async (data) => {
    try {
        const user = await authRepository.findByEmail(data.email);

        if (user && (await user.comparePassword(data.password))) {
            return {
                user,
                token: generateToken(user._id)
            };
        }
        else {
            throw new AppError("Invalid Credentials", 400);
        }
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError("Error Logging in", 500);
    }
}

const getUserById = async (id) => {
    try {
        const user = await authRepository.fetchById(id);
        if (!user) {
            throw new AppError("User not found", 404);
        }
        return response;
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
         throw new AppError("Error in getting user", 500);
    }
}

module.exports = {
    createUser,
    loginUser,
    getUserById
}
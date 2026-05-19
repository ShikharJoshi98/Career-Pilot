const { z } = require("zod");

const registerValidation = z.object({
    name: z.string("User name is required").min(1, "User name is required"),
    email: z.string("Email is required").email("Invalid Email"),
    password: z.string("Password is required").min(1, "Password is required")
});

const loginValidation = z.object({
    email: z.string("Email is required").email("Invalid Email"),
    password: z.string("Password is required").min(1, "Password is required")
});

module.exports = {
    registerValidation,
    loginValidation
};
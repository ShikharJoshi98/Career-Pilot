const express = require("express");
const authController = require("../controllers/auth.controller");
const validate = require("../middlewares/validate.middleware");
const authValidation = require("../utils/validation/authValidation");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/register",
    validate(authValidation.registerValidation),
    authController.register
);

router.post("/login",
    validate(authValidation.loginValidation),
    authController.login
);

router.post("/logout",
    authController.logout
);

module.exports = router;
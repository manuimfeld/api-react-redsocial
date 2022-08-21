const express = require("express");
const router = express.Router();
const { registerCtrl, loginCtrl } = require("../controllers/auth");
const { validatorRegister, validatorLogin } = require("../validators/auth");

// http://localhost:3001/api/auth/register
router.post("/register", validatorRegister, registerCtrl);

// http://localhost:3001/api/auth/login
router.post("/login", validatorLogin, loginCtrl);

module.exports = router;

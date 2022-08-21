const express = require("express");
const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../helpers/handlePassword");
const { usersModel } = require("../models");
const router = express.Router();
const { validatorRegister, validatorLogin } = require("../validators/auth");

// http://localhost:3001/api/auth/register
router.post("/register", validatorRegister, async (req, res) => {
  req = matchedData(req);
  const password = await encrypt(req.password);
  const body = { ...req, password };
  const data = await usersModel.create(body);
  data.set("password", undefined, { strict: false });
  res.send({ data });
});

// http://localhost:3001/api/auth/login
/* router.post("/login", (req, req) => {}); */

module.exports = router;

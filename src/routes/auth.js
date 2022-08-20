const express = require("express");
const { matchedData } = require("express-validator");
const router = express.Router();
const { validatorRegister, validatorLogin } = require("../validators/auth");

// http://localhost:3001/api/auth/register
router.post("/register", validatorRegister, (req, res) => {
  req = matchedData(req);
  res.send({ data: req });
});

// http://localhost:3001/api/auth/login
/* router.post("/login", (req, req) => {}); */

module.exports = router;

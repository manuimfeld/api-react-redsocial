const { check, validationResult } = require("express-validator");
const validateResults = require("../helpers/handleValidator");

const validatorCreatePost = [
  check("content").exists().notEmpty().isLength({ min: 4, max: 60 }),
  check("postedByUser").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorCreatePost };

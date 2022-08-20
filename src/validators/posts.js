const { check } = require("express-validator");
const validateResults = require("../helpers/handleValidator");

const validatorCreatePost = [
  check("content").exists().notEmpty().isLength({ min: 4, max: 60 }),
  check("postedByUser").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorGetPost = [
  check("id").exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorCreatePost, validatorGetPost };

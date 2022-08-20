const express = require("express");
const router = express.Router();
const fs = require("fs");

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
  // puede ser posts.js [posts, js]
  return fileName.split(".").shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file); // posts, users
  if (name !== "index") {
    router.use(`/${name}`, require(`./${file}`)); // http://localhost:3000/api/users
  }
});

module.exports = router;

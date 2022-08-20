const express = require("express");
const router = express.Router();

//TODO http://localhost/posts GET, POST, DELETE, PUT (CRUD)

router.get("/posts", (req, res) => {
  const data = ["hola", "mundo"];
  res.send({ data });
});

module.exports = router;

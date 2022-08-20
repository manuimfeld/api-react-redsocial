const express = require("express");
const router = express.Router();
const { getPosts, getPost } = require("../controllers/posts");

//TODO http://localhost/posts GET, POST, DELETE, PUT (CRUD)

router.get("/", getPosts);

router.get("/:id", getPost);

module.exports = router;

const express = require("express");
const router = express.Router();
const { getPosts, getPost, createPost } = require("../controllers/posts");

//TODO http://localhost/posts GET, POST, DELETE, PUT (CRUD)

router.get("/", getPosts);

router.get("/:id", getPost);

router.post("/", createPost);

module.exports = router;

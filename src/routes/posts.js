const express = require("express");
const router = express.Router();
const { validatorCreatePost } = require("../validators/posts");
const customHeader = require("../middleware/customHeader");
const { getPosts, getPost, createPost } = require("../controllers/posts");

//TODO http://localhost/posts GET, POST, DELETE, PUT (CRUD)

router.get("/", getPosts);

router.get("/:id", getPost);

router.post("/", validatorCreatePost, createPost);

module.exports = router;

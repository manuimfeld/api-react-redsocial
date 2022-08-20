const express = require("express");
const router = express.Router();
const {
  validatorCreatePost,
  validatorGetPost,
} = require("../validators/posts");
const customHeader = require("../middleware/customHeader");
const {
  getPosts,
  getPost,
  createPost,
  deletePost,
} = require("../controllers/posts");

//TODO http://localhost/posts GET, POST, DELETE, PUT (CRUD)

// GET POSTS
router.get("/", getPosts);

// GET POST
router.get("/:id", validatorGetPost, getPost);

// Create POST
router.post("/", validatorCreatePost, createPost);

// Delete POST
router.delete("/:id", validatorGetPost, deletePost);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  validatorCreatePost,
  validatorGetPost,
} = require("../validators/posts");
const authMiddleware = require("../middleware/session");
const {
  getPosts,
  getPost,
  createPost,
  deletePost,
} = require("../controllers/posts");
const checkRol = require("../controllers/rol");

//TODO http://localhost/posts GET, POST, DELETE, PUT (CRUD)

// GET POSTS
router.get("/", authMiddleware, checkRol(["user", "admin"]), getPosts);

// GET POST
router.get(
  "/:id",
  authMiddleware,
  checkRol(["user", "admin"]),
  validatorGetPost,
  getPost
);

// Create POST
router.post(
  "/",
  authMiddleware,
  checkRol(["user", "admin"]),
  validatorCreatePost,
  createPost
);

// Delete POST
router.delete(
  "/:id",
  authMiddleware,
  checkRol(["admin"]),
  validatorGetPost,
  deletePost
);

module.exports = router;

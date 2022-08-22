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
  getPostUser,
} = require("../controllers/posts");
const checkRol = require("../controllers/rol");

//TODO http://localhost/posts GET, POST, DELETE, PUT (CRUD)

// GET all Posts
router.get("/", authMiddleware, checkRol(["user", "admin"]), getPosts);

// GET Post for id
router.get(
  "/:id",
  authMiddleware,
  checkRol(["user", "admin"]),
  validatorGetPost,
  getPost
);

// GET Posts by user
router.get("/user/:id", getPostUser);

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

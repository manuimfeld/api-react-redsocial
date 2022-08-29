const express = require("express");
const { likePost } = require("../controllers/like");
const checkRol = require("../controllers/rol");
const authMiddleware = require("../middleware/session");
const router = express.Router();

// POST follow user
router.post("/:id", authMiddleware, checkRol(["user", "admin"]), likePost);

module.exports = router;

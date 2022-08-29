const express = require("express");
const { followUser, userFollowers } = require("../controllers/follow");
const checkRol = require("../controllers/rol");
const authMiddleware = require("../middleware/session");
const router = express.Router();

// POST follow user
router.post("/:id", authMiddleware, checkRol(["user", "admin"]), followUser);

// GET seguidos de un usuario
router.get("/:id", authMiddleware, checkRol(["user", "admin"]), userFollowers);

module.exports = router;

const express = require("express");
const { userFollowers } = require("../controllers/followers");
const checkRol = require("../controllers/rol");
const authMiddleware = require("../middleware/session");
const router = express.Router();

// GET seguidores de un usuario
router.get("/:id", authMiddleware, checkRol(["user", "admin"]), userFollowers);

module.exports = router;

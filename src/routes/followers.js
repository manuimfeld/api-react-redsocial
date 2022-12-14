const express = require("express");
const { userFollow } = require("../controllers/followers");
const checkRol = require("../controllers/rol");
const authMiddleware = require("../middleware/session");
const router = express.Router();

// GET user following
router.get("/:id", authMiddleware, checkRol(["user", "admin"]), userFollow);

module.exports = router;

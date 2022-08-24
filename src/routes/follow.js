const express = require("express");
const { followUser } = require("../controllers/follow");
const checkRol = require("../controllers/rol");
const authMiddleware = require("../middleware/session");
const router = express.Router();

// http://localhost:3001/api/auth/login
router.post("/:id", authMiddleware, checkRol(["user", "admin"]), followUser);

module.exports = router;

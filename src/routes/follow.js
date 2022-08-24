const express = require("express");
const { followUser } = require("../controllers/follow");
const { userFollow } = require("../controllers/follow");
const checkRol = require("../controllers/rol");
const authMiddleware = require("../middleware/session");
const router = express.Router();

// POST follow user
router.post("/:id", authMiddleware, checkRol(["user", "admin"]), followUser);

router.get("/:id", authMiddleware, checkRol(["user", "admin"]), userFollow);

module.exports = router;

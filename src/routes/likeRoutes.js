// src/routes/likeRoutes.js
const express = require("express");
const { likePost, unlikePost, getLikeCount } = require("../controllers/likeController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Authenticated Routes
router.post("/", authMiddleware, likePost);
router.delete("/", authMiddleware, unlikePost);

// Public Route
router.get("/:blogId", getLikeCount);

module.exports = router;
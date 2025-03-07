// src/routes/commentRoutes.js
const express = require("express");
const { addComment, getCommentsByBlog,deleteComment } = require("../controllers/commentController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
//Public route
router.get("/:blogId", getCommentsByBlog);

//Authenticated routes
router.post("/", authMiddleware, addComment);
router.delete("/:id", authMiddleware, deleteComment);

module.exports = router;
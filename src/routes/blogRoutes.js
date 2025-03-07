// src/routes/blogRoutes.js
const express = require("express");
const { createPost, getPosts,getPostById, updatePost, deletePost, getPostsPage } = require("../controllers/blogController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
//Public routes
router.get("/", getPosts);
router.get("/:id", getPostById);

//Authenticated routes
router.post("/", authMiddleware, createPost);
router.put("/:id",authMiddleware, updatePost);
router.delete("/:id",authMiddleware, deletePost);



module.exports = router;
const { Blog, User } = require("../models");

// Get All Posts (Publicly Accessible)
exports.getPosts = async (req, res) => {
    try {
      const posts = await Blog.findAll({ include: User });
      res.json(posts);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // Get a Single Post by ID (Publicly Accessible)
exports.getPostById = async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Blog.findOne({ where: { id }, include: User });
  
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
  
      res.json(post);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// Create a Post (Authenticated Users)
exports.createPost = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const blog = await Blog.create({ title, content, tags, userId: req.user.id });
    res.status(201).json( {message: "Blog created successfully", blog});
    //console.log(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Update a Post (Authenticated Users - Only Own Posts)
exports.updatePost = async (req, res) => {
    try {
      const { title, content, tags } = req.body;
      const { id } = req.params;
      const userId = req.user.id;
  
      const blog = await Blog.findOne({ where: { id, userId } });
  
      if (!blog) {
        return res.status(404).json({ error: "Post not found or unauthorized" });
      }
  
      blog.title = title || blog.title;
      blog.content = content || blog.content;
      blog.tags = tags || blog.tags;
  
      await blog.save();
      res.json({ message: "Post updated successfully", blog });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // Delete a Post
  exports.deletePost = async (req, res) => {
    try {
      const { id } = req.params;
      const userId = req.user.id;
  
      const blog = await Blog.findOne({ where: { id, userId } });
  
      if (!blog) {
        return res.status(404).json({ error: "Post not found or unauthorized" });
      }
  
      await blog.destroy();
      res.json({ message: "Post deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


  
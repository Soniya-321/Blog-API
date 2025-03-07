const { Comment } = require("../models");

exports.addComment = async (req, res) => {
  try {
    const { blogId, text } = req.body;
    const comment = await Comment.create({ text, blogId, userId: req.user.id });
    res.status(201).json({message: "Comment added successfully", comment});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// View Comments for a Blog Post (Public)
exports.getCommentsByBlog = async (req, res) => {
    try {
      const { blogId } = req.params;
      const comments = await Comment.findAll({ where: { blogId } });
  
      if (!comments.length) {
        return res.status(404).json({ message: "No comments found for this post" });
      }
  
      res.json(comments);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // Delete a Comment (Authenticated Users - Only Own Comments)
exports.deleteComment = async (req, res) => {
    try {
      const { id } = req.params;
      const userId = req.user.id;
  
      const comment = await Comment.findOne({ where: { id, userId } });
  
      if (!comment) {
        return res.status(404).json({ error: "Comment not found or unauthorized" });
      }
  
      await comment.destroy();
      res.json({ message: "Comment deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
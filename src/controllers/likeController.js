const { Like } = require("../models");

//Like a post 
exports.likePost = async (req, res) => {
  try {
    const { blogId } = req.body;
    await Like.create({ blogId, userId: req.user.id });
    res.json({ message: "Post liked" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Unlike a Post (Remove Like)
exports.unlikePost = async (req, res) => {
    try {
      const { blogId } = req.body;
      const userId = req.user.id;
  
      const like = await Like.findOne({ where: { blogId, userId } });
  
      if (!like) {
        return res.status(404).json({ error: "Like not found" });
      }
  
      await like.destroy();
      res.json({ message: "Like removed successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // Fetch Like Count for a Post
  exports.getLikeCount = async (req, res) => {
    try {
      const { blogId } = req.params;
  
      const likeCount = await Like.count({ where: { blogId } });
  
      res.json({ blogId, likeCount });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
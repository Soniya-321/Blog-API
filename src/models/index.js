const sequelize = require("../config/database");
const User = require("./user");
const Blog = require("./blog");
const Comment = require("./comment");
const Like = require("./like");

User.hasMany(Blog, { foreignKey: "userId" });
Blog.belongsTo(User, { foreignKey: "userId" });

Blog.hasMany(Comment, { foreignKey: "blogId" });
Comment.belongsTo(Blog, { foreignKey: "blogId" });
Comment.belongsTo(User, { foreignKey: "userId" });

Blog.hasMany(Like, { foreignKey: "blogId" });
Like.belongsTo(User, { foreignKey: "userId" });

module.exports = { sequelize, User, Blog, Comment, Like };

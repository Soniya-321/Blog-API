// src/models/comment.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Comment = sequelize.define("Comment", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.TEXT, allowNull: false },
    blogId: { type: DataTypes.INTEGER, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
  });
  
  module.exports = Comment;
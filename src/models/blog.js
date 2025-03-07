// src/models/blog.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Blog = sequelize.define("Blog", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.TEXT, allowNull: false },
    tags: { type: DataTypes.STRING },
    userId: { type: DataTypes.INTEGER, allowNull: false },
  });
  
  module.exports = Blog;
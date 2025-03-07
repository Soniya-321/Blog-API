// src/models/like.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Like = sequelize.define("Like", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    blogId: { type: DataTypes.INTEGER, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
  });
  
  module.exports = Like;
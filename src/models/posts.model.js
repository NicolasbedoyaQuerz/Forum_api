const { DataTypes } = require('sequelize');
const db = require('../utils/database');


const Posts = db.define('post', {
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id',
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
    },
}, {
    timestamps: true,
    updatedAt: false,
    createdAt: 'create_at',
});

module.exports = Posts;
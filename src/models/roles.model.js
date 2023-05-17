const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Roles = db.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    rol: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT(),
        allowNull:false,
    },
}, {
    timestamps: false
})

module.exports = Roles;
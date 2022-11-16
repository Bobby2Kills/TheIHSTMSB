const { Model, DataTypes } = require('sequelize');
const db = require(`../db/db`)

class User extends Model { }


User.init({
    slaterName: {
        type:DataTypes.INTEGER
    },
    email: {
        type:DataTypes.STRING
    },
    password: {
        type:DataTypes.STRING
    },
    userSince: {
        type:DataTypes.DATE
    }
}, {sequelize: db})

module.exports = User
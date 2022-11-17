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
        type:DataTypes.DATEONLY
    }
}, {sequelize: db})

module.exports = User
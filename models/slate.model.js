const { Model, DataTypes } = require('sequelize')
const db = require(`../db/db`)

class Slate extends Model { }



Slate.init({
    review: {
        type:DataTypes.STRING
    }
}, {sequelize: db})

module.exports = Slate
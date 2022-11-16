const { Model, DataTypes } = require('sequelize')
const User = require('./user.model')
const db = require(`../db/db`)

class Slate extends Model { }
class Slate extends User{
    constructor(slaterName)
}


Slate.init({
    review: {
        type:DataTypes.STRING
    }
}, {sequelize: db})

module.exports = Slate
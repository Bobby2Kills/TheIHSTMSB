const { Model, DataTypes } = require('sequelize')
const db = require(`../db/db`)
// I assume I would still use sequelize in the model, but use fetch in my seed????
class Movie extends Model {}

Movie.init({
    title: {
        type:DataTypes.STRING
    },
    year: {
        type:DataTypes.INTEGER
    },

}, { sequelize: db })

module.exports = Movie
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
    plot: {
        type:DataTypes.STRING
    },
    directors:[
        {
            name: {
                type:DataTypes.STRING
            }
        }, 
        {
            name: {
                type: DataTypes.STRING
            }

        }
    ],
    actors: [
        {
            name: {
                type:DataTypes.STRING
            }
        }, 
        {
            name: {
                type: DataTypes.STRING
            }

        },
        {
            name: {
                type: DataTypes.STRING
            }

        },
    ],
    image: {
            type: DataTypes.STRING
        }
}, { sequelize: db })

module.exports = Movie
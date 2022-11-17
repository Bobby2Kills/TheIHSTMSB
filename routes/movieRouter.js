const { Router } = require(`express`)
const movieRouter = Router()
const { User, Slate, Movie} = require(`../models/index`)

movieRouter.get("/", async(req,res) => {
    try {
        const allMovies = await Movie.findAll();
        res.send(allMovies)
    }
    catch (error) {
        res.send(error)
    }
})

module.exports = movieRouter
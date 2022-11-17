const express = require ('express')
const app = express()
const port = 3000;
const seed = require('.seed')
const userRouter = require('./routes/userRouter')
const slateRouter = require('./routes/slateRouter')
const movieRouter = require('./routes/movieRouter')

app.use(express.json())
app.use("/movies", movieRouter)
app.use("/slates", slateRouter)
app.use("/users", userRouter)

app.listen(port, async() => {
    await seed()
    console.log(`server listening at http://localhost:${port}`)
})
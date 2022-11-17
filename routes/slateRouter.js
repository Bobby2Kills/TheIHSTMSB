const { Router } = require(`express`)
const slateRouter = Router()
const { User, Slate, Movie} = require(`../models/index`)

slateRouter.get("/", async(req,res) => {
    try {
        const allSlates = await Slate.findAll();
        res.send(allSlates)
    }
    catch (error) {
        res.send(error)
    }
})
slateRouter.get(`/:id`, async(req,res) => {
    try {
        const oneSlate = await Slate.findByPk(req.params.id)
        res.send(oneSlate)

    }
    catch (error){
        res.send(error)
    }
})

module.exports = slateRouter
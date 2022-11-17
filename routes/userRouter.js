const { Router } = require(`express`)
const userRouter = Router()
const { User, Slate, Movie} = require(`../models/index`)

userRouter.get("/", async(req,res) => {
    try {
        const allUsers = await User.findAll();
        res.send(allUsers)
    }
    catch (error) {
        res.send(error)
    }
})

userRouter.get(`/:id`, async(req,res) => {
    try {
        const oneUser = await User.findByPk(req.params.id)
        res.send(oneUser)

    }
    catch (error){
        res.send(error)
    }
})

userRouter.get(`/:id/slates`, async (req,res) => {
    try{
        const allUserSlates = await Slate.findAll(User.findByPk(req.params.id, {include: {model: Slate}}))
        res.send(allUserSlates)
    }
    catch (error) {
        res.send(error)
    }
})

userRouter.get(`/:id/slatest`, async (req,res) => {
    try{
        const arr = await Slate.findAll(User.findByPk(req.params.id, {include: {model: Slate}}))
        const userSlatest = arr[arr.length-1]
        res.send(userSlatest)
    }
    catch (error){
        res.send(error)
    }
})

module.exports = userRouter
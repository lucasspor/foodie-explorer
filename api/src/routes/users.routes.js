const { Router } = require("express")
const UsersController = require("../controllers/UsersControllers")
const usersController = UsersController()

const routes = Router()

routes.use("/", usersController.create)
routes.use("/", usersController.update)
const { Router } = require("express")

const UsersController = require("../controllers/UsersControllers")
const usersController = UsersController()

const usersRoutes = Router()

usersRoutes.post("/", usersController.create)
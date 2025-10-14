const AppError = require("../utils/AppErrors")
const { hash } = require("bcryptjs")
const sqliteConnection = require("../database/sqlite")

class UsersController {
    async create(req, res) {
        const { name, email, password } = req.body

        const database = await sqliteConnection()

        const checkUserExist = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if (checkUserExist) {
            throw new AppError("This email is already in use.")
        }

        const hashedPassword = await hash(password, 8)

        await database.run("INSERT INTO users(name, email, password, VALUES (?,?,?)", [name, email, hashedPassword])

        return res.status(201).json({ message: "This user has been created" })
    }
}

module.exports = UsersController
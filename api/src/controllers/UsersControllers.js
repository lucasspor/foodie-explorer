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

        if (name.length < 4) {
            throw new AppError("Please enter a valid name!")
        }

        if (!email.includes("@", ".") || !email.includes(".")) {
            throw new AppError('Please enter a valid email address!');
        }

        if (password.length < 8) {
            throw new AppError("Password must be at least 8 characters long!")
        }

        const hashedPassword = await hash(password, 8)

        await database.run("INSERT INTO users(name, email, password, VALUES (?,?,?)", [name, email, hashedPassword])

        return res.status(201).json({ message: "This user has been created" })
    }

    async update(req, res) {
        const { name, email, password, old_password } = req.body
        const user_id = req.user.id

        const database = await sqliteConnection()
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id])

        if (!user) {
            throw new AppError("User not found");
        }

        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError("Este e-mail já está em uso.");
        }

        user.name = name;
        user.email = email;

        if (password && !old_password) {
            throw new AppError("Você precisa informar a senha antiga para definir a nova senha");
        }

        if (password && old_password) {
            const checkOldPassword = await compare(old_password, user.password);

            if (!checkOldPassword) {
                throw new AppError("A senha antiga não confere.");
            }

            user.password = await hash(password, 8);
        }

        await database.run(`
            UPDATE users SET
            name = ?,
            email = ?,
            password = ?,
            updated_at = DATETIME("now")
            WHERE id = ?`,
            [user.name, user.email, user.password, user_id]
        )

        return res.status(201).json()
    }
}

module.exports = UsersController
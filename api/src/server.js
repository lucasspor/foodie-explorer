require("express-async-errors")

const migrationsRun = require("./database/sqlite/migrations")

const AppError = require("./utils/AppErrors")

const express = require("express");
const routes = require("./routes")

migrationsRun()

const app = express();
app.use(express.json())

app.use((error, req, res, next) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.error(error)

    return res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

app.get("/", (req, res) => {
    res.send()
})

const port = process.env.PORT || 3333
app.listen(port, () => console.log(`Server is running on Port ${port}`))

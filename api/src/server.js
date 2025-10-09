require("express-async-errors")
const express = require("express");

const app = express();
const port = 3333;

app.get("/", (req, res) =>{
    res.send()
})

app.listen(port, () => console.log(`Server is running on Port ${port}`))

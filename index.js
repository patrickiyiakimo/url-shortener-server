const express = require("express")
const app = express()
const Joi = require("joi")
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(4000, () => {
    console.log("server is running on port 4000")
})
const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const app = express()
app.use(function (req, res, next) {
    try {
        decodeURIComponent(req.path)
        next()
    } catch (err) {
        //change after backend
        res.redirect("https://saiteja.site")
    }
})
app.use(cors())
app.use(express.json({ limit: "50mb" }))
require("./files.js")(app)
require("./feedback.js")(app)

app.listen(process.env.PORT, () => {
    console.log("server staretd on http://localhost:" + process.env.PORT);
})
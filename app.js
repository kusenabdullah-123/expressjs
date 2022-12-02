const express = require("express")
const App = express()
App.get("/", (req, res) => {
    res.status(200).json({ data: [{ username: "user" }] })
})

App.listen(5001, () => {
    console.log("Server Started");
})
require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require("body-parser");


app.use(express.static(__dirname));

// get our app to use body parser 
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/resume", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${port}`)
})
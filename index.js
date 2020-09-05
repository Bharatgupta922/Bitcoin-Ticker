//jshint eversion: 6
//json  -- javascript object notation 

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
    // console.log(req.body.crypto);
    //API - application program interface 
    request("https://apiv2.bitcoinaverage.com/indices/global/ticker/" + req.body.crypto + req.body.fiat, function (error, response, body) {
        var data = JSON.parse(body);
        res.send("<h1>The bitcoin ticker </h1><h1>" + data.high + "</h1>");
    });
});
app.listen(3000, function () {
    console.log("the server is running on port 3000");
});
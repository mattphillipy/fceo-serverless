// index.js
const express    = require("express"),
    serverless = require('serverless-http'),
    app        = express(),
    bodyParser = require("body-parser")
   
    

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");


app.get('/', function (req, res) {
  res.render('landing')
});

app.get('/courses', function (req, res) {
  res.render('show')
});


module.exports.handler = serverless(app);


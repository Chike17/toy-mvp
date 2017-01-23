var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var path = require('path')

app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname));


app.get('/', function (req, res) {
  res.send('Hello World!')
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

var express = require('express')
var parser = require('body-parser')
var app = express()

var router = require('./api')

require('./database')
require('./seed')

app.use('/', express.static('public'))
app.use(parser.json())
app.use('/api', router)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(process.env.PORT || 3000, function(){
	console.log('the server is running!')
})
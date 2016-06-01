
var express = require('express')
var parser = require('body-parser')
var app = express()

var router = require('./api')

require('./database')
require('./seed')

app.use('/', express.static('public'))
app.use(parser.json())
app.use('/api', router)

app.listen(process.env.PORT || 3000, function(){
	console.log('the server is running!')
})
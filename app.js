var express = require('express')
var morgan = require('morgan')
var swig = require('swig')
var routes = require('./routes/')
var bodyParser = require('body-parser');

var app = express()

swig.setDefaults({cache:false})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', routes(io))
app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))

app.engine('html', swig.renderFile)
app.set('view engine', 'html')
app.set('views', './views')



var socketio = require('socket.io');
var server = app.listen(3000);
var io = socketio.listen(server);
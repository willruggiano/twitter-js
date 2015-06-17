var express = require('express')
var morgan = require('morgan')
var swig = require('swig')
var tweetBank = require('tweetBank')

var app = express()

swig.setDefaults({cache:false})

app.use(morgan('dev'))

app.engine('html', swig.renderFile)
app.set('view engine', 'html')
app.set('views', './views')

var people = [{name:'Full'}, {name:'Stacker'}, {name:'Son'}]

app.get('/', function(req, res){
  res.render('index', {title:'Hall of Fame', people: people})
})

app.listen(3000, function(){
  console.log('server listening')
})

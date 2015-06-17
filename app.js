var express = require('express')
var morgan = require('morgan')
var app = express()

app.use(morgan('dev'))

app.get('/', function(req, res){
  res.send('Welcome to twitter!')
})

app.get('/news', function(req, res){
  res.send('There might be some news')
})




app.listen(3000, function(){
  console.log('server listening')
})

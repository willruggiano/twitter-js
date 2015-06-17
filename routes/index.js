var express = require('express')
var router = express.Router()
var tweetBank = require('../tweetBank')


module.exports = function(io) {


router.get('/', function(req,res){
  var tweets = tweetBank.list()
  res.render('index', { title: 'Twitter.js', tweets: tweets, showForm : true, name: ""})
})

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: list, showForm : true, name: name} );
});

router.get('/users/:name/tweets/:id', function(req, res) {
  var name = req.params.name;
  var tweet = parseInt(req.params.id);
  var list = tweetBank.find( {tweetId: tweet} );
  res.render( 'index', { title: 'Twitter.js - Tweet #' + tweet, tweets: list, showForm : false} );
});


router.post('/submit', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

return router;
};
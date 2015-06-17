var _ = require('underscore')

var data = []
var tweetId = 1

var add = function(name, text){
  data.push({name:name, text:text, tweetId: tweetId})
  tweetId++
}

var list = function(){
  return _.clone(data)
}

var find = function(properties){
  return _.where(data, properties)
}

module.exports = {add:add, list:list, find:find}


var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getName = function() {
  var names = ['Nimit Alley', 'Dave Stacky', 'Will Fullstackerson', 'Charlotte Nerd', 'Jacob Ashby', 'Ethan Gatsby',
               'Sophia Hazelnut', 'Emma Cookie', 'Madison Tilde', 'Kelsey Dash']

  return randArrayEl(names)
}

var getFakeTweet = function() {
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for(var i=0; i<10; i++) {
  module.exports.add( getName(), getFakeTweet() );
  console.log(data)
}

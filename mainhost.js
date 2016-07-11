

var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/mainhost'));



http.listen(2500, function(){
	console.log('listening on : 2500');
});




var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/mainhost'));

//sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 2500
//sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 2500

http.listen(2500, function(){
	console.log('listening on : 2500');
});


var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get('/config', function(req, res){
  
   var objectsend={};
  objectsend.display_banner=1;
  objectsend.display_fullscreen=1;
  objectsend.port=2020;
  objectsend.gameip="104.197.35.76";//ip server dat tai my
 
  if (req.query.local !== 'undefined') {
  		var timezone = Number(req.query.local);
	  if (timezone >= (-2) && timezone <= 4) {
	  	objectsend.gameip="104.155.45.73";//ip server dat tai EU:  104.155.45.73
	  } else if (timezone > 4) {
	  	objectsend.gameip="104.199.172.133";//ip server o chau A   : 104.199.172.133
	  }			
  }
  console.log("req.connection.remoteAddress: %s",req.connection.remoteAddress);
  objectsend.clientIP=req.connection.remoteAddress;
  res.setHeader('Content-Type', 'application/json');
  res.send(""+JSON.stringify(objectsend));  
});

http.listen(2020, function(){
	console.log('listening on : 2020');
});
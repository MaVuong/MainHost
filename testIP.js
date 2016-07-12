var express = require('express');
var app = express();
var http = require('http').Server(app);

//app.use(express.static(__dirname + '/mainhost'));

app.get('/config', function(req, res){
  

  var objectsend={};
  console.log("req.connection.remoteAddress: %s ",req.connection.remoteAddress);
  objectsend.clientIP=req.connection.remoteAddress;
  res.setHeader('Content-Type', 'application/json');
  res.send(""+JSON.stringify(objectsend));  
});

http.listen(2020,'::', function(){
	console.log('listening on : 2020');
});
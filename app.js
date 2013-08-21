
var express = require('express') 
  	, app = express()
  	, http = require('http')
  	, server = http.createServer(app)
  	, io = require('socket.io').listen(server);
  	

    app.use("/public", express.static(__dirname + '/public'));
  	app.get('/',function(req,res){
  		res.sendfile(__dirname + '/index.html');
  	});

server.listen(3000);


io.sockets.on('connection',function(socket){
  console.log('usuario conectadooooooooooo');
  socket.on('user-message',function(data){
   
    io.sockets.emit('server-user-message', data);
  });
});




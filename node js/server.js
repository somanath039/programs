var http = require('http');
var fs = require('fs');


var myReadStream = fs.createReadStream(__dirname+'/index.html','utf8');
var myWriteStream  = fs.createWriteStream(__dirname+'/stuff//writeMe.txt');


myReadStream.on('data',function(dump){
	console.log("dump data Streamed: ");
	console.log(dump);
	myWriteStream.write(dump);
}); 

myReadStream.pipe(myWriteStream);
var server = http.createServer(function(req,res){
	console.log("response url is :" +req.url);
	res.writeHead(200,{'Content-Type':'text/html'});
	//res.end('yes yes server is created sucessfully');
	myReadStream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('I am listening you and your works..! Be safe');

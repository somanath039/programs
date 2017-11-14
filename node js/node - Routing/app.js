var http = require('http');
var fs = require('fs');

//var MyReadStream = fs.createReadStram(__dirname+'/gamersData.json');

var server = http.createServer(function(req,res){
	console.log('request url: '+req.url);
	if(req.url ==='/home'  || req.url ==='/'){
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.createReadStream(__dirname+'/index.html').pipe(res);
	}else if(req.url === '/contact'){
		res.writeHead(200,{'Content-Type':'text/HTML'});
		fs.createReadStream(__dirname+'/contact.html').pipe(res);

	}else if(req.url == '/api/gamer'){
		res.writeHead(200,{'Content-Type':'application/JSON'});
		fs.createReadStream(__dirname+'/gamerData.json').pipe(res);
	}else{
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.createReadStream(__dirname+'/404.html').pipe(res);		
	}
	
});

server.listen(3000,'127.0.0.1');
console.log('I am listening you and your works..! Be safe');

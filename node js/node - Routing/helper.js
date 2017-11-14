

module.exports.pi =3.14;

var adder = function(a,b){
	return `${a+b}  is the sum`;
};

var arrLen = function(arr){
	return `data present in the list are ${arr.length}`;
}

module.exports.adder = adder;
module.exports.arrLen = arrLen;



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



var events = require('events');
var util =require('util');

var People = function(name){
	this.name= name;
}

util.inherits(People, events.EventEmitter);

var sundar = new People('sundar');
var somu =new People('Somanath');
var panda = new People('balaji');

var mental =[sundar,somu,panda];

mental.forEach(function(People){
	People.on('speaks',function(msg){
		console.log(People.name+' speaks: '+ msg);
	});
	People.on('reply',function(msg){
		console.log(People.name+' reply:' +msg);
	});
});

sundar.emit('speaks','hey dude');
panda.emit('reply','solara kudhi');

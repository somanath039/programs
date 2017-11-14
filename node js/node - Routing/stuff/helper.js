module.exports.pi =3.14;

var adder = function(a,b){
	return `${a+b}  is the sum`;
};

var arrLen = function(arr){
	return `data present in the list are ${arr.length}`;
}

module.exports.adder = adder;
module.exports.arrLen = arrLen;






/*
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
*/
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

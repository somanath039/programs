module.exports.pi =3.14;

var adder = function(a,b){
	return `${a+b}  is the sum`;
};

var arrLen = function(arr){
	return `data present in the list are ${arr.length}`;
}

module.exports.adder = adder;
module.exports.arrLen = arrLen;

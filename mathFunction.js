/*

Developer - Bikky Kumar
Date - 26/01/2017

*/
var exports = module.exports = {}

/*
 convert degrees to radians.
*/
exports.toRadians = function(degrees){
	return degrees * Math.PI/180
}

exports.earthRadius = function(){
	return 6371
}


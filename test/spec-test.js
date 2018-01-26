/*

- for testing
 mocha and chai framework
is used 

*/

/*
 importing modules
*/

var expect = require("chai").expect

var getDistance = require('../custom_modules/getDistance.js')
var mathFunction = require('../custom_modules/mathFunction.js')

/*

toradians method test

*/
describe("toRadians()", function(){

	it(" degrees is converted into radians", function(){

	var toRadians_result = mathFunction.toRadians(53.33)
	expect(toRadians_result).to.equal(0.9307840900885759)

	});

});


/*

distance method test

*/

describe("distance()", function(){

	it("distance between customer & dublin Office is correct", function(){

	var distance_function_result = getDistance.distance(53.3373985, -6.244994499999962)
	expect(distance_function_result).to.equal(1)

	});

});


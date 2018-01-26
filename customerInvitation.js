
/*

Developer - Bikky Kumar
Date - 26/01/2017

*/

/*
	Importing module
	
*/
	
var fs = require('fs')

/*

	Importing custom modules

*/

var getDistance = require('./custom_modules/getDistance.js')

	//reading the txt file Synchronously

var customerFile = 'data/gistfile1.txt'
var customerContents

try {

/*
	reading customerfile Synchronously

*/	
  	customerContents = fs.readFileSync(customerFile, 'UTF-8')
						.split('\n')
	 					.map(line=>JSON.parse(line))

/*

	*output the names and user ids of matching customers (within 100km), sorted by User ID (ascending).
	
	*using filter to filter customers data based on getDistance function from custom module passing the lattitude 
	longitude in float.

	*using reduce to read each line and create a object array with keys and values

*/	
	var invitationList = customerContents.filter(x=> getDistance.distance((parseFloat(x.latitude)), (parseFloat(x.longitude))) < 100)
							.reduce((inList, line)=>{
							inList[line.user_id] = line.name
							return inList
							}, {})
						
	//output						
	console.log(invitationList)

} catch (err) {
	console.log("No such file found")
}



	







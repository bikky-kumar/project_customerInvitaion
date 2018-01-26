/*

Developer - Bikky Kumar
Date - 26/01/2017

*/

/*
	Spherical Law of Cosines to calculate distance between office and customers

*/

var mathFunction = require('./mathFunction.js')

module.exports = {

	distance(lat, lon){
		var Intercom_dublin = {lat: 53.339428, lon: -6.257664}	
		//radius of earth is in Km
		var earthRadius = 6371
		var  φ1 = mathFunction.toRadians(Intercom_dublin.lat)
		var  φ2 = mathFunction.toRadians(lat)
		var Δλ =  mathFunction.toRadians(Intercom_dublin.lon - lon)
		var dis_FromOffice =  Math.acos(Math.sin(φ1)*Math.sin(φ2) + Math.cos(φ1)*Math.cos(φ2) * Math.cos(Δλ))*earthRadius
		return Math.round(dis_FromOffice)
	}

}
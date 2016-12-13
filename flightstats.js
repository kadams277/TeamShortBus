//where do you want to fly
//from to
//what date and time
//ontime status of flight/airprot
//weather forecast
//airport info and alert

$(document).ready(function() {
	// keys
	var fSappId = "3bb6e9e5"
	var fSappKey = "725fa65bd5d71ecd80d2acd493e4f562"
	
	//when submit button is clicked
	$("#airline").on("click", function() {  
		// build query
		console.log("airlines!!")
		var queryAirline =  "https://api.flightstats.com/flex/airlines/rest/v1/json/active?appId="+fSappId+"&appKey="+fSappKey
		console.log(queryAirline)
		// get data from api
		$.ajax({url: queryAirline, method: 'GET'})
		//create object
		.done(function(aLResponse) {
			// look at data
			console.log(aLResponse)
			// put in variable
			//var lat = aLResponse.results[0].geometry.location.lat;
			//var lng = aLResponse.results[0].geometry.location.lng;
			// check varaibles
			//console.log(lat+","+lng);
		});  // end .done
		return false;
	}); // end on click

	//when submit button is clicked
	$("#airport").on("click", function() {  
		// build query
		console.log("airports!!")
		var queryAirport = "https://api.flightstats.com/flex/airports/rest/v1/json/active?appId="+fSappId+"&appKey="+fSappKey
		console.log(queryAirport)
		// get data from api
		$.ajax({url: queryAirport, method: 'GET'})
		//create object
		.done(function(aPResponse) {
			// look at data
			console.log(aPResponse)
			// put in variable
			//var lat = aPResponse.results[0].geometry.location.lat;
			//var lng = aPResponse.results[0].geometry.location.lng;
			// check varaibles
			//console.log(lat+","+lng);
		});  // end .done
		return false;
	}); // end on click

/*
	//when submit button is clicked
	$("#enter").on("click", function() {  
		//read value from form
		var location = $("#location").val();
		//check results
		console.log("loc: "+ location);
		// build query
		var queryGeoURL = "https://maps.googleapis.com/maps/api/geocode/json?address="+location+"&key=" + myKey
		console.log(queryGeoURL)
		// get data from api
		$.ajax({url: queryGeoURL, method: 'GET'})
		//create object
		.done(function(geoResponse) {
			// look at data
			console.log(geoResponse)
			// put in variable
			var lat = geoResponse.results[0].geometry.location.lat;
			var lng = geoResponse.results[0].geometry.location.lng;
			// check varaibles
			console.log(lat+","+lng);
		});  // end .done
		return false;
	}); // end on click
*/

});  // end document.ready

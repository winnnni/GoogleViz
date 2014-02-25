/**
 * @author
 */

/*
 * program outline
 * 1. load jQuery
 * 2. load custom script file
 * 3. console to test scripts connected
 * 4. add document ready call
 * 5. create function activiated on document ready
 * 6. console log in that function
 * 7. load google viz library
 * 8. load data
 * 9. feed data to library and place result on a page
 * 		9.1 format the data in the way that the lib can consume
 * 		9.2 google viz format: arrays in array
 * 		9.3 
 */

console.log ("hi there!");

//UNEMPDATA is the local name of thejason file i just loaded
//metaphor: UNEMPDATA is the name i picked myself, can be any.
function dataLoaded(UNEMPDATA){
	console.log(UNEMPDATA);
	
	var myObsData = UNEMPDATA.observations;
	
	//im trying to construct an array of arrays
	var myDataArray =[];
	
	//i need header to be the first array
	//create a header before the for loop
	var HeaderArray = ["Date","Value"];
	myDataArray.push(HeaderArray);
	
	//first parameter is starting point
	for (var i=0; i<myObsData.length; i++){
		
		//create refrerence to urrent object in list
		var currObj = myObsData[i];
		
		//I dont want number to be shown in strings.
		var currArray =[currObj.date,Number(currObj.value)];
		
		myDataArray.push(currArray);
	}
	console.log(myDataArray);
	//console.log the data after the for loop
	
	//feed data to viz lib
	var data = google.visualization.arrayToDataTable(myDataArray);
	
	//figure out what type of chart i want
	var myChart = new google.visualization.LineChart(document.getElementById("myChartDiv"));
        myChart.draw(data);
}

function googleLoaded(){
	console.log("google loaded");
	
	//
	$.get("UEMP270V_data.json",dataLoaded,"json");
}

function pageLoaded(){
	
	console.log("got to page loaded");
	
	// load the google viz library
	google.load("visualization", "1", {packages:["corechart"], callback:"googleLoaded"});
	
}

$(document).ready(pageLoaded);

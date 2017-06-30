
//////////////////////////////////////////////////////////////////////////////
//MOCHA UNIT TESTING
//////////////////////////////////////////////////////////////////////////////

/////////////////
//CONTRIBUTIONS//
/////////////////

////DATE///////////NAME/////////////////DESCRIPTION////////////////////////////
//  04/19/2017     Dillon Dragomir      Initialize File 

////////////////
//DEPENDANCIES//
////////////////
var express = require("express");
var app = express();

//Function Hex and RGB converter
var converter = require("./converter");

////////
//CODE//
////////

app.get("/rgbToHex", function(req, res) {
	
	//GET number from URL
	  var red   = parseInt(req.query.red, 10);
	  var green = parseInt(req.query.green, 10);
	  var blue  = parseInt(req.query.blue, 10);
	//Convert to Hex
	  var hex = converter.rgbToHex(red, green, blue);
	//Send Hex value to client
	  res.send(hex);
	  
});

app.get("/hexToRgb", function(req, res) {
	//GET hex from URL
	  var hex = req.query.hex;
	//Convert Hex to RGB
	  var rgb = converter.hexToRgb(hex);
	//Send RGB to client 
	  res.send(JSON.stringify(rgb));
	//Eventually Create template and send html and css to client
  
});
var Port = 8081;
app.listen(Port);
console.log("Server running on port: " + Port);
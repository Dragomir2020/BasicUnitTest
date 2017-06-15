
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
var expect    = require("chai").expect;
var converter = require("../app/converter");

////////
//CODE//
////////

//Describe the test cattegory
describe("Color code converter", function() {
	//RGB to Hex 
	describe("RGB to Hex conversion", function() {
		//Expectation
		it("Converts the basic colors", function() {
			
		//Get response from function
		  var redHex   = converter.rgbToHex(255, 0, 0);
		  var greenHex = converter.rgbToHex(0, 255, 0);
		  var blueHex  = converter.rgbToHex(0, 0, 255);
		//Test against known values
		  expect(redHex).to.equal("ff0000");
		  expect(greenHex).to.equal("00ff00");
		  expect(blueHex).to.equal("0000ff");
		});
	});
	//Hex to RGB
	describe("Hex to RGB conversion", function() {
		//Expectation
		it("Converts the basic colors", function() {
		//Get response in RGB
		  var red   = converter.hexToRgb("ff0000");
		  var green = converter.hexToRgb("00ff00");
		  var blue  = converter.hexToRgb("0000ff");
		//Test response against RGB array
		  expect(red).to.deep.equal([255, 0, 0]);
		  expect(green).to.deep.equal([0, 255, 0]);
		  expect(blue).to.deep.equal([0, 0, 255]);
		});
	});
});
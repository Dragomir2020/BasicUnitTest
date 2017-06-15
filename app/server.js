
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
var chai_expect    = require("chai").expect;
var request = require("request");

////////
//CODE//
////////

//Main Heading
describe("Color Code Converter API", function() {
	//Sub heading
  describe("RGB to Hex conversion", function() {
	  //Invocation URL
	  var url = "http://localhost:8081/rgbToHex?red=255&green=255&blue=255";
	//Check for status 200 from the server
    it("returns status 200", function() {
		request(url, function(error, response, body) {
			chai_expect(response.statusCode).to.equal(200);
			done();
		});
	});
	//Check for correct conversion
    it("returns the color in hex", function() {
		request(url, function(error, response, body) {
			chai_expect(body).to.equal("ffffff");
			done();
		});
	});

  });

  describe("Hex to RGB conversion", function() {
	  //Invocation URL
	  var url = "http://localhost:8081/hexToRgb?hex=00ff00";
	//Check for status 200 from the server
    it("returns status 200", function() {
		request(url, function(error, response, body) {
			chai_expect(response.statusCode).to.equal(200);
			done();
		});
	});
	//Check for correct conversion
    it("returns the color in RGB", function() {
		request(url, function(error, response, body) {
			chai_expect(body).to.equal("[0,255,0]");
			done();
		});
	});

  });

});


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

////////
//CODE//
////////

//Global Function Declaration
exports.rgbToHex = function(red, green, blue) {

  var redHex   = red.toString(16);
  var greenHex = green.toString(16);
  var blueHex  = blue.toString(16);

  return pad(redHex) + pad(greenHex) + pad(blueHex);

};
//Local Function Declaration
function pad(hex) {
  return (hex.length === 1 ? "0" + hex : hex);
}

//Global Function Declaration
exports.hexToRgb = function(hex) {

  var red   = parseInt(hex.substring(0, 2), 16);
  var green = parseInt(hex.substring(2, 4), 16);
  var blue  = parseInt(hex.substring(4, 6), 16);

  return [red, green, blue];

};
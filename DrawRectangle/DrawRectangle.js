// DrawTriangle.js (c) 2012 matsuda
function main() {  
  // Retrieve <canvas> element
  var canvas = document.getElementById('example');  
  if (!canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 

  // Get the rendering context for 2DCG
  var ctx = canvas.getContext('2d');

  // Draw a blue rectangle
  ctx.fillStyle = 'rgba(255, 0, 0, 1.0)'; // Now sets color to red
  ctx.fillRect(120, 10, 225, 225);        // Fill a rectangle with the color
  ctx.fillStyle = 'rgba(0, 255, 0, 1.0)'; // Now sets color to green
  ctx.fillRect(240, 20, 225, 225);        // Fill a rectangle with the color 


  // Draw 36 small rectangles with random colors
  for (var i = 0; i < 36; i++) {
    // Generate random color
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    var alpha = Math.random();
    var color = 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';

    // Set fill color to random color
    ctx.fillStyle = color;

    // Calculate position of rectangle
    var x = 10 + (i % 6) * 10;
    var y = 10 + Math.floor(i / 6) * 10;

    // Draw rectangle
    ctx.fillRect(x, y, 30, 30);
  }
 
}

// HelloCanvas.js (c) 2012 matsuda
function main() {
  // Retrieve <canvas> element
  var canvas = document.getElementById('webgl');

  // Get the rendering context for WebGL
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }

  console.log("GLContext sucessfully created!");

  var red = Math.random();
  var green = Math.random();
  var blue = Math.random();
  var alpha = Math.random();

  gl.clearColor(red, green, blue, alpha);

  gl.clear(gl.COLOR_BUFFER_BIT);
}

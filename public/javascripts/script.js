var canvas = document.getElementsByTagName("body")[0];
var penColor = "rgb(255,0,0)";


function initializeGrid(height, width, pixSize) {
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var pixel = document.createElement("BUTTON");
      pixel.addEventListener("click", function() {
        this.style.background = penColor;
      })
      canvas.appendChild(pixel)
    };
    var new_line= document.createElement("DIV");
    canvas.appendChild(new_line);
  };
};

initializeGrid(24, 30, 20);

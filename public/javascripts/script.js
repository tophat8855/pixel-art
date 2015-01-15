var canvas = document.getElementsByTagName("body")[0];
var penColor = "rgb(255,0,0)";

function initializeGrid(height, width, pixSize) {
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var pixel = document.createElement("BUTTON");
      pixel.style.height = "20px";
      pixel.style.width = "20px";
      pixel.addEventListener("click", function() {
        this.style.background = penColor;
      })
      canvas.appendChild(pixel)
    };
    var new_line= document.createElement("DIV");
    canvas.appendChild(new_line);
  };
};

function initializeColorRow(pixSize){
  paintWithAllTheColorsOfTheWind("white", "Eraser");
  paintWithAllTheColorsOfTheWind("cyan");
  paintWithAllTheColorsOfTheWind("magenta");
  paintWithAllTheColorsOfTheWind("navy");
  paintWithAllTheColorsOfTheWind("pink");
  paintWithAllTheColorsOfTheWind("yellow");
  paintWithAllTheColorsOfTheWind("green");
  paintWithAllTheColorsOfTheWind("black");
  paintWithAllTheColorsOfTheWind("red");
  paintWithAllTheColorsOfTheWind("orange");
  paintWithAllTheColorsOfTheWind("brown");
  paintWithAllTheColorsOfTheWind("blue");

};

function paintWithAllTheColorsOfTheWind(colorName, label){
  if (label === undefined) {
    label = colorName;
  };

  var color = document.createElement("button");
  color.style.background = colorName;
  color.style.width = "60px";
  color.style.height = "40px";
  color.innerText = label;
  color.addEventListener("click", function() {
    penColor = colorName;
  });
  canvas.appendChild(color);
}

function setPenColor(color) {
  penColor = color;
  canvas.style.background = color;
}

initializeGrid(24, 30, 50);
initializeColorRow(20);

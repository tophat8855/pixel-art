var board = document.getElementsByTagName("canvas")[0];

var context2D = board.getContext("2d");

for (var y = 0; y < 24; y++) {
  for (var x = 0; x < 30; x++) {
    printPixel(x*20, y*20);
  };
};

function printPixel(x,y) {
  context2D.strokeRect(x, y, 20, 20);
};

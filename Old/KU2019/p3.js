const readline = require("readline-sync");
const question = readline.question;
const qInt = readline.questionInt;
const qFloat = readline.questionFloat;

const numPoints = qInt("Enter the number of points: ");

var points = [];
for (var i = 0; i < numPoints; i++) {
  var x = qFloat("Enter x" + i + ": ");
  var y = qFloat("Enter y" + i + ": ");
  points.push({ x, y });
}

var minDist = dist(points[0], points[1]);
var minIndex = [0, 1];
for (var x = 0; x < points.length - 1; x++) {
  for (var i = x + 1; i < points.length; i++) {
    if (dist(points[x], points[i]) < minDist) {
      minDist = dist(points[x], points[i]);
      minIndex = [x, i];
    }
  }
}

console.log(
  "(",
  points[minIndex[0]].x,
  ",",
  points[minIndex[0]].y,
  ") and (",
  points[minIndex[1]].x,
  ",",
  points[minIndex[1]].y,
  ") are closest"
);

function dist(a, b) {
  return Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);
}

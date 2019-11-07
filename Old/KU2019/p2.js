const readline = require("readline-sync");
const question = readline.question;
const qInt = readline.questionInt;

var TOTALSQFT = 5000;
var count = 0;
var numRooms = qInt("How many rooms are there?");
var rooms = [];

for (var i = 0; i < numRooms; i++) {
  rooms.push(qInt("Enter the square footage of room" + (i + 1) + ":"));
}

for (var i = 0; i < rooms.length; i++) {
  if (findMin(rooms).min <= TOTALSQFT) {
    TOTALSQFT -= findMin(rooms).min;
    count++;
  }
}
console.log("Number of rooms:", count);

function findMin(arr) {
  var min = arr[0];
  var index = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }

  return { min, index };
}

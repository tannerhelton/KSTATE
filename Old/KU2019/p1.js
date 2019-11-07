const readline = require("readline-sync");
const question = readline.question;
const qInt = readline.questionInt;

var previousTotal = qInt("Previous total: ");

var newScore;
var currentP = 0;
var gameTot = 0;

while (newScore != 0) {
  newScore = qInt("New Score: ");
  if (newScore != 0) {
    currentP = gameTot + newScore;
    gameTot += currentP;
    console.log("Current Push-ups:", currentP);
    console.log("Game total: ", gameTot);
  }
}

console.log("New total:", previousTotal + gameTot);

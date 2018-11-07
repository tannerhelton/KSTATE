var scan = require('readline-sync');
var readInt = scan.questionInt;
var readFloat = scan.questionFloat;
var readLine = scan.question;

var previous = readInt('Previous Total: ');
var newScore = readInt('New score: ');
var currentGamePush = newScore;
var currentTotal = currentGamePush;
console.log('Current Push ups: ' + newScore);
console.log('Game push up total: ' + currentGamePush);

while(newScore > 0) {
    newScore = readInt('New score: ');
    if(newScore > 0) {
        currentGamePush += newScore;
        currentTotal += currentGamePush;
        console.log('Current push ups: ' + currentGamePush);
        console.log('Game push up total: ' + currentTotal);
    }
}

console.log('New total: ' + (previous + currentTotal));

// var previous = readInt('Previous Total: ');
// var newScore = readInt('New score: ');
// var seasonTotal;
// var gameTotal = newScore;

// while (newScore > 0) {
//     newScore = readInt('New Score: ');
//     gameTotal += newScore;
//     console.log('Current push ups: ' + newScroe)
// }
var scan = require('readline-sync');
var readInt = scan.questionInt;
var readFloat = scan.questionFloat;
var readLine = scan.question;

var rooms = readInt('How many rooms are there? ');
var squareFeet = [];
const gallons = 10;
var sum = 0;
var remaining = 5000;
var totRoom = 0;

for(var i = 0; i < rooms; i += 1) {
    squareFeet[i] = readInt('What is the square feet of room ' + (i + 1) + " ? ");
    sum += squareFeet[i];
}

if(sum <= 5000) {
    console.log(rooms + ' room(s) were cleaned');
} else {
    squareFeet.sort();
    for (var i = 0; remaining > 0; i += 1) {
        remaining -= squareFeet[i];
        if(remaining >= 0) {
            totRoom++;
        }
    }
    console.log(totRoom +  ' room(s) were cleaned');
}
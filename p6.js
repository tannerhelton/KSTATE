var scan = require('readline-sync');
var readInt = scan.questionInt;
var readFloat = scan.questionFloat;
var readLine = scan.question;

var length = readInt('Enter the length of cardboard: ');
var width = readInt('Enter the width of the cardboard: ');

var maxVolume = 0;
var shorterSide = Math.min(length, width);

var endHeight = 0;

for (var i = 0; i < (shorterSide / 2); i++) {
    if ((length - (2 * i)) * (width - (2 * i)) * i > maxVolume)
    {
        maxVolume = (length - (2 * i)) * (width - (2 * i)) * i;
        endHeight = i;
    }
}

console.log("\n");
console.log("length = " + (length - (2 * endHeight)));
console.log("width = " + (width - (2 * endHeight)));
console.log("height = " + endHeight);
console.log("volume = " + maxVolume);
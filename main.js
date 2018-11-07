var readLine = require('readline-sync');
var readInt = readLine.questionInt;
var readFloat = readLine.questionFloat;
var readLine = readLine.question;

function countDigits(x) {
    var count = 0;
    while(x > 0) {
        count++;
        x/=10;
    }
    return count;
}

function removeChar(str, i) {
    return str.substring(0,i) + str.substring(i+1, str.length);
}
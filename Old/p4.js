var scan = require('readline-sync');
var readInt = scan.questionInt;
var readFloat = scan.questionFloat;
var readLine = scan.question;

var numOne = readInt('Num1: ');
var demOne = readInt('Dem1: ');
var numTwo = readInt('Num2: ');
var demTwo = readInt('Dem2: ');
var lastFraction = addFractions(numOne, demOne, numTwo, demTwo);

var mixedNumber = mixed(lastFraction);
console.log("" + mixedNumber.intN + " " + mixedNumber.num + "/" + mixedNumber.dem);
while (true)
{
    var num = readInt("Num: ");
    var dem = readInt("Dem: ");
    lastFraction = addFractions(lastFraction.num, lastFraction.dem, num, dem);
    mixedNumber = mixed(lastFraction);
    console.log("" + mixedNumber.intN + " " + mixedNumber.num + "/" + mixedNumber.dem);
}

function addFractions(a, b, c, d) {
    var num = (a*d + c*b);
    var dem = (d*b);
    return {
        num,
        dem
    };
}





function mixed(a) {
    var intN = 0;
    var num = a.num;
    var dem = a.dem;
    if(num >= dem) {
        intN = parseInt(num/dem);
        num = num % dem;
    }

    var divisor = Math.min(num, dem);

    while (divisor > 0)
    {
        if (Math.trunc(num / divisor) / (num / divisor) == 1 && Math.trunc(dem / divisor) / (dem / divisor) == 1)
        {
            num /= divisor;
            dem /= divisor;
        }
        divisor--;
    }

    return {
        intN,
        num,
        dem
    };
}

//console.log(mixed(lastFractiion));
const readline = require("readline-sync");
const question = readline.question;
const qInt = readline.questionInt;
const qFloat = readline.questionFloat;

var n1 = qInt("Num1 ");
var d1 = qInt("Dem1 ");
var n2 = qInt("Num2 ");
var d2 = qInt("Dem2 ");

function convertMixed(n, d) {
  if (n < d) {
    return n + "/" + d;
  } else if (n == d) {
    return 1;
  } else if (n > d) {
    var integer = 0;
    while (n > d) {
      n -= d;
      integer++;
    }
    return integer + " " + n + "/" + d;
  }
}

function addFract(a, b, c, d) {
  return [a * d + c * b, b * d];
}

function reduce(numerator, denominator) {
  var gcd = function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  };
  gcd = gcd(numerator, denominator);
  return [numerator / gcd, denominator / gcd];
}

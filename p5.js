var scan = require('readline-sync');
var readInt = scan.questionInt;
var readFloat = scan.questionFloat;
var readLine = scan.question;

var numCards = readInt('Enter number of cards: ');
var higherProb = 0;
var lowerProb = 0;
var nextCard = 0;
var tmp = 0;
var won = true;
var up = true;
while(numCards > 0) {
    
    nextCard = readInt('Enter next card: ');
    if(tmp > nextCard && higherProb > lowerProb && tmp != 0) {
        won = false;
        numCards = 0;
        break;
    }
    if (tmp < nextCard && higherProb <= lowerProb && tmp != 0) {
        won = false;
        numCards = 0;
        break;
    }
    lowerProb = nextCard/(numCards-1);
    higherProb = 1-lowerProb;
    if(higherProb > 1) {
        higherProb = 1;
    }
    if(lowerProb > 1) {
        lowerProb = 1;
    }
    numCards--;
    if(numCards > 0) { 
    if(higherProb > lowerProb) {
        console.log("Higher (Prob: " + higherProb + ")");
        up = true;
    } else {
        console.log("Lower (Prob: " + lowerProb + ")");
        up = false;
    }
}
tmp = nextCard;
    

}

if(won) {
    console.log('I won');
} else {
    console.log('I lost');
}
var scan = require('readline-sync');
var readInt = scan.questionInt;
var readFloat = scan.questionFloat;
var readLine = scan.question;

var pointsNum = readInt('Number of points? ');
var points = [];

for(var i = 0; i < pointsNum; i += 1) {
    var xt = readFloat('Enter x' + i + ": ");
    var yt = readFloat('Enter y' + i + ": ");
    points[i] = {
        x: xt,
        y: yt
    };
}

var shortestPoint1Index = 0;
var shortestPoint2Index = 0;
var shortestDistance = dist(points[0].x, points[0].y, points[pointsNum-1].x, points[pointsNum-1].y);


for(var i = 0; i < pointsNum; i += 1) {
    for(var p = 0; p < pointsNum; p += 1) {
        if(dist(points[i].x, points[i].y, points[p].x, points[p].y) <= shortestDistance && (points[i].x != points[p].x && points[i].y != points[p].y)) {
            shortestDistance = dist(points[i].x, points[i].y, points[p].x, points[p].y);
            shortestPoint1Index = i;
            shortestPoint2Index = p;
        }
    }
}

console.log("(" + points[shortestPoint1Index].x + ", " + points[shortestPoint1Index].y + ") and (" + points[shortestPoint2Index].x + ", " + points[shortestPoint2Index].y + ") are closest.");

function dist(ax, ay, bx, by) {
    return Math.sqrt(Math.pow(ax-bx, 2) + Math.pow(ay-by, 2));
}
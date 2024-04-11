'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}


const alphabetConvertor = (score) => {
    switch(true) {
        case (score >= 25 && score <= 30):
            return "A";
        case (score >= 20 && score < 25):
            return "B";
        case (score >= 15 && score < 20):
            return "C";
        case (score >= 10 && score < 15):
            return "D";
        case (score >= 5 && score < 10):
            return "E";
        case (score >= 0 && score < 5):
            return "F";
        default:
            return "Invalid score";
    }
}

function getGrade(score) {
    // Write your code here
    
    return alphabetConvertor(score);
}


function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}

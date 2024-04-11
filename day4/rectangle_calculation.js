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

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    let jsonRectangleObject = {
        length : 0,
        width : 0,
        perimeter : 0,
        area : 0
    }
    //Uzunluk = a
    jsonRectangleObject.length = a;
    // Genislik = b
    jsonRectangleObject.width = b;
    // Perimeter(Cevre) = ( 2 * (uzunluk + genislik) )
    jsonRectangleObject.perimeter = 2 * (jsonRectangleObject.length + jsonRectangleObject.width);
    // Area(Bolge) = uzunluk x genislik
    jsonRectangleObject.area = jsonRectangleObject.length * jsonRectangleObject.width;
    
    
    return jsonRectangleObject;
}


function main() {
    const a = +(readLine());
    const b = +(readLine());
    
    const rec = new Rectangle(a, b);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}

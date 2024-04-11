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

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    /*
    (?<!\d): Bu kısım, negatif geriye bakma (negative lookbehind) ifadesidir. Geriye bakma ifadeleri, mevcut konumun öncesinde belirli bir deseni kontrol etmek için kullanılır. (?<!\d) ifadesi, mevcut konumdan önce hiçbir rakam olmadığından emin olur. Yani, eğer bir sayıya bir sayıdan önce rastlanıyorsa, bu desenle eşleşmez.

\d+: Bu kısım bir veya daha fazla rakamı eşleştirir. \d rakamları temsil eder ve + ifadesi bir veya daha fazla tekrarı belirtir. Yani, bir veya daha fazla rakam olan bir sayıyı eşleştirir.

(?!\d): Bu kısım, negatif ileriye bakma (negative lookahead) ifadesidir. İleriye bakma ifadeleri, mevcut konumun sonrasında belirli bir deseni kontrol etmek için kullanılır. (?!\d) ifadesi, mevcut konumdan sonra hiçbir rakam olmadığından emin olur. Yani, eğer bir sayıya bir sayıdan sonra rastlanıyorsa, bu desenle eşleşmez.

g: Bu kısım bir global flag'dir ve düzenli ifadeyi metindeki tüm eşleşmeleri bulmak için kullanılır. Yani, metindeki tüm sayılarla eşleşir.
*/
    /*
     * Do not remove the return statement
     */
    return new RegExp(/(?<!\d)\d+(?!\d)/g);
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    const r = s.match(re);
    
    for (const e of r) {
        console.log(e);
    }
}

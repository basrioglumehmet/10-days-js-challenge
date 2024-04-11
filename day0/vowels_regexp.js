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
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    
    const re = new RegExp(/^(a|e|i|o|u).*\1$/i)
    /*
    /: Regular ifadenin başlangıcını belirtir.
^: Dizenin başlangıcını ifade eder. Yani, dize bu desene uymalı ve desen dizenin başında olmalıdır.
(a|e|i|o|u): Parantez içindeki ifade, alternatifler arasından birini seçer. Yani, bu kısımda a, e, i, o veya u harflerinden herhangi biri olabilir.
.*: Herhangi bir karakteri (ya da hiçbir karakteri) sıfır veya daha fazla kez eşleştirir. Yani, herhangi bir karakterin sıfır veya daha fazla tekrarı olabilir.
\1: İlk parantez içinde belirtilen desene bir referanstır. Yani, bu kısımda, ilk parantez içinde belirtilen sesli harf ile aynı olan bir karakter olmalıdır.
$: Dizenin sonunu belirtir. Yani, dize bu desene uymalı ve desen dizenin sonunda olmalıdır.
/: Regular ifadenin sonunu belirtir.
i: Bu bayrak, büyük-küçük harf duyarlılığını kaldırır. Yani, desen eşleşirken harf büyüklüğüne bakılmaz, hepsi küçük veya büyük harflerle eşleştirilir.
*/
    /*
     * Do not remove the return statement
     */
    return re;
}



function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(re.test(s));
}

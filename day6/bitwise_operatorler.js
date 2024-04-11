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
function getMaxLessThanK(n, k) {
    let max = 0; // Maksimum değeri saklamak için bir değişken oluşturulur.
    for (let a = 1; a <= n; a++) { // İlk sayıyı temsil eden döngü başlatılır.
        for (let b = a + 1; b <= n; b++) { // İkinci sayıyı temsil eden iç içe döngü başlatılır.
            const bitwiseAnd = a & b; // İki sayının bit düzeyi AND işlemi yapılır.
            if (bitwiseAnd < k && bitwiseAnd > max) { // Sonuç, k'dan küçük ve önceki maksimum değerden büyükse:
                max = bitwiseAnd; // Maksimum değer güncellenir.
            }
        }
    }
    return max; // Son olarak, bulunan maksimum değer döndürülür.
}



function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}

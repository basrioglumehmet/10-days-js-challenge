'use strict';

const fs = require('fs');
const https = require('https');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
      inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
      return inputString[currentLine++];
}
const axios = require("axios");

async function getNumTransactions(username){
    try {
       const fetchArticles = await axios.get("https://jsonmock.hackerrank.com/api/article_users?username="+username)
       const resultArticles = fetchArticles.data;
       
        // Check if user exists
         if (resultArticles.data.length === 0) {
           throw new Error("Username Not Found");
         }
         else{
             const userId = resultArticles.data[0].id;
             const fetchTransactions = await axios.get("https://jsonmock.hackerrank.com/api/transactions?&userId="+userId)
             const resultTransactions = fetchTransactions;
             return resultTransactions.data.total
         }
    } catch (error) {
        return error.message; // Return error message
    }
}

async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const username = readLine().trim();
    const result = await getNumTransactions(username);
    ws.write(result.toString());
}

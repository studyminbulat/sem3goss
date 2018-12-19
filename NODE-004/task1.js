const http = require('http');

const min = 333;
const max = 339;
const n = min;

let word = '';
let index = null;
for (let i = min; i<=max; i++) {
    const url = `http://kodaktor.ru/api2/buffer2/${i}`;
    // console.log(url);
    http.get(url, response => {
            let data = '';
    
            response.on('data', chunk => {
                // console.log(chunk.toString());
                const foundWord = chunk.toString().match(/\w{4}/g);
                
                data += chunk;
                if (foundWord && !word ) {
                    word = foundWord[0]
                    index = data.indexOf(foundWord[0])
                }
            });
            
            response.on('end', function () {
                if (data.length > 0)
                    console.log(`${i}:`,  data.length, data.length/i);  // d=2^16 | 334 - 333 = 1 |  21 889 024 - 21 823 488 = 65 536 | т.к. арифм. прогрессия
            });
            
        })
    }
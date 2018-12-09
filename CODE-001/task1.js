/* Minnemullin Bulat Mansurovish */
const fs = require("fs");
const text = require('crypto').publicDecrypt(fs.readFileSync("key"), fs.readFileSync("secret"))
console.log(text)
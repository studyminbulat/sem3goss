/* Minnemullin Bulat Mansurovish */
const crypto = require('crypto');
const fs = require("fs");

const file = fs.readFileSync("task1.js")
const key = fs.readFileSync("key")

const secret = crypto.publicEncrypt(key , file)
fs.writeFileSync("secret2", secret)

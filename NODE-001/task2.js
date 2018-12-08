const http = require('http');
const moment = require('moment');

http.createServer('request', (req, res) => {
    const url = req.url;
    
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    
    if (url.search(/\/add\/\d+\/\d+/g) === 0) {
       const [a, b] =  (url.match(/\d+/g) );
       //res.setHeader('Content-Type', 'text/plain; charset=utf-8');
       res.end(JSON.stringify( {sum: 'Сумма: ' + (Number(a)+Number(b))}));
    }



    else {
        res.end(JSON.stringify( { date: moment().format('DD.MM.YYYY HH:mm:ss') } ))
        
    }
}).listen(8080);

// http://goss-minbulat.c9users.io:8080/add/55/66
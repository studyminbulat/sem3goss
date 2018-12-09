const axios = require("axios")
const express = require("express")
const bodyParser = require('body-parser');
const parseString  =  require('xml2js').parseString;

const app = express();

app
.use(bodyParser.json())
.use(bodyParser.urlencoded({extended: true}))
.use((req, res, next) => {
    res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
    });
    next();
})
.post('/', (req, res) => {
    const URL = "https://nodejs.org/en/feed/blog.xml"; 
    const n = req.body.n;
    axios.get(URL)
    .then(response => {
        parseString(response.data, (err, result) => {
            const news = result.rss.channel[0].item.map(i => ({title: i.title, link: i.link})).slice(0, Number(n) )
             res.send({news})
        })
        })
    .catch(error => 
    {
        console.log(error);
        res.status(500).end('Error 404');
        });
})    

.listen( 8080, () => console.log('I`m OK'));

//http://goss-minbulat.c9users.io:8080
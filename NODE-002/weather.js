const axios = require("axios")
const express = require("express")

const app = express();

app
.use((req, res, next) => {
    res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
    });
    next();
})
.get('*', (req, res) => {
    const URL = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20woeid%3D%222123260%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"; 
        axios.get(URL)
        .then(response => {
            const minTemperature = (response.data.query.results.channel.item.forecast[1].low);
            res.send(minTemperature)
            })
        .catch(error => 
        {
            console.log(error);
            res.status(404).end('No 404');
            });
})    

.listen( 8080, () => console.log('I`m OK'));

//http://goss-minbulat.c9users.io:8080
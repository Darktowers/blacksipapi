const express = require('express');
const app = express();
const request = require('request');
const async = require('async');
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.get('/upcoming', (req, res) => {
    data = [
        { id: "1", name: "Boeign" },
        { id: "2", name: "Airbus" }
    ]
    res.json(data);
    // async.times(2, (i, callback) => {
    // var options = {
    //     url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=API_KEY',
    //     qs: {
    //         'language': 'en-US',
    //         'page': i+1,
    //         'region': 'us'
    //     },
    // } 
    // request(options, (error, response, body) => {
    //     var result = JSON.parse(body)
    //     var data = result.results;
    //     callback(null, data);
    // });
    // }, (err, results) => {
    //     res.json(results);
    // });
})

app.listen('8010', () => {
    console.log('Listening on port 8010');
})
const express = require('express');
const app = express();
const request = require('request');
const async = require('async');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
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
app.get('/aviones', (req, res) => {
    data = [
        { id: "1", name: "Boeign" },
        { id: "2", name: "Airbus" }
    ]
    res.json(data);
})
app.post("/sms", function (req, res) {
    console.log(req.body);
    res.send({ status: true, body: req.body });
});
app.listen('8010', (err) => {
    if (err) {
        throw err
    }
    console.log('Listening on port 8010');
})


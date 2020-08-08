// imports
var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mockAPIResponse = require('./mockAPI.js');
const { check, validationResult } = require('express-validator');
const cors = require("cors");

// express app
const port = process.env.PORT || 8009;
const app = express();

// express configurations
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'));
app.use(cors());

// config
require('dotenv').config();

//aylientApi
// const AYLIENTextAPI = require('aylien_textapi');
//
// const textapi = new AYLIENTextAPI({
//     application_id: process.env.AYLIENT_APP_ID,
//     application_key: process.env.AYLIENT_APP_KEY
// });

app.listen(port, () => {
    console.log(`express started on http://localhost:${port}`);
});

app.post('/sentiment', [
    check('content').isString().isLength({max: 200}),
], (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()})
    }

    res.status(200)
            // .setHeader('Access-Control-Allow-Origin', 'http:localhost:8008')
            // .setHeader('Access-Control-Allow-Methods','*')
        .send({
            "polarity":"positive",
            "subjectivity":"subjective",
            "text":"John is a very good football player",
            "polarity_confidence":0.9999936601153382,
            "subjectivity_confidence":0.9963778207617525
        })

    // textapi.sentiment(
    //     {
    //         text: req.body.content,
    //         mode: 'tweet'
    //     },
    //     function(error, response) {
    //         if (error === null) {
    //             res.send(response);
    //         } else {
    //             console.log(`Error : ${error}`);
    //         }
    //     }
    // );
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});


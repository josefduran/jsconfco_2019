'use strict';

const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index', {page:'Home', menuId:'home'});
});

app.listen(port, (err) => {
    if(err){
      throw err;
    } else {
      console.log("JSConf Colombia running on: " + port);
    }
});
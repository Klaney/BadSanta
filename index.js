var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var mongoose = require('mongoose');
var Airplane = require('./models/badsanta');
mongoose.connect('mongodb://localhost/badsantas');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/badsanta', require('./controllers/badsanta'));
app.use('/api/goodsanta', require('./controllers/goodsanta'));

// app.get('/*', function(req, res){
// 	res.sendFile(path.join(__dirname, 'public/index.html'));
// });

app.listen(3000);

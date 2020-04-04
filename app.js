var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var cors=require('cors');
var router=require('./route/route.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/uploads',express.static('uploads'));
app.use('/',router);

app.listen('3000');
console.log('server started');
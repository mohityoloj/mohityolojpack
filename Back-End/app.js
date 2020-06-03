var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var cors=require('cors');
var router=require('./route/route.js');
<<<<<<< HEAD
const myRequestLogger=require('./util/requestLogger');
const myErrorLogger = require('./util/errorLogger');

=======
>>>>>>> 2018e7828f78f03a8f5afb1d824a1b5bcde16874
const PORT=8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
<<<<<<< HEAD
app.use(myRequestLogger)
app.use('/uploads',express.static('uploads'));
app.use('/',router);
app.use(myErrorLogger)
=======
app.use('/uploads',express.static('uploads'));
app.use('/',router);
>>>>>>> 2018e7828f78f03a8f5afb1d824a1b5bcde16874

app.listen(PORT,(err)=>{
    if(!err)
    console.log('server started on port ',PORT);
    else 
        console.log(err);
});

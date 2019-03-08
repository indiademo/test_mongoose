var express = require('./express');
var mongoose = require('./mongoose');

var app=express();
var db = mongoose();

app.listen(2000);
module.exports= app;
console.log('server started');


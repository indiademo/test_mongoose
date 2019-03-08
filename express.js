var exprss = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
module.exports = function(app){

    var app= exprss();
     app.use(cors());

    app.use(bodyParser.json());
    require('./app/route')(app);
    return app;
}



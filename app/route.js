var user = require('./ctrl');

module.exports=function(app){
    app.get('/getData',user.getdata);
    app.post('/userRegistration',user.userRegistration);
    app.post('/updateUser',user.updateUser);
}
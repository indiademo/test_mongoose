var Users = require('./user.model')
var userCtrl={};

userCtrl.getdata=(req,res)=>{
    try {
        Users.find({}, (err, result) => {
            if (err) {
                res.json({
                    code: 400,
                    message: err
                })
                console.log(err)
            } else {
                if (result && result.length != 0) {
                    res.json({
                        code: 400,
                        message: result
                    })
                }
            }
        })
    } catch (error) {
        res.json({
            code: 400,
            message: error
        })
        console.log(error)
    }
}

userCtrl.userRegistration = (req, res, next) => {
    let payload = req.body
      
                try {
                    Users.find({ email: payload.email }, (err, result) => {
                        if (err) {
                            res.json({
                                code: 400,
                                message: err
                            })
                            console.log(err)
                        } else {
                            if (result && result.length != 0) {
                                res.json({
                                    code: 400,
                                    message: 'Email_id already exists'
                                })
                            } else {
                                Users.insertMany(payload).then((result) => {
                                    res.json({
                                        code: 400,
                                        message: 'User added'
                                    })
                                }).catch((errr) => {
                                    res.json({
                                        code: 400,
                                        message: errr
                                    })
                                    console.log(errr);
                                })
                            }
                        }
                    })
                } catch (error) {
                    res.json({
                        code: 400,
                        message: error
                    })
                    console.log(error)
                }
         }

         userCtrl.updateUser = (req, res) => {
            let payload = req.body
            let userdata = {
                email: payload.email
            }
            let userupdate = {
                name: payload.name
            }
            try {
                Users.updateOne(userdata, { $set: userupdate }).then((result) => {
                    console.log(res.n);
                    if (result) {
                        res.json({
                            code: 200,
                            message: 'Updated'
                        })
                    }
                }).catch((err) => {
                    res.json({
                        code: 400,
                        message: err
                    })
                })
            } catch (err) {
                console.log(err);
                res.json({
                    code: 400,
                    message: err
                })
            }
        }

module.exports=userCtrl;
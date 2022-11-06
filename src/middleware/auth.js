const userModel = require("../models/userModel");


const mid1 = async function(req, res, next) {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
        return res.send({
            status: false,
            msg: "username or the password is not corerct",
        });
    next()
};

const mid2 = async function(req, res, next) {
    let token = req.headers["x-auth-token"];
    if (!token)
        return res.send({ status: false, msg: "token must be present" });
    next()
}

module.exports.mid1 = mid1;

module.exports.mid2 = mid2;
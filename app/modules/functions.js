const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function hashString(data){
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(data , salt);
}

function compareStringWithHash(data , hash){
    return bcrypt.compareSync(data , hash);
}

function tokenGenerator(payload){
    const token = jwt.sign(payload , process.env.SECRET_KEY , {expiresIn : "3 days"});
    return token;
}

function jwtTokenVerification(token){
    const result = jwt.verify(token , process.env.SECRET_KEY);
    if(!result?.username) throw{status:401 , message:"لطفا وارد حساب کاربری خود شوید"};
    return result;
}

module.exports = {
    hashString,
    compareStringWithHash,
    tokenGenerator,
    jwtTokenVerification
}
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

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

function fileUploadPath(){
    const date = new Date();
    const year = "" + date.getFullYear();
    const month = "" + date.getMonth();
    const day = "" + date.getDate();

    const uploadPath = path.join(__dirname , ".." , ".." , "public" , "uploads" , year , month , day);
    fs.mkdirSync(uploadPath , {recursive:true});

    return path.join("public" , "uploads" , year , month , day);

}
module.exports = {
    hashString,
    compareStringWithHash,
    tokenGenerator,
    jwtTokenVerification,
    fileUploadPath
}
const { UserModel } = require("../../models/user");
const { jwtTokenVerification } = require("../../modules/functions");

const checkLogin = async(req,res,next)=>{
    try {
        const authMessage = {status:401 , message:"لطفا وارد حساب کاربری خود شوید"};
        const authorization = req?.headers?.authorization;
        if(!authorization) throw authMessage;
        let token = authorization.split(" ")[1];
        if(!token) throw authMessage;
        const result= jwtTokenVerification(token);
        const {username} = result;
        const user = await UserModel.findOne({username} , {password : 0})
        if(!user) throw authMessage;
        req.user = user;
        next();
    } catch (error) {
        next(error)
    }
}

module.exports = {
    checkLogin
}
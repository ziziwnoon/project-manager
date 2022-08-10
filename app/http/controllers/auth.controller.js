const { validationResult } = require("express-validator");
const { hashString, compareStringWithHash, tokenGenerator } = require("../../modules/functions");
const { UserModel } = require("../../models/user");
const {bcrypt} = require("bcrypt")

class AuthController{
    async register(req,res,next){
        try {
            const {username , email , mobile , password , confirm_password} = req.body;
            const hashedPassword = hashString(password);
            const user = await UserModel.create({
                username , email , mobile , password : hashedPassword
            })
            return res.json(user)
        } catch (error) {
            next(error)
        }
    }

    async login(req,res,next){
        try {
            const {username , password} = req.body;
            const user = await UserModel.findOne({username});
            if(!user) throw{status : 401 , message : "نام کاربری یا رمز عبور صحیح نیست"};
            const compareResult = compareStringWithHash(password , user.password);
            if(!compareResult) throw{status : 401 , message : "نام کاربری یا رمز عبور صحیح نیست"};
            const token = tokenGenerator({username});
            user.token = token;
            user.save();

            return res.status(200).json({
                status : 200 ,
                success : true ,
                message : "با موفقیت وارد شدید" ,
                token
            })
        } catch (error) {
            next(error)
        }
    }

    resetPassword(){

    }
}

module.exports={
    AuthController : new AuthController()
}
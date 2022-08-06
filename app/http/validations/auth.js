const {body} = require("express-validator");
const { UserModel } = require("../../models/user");

function registerValidator(){
    return [
        body("username").custom(async(value , ctx)=>{
            if(value){
                const usernameRegex = /^[a-z]+[a-z0-9\_\.]{2,}/gi;
                if(usernameRegex.test(value)){
                    const user = await UserModel.findOne({username : value});
                    if(user) throw "نام کاربری قبلا استفاده شده است"
                    return true;
                }
                throw "نام کاربری صحیح نیست"
            }
            throw "نام کاربری نمیتواند خالی باشد"
        }),
        body("email").isEmail().withMessage("ایمیل صحیح نیست").custom(async email=>{
                    const user = await UserModel.findOne({email});
                    if(user) throw "ایمیل قبلا استفاده شده است"
                    return true;
        }),
        body("mobile").isMobilePhone("fa-IR").withMessage("موبایل صحیح نیست").custom(async mobile=>{
                    const user = await UserModel.findOne({mobile});
                    if(user) throw "موبایل قبلا استفاده شده است"
                    return true;
        }),
        body("password").isLength({min:6 , max:25}).withMessage("رمز عبور باید بین 6 و 25 کارکتر باشد").custom((value,ctx)=>{
            if(value!==ctx?.req?.body?.confirm_password){
                throw "رمز و عبور و تایید ان یکسان نمیباشند";
            }
            else return true;
        })
    ]
}

module.exports = {
    registerValidator
}
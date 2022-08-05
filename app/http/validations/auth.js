const {body} = require("express-validator");

function registerValidator(){
    return [
        body("username").custom((value , ctx)=>{
            if(value){
                const usernameRegex = /^[a-z]+[a-z0-9\_\.]{2,}/gi;
                if(usernameRegex.test(value)){
                    return true;
                }
                throw "نام کاربری صحیح نیست"
            }
            throw "نام کاربری نمیتواند خالی باشد"
        }),
        body("email").not().isEmail().withMessage("ایمیل صحیح نیست"),
        body("mobile").not().isMobilePhone("fa-IR").withMessage("موبایل صحیح نیست"),
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
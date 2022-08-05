const { validationResult } = require("express-validator");

class AuthController{
    register(req,res,next){
        const {username , email , mobile , password , confirm_password} = req.body;
        const result = validationResult(req);
        return res.json(result)
    }

    login(){

    }

    resetPassword(){

    }
}

module.exports={
    AuthController : new AuthController()
}
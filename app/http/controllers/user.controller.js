const { UserModel } = require("../../models/user");

class UserController{
    getProfile(req,res,next){
        try {
            const user = req.user;
            user.profile_image = req.protocol + "://" + req.get("host") + "/"
            + (user.profile_image).replace(/[\\\\]/gm , "/");
            return res.status(201).json({
                status:201,
                success : true,
                user
            })    
        } catch (error) {
            next(error);
        }

    }

    async editProfile(req,res,next){
        try {
            const userID = req.user._id;
            const data = {...req.body};

            Object.entries(data).forEach(([key , value])=>{
                const fields = ["first_name" , "last_name" , "skills"];
                const badValues = [""," ",null,undefined,[],{},0,-1,NaN];

                if(!fields.includes(key)) delete data[key];
                if(badValues.includes(value)) delete data[key];

            })
            
            const result = await UserModel.updateOne({_id : userID} , {$set : {...data}})
            if(result.modifiedCount>0){
                return res.status(200).json({
                    status : 200,
                    success:true,
                    message:"بروزرسانی انجام شد"
                })
            }
            throw {status:401 , message:"بروزرسانی انجام نشد"}
        } catch (error) {
            next(error);
        }
    }

    async uploadProfileImage(req,res,next){
        try {
            const userID = req.user._id;
            const filePath = req?.file?.path.substring(7);
            const result = await UserModel.updateOne({_id:userID},{$set: {profile_image:filePath}});
            if(result.modifiedCount==0) throw{status:400,message:"بروزرسانی انجام نشد"};
            return res.status(200).json({
                status:200,
                success:true,
                message:"بروزرسانی موفقیت آمیز بود"
            })
        } catch (error) {
            next(error);
        }
    }



    addSkills(){

    }

    editSkills(){

    }

    acceptInvitationToTeam(){

    }

    rejectInvitationToTeam(){
        
    }
}

module.exports={
    UserController : new UserController()
}
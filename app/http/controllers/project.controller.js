const { ProjectModel } = require("../../models/project");

class ProjectController{
    async createProject(req,res,next){
        const{title,text,image,tags} = req.body;
        const owner= req.user._id;
        const result = await ProjectModel.create({title,text,owner,image,tags});
        if(!result) throw{status:400,message:"ساخت پروژه انجام نشد"}
        return res.status(201).json({
            status:201,
            success:true,
            message:"پروژه با موفقیت ایجاد شد"
        })
    }

    async getAllProjects(req,res,next){
        try {
            const owner = req.user._id;
            const projects= await ProjectModel.find({owner});
            if(!projects) throw{status:400,message:"  پروژه ای یافت نشد "}
            return res.status(200).json({
                status:200,
                success:true,
                projects
            })
        } catch (error) {
            next(error);
        }
        
    }

    getProjectById(){

    }

    getAllProjectsOfTeam(){

    }

    getProjectsOfUser(){

    }

    updateProjects(){

    }

    removeProjects(){
        
    }
}

module.exports={
    ProjectController : new ProjectController()
}
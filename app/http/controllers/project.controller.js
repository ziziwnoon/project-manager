const { ProjectModel } = require("../../models/project");

class ProjectController{
    async createProject(req,res,next){
        const{title,text,image} = req.body;
        const owner= req.user._id;
        const result = await ProjectModel.create({title,text,owner,image});
        if(!result) throw{status:400,message:"ساخت پروژه انجام نشد"}
        return res.status(201).json({
            status:201,
            success:true,
            message:"پروژه با موفقیت ایجاد شد"
        })
    }

    getAllProjects(){

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
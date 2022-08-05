const {Schema, Types , model} = require("mongoose");

const projectSchema = new Schema({
    title : {type : String , required : true },
    text : {type : String},
    image : {type : String , default:"/defaults/default.png"},
    owner : {type : Types.ObjectId},
    team : {type : Types.ObjectId},
    private : {type : Boolean , default:true},
})

const ProjectModel = model("project" , projectSchema);

module.exports={
    ProjectModel
}
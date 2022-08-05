const {Schema, Types , model} = require("mongoose");

const teamSchema = new Schema({
    name : {type : String , required : true },
    description : {type : String},
    users : {type : [Types.ObjectId], required : true },
    owner : {type : Types.ObjectId, required : true},
})

const TeamModel = model("team" , teamSchema);

module.exports={
    TeamModel
}
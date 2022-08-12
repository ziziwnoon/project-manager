const {Schema, Types , model} = require("mongoose");

const userSchema = new Schema({
    first_name : {type : String},
    last_name : {type : String},
    username : {type : String, required : true , unique : true},
    password : {type : String, required : true , unique : true},
    email : {type : String, required : true , unique : true},
    mobile : {type : String, required : true },
    role : {type : [String] , default: ["USER"]},
    skills : {type : [String] , default:[]},
    team : {type : [Types.ObjectId], default:[]},
    token : {type:String , default:""},
    profile_image : {type:String , default:""}
},{
    timestamps:true
})

const UserModel = model("user" , userSchema);

module.exports={
    UserModel
}
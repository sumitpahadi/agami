const mongoose=require("mongoose")
const Schema=mongoose.Schema
const userschema=new Schema(
    {
        name:{
            required:true,
            type:String
        },
        email:{
            required:true,
            type:String
        },
        password:{
            required:true,
            type:String
        },
        typeuser:{
            required:true,
            type:String

        },
        dataarray:{
            type:Array,
            default:[]
        }
        
    }
)

module.exports=mongoose.model("user",userschema)
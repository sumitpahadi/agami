const mongoose=require("mongoose")
const Schema=mongoose.Schema
const timesheet=new Schema(
    {
        userid:
        {
            type:String,
            required:true

        },
        date:{
            type:String,
            required:true
        },
        rating:{
            type:String,
            

        },
        description:{
            type:String,
            required:true
        }
    }
)
module.exports=mongoose.model("time",timesheet)
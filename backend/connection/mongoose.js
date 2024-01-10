const mongoose=require("mongoose")
const client=(url)=>{
    mongoose.connect(url)
    .then(()=>console.log("mongoose is connected"))
    .catch((error)=>console.log(error))
}

module.exports=client
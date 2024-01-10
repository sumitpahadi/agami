const express=require("express")
const cors=require("cors")
const routing=require("./routing/Routes")
const app=express()
app.use(cors(
    {
        origin:"*"
    }
))
app.use(express.json())
app.use('/',routing)
const client=require("./connection/mongoose")
const port=4000
 const connection=async()=>{
    try {
        await client("mongodb+srv://sumitrawat:sumitrawat123@fooddelivery.4rq8d0f.mongodb.net/agami-teach?retryWrites=true&w=majority")
    app.listen(port,()=>{
        console.log("server is running on server",port)
    
    })
        
    } catch (error) {
        console.log(error)
        
    }
 }
 connection()
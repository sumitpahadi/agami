import React, { useState } from 'react'
import axios from "axios"

function Register() {
    const [msg,setmsg]=useState()
    const [data,setdata]=useState(
        {
            name:"",
            email:"",
            password:"",
            typeuser:"",
        }
    )
    const handlechange=(e)=>{
        const {name,value}=e.target
        setdata({...data,[name]:value})
    }

    const handleclick=(e)=>{
        e.preventDefault()
        console.log(data)

        axios.post("http://localhost:4000/register",data)
        .then((response)=>{
            console.log(response.data)
            setmsg(response.data.msg)
            
        })
        .catch((error)=>console.log(error)
        )
    }
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
        <h1>{msg}</h1>

    <div style={{width:"300px",height:"300px",border:"2px solid black",padding:"10px",display:"flex",justifyContent:"center"}}>
        <form action="">
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' placeholder='enter name' onChange={handlechange} value={data.name} />
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email' placeholder='enter the email' onChange={handlechange}  value={data.email} />
            <br />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" id='password' name='password' placeholder='enter password' onChange={handlechange} value={data.password}/>
            <br />
            <br />
            <label htmlFor="type">User Type </label>
            <input type="text" id='type' name='typeuser' placeholder='enter the user type' onChange={handlechange} value={data.typeuser} />
            <br />
            <br />
            <input type="submit" value={"submit"}  onClick={handleclick}/>
        </form>
      
    </div>
    </div>
  )
}

export default Register

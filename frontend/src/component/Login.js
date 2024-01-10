import React, { useState } from 'react'
import axios from "axios"

function Login() {
    const [msg,setmsg]=useState()
    const [data,setdata]=useState(
        {
            email:"",
            password:"",
            typeuser:""
        }
    )
    const handlechange=(e)=>{
        const {name,value}=e.target
        setdata({...data,[name]:value})
    }
    const handleclick=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:4000/login",data)
        .then((response)=>{
            console.log(response.data)
            const token=response.data.token
            const userid=response.data.user
            const type=response.data.typeuser
            localStorage.setItem("tokken",token)
            localStorage.setItem("id",userid)
            localStorage.setItem("type",type)
            setmsg(response.data.msg)
        })
        .catch((error)=>{
            console.log(error)
        })
    }


  return (
    <div style={{display:"flex",justifyContent:"center"}}>
        <h1>{msg}</h1>
        <div style={{width:"300px",height:"300px",border:"2px solid black",padding:"10px",display:"flex",justifyContent:"center"}}>
            <form action="">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' value={data.email} onChange={handlechange} placeholder='enter your email' />
                <br />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" id='password' name='password' value={data.password} onChange={handlechange} placeholder='enter password' />
                <br />
                <br />
                <label htmlFor="type">User Type</label>
                <input type="text" id='type' name='typeuser' placeholder='user type ' onChange={handlechange} value={data.typeuser} />
                <br />
                <br />
                <input type="submit" value={"submit"}  onClick={handleclick}/>
            </form>

        </div>

      
    </div>
  )
}

export default Login

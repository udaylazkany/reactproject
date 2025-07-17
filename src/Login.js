import { useState } from "react"
import axios from 'axios'

export default function Login()
{
    
    
        const[Email,SetEmail]=useState('')
        const[password,Setpassword]=useState('')
        const[Accept,SetAccept]=useState(false)
       
        
        async function  submit(e)
     {
       let Flag=true
        e.preventDefault()
        SetAccept(true)
        if(password.length<8)
            {
               Flag=false
            }else{Flag=true}
            try{
            if(Flag)
            {
              // eslint-disable-next-line no-unused-vars
              let res= await axios.post('http://127.0.0.1:8000/api/login',{
                 
                 email:Email,
                 password:password,
                 
               })
               if(res.status===200)
                {
                  window.localStorage.setItem('Email',Email)
                  window.location.pathname="/"
                } 
              
              }}
               catch(err){
    }
    }
        return( 
          <div className="sing_up_style">
          
        <div className="box" style={{height:'250px'}}>
       
          <span className="borderLine"></span>
    <form onSubmit={submit} >
    
    
    
    
    <div className="inputBox"><input id="Email" type="text"  required value={Email} onChange={e=>SetEmail(e.target.value)}/>
    <span htmlFor="Email">Email</span>
    <i></i>
    </div>
   
    
    <div className="inputBox"><input id="Password"  type="password" required value={password} onChange={e=>Setpassword(e.target.value)} />
    <span  htmlFor="Password"  > Password</span>
    <i></i>
    </div>
    {password.length<8 &&Accept&&<p className="Error"> password must be more than 8</p>}
    
    
    
    
    <button type="submit" className="button1" >Login</button>
    </form>
    
        </div>
        </div>
        )
    }

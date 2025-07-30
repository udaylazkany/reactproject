import { useEffect, useState } from "react";
import axios from "axios";
import Forms from "@/Components/Form";

export default function UpdateUser() {
  const [Name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const id = window.location.pathname.split("/").slice(-1)[0];
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
      .then((res) => res.json())
      .then((data) => {
        SetName(data[0].name);
        SetEmail(data[0].email);
      });
  }, [id]);
  /* async function  submit(e)
 {
   let Flag=true
    e.preventDefault()
    SetAccept(true)
    if(Name===''||password.length<8||Repassword!==password)
        {
           Flag=false
        }else{Flag=true}
        try{
        if(Flag)
        {
          // eslint-disable-next-line no-unused-vars
          let res= await axios.post(`http://127.0.0.1:8000/api/user/update/${id}`,{
             name:Name,
             email:Email,
             password:password,
             password_confirmation:Repassword
           }) 
          if(res.status===200)
          {
            window.localStorage.setItem('Email',Email)
            window.location.pathname="/dashbord/users"
          }

          }
          
          }
           catch(err){
SetEmailError(err.response.status)}
}*/

  return (
    <Forms
      button="Update User"
      name={Name}
      email={email}
      endpoint={`user/update/${id}`}
    />
  );
}

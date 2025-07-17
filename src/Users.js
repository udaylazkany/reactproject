/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import axios from "axios";
export default function users()
{
    const[users,setusers]=useState([])
    const[DELETEUSER,SETDELETEUSER]=useState(0)
    useEffect(() => {
    fetch('http://127.0.0.1:8000/api/user/show').then(res=>res.json()).then(data=>
        setusers(data)
    )
},[DELETEUSER]

    );
   async function DeleteUser(id)
    {
      try
      {
        let res=await  axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`)
        if(res.status===200){
          SETDELETEUSER(pre=>pre+1)
          
        }
      }
      catch{

      }
      
    }
    
    const showusers = users.map((user, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          <td>
           <Link to={`${user.id}`} >
           <button  style={{marginRight:'10px',  background: 'none', border: 'none', cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faEdit} style={{  color: 'blue' }} title="Edit" />
                </button>
           </Link>
               
                <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} title="Delete" onClick={()=>DeleteUser(user.id)} />
                </button>
            </td>
        </tr>
    ));

    return(<div style={{ flexGrow:'1' }} >
        <table style={{width:'100%',borderCollapse:'collapse'}} >
        <thead>
    <tr>
        <th>id</th>
        <th>user</th>
        <th>email</th>
        <th>Action</th>
    </tr>
</thead>
            <tbody>
            
                    
                    {showusers}
                    
              
           

            </tbody>
        </table>
    </div>)
}
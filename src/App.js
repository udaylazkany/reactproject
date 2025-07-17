

import Singup from "./Singup"
import Homepage from "./Homepage";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashbord from "./Dashbord";
import Users from './Users'
import Updateuser from "./Components/updateuser";
export default function App()
{
  return(<div >
 
 <Routes>
  <Route path="Register" element={<Singup/>} />
  <Route path="Login" element={<Login/>} />
  <Route path="/" element={<Homepage/>}/>
  <Route path="/dashbord" element={<Dashbord/>} >
  <Route path="users" element={<Users/>} />
  <Route path="users/:id" element={<Updateuser/>}/>
  </Route>
 
 </Routes>
 
    
  </div>)
}
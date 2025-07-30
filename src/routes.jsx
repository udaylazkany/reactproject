import { Route, Routes } from "react-router";
import SignupPage from "./pages/Signup";
import Homepage from "./pages/Home";
import Login from "./pages/Login";
import Dashbord from "./pages/Dashbord";
import Users from "./pages/Users";
import Updateuser from "./pages/UpdateUser";
export default function AppRoutes() {
  return (
    <Routes>
      <Route index={true} element={<Homepage />} />
      <Route path="/Register" element={<SignupPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/dashboard" element={<Dashbord />}>
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<Updateuser />} />
      </Route>
    </Routes>
  );
}

import { Outlet } from "react-router";
import SideBar from "@/Components/SideBar";
import TopBar from "@/Components/TopBar";
import "./style.css";
export default function Dashbord() {
  return (
    <div>
      <TopBar />
      <div className="content-flex">
        <SideBar />
        <div style={{ width: "80%" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

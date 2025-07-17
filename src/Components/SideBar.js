import { Link } from "react-router-dom";

export default function SideBar()
{
    return(<div className="side-bar">
<Link to={'/dashbord/users'} className="item-link" >users</Link>

    </div>)
}
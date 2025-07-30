import { Link } from "react-router";

export default function TopBar() {
  return (
    <div>
      <div className="topBarStyle Top-Bar">
        <h1>Store</h1>
        <Link className="topBarStylel" to={"/"}>
          <h3>Go To Home page</h3>
        </Link>
      </div>
    </div>
  );
}

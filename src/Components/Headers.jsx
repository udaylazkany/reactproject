import { Link } from "react-router";

export default function Header() {
  function handleLogout() {
    window.localStorage.removeItem("Email");
    window.location.pathname = "Login";
  }
  return (
    <nav>
      <div>
        <a href="#"> Home</a>
        <a href="#"> About</a>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        {!window.localStorage.getItem("Email") ? (
          <>
            <Link to={"/Register"} className="Button-controlerpage">
              <h3>Register</h3>
            </Link>
            <Link to={"/Login"} className="Button-controlerpage">
              <h3>Login</h3>
            </Link>
          </>
        ) : (
          <div onClick={handleLogout} className="Button-controlerpage">
            Logout
          </div>
        )}
      </div>
    </nav>
  );
}

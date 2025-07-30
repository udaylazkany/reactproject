import axios from "axios";
import { useEffect, useState } from "react";
////final
export default function Forms(props) {
  const [Name, SetName] = useState("");
  const [Email, SetEmail] = useState("");
  const [password, Setpassword] = useState("");
  const [Repassword, SetRepassword] = useState("");
  const [Accept, SetAccept] = useState(false);
  const [EmailError, SetEmailError] = useState("");
  useEffect(() => {
    SetName(props.name);
    SetEmail(props.email);
  }, [props.name, props.email]);
  async function submit(e) {
    let Flag = true;
    e.preventDefault();
    SetAccept(true);
    if (Name === "" || password.length < 8 || Repassword !== password) {
      Flag = false;
    } else {
      Flag = true;
    }
    try {
      if (Flag) {
        let res = await axios.post(
          `http://127.0.0.1:8000/api/${props.endpoint}`,
          {
            name: Name,
            email: Email,
            password: password,
            password_confirmation: Repassword,
          }
        );
        if (res.status === 200) {
          window.localStorage.setItem("Email", Email);
          window.location.pathname = "/";
        }
      }
    } catch (err) {
      SetEmailError(err.response.status);
    }
  }

  return (
    <div className="sing_up_style">
      <div className="box">
        <span className="borderLine"></span>
        <form onSubmit={submit}>
          <div className="inputBox">
            <input
              id="Name"
              type="text"
              required
              value={Name}
              onChange={(e) => SetName(e.target.value)}
            />
            <span htmlFor="Name">User Name</span>
            <i></i>
          </div>
          {Name === "" && Accept && (
            <p className="Error">user name is required</p>
          )}

          <div className="inputBox">
            <input
              id="Email"
              type="text"
              required
              value={Email}
              onChange={(e) => SetEmail(e.target.value)}
            />
            <span htmlFor="Email">Email</span>
            <i></i>
          </div>
          {Accept && EmailError === 422 && (
            <p className="Error"> Email alreade has been</p>
          )}

          <div className="inputBox">
            <input
              id="Password"
              type="password"
              required
              value={password}
              onChange={(e) => Setpassword(e.target.value)}
            />
            <span htmlFor="Password"> Password</span>
            <i></i>
          </div>
          {password.length < 8 && Accept && (
            <p className="Error"> password must be more than 8</p>
          )}

          <div className="inputBox">
            <input
              id="Repassword"
              type="Password"
              required
              value={Repassword}
              onChange={(e) => SetRepassword(e.target.value)}
            />
            <span htmlFor="Repassword">Repassword</span>
            <i></i>
          </div>
          {Repassword !== password && Accept && (
            <p className="Error">password dosn't muchs</p>
          )}
          <button type="submit" className="button1">
            {props.button}
          </button>
        </form>
      </div>
    </div>
  );
}

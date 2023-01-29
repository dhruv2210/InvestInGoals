import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./login.css";


const Login = () => {

  const history = useNavigate();


  const [phone, setPhone] = useState('');
  const [pswd, setPswd] = useState('');

  const loginuser = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        phone, pswd
      })
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("invalid credentials");
    } else {
      window.alert("login successfull");
      history("/");
    }

  }

  return (

    <div>

      <br />
      <br />
      <br />

      <br />
      <br />
      <div className="main">
        <div className="container box col-6" data-aos="fade-up">

          <form id="enterinfo" className="row form-control-lg">
            <div className="col-12 mt-3 mb-2">
              <input className="form-control"
                type="tel" 
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Mobile Number"

                id="checkkk"
                required=""
                // maxlength="13"
                pattern="^((\+91[0-9]{10})|(0[0-9]{10}))$"
                title="Please enter valid phone number" />
            </div>

            <div className="col-md-12 mt-2 mb-2">

              <input
                type="password"
                className="form-control"
                name="pswd"
                value={pswd}
                onChange={(e) => setPswd(e.target.value)}
                placeholder="Password"
                required="" />
            </div>
            <a className="signUp" href="/Signup">
              Do not have account?
            </a>
            <div className="col-12 mt-2 mb-2">
              <button className="btn btn-outline-light" type="submit" name="Login" id="login" value="login" onClick={loginuser} ><b>Login </b></button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}


export default Login;


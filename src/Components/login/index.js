import React, { useState } from "react";
import AuthData from "../Auth.json";
import Home from "../home";

function LoginComponent() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [auth, setAuth] = useState(true);
  const [err, setErr] = useState(false);
  const data = AuthData;

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (data.username === user.username && data.password === user.password) {
      console.log("treu");
      setAuth(false);
    } else {
      console.log("false");
      setAuth(true);
      setErr(true);
    }
  }

  function handleLogin(logOut) {
    if (logOut) {
      setAuth(true);
    }
  }
  console.log(err);
  return (
    <div className="container-fluid col-md-12 ">
      {auth ? (
        <form className="col-md-6 mx-auto p-5 bg-light rounded shadow">
          <h3 className="mb-3">Login</h3>
          {err ? (
            <div className="alert alert-danger mt-2 mb-2" role="alert">
              Login Failed
            </div>
          ) : (
            ""
          )}
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={handleChange}
              value={user.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
              value={user.password}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      ) : (
        <Home handleLogin={handleLogin} />
      )}
    </div>
  );
}
export default LoginComponent;

import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Usercontext } from "./App";
import "./Login.css";

function Login() {
  const { dispatch } = useContext(Usercontext);
  let [manualUsername, setManualUsername] = useState("");
  let [manualPassword, setManualPassword] = useState("");

  const changeUsername = (e) => {
    e.preventDefault();
    setManualUsername(`${e.target.value}`);
  };

  const changePassword = (e) => {
    e.preventDefault();
    setManualPassword(`${e.target.value}`);
  };

  const manualSignIn = (e) => {
    e.preventDefault();
    if (manualUsername === "foo" && manualPassword === "bar") {
      dispatch({
        type: "SET_USER",
        user: "new",
        userName: `${manualUsername}`,
      });
    }
  };
  return (
    <div className="login">
      <div className="welcome__text">
        <p>Login to Infinite Scroll</p>
      </div>
      <form className="form" type="submit">
        <label>Username</label>
        <input
          value={manualUsername}
          onChange={(e) => changeUsername(e)}
          placeholder="Username"
          type="text"
        ></input>
        <br />
        <label>Password</label>
        <input
          value={manualPassword}
          onChange={(e) => changePassword(e)}
          placeholder="Password"
          type="text"
        ></input>
        <br />
        <button
          type="submit"
          className="button"
          onClick={(e) => manualSignIn(e)}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

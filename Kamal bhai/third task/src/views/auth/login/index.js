// import React from "react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logInAction } from "../../../store/action/authAction";
import { useDispatch, useSelector } from "react-redux";

import "../style.css";

const Login = () => {
  let r = (Math.random() + 1).toString(36).substring(7);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [msg, setMsg] = useState(null);
  const [error, setError] = useState(null);
  const [body, setBody] = useState({
    email: null,
    password: null,
    deviceToken: r,
  });
  const state = useSelector((state) => state?.authReducer);
  console.log("state login", state?.signin);
  // console.log("state login", state?.signin?.data?.statusCode);
  const onSuccess = (message) => {
    setMsg(message);
    navigate('/dashboard')
    console.log("msg", msg);
  };
  const onFailure = (message) => {
    setError(message);
    console.log("errorr", error);
  };
  const logInFun = (e) => {
    // console.log("body=>", body);
    if (body) {
      dispatch(logInAction(body, onSuccess, onFailure));
    }
  };

  const signUp = () => {
    navigate("/signup");
  };
  // useEffect(() => {
  //   if (state?.signin?.data?.statusCode == 201) {
  //     alert(state?.signin?.data?.message);
  //     // navigate('/dashboard')
  //   }
  // }, [state?.signin]);
  useEffect(() => {
    if (error?.data?.statusCode == 400) {
      alert(error?.data?.message);
      navigate("/emailaccount");
    }
    else if (error?.data?.statusCode == 401) {
      alert(error?.data?.message);
    }
  }, [error?.data]);
  return (
    <div className="mainDiv">
      <div className="box">
        <div className="title-box">
          {/* <!-- <img src="" alt="facebook" /> --> */}
          <h2>Square pro</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="form-box">
          {/* <form action=""> */}
          <input
            type="text"
            placeholder="Email address or mobile number"
            name="email"
            onChange={(text) => setBody({ ...body, email: text.target.value })}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(text) =>
              setBody({ ...body, password: text.target.value })
            }
            name="password"
          />
          <button onClick={logInFun}>Login</button>
          <a href="#">Forgotten password</a>
          {/* </form> */}
          <hr />
          <div className="create-btn">
            <button onClick={signUp}>Create new Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpAccountVerifyAction } from "../../../store/action/authAction";
import "../style.css";

const SignUpAccountVerify = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [code, setCode] = useState(null);
  const [msg, setMsg] = useState(null);
  const [error, setError] = useState(null);
  const state = useSelector((state) => state.authReducer);
  console.log("state account verify", state?.signupaccountverify);
  console.log(
    "state account verify",
    state?.signupaccountverify?.data?.statusCode
  );
  const onSuccess = (message) => {
    setMsg(message);
    console.log("msg", msg);
  };
  const onFailure = (message) => {
    setError(message);
    console.log("error", error);
  };
  const verify = (e) => {
    // console.log("body=>", body);
    if (code) {
      dispatch(signUpAccountVerifyAction({ code: code }, onSuccess, onFailure));
    }
  };

  useEffect(() => {
    if (state?.signupaccountverify?.data?.statusCode == 201) {
      alert(state?.signupaccountverify?.data?.message);
      navigate('/')
    } else {
      alert(state?.signupaccountverify?.data?.message);
    }
  }, [state?.signupaccountverify]);
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
          {/* <form> */}
          <input
            type="text"
            onChange={(text) => setCode(text.target.value)}
            placeholder="Enter Code"
            name="code"
          />
          <button onClick={verify}>Verify</button>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};
export default SignUpAccountVerify;

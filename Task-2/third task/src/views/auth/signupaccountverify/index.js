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
  // console.log(
  //   "state account verify",
  //   // state?.signupaccountverify?.data
  // );
  const onSuccess = (message) => {
    setMsg(message);
    console.log("msg", msg);
  };
  const onFailure = (message) => {
    setError(message);
    console.log("error", error?.data?.statusCode);
  };
  const verify = (e) => {
    e.preventDefault();
    // console.log("body=>", body);
    if (code !== null) {
      dispatch(signUpAccountVerifyAction({ code: code }, onSuccess, onFailure));
    }
  };

  useEffect(() => {
    if (state?.signupaccountverify?.data?.statusCode == 201) {
      alert(state?.signupaccountverify?.data?.message);
      navigate("/");
    } else if (state?.signupaccountverify == null) {
      // //
    }
  }, [state?.signupaccountverify]);
  useEffect(() => {
    if (error?.data?.statusCode == 404) {
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
          <form onSubmit={verify}>
            <input
              type="text"
              onChange={(text) => setCode(text.target.value)}
              placeholder="Enter Code"
              name="code"
            />
            <button type="submit">Verify</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUpAccountVerify;

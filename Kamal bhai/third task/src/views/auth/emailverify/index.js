import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { emailVerifyAction } from "../../../store/action/authAction";
import "../style.css";

const EmailVerify = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [msg, setMsg] = useState(null);
  const [error, setError] = useState(null);
  const state = useSelector((state) => state?.authReducer);
  console.log("state email verify", state?.emailverify);
//   console.log(
//     "state email verify",
//     state.signupaccountverify.data.statusCode
//   );
  const onSuccess = (message) => {
    setMsg(message);
    console.log("msg", msg);
  };
  const onFailure = (message) => {
    setError(message);
    console.log("errorrr", error);
  };
  const verify = (e) => {
    // console.log("body=>", body);
    if (email) {
      dispatch(emailVerifyAction({ email: email }, onSuccess, onFailure));
    }
  };

  useEffect(() => {
    if (state?.emailverify?.data?.statusCode == 201) {
      alert(state?.emailverify?.data?.message);
     navigate('/signupaccountverify')
    } else {
      alert(state?.emailverify?.data?.message);
    }
  }, [state?.emailverify]);
  
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
          <input
          value={email}
            type="email"
            onChange={(text) => setEmail(text.target.value)}
            placeholder="Enter Email"
            name="email"
          />
          <button onClick={verify}>Verify</button>
        </div>
      </div>
    </div>
  );
};
export default EmailVerify;
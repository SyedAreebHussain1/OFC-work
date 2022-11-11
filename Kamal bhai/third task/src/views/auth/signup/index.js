import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../../../store/action/authAction";
import "../style.css";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [msg, setMsg] = useState(null);
  const [error, setError] = useState(null);
  //   console.log(error)
  const state = useSelector((state) => state?.authReducer);
  console.log("state signup=>", state?.signup);
  console.log("state signup msg=>", state?.signup?.data?.statusCode);
  const [body, setBody] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    phone: null,
    whatsapp_no: null,
    cnic: null,
    dob: null,
    countryId: 1,
    cityId: 1,
    gender: null,
  });
  const onSuccess = (message) => {
    setMsg(message);
    console.log("msg", msg);
  };
  const onFailure = (message) => {
    setError(message);
    console.log("error", error);
  };
  const signUpFun = (e) => {
    // console.log("body=>", body);
    if (body) {
      dispatch(signUpAction(body, onSuccess, onFailure));
    }
  };
  useEffect(() => {
    if (state?.signup?.data?.statusCode == 201) {
      alert(state?.signup?.data?.message);
      navigate("/signupaccountverify");
    } else if (state?.signup?.data?.statusCode == 400) {
      alert(state?.signup?.data?.message);
    }
  }, [state.signup]);

  return (
    <div className="signUpmainDiv">
      <div className="signUpMainDiv">
        <div className="sign-up-form">
          {/* <img src="" className="signUpimg" alt="img" /> */}
          <h1>Sign Up Now</h1>
          <form action="">
            <input
              value={body.firstName}
              type="text"
              placeholder="First name"
              className="input-box"
              name="firstName"
              id=""
              onChange={(text) =>
                setBody({ ...body, firstName: text.target.value })
              }
            />
            <input
              value={body.lastName}
              type="text"
              placeholder="Surname"
              className="input-box"
              name="lastName"
              id=""
              onChange={(text) =>
                setBody({ ...body, lastName: text.target.value })
              }
            />
            <input
              value={body.email}
              type="email"
              placeholder="Email"
              className="input-box"
              name="email"
              id=""
              onChange={(text) =>
                setBody({ ...body, email: text.target.value })
              }
            />
            <input
              value={body.password}
              type="password"
              placeholder="Password"
              className="input-box"
              name="password"
              id=""
              onChange={(text) =>
                setBody({ ...body, password: text.target.value })
              }
            />
            <input
              value={body.cnic}
              type="text"
              placeholder="Cnic"
              maxLength={13}
              className="input-box"
              name="cnic"
              onChange={(text) => setBody({ ...body, cnic: text.target.value })}
            />
            <input
            value={body.phone}
              type="text"
              placeholder="Phone"
              className="input-box"
              maxLength={13}
              name="phone"
              onChange={(text) =>
                setBody({ ...body, phone: text.target.value })
              }
              id=""
            />
            <input
            value={body.whatsapp_no}
              type="text"
              placeholder="Whatsapp"
              maxLength={13}
              className="input-box"
              name="whatsapp_no"
              onChange={(text) =>
                setBody({ ...body, whatsapp_no: text.target.value })
              }
              id=""
            />
            <input
            value={body.dob}
              type="date"
              placeholder="Date of birth?"
              className="input-box"
              name="dob"
              id=""
              onChange={(text) => setBody({ ...body, dob: text.target.value })}
            />
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue="female"
              name="radio-buttons-group"
              onChange={(text) =>
                setBody({ ...body, gender: text.target.value })
              }
            >
              <FormLabel id="demo-radio-buttons-group-label">Gender?</FormLabel>
              <div style={{ display: "flex" }}>
                <FormControlLabel
                  value="FEMALE"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="MALE"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="disabled"
                  disabled
                  control={<Radio />}
                  label="other"
                />
              </div>{" "}
            </RadioGroup>
            <p>
              <span>
                {" "}
                <input type="checkbox" />
              </span>{" "}
              I agree to the terms of services
            </p>
            <button type="button" onClick={signUpFun} className="signup-btn">
              Sign Up
            </button>
            <hr className="hr" />
            <p className="or">OR</p>
            <button type="button" className="twitter-btn">
              Login with twitter
            </button>
            <p>
              Do you have an account ?{" "}
              <a className="a" href="#">
                Sign in
              </a>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;

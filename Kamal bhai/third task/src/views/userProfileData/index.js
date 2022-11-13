import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { profileAction } from "../../store/action/userProfileAction";

const UserData = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.profileReducer);
  console.log("state user data", state?.userprofile);

  //   const verify = (e) => {
  //     // console.log("body=>", body);
  //     if (email) {
  //       dispatch(emailVerifyAction({ email: email }, onSuccess, onFailure));
  //     }
  //   };
  //   dispatch(emailVerifyAction({ email: email }, onSuccess, onFailure));
  useEffect(() => {
    dispatch(profileAction());
  }, []);
  useEffect(() => {
    if (state?.userprofile) {
      setData(state?.userprofile?.data);
    }
  }, [state?.userprofile]);
  console.log("data", data?.data?.firstName);
  return (
    <div>
      <h1>User {data?.message}</h1>
      <p>Age: {data?.data?.age}</p>
      <p>First name: {data?.data?.firstName}</p>
      <p>Last name: {data?.data?.lastName}</p>
      <p>Gender: {data?.data?.gender}</p>
    </div>
  );
};
export default UserData;

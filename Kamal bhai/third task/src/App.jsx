import React from "react";
import "./App.css";
import AuthRoutes from "./routes/authRoutes";
import SiteBar from "./views/dashboard";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state?.authReducer);
  // console.log(state?.signin);
  // console.log("state dashboard", state?.signin?.data?.data?.token);

  return (
    <div className="App">{state?.signin ? <SiteBar /> : <AuthRoutes />}</div>
  );
}
export default App;

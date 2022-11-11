import React from "react";
import "./App.css";
// import AppRoute from "./routes/AppRouter";
// import SignUp from "./views/auth/signup";
// import Login from "./views/auth/login";
import AuthRoutes from "./routes/authRoutes";
// import AppRoutes from "./routes/AppRoutes"
import SiteBar from "./views/dashboard"

function App() {
  return (
    <div className="App">
      <AuthRoutes/>
      <SiteBar/>
      {/* <AppRoutes/> */}
      {/* <Login /> */}
      {/* <h1>Heelo</h1> */}
      {/* <AppRoute /> */}
      {/* <SignUp /> */}
    </div>
  );
}
export default App;

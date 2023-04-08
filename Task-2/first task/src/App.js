import React, { useEffect, useState } from "react";
import "./App.css";
// import Loading from 'react-fullscreen-loading';
import AppRoute from "./routes/AppRoutes";
import { useLocation } from "react-router-dom";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
function App() {
  // const location = useLocation()
  // console.log(location)
  return (
    <div>
      {/* <Loading loading background="#2ecc71" loaderColor="#3498db" /> */}
      <AppRoute />
    </div>
  );
}
export default App;

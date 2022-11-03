import React, { useEffect, useState } from "react";
import CityList from "../CityList";
import Header from "../Header";

function Home() {
  return (
    <div>
      <Header />
      <br />
      <CityList />
    </div>
  );
}
export default Home;

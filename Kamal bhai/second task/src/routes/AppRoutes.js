import React from "react";
import { Routes, Route } from "react-router-dom";
import User from "../views/User";
// import About from "../views/about";
import Formm from "../views/Form";
import Tabels from "../views/Tabels";
import Todo from "../views/Todo";


const AppRoute = () => {
  return (
    <Routes>
      <Route exact path="/" element={<User />} />
      <Route path="/user/registration" element={<Formm />} />
      {/* <Route path="/contact" element={<div>Contact</div>} />  */}
      <Route path="/user/data" element={<div>Data</div>} />
      <Route path="/user/todo" element={<Todo/>} />
    </Routes>
  );
};

export default AppRoute;

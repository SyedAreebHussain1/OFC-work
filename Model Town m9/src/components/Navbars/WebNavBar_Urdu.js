import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
// import { hashHistory } from 'react-router;'

import logo from "assets/img/modeltownlogoshap2.png";
import { createBrowserHistory } from "history";
import { Input } from "reactstrap";
import IndexDropdown from "components/Dropdowns/IndexDropdown";
import { right } from "@popperjs/core";

export const UrduNavBar = (props) => {
  // let history = useHistory();
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const onClick = () => {
    let data = document.getElementById("example-navbar-warning");
    if (data.classList.contains("hidden")) {
      //data.classList.remove('hidden')
      data.className =
        "lg:flex items-center bg-white   lg:shadow-none block rounded shadow-lg ";
    } else {
      data.className =
        "lg:flex items-center bg-white  lg:shadow-none block rounded shadow-lg hidden";
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const links = [
    {
      key: 6,

      path: "/ur",
      name: "ہوم",
    },
    // {
    //   key: 1,

    //   path: "/aboutus",
    //   name: "ہمارے بارے میں",
    // },

    // {
    //   key: 3,

    //   path: "/web/exitplans",
    //   name: "Exit Plans",
    // },
    {
      key: 6,

      path: "/urducompany",
      name: "کمپنی کے بارے میں",
    },
    {
      key: 9,

      path: "/urfacility",
      name: "سہولیات",
    },
    {
      key: 10,

      path: "/blogs",
      name: "بلاگ",
    },
    {
      key: 7,

      path: "/",
      name: "English",
    },
    // {
    //   key: 2,

    //   path: "/faqs",
    //   name: "FAQS",
    // },
    // {
    //   key: 4,

    //   path: "/web/contact",
    //   name: "Blogs",
    // },
    // {
    //   key: 5,

    //   path: "/auth/login",
    //   name: "Sign in",
    // },
  ];
  const redirect = (path) => {
    // hashHistory.push('/');
  };
  const closeBar = () => {
    setNavbarOpen(false);
  };
  return (
    <>
      <nav className="top-0 nav-sticky absolute z-50 w-full flex flex-wrap items-center justify-between  navbar-expand-lg bg-transparent">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
            >
              {/* NOTUS REACT */}
              <img src={logo} width="120px" />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars text-white"></i>
            </button>
          </div>
          <div
            style={{
              paddingLeft: "15px",
              direction: "rtl",
              textAlign: "right",
            }}
            className={
              "lg:flex flex-grow items-center bg-sqblue rounded-t-lg lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block bg-kgcbrown" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul
              className="flex flex-col lg:flex-row list-none lg:ml-auto urdu-font"
              style={{ direction: "rtl", textAlign: "right" , fontSize : '20px' }}
            >
              {links !== undefined &&
                links !== "" &&
                links.map((link) => {
                  return (
                    <>
                      <li
                        key={link.key}
                        className="flex items-center text-kgcbrown "
                        onClick={redirect(link.path)}
                        style={{ direction: "rtl", textAlign: "right" }}
                      >
                        <Link
                          to={link.path}
                          className="text-white font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                          onClick={closeBar}
                        >
                          {link.name}
                        </Link>
                      </li>
                    </>
                  );
                })}
              {/* <li>
                <div className="flex items-center text-kgcbrown">
                  <Input className="bg-kgcbrown" type="select" name="language">

                    <option>English</option>
                    <option>Urdu</option>

                  </Input>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

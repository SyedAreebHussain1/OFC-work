import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";
// import { hashHistory } from 'react-router;'

// import logo from "assets/img/modeltownlogoshap2.png";
//
import logo from "assets/imgfolder1/modeltownlogoshap2.png";

// 

import { createBrowserHistory } from "history";
import { Input } from "reactstrap";
import IndexDropdown from "components/Dropdowns/IndexDropdown"











// export const WebNavBar = (props) => {
//   // let history = useHistory();
//   const [navbarOpen, setNavbarOpen] = React.useState(false);

//   const onClick = () => {
//     let data = document.getElementById("example-navbar-warning");
//     if (data.classList.contains("hidden")) {
//       //data.classList.remove('hidden')
//       data.className =
//         "lg:flex items-center bg-white   lg:shadow-none block rounded shadow-lg ";
//     } else {
//       data.className =
//         "lg:flex items-center bg-white  lg:shadow-none block rounded shadow-lg hidden";
//     }
//   };
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);
//   const links = [
//     {
//       key: 6,

//       path: "/",
//       name: "Home",
//     },
//     // {
//     //   key: 1,

//     //   path: "/aboutus",
//     //   name: "About Us",
//     // },


//     {
//       key: 6,

//       path: "/company",
//       name: "About Us",
//     },
//     {
//       key: 5,

//       path: "/blogs",
//       name: "Blogs",
//     },
//     {
//       key: 8,

//       path: "/facility",
//       name: "Project Facilities",
//     },
//     // {
//     //   key: 9,

//     //   path: "/urfacility",
//     //   name: "Urdu Facilities",
//     // },
//     // {
//     //   key: 7,

//     //   path: "/ur",
//     //   name: "اردو",
//     // },
//     // {
//     //   key: 2,

//     //   path: "/faqs",
//     //   name: "FAQS",
//     // },
//     // {
//     //   key: 4,

//     //   path: "/web/contact",
//     //   name: "Blogs",
//     // },
//     // {
//     //   key: 5,

//     //   path: "/auth/login",
//     //   name: "Sign in",
//     // },
//   ];
//   const redirect = (path) => {
//     // hashHistory.push('/');
//   };
//   const closeBar = () => {
//     setNavbarOpen(false);
//   };
//   return (
//     // <>
//     //   <nav className="top-0 nav-sticky absolute z-50 w-full flex flex-wrap items-center justify-between  navbar-expand-lg bg-transparent" style={{ padding: '10px' }}>
//     //     <div className="container px-4 mx-auto flex flex-wrap items-center justify-between mgT--20px">
//     //       <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
//     //         <Link
//     //           to="/"
//     //           className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
//     //         >
//     //           {/* NOTUS REACT */}
//     //           <div>
//     //             <img src={logo} width="100px" />
//     //           </div>
//     //         </Link>
//     //         <button
//     //           className="cursor-pointer text-xl leading-none px-3 py-1 block lg:hidden outline-none focus:outline-none"
//     //           type="button"
//     //           onClick={() => setNavbarOpen(!navbarOpen)}
//     //         >
//     //           <i className="fas fa-bars text-white"></i>
//     //         </button>
//     //       </div>
//     //       <div
//     //         style={{ paddingLeft: "15px" }}
//     //         className={
//     //           "lg:flex flex-grow items-center bg-sqblue rounded-t-lg lg:bg-transparent lg:shadow-none" +
//     //           (navbarOpen ? " block bg-kgcbrown" : " hidden")
//     //         }
//     //         id="example-navbar-warning"
//     //       >

//     //         <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
//     //           {links !== undefined && links !== '' && links.map((link, i) => {
//     //             return (
//     //               <div key={i}>
//     //               <li key={link.key} className="flex items-center text-kgcbrown " onClick={redirect(link.path)}>
//     //                 <Link
//     //                   to={link.path}
//     //                   className="text-white font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
//     //                   onClick={closeBar}
//     //                 >
//     //                   {link.name}
//     //                 </Link>
//     //               </li>
//     //               </div>
//     //             );
//     //           })}
//     //           <li>
//     //       <div className="flex items-center text-kgcbrown">
//     //         <Input className="bg-kgcbrown" type="select" name="language">

//     //           <option>English</option>
//     //           <option>Urdu</option>

//     //         </Input>
//     //       </div>
//     //     </li>
//     //         </ul>
//     //       </div>
//     //     </div>
//     //   </nav>
//     // </>
    
//   );
// };







// 

export const WebNavBar = (props) => {
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

      path: "",
      name: "Home",
    },
    // {
    //   key: 1,

    //   path: "/aboutus",
    //   name: "About Us",
    // },


    {
      key: 6,

      path: "#about",
      name: "About Us",
    },
    {
      key: 8,

      path: "#facilities",
      name: "Facilities",
    },
    {
      key: 8,

      path: "#promo",
      name: "Promo",
    },
    {
      key: 5,

      path: "#amenities",
      name: "AMENITIES",
    },
    // {
    //   key: 9,

    //   path: "/urfacility",
    //   name: "Urdu Facilities",
    // },
    // {
    //   key: 7,

    //   path: "/ur",
    //   name: "اردو",
    // },
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
      <nav className= " top-0 nav-sticky absolute z-50 w-full flex flex-wrap items-center justify-between  navbar-expand-lg bg-transparent" style={{ padding: '10px' }}>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between mgT--20px">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
            >
              {/* NOTUS REACT */}
              <div>
                <img src={logo} width="100px" />
              </div>
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
            style={{ paddingLeft: "15px" }}
            className={
              "lg:flex flex-grow items-center bg-sqblue rounded-t-lg lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block bg-kgcred" : " hidden")
            }
            id="example-navbar-warning"
          >

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {links !== undefined && links !== '' && links.map((link, i) => {
                return (
                  <div key={i}>
                  <li key={link.key} className="flex items-center text-kgcred " onClick={redirect(link.path)}>
                    <a
                      href={link.path}
                      className="text-white font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-nav-a-hover"
                      onClick={closeBar}
                    >
                      {link.name}
                    </a>
                  </li>
                  </div>
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
// export default WebNavBar
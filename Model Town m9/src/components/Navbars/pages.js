import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const Pages = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="lg:text-white lg:hover:text-white-300 text-white-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"

      >

        <Link
          to="/admin/dashboard"
          className={
            "text-sm font-normal block  bg-transparent text-white-800"
          }
        >
          <span
            className={
              "text-sm font-bold block  bg-transparent text-white-500"
            }
          >
            HOME
        </span>
        </Link>
      </a>

      <a
        className="lg:text-white lg:hover:text-white-300 text-white-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"

      >

        <Link
          to="/admin/dashboard"
          className={
            "text-sm font-normal block  bg-transparent text-white-800"
          }
        >
          <span
            className={
              "text-sm font-bold block  bg-transparent text-white-500"
            }
          >
            Investment
        </span>
        </Link>
      </a>





      <a
        className="lg:text-white lg:hover:text-white-300 text-white-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"

      >

        <Link
          to="/admin/dashboard"
          className={
            "text-sm font-normal block  bg-transparent text-white-800"
          }
        >
          <span
            className={
              "text-sm font-bold block  bg-transparent text-white-500"
            }
          >
            Faqs
        </span>
        </Link>
      </a>

      <a
        className="lg:text-white lg:hover:text-white-300 text-white-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"

      >

        <Link
          to="/admin/dashboard"
          className={
            "text-sm font-normal block  bg-transparent text-white-800"
          }
        >
          <span
            className={
              "text-sm font-bold block  bg-transparent text-white-500"
            }
          >
            Exit Plans
        </span>
        </Link>
      </a>


      <a
        className="lg:text-white lg:hover:text-white-300 text-white-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"

      >

        <Link
          to="/admin/dashboard"
          className={
            "text-sm font-normal block  bg-transparent text-white-800"
          }
        >
          <span
            className={
              "text-sm font-bold block  bg-transparent text-white-500"
            }
          >
            Blogs
        </span>
        </Link>
      </a>
      <a
        className="lg:text-white lg:hover:text-white-300 text-white-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"

      >

        <Link
          to="/admin/dashboard"
          className={
            "text-sm font-normal block  bg-transparent text-white-800"
          }
        >
          <span
            className={
              "text-sm font-bold block  bg-transparent text-white-500"
            }
          >
            Contact Us
        </span>
        </Link>
      </a>


      <a
        className="lg:text-white lg:hover:text-white-300 text-white-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"

      >

        <Link
          to="/admin/dashboard"
          className={
            "text-sm font-normal block  bg-transparent text-white-800"
          }
        >
          <span
            className={
              "text-sm font-bold block  bg-transparent text-white-500"
            }
          >
            Became a PRO
        </span>
        </Link>
      </a>
      </>
  );
};

export default Pages;
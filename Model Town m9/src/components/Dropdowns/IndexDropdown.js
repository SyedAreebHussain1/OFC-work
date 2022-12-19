import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import { useTranslation } from 'react-i18next'

const IndexDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const { t, i18n } = useTranslation()
  const [text , setText] = React.useState("English")
  const [textE , setET] = React.useState("English")
  const [textU , setEU] = React.useState("Urdu")
  
  const changeLanguage = (event) => {
      i18n.changeLanguage(event)
      // if(event === 'en') {
      //   setText(textE)
      // } else {
      //   setText(textU)
      // }
  }
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
        className="text-white mr-4 py-2 flex items-center text-sm uppercase whitespace-no-wrap font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div onClick={() => changeLanguage('en')}>
        {/* {text} */}
        </div>
        ENGLISH
        <i className="fa fa-caret-down"></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        {/* <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
          }
        >
          Admin Layout
        </span> */}
        {/* <Link
          to="/admin/dashboard"
          className="text-sm py-2 px-4 mr-4 font-normal block w-full whitespace-no-wrap bg-kgcbrown text-white"
        >
          URDU
        </Link> */}
        <div onClick={() => changeLanguage('ur') }
         className="text-sm py-2 px-4 mr-4 font-normal block w-full whitespace-no-wrap bg-kgcbrown text-white">
        URDU
        </div>
      </div>
    </>
  );
};

export default IndexDropdown;

import React from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "./floating.css";

const IconBar = {
  position: "fixed",
  top: "50%",
  transform: "translateY(-50%)",
  webkitTransform: "translateY(-50%)",
  msTransform: "translateY(-50%)",
  zIndex: "10",
};
const Anchor = {
  textDecoration: "none",
  width: "210px",
  background: "#3b5999",
  color: "#fff",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  padding: "5px",
  fontSize: "20px",
  transform: "translateX(-170px)",
  webkitTransform: "translateX(-170px)",
  msTransform: "translateX(-170px)",
  transition: "all 0.5s linear",
  webkitTransition: "all 0.5s linear",
  msTransition: "all 0.5s linear",
};
const AnchorHover = {
  transform: "translateX(0)",
  webkitTransform: "translateX(0)",
  msTransform: "translateX(0)",
};
export const FloatingSocial = () => {
  const Redirect = (val) => {};
  return (
    <div className="icon-bar">
      {/* <a href="https://www.facebook.com/SDAKarachiHills" style={{color:'transparent'}} target="_blank">
      <div style={{ backgroundColor: "#1877f2" }} className="a1">
      <span className="#fff">Facebook</span>
      
        <span><i className="fab fa-facebook"></i></span>
        
      </div>
      </a>
      <a href="https://www.instagram.com/karachi_hills/" style={{color:'transparent'}} target="_blank">
      <div
        className="a1 instagram"
        //  onClick={Redirect('facebook')}
      >
        Instagram
        <i className=" fab fa-instagram " ></i>
      </div>
      </a>
      <a href="https://www.youtube.com/channel/UCMyHcGXbKge5bLKHOc12rMg" style={{color:'transparent'}} target="_blank">
      <div
        className="a1 youtube"
        //  onClick={Redirect('facebook')}
      >
        Youtube
        <i className=" fab fa-youtube"></i>
      </div></a> */}
      {/* 
          
			</div>
            <div className="a1">
			<a href='https://www.instagram.com/vinodthapa55/' className='instagram' target='_blank'>
				click here to visit<i className="fab fa-instagram"></i>
			</a>
            </div>
            <div className="a1">
			<a href='' className='linkedin' target='_blank'>
				click here to visit<i className=" fab fa-linkedin"></i>
			</a>
            </div>
            <div className="a1">
			<a href='https://www.youtube.com/thapatechnical' className='youtube' target='_blank'>
			click here to visit<i className=" fab fa-youtube-square"></i></a>
            </div> */}
     </div>
  );
};

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { useLocation } from "react-router-dom";
import Loading from 'react-fullscreen-loading';
import imgg from '../img/logo.png'

export default function About() {
  const [load, setLoad] = useState(false)
  let location = useLocation()
  // console.log(location)

  // useEffect(() => {
  // }, [load]);
  setTimeout(() => {
    if (location.pathname == '/about') {
      // setLoad(true)
      setLoad(true)
    }
    // setLoad(false)
    // console.log("load")
  }, 1000);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    // <Slider {...settings}>
    //   <div>
    //     <h3>
    //       <img src="https://imgs.ca/wp-content/uploads/2021/09/00-FreightInland-640x480-1.jpg" alt="img" />
    //     </h3>
    //   </div>
    //   <div>
    //     <h3>
    //       <img src="https://imgs.ca/wp-content/uploads/2021/09/00-FreightInland-640x480-1.jpg" alt="img" />

    //     </h3>
    //   </div>
    //   <div>
    //     <h3>
    //       <img src="https://imgs.ca/wp-content/uploads/2021/09/00-FreightInland-640x480-1.jpg" alt="img" />

    //     </h3>
    //   </div>
    //   <div>
    //     <h3>
    //       <img src="https://imgs.ca/wp-content/uploads/2021/09/00-FreightInland-640x480-1.jpg" alt="img" />
    //     </h3>
    //   </div>
    //   <div>
    //     <h3>
    //       <img src="https://imgs.ca/wp-content/uploads/2021/09/00-FreightInland-640x480-1.jpg" alt="img" />

    //     </h3>
    //   </div>
    //   <div>
    //     <h3>            <img src="https://imgs.ca/wp-content/uploads/2021/09/00-FreightInland-640x480-1.jpg" alt="img" />
    //     </h3>
    //   </div>
    // </Slider>


    <>
      {load ?
        <h2>Hello world</h2> : <div>Loading...</div>}
    </>
  );
}
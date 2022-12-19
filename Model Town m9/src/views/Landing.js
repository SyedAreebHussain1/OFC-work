import React from "react";
import { Link } from "react-router-dom";

// components
import { Parallax, Background } from "react-parallax";

import { useTranslation } from "react-i18next";
import Navbar from "components/Navbars/AuthNavbar.js";
import BackgroundSlider from "react-background-slider";
import bi1 from "assets/img/1.1.jpg";
import bi2 from "assets/img/1.2.jpg";
import bi3 from "assets/img/1.3.jpg";



// 
import bioneMob from "assets/imgfolder1/New folder/1.jpg";
import bitwoMob from "assets/imgfolder1/New folder/2.jpg";
import bithreeeMob from "assets/imgfolder1/New folder/3.jpg";



import bione from "assets/imgfolder1/1.1.jpg";
import bitwo from "assets/imgfolder1/1.2.jpg";
import bithreee from "assets/imgfolder1/1.3.jpg";
// 
import logo from "assets/img/khlogo-dark.png";
import p1 from "assets/img/merger.png";
import { Row, Col, Button, Container, UncontrolledCarousel } from "reactstrap";
import { About } from "./HomePageSection/AboutUs";
import { Features } from "./HomePageSection/Features";
import { Portal } from "./HomePageSection/Portal";
import { Video } from "./HomePageSection/Video";
import { Work } from "./HomePageSection/Work";
import LanguageRadio from "components/language/language_radio";
import Demo from "components/AnimatedText/animatedtext";
import { Demo1 } from "components/AnimatedText/animatedtext2";
import image1 from "assets/img/wip2.jpg";
import image2 from "assets/imgfolder1/image2.png";
import { AiFillInfoCircle } from "react-icons/ai"

import { Countdown } from "components/Timer/timer";
import BookingForm from '../views/HomePageSection/booking-form.js'

import {
  Flip3,
  Flip4,
  Flip5,
  Flip6,
  Flip7,
  Flip8,
} from "components/FlipCard/flipcard3";
import {
  FlipCard1,
  FlipCard2,
  FlipCard3,
  FlipCard4,
  FlipCard5,
  FlipCard6,
} from "components/FlipCard/flipcard";
import { AnimatedText } from "components/AnimatedText/animatedtext";
import { CustomChat } from "components/chat/CustomChat";
import { WebNavBar } from "components/Navbars/WebNavBar";
import CountdownTimer from "react-component-countdown-timer";
import moment from "moment";
import { Facility } from "./HomePageSection/Facility";
import FooterV from "components/Footers/Footer-v2";
import Footer from "components/Footers/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};
const ShowTime = () => {
  let date = Date.now;
  console.log(date);
};
export default function Landing() {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <Navbar transparent /> */}
      <WebNavBar />

      <main style={{}}>
        <div className="relative pt-16 pb-32 flex conten  t-center items-center justify-center min-h-screen-75" >
          <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ objectFit: 'cover'}}>
          
          
          
{/*             
            <BackgroundSlider
              className=""
              // images={[bi1, bi2, bi3]}
              images={[bione, bitwo, bithreee]}
              duration={2}
              transition={1}
            /> */}
            <div className="mobileSc">
              <BackgroundSlider
                className=""
                // images={[bi1, bi2, bi3]}
                images={[bione, bitwo, bithreee]}
                duration={2}
                transition={1}
              />
            </div>
            <div className="computerSc">
              <div className="" style={{ border: '1px solid green'  }}>
                <BackgroundSlider
                  images={[bioneMob, bitwoMob, bithreeeMob]}
                  duration={2}
                  transition={1}
                  // style={{ width: "400", height: "300" }}
                />
              </div>
            </div>
            {/* <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span> */}
          </div>
          {/* 
          <div className="container relative mx-auto ">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center"> */}
          {/* <div className="mt-24"> */}
          {/* <h1 className="text-white font-bold">
                    <Demo t={t} />
                  </h1>
                  <p className="mt-2 text-3xl text-white"></p>
                  <button
                    className="bg-kgcred text-white active:bg-red text-base font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded"
                    type="button"
                  >
                    <a
                      // onClick={ShowTime}
                      // target="_blank"
                      className="text-white"
                    >
                      {t("signUpButtonText")}
                    </a>
                  </button> */}

          {/* <CountdownTimer count={5432}  showTitle noPoints   />
                  

          <Countdown
                    timeTillDate="02 10 2021, 00:00 a"
                    timeFormat="MM DD YYYY, h:mm a"
                  /> */}
          {/* </div> */}
          {/* </div>
            </div>
          </div> */}
        </div>
        {/* 
        <section className=" bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <Container>
                <Row>
                  <Col className="flex flex-wrap justify-center text-center mt-5">
                    <img src={p1} />
                  </Col>
                </Row>

                <Row>
                  <Col className="flex flex-wrap justify-center text-center mb-0"> */}
        {/* <h4
                      className="h4"
                      style={{
                        fontStyle: "",
                        color: "#A0843A",
                        fontWeight: "bolder",
                        textTransform: "capitalize",
                      }}
                    >
                      A Project of Sehwan Development Authority (SDA) under
                      sponsorship of{" "}
                      <a
                        href="https://kgcp.com.pk"
                        target="_blank"
                        className="text-kgcbrown"
                      >
                        KGC Properties
                      </a>
                    </h4> */}
        {/* <Demo1 t={t} />
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="flex flex-wrap items-center mt-16"></div>
          </div>
        </section> */}

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-kgcred fill-current"
                points="2560 10 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <About />
              {/* <Facility/> */}


              {/* <CustomChat/> */}
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)", border: '' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-kgcred fill-current"
                points="2560 10 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container px-4">
            <div className="items-center flex flex-wrap">
              <Portal />
              {/* <Facility/> */}


              {/* <CustomChat/> */}
            </div>
          </div>
        </section>

        <Parallax bgImage={image2} strength={320}  >
          <section className="pb-20 relative block" style={{
            border: '',
            // height:'550px'
          }}
            id="promo">
            {/* <div
              className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
              style={{ transform: "translateZ(0)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-kgcred fill-current"
                  points="2560 30 2560 100 0 100"
                ></polygon>
              </svg>
            </div> */}

            <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
              <div className="flex flex-wrap text-center justify-center">
                <div className="w-full lg:w-6/12 px-4">
                  <Col className="flex flex-wrap justify-center text-center mt-5">
                    <h1
                      className="h1"
                      style={{ fontWeight: "bold", textTransform: "uppercase" }}
                    >
                      <span className="text-kgcred">{t("project")}</span>{" "}
                      {t("promo")}
                    </h1>
                  </Col>
                  <div className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                    <Video />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Parallax>

        {/* <section className="pb-20 relative block bg-white">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-kgcbrown fill-current"
                points="2560 30 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-60">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <Col className="flex flex-wrap justify-center text-center mt-5">
                  <h1
                    className="h1"
                    style={{ fontWeight: "bold", textTransform: "uppercase" }}
                  >
                    <span style={{ color: "#A0843A" }}>OUR</span> FACILITIES
                  </h1>
                </Col>
                <h3 className="text-lg leading-relaxed mt-4 mb-4 text-black uppercase h3">
                  Facilities Available
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap mt-12 justify-center">
              <div className=" lg:w-4/12 px-4 text-center pb-1 ">
                <Flip3 />
              </div>
              <div className=" lg:w-4/12 px-4 text-center pb-1">
                <Flip4 />
              </div>
              <div className=" lg:w-4/12 px-4 text-center ">
                <Flip5 />
              </div>
              <div className=" lg:w-4/12 px-4 text-center ">
                <Flip6 />
              </div>
              <div className=" lg:w-4/12 px-4 text-center ">
                <Flip7 />
              </div>
              <div className=" lg:w-4/12 px-4 text-center ">
                <Flip8 />
              </div>
            </div>
          </div>
        </section> */}
        <section className="pb-20 relative block bg-gray-300">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-kgcred fill-current"
                points="2560 30 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>


        <Work />
        {/* <BookingForm /> */}
      </main>
      <div className="mobileSc">
        <FooterV />
      </div>
      <div className="computerSc">
        <Footer />
      </div>

    </>
  );
}

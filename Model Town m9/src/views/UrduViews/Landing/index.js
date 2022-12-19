import React from "react";
import { Link } from "react-router-dom";

// components
import { Parallax, Background } from "react-parallax";

import { useTranslation } from "react-i18next";
import BackgroundSlider from "react-background-slider";
import bi1 from "assets/img/1.1.jpg";
import bi2 from "assets/img/1.2.jpg";
import bi3 from "assets/img/1.3.jpg";
import p1 from "assets/img/merger.png";
import { Row, Col, Container } from "reactstrap";
import { About } from "./UrduHomePageSection/AboutUs";
import { Portal } from "./UrduHomePageSection/Portal";
import { Video } from "./UrduHomePageSection/Video";
import { Work } from "./UrduHomePageSection/Work";
import image1 from "assets/img/wip2.jpg";

import { WebNavBar } from "components/Navbars/WebNavBar";
import { Facility } from "./UrduHomePageSection/Facility";
import { Countdown } from "components/Timer/timer";
import { UrduNavBar } from "components/Navbars/WebNavBar_Urdu";
import Footer from "components/Footers/Footer";
import { UrduDemo1 } from "components/AnimatedText/Urdu/animatedtext2";
import UrduDemo from "components/AnimatedText/Urdu/animatedtext";
import FooterUrdu from "components/Footers/FooterUrdu";

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
export default function UrduLanding() {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <Navbar transparent /> */}
      <UrduNavBar />

      <main>
        <div className="relative pt-16 pb-32 flex conten  t-center items-center justify-center min-h-screen-75">
          <div className="absolute top-0 w-full h-full bg-center bg-cover">
            <BackgroundSlider
              className=""
              images={[bi1, bi2, bi3]}
              duration={2}
              transition={2}
            />
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>

          <div className="container relative mx-auto ">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="mt-24">
                  <h1 className="text-white font-bold">
                    <UrduDemo />
                  </h1>
                  <p className="mt-2 text-3xl text-white"></p>
                  <button
                    className="bg-kgcbrown text-white active:bg-kgcbrown font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded"
                    type="button"
                    style={{
                      fontFamily: "Jameel Noori Nastaleeq",
                      fontSize: "30px",
                    }}
                  >
                    <a
                      onClick={ShowTime}
                      target="_blank"
                      className="text-white"
                    >
                      فارم جلد دستیاب ہوں گے
                    </a>
                  </button>

                  {/* <CountdownTimer count={5432}  showTitle noPoints   />
                   */}

                  {/* <Countdown
                    timeTillDate="02 10 2021, 00:00 a"
                    timeFormat="MM DD YYYY, h:mm a"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

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
                  <Col className="flex flex-wrap justify-center text-center mb-0">
                    <UrduDemo1 />
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="flex flex-wrap items-center mt-16"></div>
          </div>
        </section>

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
                className="text-kgcbrown fill-current"
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
                className="text-kgcbrown fill-current"
                points="2560 10 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <Portal />
              {/* <Facility/> */}

              {/* <CustomChat/> */}
            </div>
          </div>
        </section>

        <Parallax bgImage={image1} strength={500}>
          <section className="pb-20 relative block">
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

            <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
              <div className="flex flex-wrap text-center justify-center">
                <div className="w-full lg:w-6/12 px-4">
                  <Col className="flex flex-wrap justify-center text-center mt-5">
                    <h1
                      className="h1 urdu-font"
                      style={{ fontWeight: "bold", textTransform: "uppercase" }}
                    >
                      <span style={{ color: "#A0843A" }}>پروجیکٹ</span> پرومو
                    </h1>
                  </Col>
                  <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                    <Video />
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Parallax>

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
                className="text-kgcbrown fill-current"
                points="2560 30 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <Work />
        </section>
      </main>

      <FooterUrdu />
    </>
  );
}

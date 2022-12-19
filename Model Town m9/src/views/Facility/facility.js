import { WebNavBar } from "components/Navbars/WebNavBar";
import React, { useState, useEffect } from "react";
import background from "assets/img/1.3.jpg";
import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import img1 from "assets/img/en1.png";
import img2 from "assets/img/en2.png";
import img3 from "assets/img/en3.png";
import img4 from "assets/img/en4.png";
import img5 from "assets/img/en5.png";
import img6 from "assets/img/en6.png";


import { SRLWrapper } from "simple-react-lightbox";
import Footer from "components/Footers/Footer";

export const Facility = () => {
  const { t, i18n } = useTranslation();

  const images = [
    {
      src: img1,
    },
    {
      src: img2,
    },
    {
      src: img3,
    },
    {
      src: img4,
    },
  ];
  const [active2, setActive2] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  } , [active2]);

  const options = {
    settings: {
      disableKeyboardControls: true,
      disablePanzoom: true,
      disableWheelControls: true,
      hideControlsAfter: true,
    },
    caption: {
      showCaption: false,
    },
    buttons: {
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: false,
      showNextButton: false,
      showPrevButton: false,
      showThumbnailsButton: false,
    },
    thumbnails: {},
    progressBar: {},
  };
  const data = [
    {
      key: 1,
      data: (
        <>
          <div className="container mx-auto px-1">

            <Row>
              <Col lg="1" md="1" sm="12" xs="12">
              </Col>
              <Col lg="10" md="10" sm="12" xs="12" className="flex flex-wrap justify-center text-center">

                <img src={img1} alt="img1" className="mt-1" style={{ height: '85%', width: '75%' }} />
              </Col>
              <Col lg="1" md="1" sm="12" xs="12">
              </Col>
            </Row>
          </div>

          {/* <InnerImageZoom src={img1} zoomSrc={img1} /> */}
        </>
      ),
    },
    {
      key: 2,
      data: (
        <>
          <Row>
            <Col lg="1" md="1" sm="12" xs="12">
            </Col>
            <Col lg="10" md="10" sm="12" xs="12" className="flex flex-wrap justify-center text-center">
              <img src={img2} alt="img1" className="mt-1" style={{ height: '85%', width: '75%' }} />
            </Col>
            <Col lg="1" md="1" sm="12" xs="12">
            </Col>
          </Row>
          {/* <InnerImageZoom src={img1} zoomSrc={img1} /> */}
        </>
      ),
    },
    {
      key: 3,
      data: (
        <>
          <Row>
            <Col lg="1" md="1" sm="12" xs="12">
            </Col>
            <Col lg="10" md="10" sm="12" xs="12" className="flex flex-wrap justify-center text-center">
              <img src={img3} alt="img1" className="mt-1" style={{ height: '85%', width: '75%' }} />
            </Col>
            <Col lg="1" md="1" sm="12" xs="12">
            </Col>
          </Row>
          {/* <InnerImageZoom src={img1} zoomSrc={img1} /> */}
        </>
      ),
    },
    {
      key: 4,
      data: (
        <>
          <Row>
            <Col lg="1" md="1" sm="12" xs="12">
            </Col>
            <Col lg="10" md="10" sm="12" xs="12" className="flex flex-wrap justify-center text-center">
              <img src={img4} alt="img1" className="mt-1" style={{ height: '85%', width: '75%' }} />
            </Col>
            <Col lg="1" md="1" sm="12" xs="12">
            </Col>
          </Row>
          {/* <InnerImageZoom src={img1} zoomSrc={img1} /> */}
        </>
      ),
    },
    {
      key: 5,
      data: (
        <>
          <Row>
            <Col lg="1" md="1" sm="12" xs="12">
            </Col>
            <Col lg="10" md="10" sm="12" xs="12" className="flex flex-wrap justify-center text-center">
              <img src={img5} alt="img1" className="mt-1" style={{ height: '85%', width: '75%' }} />
            </Col>
            <Col lg="1" md="1" sm="12" xs="12">
            </Col>
          </Row>
          {/* <InnerImageZoom src={img1} zoomSrc={img1} /> */}
        </>
      ),
    },
    {
      key: 6,
      data: (
        <>
          <Row>
            <Col lg="1" md="1" sm="12" xs="12">
            </Col>
            <Col lg="10" md="10" sm="12" xs="12" className="flex flex-wrap justify-center text-center">
              <img src={img6} alt="img1" className="mt-1" style={{ height: '85%', width: '75%' }} />
            </Col>
            <Col lg="1" md="1" sm="12" xs="12">
            </Col>
          </Row>
          {/* <InnerImageZoom src={img1} zoomSrc={img1} /> */}
        </>
      ),
    },
  ];
  const [active, setActive] = useState(0);
  const change = (value) => {
    if (value === 0) {
      setActive(0);
    } else if (value === 1) {
      setActive(1);
    } else if (value === 2) {
      setActive(2);
    } else if (value === 3) {
      setActive(3);
    } else if (value === 4) {
      setActive(4);
    } else if (value === 5) {
      setActive(5);
    }
  };

  return (
    <>
      <WebNavBar />

      <main>
        <div className="relative pt-32 pb-32 flex content-center items-center justify-center min-h1-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url(" + background + ")",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-blue"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
                points="2560 50 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        <Container>
          <section>
            <Row>
              <Col className="flex flex-wrap justify-center text-center mt-5">
                <h1
                  className="h1"
                  style={{ fontWeight: "bold", textTransform: "uppercase" }}
                >
                  <span style={{ color: "#A0843A" }}>PROJECT</span> FACILITY
                </h1>
              </Col>
            </Row>
            <Row>
              <Col lg="3" md="3" sm="12" xs="12"></Col>
              <Col
                className=" justify-center  text-center "
                lg="6"
                md="6"
                sm="12"
                xs="12"
              >
                <h5
                  className="h5"
                  style={{
                    textTransform: "uppercase",
                  }}
                >
                  {t("subTitle")}
                </h5>
              </Col>
              <Col
                lg="3"
                md="3"
                sm="12"
                xs="12"
                className="justify-center  text-center"
              >
                <button
                  className=" bg-kgcbrown text-white text-center  uppercase justify-center px-1 py-1 rounded outline-none focus:outline-none mr-1  "
                  type="button"
                  style={{ fontSize: "0.575rem" }}
                >
                  Residental Plots Size: 125,250,500
                  <br />
                  Commercial Plots Size: 125,250
                </button>
              </Col>
            </Row>
            <br />
            <hr className="hr" />
            <br />

            <Row>
              <Col>
                <h5
                  className="h5"
                  style={{
                    color: "#323232",
                    fontWeight: "lighter",
                  }}
                >
                  {t("subTitle2")}
                </h5>
              </Col>
            </Row>
            <br />

            <Row>
              <Col lg="12" md="12" sm="12" xs="12">
                <Row>
                  <Col lg="12" md="12" sm="12" xs="12">
                    <hr className="hr" />
                    <br></br>
                    <h6
                      className="h6 flex flex-wrap justify-center text-center"
                      style={{ cursor: "pointer", fontWeight: "bolder" }}
                    >
                      <button
                        type="button"
                        className="bg-kgcbrown font-bold text-sm uppercase px-2 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        style={{
                          color: active === 0 ? "#a0843a" : "#ffffff",

                          backgroundColor: active === 0 ? "#fff" : "#a0843a",
                        }}
                      >
                        <span onClick={() => change(0)}> {t("tab1")} </span>
                      </button>

                      <button
                        type="button"
                        className="bg-kgcbrown font-bold text-sm uppercase px-2 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        style={{
                          color: active === 1 ? "#a0843a" : "#ffffff",

                          backgroundColor: active === 1 ? "#fff" : "#a0843a",
                        }}
                      >
                        <span onClick={() => change(1)}> {t("tab2")} </span>
                      </button>

                      <button
                        type="button"
                        className="bg-kgcbrown font-bold text-sm uppercase px-2 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        style={{
                          color: active === 2 ? "#a0843a" : "#ffffff",

                          backgroundColor: active === 2 ? "#fff" : "#a0843a",
                        }}
                      >
                        {" "}
                        <span onClick={() => change(2)}> {t("tab3")} </span>
                      </button>

                      <button
                        type="button"
                        className="bg-kgcbrown font-bold text-sm uppercase px-2 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        style={{
                          color: active === 3 ? "#a0843a" : "#ffffff",

                          backgroundColor: active === 3 ? "#fff" : "#a0843a",
                        }}
                      >
                        {" "}
                        <span onClick={() => change(3)}> {t("tab4")} </span>
                      </button>
                      <button
                        type="button"
                        className="bg-kgcbrown font-bold text-sm uppercase px-2 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        style={{
                          color: active === 4 ? "#a0843a" : "#ffffff",

                          backgroundColor: active === 4 ? "#fff" : "#a0843a",
                        }}
                      >
                        {" "}
                        <span onClick={() => change(4)}> {t("tab5")} </span>
                      </button>
                      <button
                        type="button"
                        className="bg-kgcbrown font-bold text-sm uppercase px-2 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        style={{
                          color: active === 5 ? "#a0843a" : "#ffffff",

                          backgroundColor: active === 5 ? "#fff" : "#a0843a",
                        }}
                      >
                        <span onClick={() => change(5)}> {t("tab6")} </span>
                      </button>
                    </h6>
                    <br></br>
                    <hr className="hr" />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12" md="12" sm="12" xs="12">
                    <SRLWrapper options={options} images={images}>
                      {data[active].data}
                    </SRLWrapper>
                  </Col>
                </Row>
              </Col>
            </Row>
          </section>
        </Container>
      </main>
      <br></br>
      <Footer />
    </>
  );
};

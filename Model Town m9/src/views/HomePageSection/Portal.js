import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "reactstrap";
import ModalVideo from "react-modal-video";
import SideImage from "assets/img/process.png";
import { Video } from "./Video";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AmenCards from './amenititiesa-cards'
import "./amenititiesa.css";
import '../../assets/styles/tailwind.css'
import { AiFillInfoCircle } from "react-icons/ai"

export const Portal = () => {
  const [active, setActive] = useState(0);
  const { t, i18n } = useTranslation();

  const step1 = [
    {
      key: 1,
      text: t("inst1.1"),
    },
    {
      key: 2,
      text: t("inst1.2"),
    },
    {
      key: 3,
      text: t("inst1.3"),
    },
    {
      key: 4,
      text: t("inst1.4"),
    },
    {
      key: 5,
      text: t("inst1.5"),
    },
    {
      key: 6,
      text: t("inst1.6"),
    },
  ];
  const step2 = [
    {
      key: 1,
      text: t("inst2.1"),
    },
    {
      key: 2,
      text: t("inst2.2"),
    },
    {
      key: 3,
      text: t("inst2.3"),
    },
    {
      key: 4,
      text: t("inst2.4"),
    },
    {
      key: 5,
      text: t("inst2.5"),
    },
  ];
  const checkOpen = () => { };
  const [isOpen, setOpen] = useState(false);

  // const [text, setText] = useState(steps)
  const changeState = () => {
    debugger;
    setOpen(!isOpen);
    debugger;
    if (isOpen === true) {
      debugger;
      setActive(0);
    }
  };
  const change = (value) => {
    if (value === 0) {
      // setText(steps[0].data1);
      setActive(0);
    } else if (value === 1) {
      // setText(steps[0].data2);
      setActive(1);
    } else if (value === 2) {
      // setText(steps[0].data2);
      setActive(2);
      setOpen(!isOpen);

      // return(
      //     <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="AdboEnX-dxs" onClose={() => setOpen(false)} />
      // )
    }
  };
  const data = 'en'
  const rest = 'https://cdn.pixabay.com/photo/2022/11/20/09/58/leaves-7603946__340.jpg'
  return (
    <>
      <Container style={{marginTop:'11%'}}>
        <Row>
          <Col className="flex flex-wrap justify-center text-center mt-1">
            <h1
              className="h1"
              style={{ fontWeight: "bold", textTransform: "uppercase" }}
              id='facilities'
            >
              <span className="text-kgcred ">PROJECT</span> FACILITIES
            </h1>
          </Col>
        </Row>
        {/* <hr className="hr" /> */}
        <div
          style={{ marginLeft: "10%", marginRight: "10%" }}
          className="hr-theme-slash-2"
        >
          <div className="hr-line"></div>
          <div className="hr-icon">
            <AiFillInfoCircle className="text-kgcred" size={20} />
          </div>
          <div className="hr-line"></div>
        </div>
        {/* <br /> */}
        {/* <Row>
          <Col
            className=" justify-center  text-center "
            lg="12"
            md="12"
            sm="12"
            xs="12"
          >
            <Link to="/facility">
                
              <button
                className=" bg-kgcred text-white text-center font-bold  uppercase justify-center px-1 py-1 rounded outline-none focus:outline-none mr-1  "
                type="button"
              >
                
              </button>
            </Link>
          </Col>
        </Row> */}

        {/* <Row>
          <Col className="flex flex-wrap justify-center text-center mt-5">
            <h1
              className="h1"
              style={{ fontWeight: "bold", textTransform: "uppercase" }}
            >
              <span className="text-kgcred">{t("topHeading")}</span>{" "}
              {t("portal")}
            </h1>
          </Col>
        </Row> */}
        {/* <hr className="hr" /> */}
        <br />
        {/* <Row>
          <Col lg="6" md="6" sm="12" xs="12">
            <Row>
              <Col lg="12" md="12" sm="12" xs="12">
                <h5
                  className="h5"
                  style={{
                    color: "#323232",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  {t("inst")}
                </h5>
              </Col>
            </Row>
            <Row>
              <Col lg="12" md="12" sm="12" xs="12">
                <hr className="hr" />
                <br />

                <h6
                  className="h6"
                  style={{
                    cursor: "pointer",
                    fontWeight: "bolder",
                    fontSize: "14px",
                  }}
                >
                  <span
                    onClick={() => change(0)}
                    style={{
                      color: active === 0 ? "#a0843a" : "",
                      marginRight: "6px",
                    }}
                  >
                    {" "}
                    {t("inst1")}
                  </span>
                  |
                  <span
                    onClick={() => change(1)}
                    style={{
                      color: active === 1 ? "#a0843a" : "",
                      marginRight: "6px",
                      marginLeft: "6px",
                    }}
                  >
                    {t("inst2")}
                  </span>
                  |
                  <span
                    onClick={() => change(2)}
                    style={{
                      color: active === 2 ? "#a0843a" : "",
                      marginRight: "6px",
                      marginLeft: "6px",
                    }}
                  >
                    {t("inst3")}
                  </span>
                </h6>
                <br />
                <hr className="hr" />

                {active === 0 ? (
                  <ul
                    className="ul"
                    style={{
                      listStyleType: "circle",
                      color: "#000",
                      display: "list-item",
                    }}
                  >
                    {step1.map((step) => {
                      return <li key={step.key}>{step.text}</li>;
                    })}
                  </ul>
                ) : (
                  //active === 1 ?
                  <ul
                    className="ul"
                    style={{
                      listStyleType: "circle",
                      color: "#000",
                      display: "list-item",
                    }}
                  >
                    {step2.map((step) => {
                      return <li key={step.key}>{step.text}</li>;
                    })}
                  </ul>
                )}
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="IC_56fOomTQ"
                  onClose={() => changeState()}
                />
              </Col>
            </Row>
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <img src={SideImage} alt="SideImage" />
          </Col>
        </Row> */}
      </Container>



      <div
        className="faqbot"
        data-aos="fade-up"
        style={
          data == "en"
            ? {
              // width: "100%",
              // borderTop: "4px",
              // borderTopStyle: "solid",
              // borderTopColor: "#d69929",
              // marginLeft: "8%",
              // marginRight: "8%",
              // margin: "2%",
            }
            : {
              // width: "100%",
              // borderTop: "4px",
              // borderTopStyle: "solid",
              // borderTopColor: "#d69929",
              // fontFamily: "JameelNoori",
              // marginLeft: "8%",
              // marginRight: "8%",
              // margin: "2%",
            }
        }
      >
        <p>Model Town includes all of the necessities of today as well as sophisticated conveniences of the future to make your life easier and more comfortable. High-quality design, slashing infrastructure, wide roads, green spaces, sports facilities, health and education facilities, community centers, business centers, and several other unique recreational areas have been created to allow residents to live a pleasant lifestyle.</p>
        <div
          style={{
            // marginTop: "1.2%",
            // marginBottom: "1.8%",
            // marginLeft: "8%",
            // marginRight: "8%",
            // textAlign: "center",
          }}
          className="pesharwarow"
        >
          <div className="pfcols" style={{ }}>
            <AmenCards />
          </div>
        </div>
      </div>
    </>
  );
};

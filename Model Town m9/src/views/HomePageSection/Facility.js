import React, { useState } from "react";
import { Row, Col, Container } from "reactstrap";
import InnerImageZoom from 'react-inner-image-zoom';

import { useTranslation } from "react-i18next";





import img1 from 'assets/img/en1.jpg';
import img2 from 'assets/img/en2.jpg';
import img3 from 'assets/img/en3.jpg';
import img4 from 'assets/img/en4.jpg';

import { SRLWrapper } from "simple-react-lightbox";

const wrapper = SRLWrapper;

export const Facility = () => {
  const { t, i18n } = useTranslation();



  const responsive = {
    0: { items: 3 },
    568: { items: 4 },
    1024: { items: 5 },
  };
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
  
  ]
  // const images1 = [
  //   {
  //     src: img1,
  //     width: 1920,
  //     height: 'auto'
  //   },
  //   {
  //     src: img2,
  //     width: 1920,
  //     height: 'auto'
  //   },
  //   {
  //     src: img3,
  //     width: 1920,
  //     height: 'auto'
  //   },
  //   {
  //     src: img4,
  //     width: 1920,
  //     height: 'auto'
  //   },
  // ]
  // const images2 = [

  // ]
  // const images3 = [

  // ]
  // const images4 = [

  // ]


  const options = {
    settings: {

      disableKeyboardControls: true,
      disablePanzoom: true,
      disableWheelControls: true,
      hideControlsAfter: true,
    },
    caption: {
      showCaption: false
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
  }
  const data = [
    {
      key: 1,
      data: <>

        <Row>
          <Col lg="12" md="12" sm="12" xs="12">

            <img src={img3} alt="img1" className="mt-1" />

          </Col>
        </Row>
        {/* <InnerImageZoom src={img1} zoomSrc={img1} /> */}

      </>
    },
    {
      key: 2,
      data:
        <>

          <Row>
            <Col lg="12" md="12" sm="12" xs="12">

              <img src={img1} alt="img1" className="mt-1" />

            </Col>
          </Row>
          {/* <InnerImageZoom src={img1} zoomSrc={img1} /> */}

        </>
    },
    {
      key: 3,
      data:
        <>
          <Row>
            <Col lg="12" md="12" sm="12" xs="12">

              <img src={img2} alt="img1" className="mt-1" />

            </Col>
          </Row>
          {/* <InnerImageZoom src={img1} zoomSrc={img1} /> */}

        </>
    },
    {
      key: 4,
      data:
        <>
          <Row>
            <Col lg="12" md="12" sm="12" xs="12">

              <img src={img4} alt="img1" className="mt-1" />

            </Col>
          </Row>
          {/* <InnerImageZoom src={img1} zoomSrc={img1} /> */}

        </>
    },
  ];
  const [active, setActive] = useState(0);

  const [text, setText] = useState(data[0].data);
  const change = (value) => {
    if (value === 0) {
      setText(data[0].data);
      setActive(0);
    } else if (value === 1) {
      setText(data[1].data);
      setActive(1);
    } else if (value === 2) {
      setText(data[2].data);
      setActive(2);
    } else if (value === 3) {
      setText(data[2].data);
      setActive(3);
    } else if (value === 4) {
      setText(data[3].data);
      setActive(4);
    }
  };
  return (
    <>
      <Container>




        <Row>
          <Col className="flex flex-wrap justify-center text-center mt-5">
            <h1
              className="h1"
              style={{ fontWeight: "bold", textTransform: "uppercase" }}
            >
              <span style={{ color: "#A0843A" }}>   {t("facilityOur")}</span> {t("facility")}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="flex flex-wrap justify-center text-center" lg="12" md="12" sm="12" xs="12">
            <h5
              className="h5"
              style={{
                textTransform: "uppercase",
              }}
            >
              {t("subTitle")}
            </h5>
          </Col>
        </Row>
        <br/>
        <hr className="hr" />
        <br/>
        <Row>
          <Col lg="12" md="12" sm="12" xs="12" className="justify-center text-center">
            <button
              className=" bg-kgcbrown text-white font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Residental Plots Size : 125 , 250 , 500.
              <br />
              Commercial Plots Size : 125 , 250.

              </button>
          </Col>
        </Row>
        <br />


        <Row>
          <Col >
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


        <Row >
          <Col lg="12" md="12" sm="12" xs="12">
            <Row>
              <Col lg="12" md="12" sm="12" xs="12">
                <hr className="hr" />
                <h6
                  className="h6 flex flex-wrap justify-center text-center"
                  style={{ cursor: "pointer", fontWeight: "bolder" }}
                >
                  <span
                    onClick={() => change(0)}
                    style={{
                      color: active === 0 ? "#a0843a" : "",
                      marginRight: "8px",
                    }}
                  >
                    {" "}
                    {t("tab1")}{" "}
                  </span>
                  |
                  <span
                    onClick={() => change(1)}
                    style={{
                      color: active === 1 ? "#a0843a" : "",
                      marginRight: "8px",
                      marginLeft: "8px",
                    }}
                  >
                    {" "}
                    {t("tab2")}{" "}
                  </span>
                  |
                  <span
                    onClick={() => change(2)}
                    style={{
                      color: active === 2 ? "#a0843a" : "",
                      marginRight: "8px",
                      marginLeft: "8px",
                    }}
                  >
                    {" "}
                    {t("tab3")}{" "}
                  </span>
                    |
                  <span
                    onClick={() => change(3)}
                    style={{
                      color: active === 3 ? "#a0843a" : "",
                      marginRight: "8px",
                      marginLeft: "8px",
                    }}
                  >
                    {" "}
                    {t("tab4")}{" "}
                  </span>

                  {/* <span
                    onClick={() => change(4)}
                    style={{
                      color: active === 4 ? "#a0843a" : "",
                      marginRight: "8px",
                      marginLeft: "8px",
                    }}
                  >
                    {" "}
                    {t("tab5")}{" "}
                  </span> */}
                </h6>
                <hr className="hr" />
              </Col>
            </Row>
            <Row>
              <Col lg="12" md="12" sm="12" xs="12">
                <SRLWrapper options={options} images={images} >
                  {data[active].data}
                </SRLWrapper>
              </Col>
            </Row>
          </Col>
        </Row>   </Container>

    </>
  );
};

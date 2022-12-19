import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "reactstrap";

import SideImage from "assets/imgfolder1/aboutsideimg.jpg";
import AliceCarousel from "react-alice-carousel";
import p1 from "assets/img/merger.png";
import img1 from "assets/img/cee.png";
import img2 from "assets/img/easypaisa.png";
import img3 from "assets/img/foree.png";
import img4 from "assets/img/jazz.png";
import img5 from "assets/img/omni.png";
import img6 from "assets/img/ubank.png";
import img7 from "assets/img/ubl.png";
import img8 from "assets/img/ABL.png";
import { useTranslation } from "react-i18next";
import sfex from "assets/img/sfexlogo.png";
import { strings } from '../../i18n';
import Footer from "components/Footers/Footer";
import axios from "axios";
import ModalVideo from 'react-modal-video'
import { AiFillInfoCircle } from "react-icons/ai"

export const About = () => {
  const { t, i18n } = useTranslation();
  const [video, setVideo] = useState(null);
  const responsive = {
    0: { items: 3 },
    568: { items: 4 },
    1024: { items: 5 },
  };
  useEffect(() => {
    FetchVideo();
  }, [true])
  useEffect(() => {
    console.log('Video', video);
  }, [video])
  const items = [
    <img src={img1} />,
    <img src={img2} />,
    <img src={img3} />,
    <img src={img5} />,
    <img src={img6} />,
    <img src={img7} />,
    <img src={img8} />,
  ];


  const VideoItem = [
    <img src={video !== null ? video[0].snippet.thumbnails.high : ''} />,
    <img src={img1} />,
    //     <ModalVideo channel='youtube' autoplay 
    //     //isOpen={isOpen} 
    //     videoId='AdboEnX-dxs' 
    //     //onClose={() => setOpen(false)} 
    //     />,
    // <ModalVideo channel='youtube' autoplay 
    //     //isOpen={isOpen} 
    //     videoId='AdboEnX-dxs' 
    //     //onClose={() => setOpen(false)} 
    //     />,
  ]




  const FetchVideo = () => {
    axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCRYjJTT2AqdlWYYx9WT3dDlr8JjPymXIE&channelId=UCMyHcGXbKge5bLKHOc12rMg&part=snippet,id&order=date&maxResults=20')
      .then(res => setVideo(res.data.items))

  }
  const data = [
    {
      key: 1,
      data:
        "Karachi hills (with SDA) aims to serve the needs of Pakistani community in housing and related services. We strive to be a world-class housing solution provider and innovator with leadership in quality, value for money and management. We put customer, quality, talent and prudence first as the core values that support our guiding principles.",
    },
    {
      key: 2,
      data:
        "Sehwan Development Authority (SDA), an autonomous body functioning under the Ministry of Local Govt. Department, Government of Sindh, was established and mandated to expedite and make provisions for the development and socio-economic improvement and to encourage the housing industry and provide shelter to the people of the Province (Sindh) under (SDA Act, 1993 and Revival - Amending 2013).",
    },
    {
      key: 3,
      data:
        "SDA & KGCP therefore intends to develop a remarkable housing project by the name of Karachi Hills, a world class urban development having all necessary modern-day community living facilities embraces with social mobility and exceptional lifestyle to create a more livable efficient, sustainable, and safe residential yet at an affordable price.",
    },
  ];
  const [active, setActive] = useState(0);

  const [text, setText] = useState(
    "Karachi hills (with SDA) aims to serve the needs of Pakistani community in housing and related services. We strive to be a world-class housing solution provider and innovator with leadership in quality, value for money and management. We put customer, quality, talent and prudence first as the core values that support our guiding principles."
  );
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
    }
  };
  return (
    <>
      <Container  id='about'  style={{marginTop:'20px'}}>
        {/* <Row>
          <Col className="flex flex-wrap justify-center text-center ">
            <h3
              className="h3"
              style={{ fontWeight: "bold", textTransform: "uppercase" }}
            >
              <span className="text-kgcred">
                {t("marketed2")}
              </span>{" "}
              {t("by")}
            </h3>
          </Col>
        </Row>
        <Row>
          <Col

            className="flex flex-wrap justify-center text-center mt-1"
          >
            <a href="https://www.squarefootexchange.com" target="_blank" className="anchor">
              <img className="w-20 h-30" src={sfex} />
            </a>
          </Col>
        </Row> */}

        {/* <Row>
          <Col className="flex flex-wrap justify-center text-center mt-5">
            <h1
              className="h1"
              style={{ fontWeight: "bold", textTransform: "uppercase" }}
            >
              <span style={{ color: "#A0843A" }}>
                {t("partnerOur")}
              </span>{" "}
              {t("partnerText")}
            </h1>
          </Col>
        </Row> */}
        {/* <br /> */}

        {/* <Row>
          <Col>
            <AliceCarousel
              animationDuration={1000}
              items={items}
              responsive={responsive}
              autoPlay={true}
              infinite
              disableButtonsControls={true}
              // disableButtonsControls={true}
              disableDotsControls
            />
          </Col>
        </Row> */}
        {/* <Row>
          <Col>
            <Button color="success">ABCD</Button>

            <AliceCarousel
             animationDuration={1000}
             items={VideoItem}
             responsive={responsive}
             autoPlay={true}
             infinite
             disableButtonsControls={true}
             disableButtonsControls={true}
             disableDotsControls
           /> 

          </Col>
        </Row> */}
        <Row>
          <Col className="flex flex-wrap justify-center text-center mt-5">
            <h1
              className="h1"
              style={{ fontWeight: "bold", textTransform: "uppercase" }}
              id='about'
            >
              <span  className="text-kgcred">
                {t("about")}
              </span> {t("topHeading")}
            </h1>
          </Col>
        </Row>
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
        {/* <Row>
          <Col className="flex flex-wrap justify-center text-center">
            <h5
              className="h5"
              style={{
                color: "#323232",
                fontWeight: "lighter",
                textTransform: "uppercase",
              }}
            >
             <div>{t("who")}</div>
            </h5>
          </Col>
        </Row> */}
        <br />
        {/* <hr className="hr" /> */}

        {/* <Row>
                    <Col className="text-center">
                        <span style={{ width: '25%', borderBottom: '5px solid #ddd' }}></span>
                        <hr/><span className="" aria-hidden={true}></span>
                        <span style={{ width: '25%', borderBottom: '5px solid #ddd' }}></span>
                    </Col>
                </Row> */}
        {/* <br /> */}
        <Row >
          <Col lg="6" md="6" sm="12" xs="12" >

            <img src={SideImage} alt="SideImage" />
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            {/* <Row>
              <Col lg="12" md="12" sm="12" xs="12">
                <h2
                  className="h2 text-kgcred"
                  style={{
                    // color: "#9f1c33",
                    fontWeight: 'bold',
                    textTransform: "",
                  }}
                >
                  {t("intDev")}
                </h2>

                <hr className="hr" />
                <br />
              </Col>
            </Row> */}
            {/* <Row>
              <Col lg="12" md="12" sm="12" xs="12">
                <h6
                  className="h6"
                  style={{ color: "#323232", fontWeight: "lighter" }}
                >
                  {t("intDevContent")}
                </h6>
              </Col>
            </Row>
            <Row>
              <Col lg="12" md="12" sm="12" xs="12" >
                <h2
                  className="h2 text-kgcred"
                  style={{
                    // color: "#9f1c33",
                    fontWeight: 'bold',
                    textTransform: "",
                  }}
                >
                  {t("futKar")}
                </h2>

                <hr className="hr" />
                <br />
              </Col>
            </Row> */}
            <Row>
              <Col lg="12" md="12" sm="12" xs="12">
                <div
                  // className="h6"
                  style={{fontSize:'1.3rem'}}
                >
                  {t("futKarContent")}
                </div>
              </Col>
            </Row>
            <br />


          </Col>
          {/* <Col lg="6" md="6" sm="12" xs="12" >

            <img src={SideImage} alt="SideImage" />
          </Col> */}
        </Row>



        {/* <Row>
          <Col lg="3" md="3" sm="0" xs="0">
          </Col>
          <Col className="flex flex-wrap justify-center text-center" lg="6" md="6" sm="12" xs="12">
            <img src={SideImage} alt="SideImage" />
          </Col>
          <Col lg="3" md="3" sm="0" xs="0">
          </Col>
        </Row> */}
      </Container>

    </>
  );
};

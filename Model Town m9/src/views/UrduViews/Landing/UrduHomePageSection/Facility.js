import React, { useState } from "react";
import { Row, Col, Container } from "reactstrap";

import { useTranslation } from "react-i18next";
import img1 from 'assets/img/ur1.png';
import img2 from 'assets/img/ur2.png';
import img3 from 'assets/img/ur3.png';
import img4 from 'assets/img/ur4.png';
import { SRLWrapper } from "simple-react-lightbox";


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
  const options = {
    settings: {

      disableKeyboardControls: false,
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
      setText(data[2].data);
      setActive(4);
    }
  };
  return (
    <>
      <Container>




        <Row>
          <Col className="flex flex-wrap justify-center text-center mt-5">
            <h1
              className="h1 urdu-font"
              style={{ fontWeight: "bold", textTransform: "uppercase" ,  }}
            >
              <span style={{ color: "#A0843A" }}>   
  ثقا فت اور جدت
              
              </span> کا شاندار امتزاج
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="flex flex-wrap justify-center text-center" lg="12" md="12" sm="12" xs="12">
            <h5
              className="h5 urdu-font"
              style={{
                textTransform: "uppercase",
              }}
            >
آ پکی نئی پہچان کراچی ہلز            </h5>
          </Col>
        </Row>
        <hr className="hr" />
        <br />
        <Row>
          <Col lg="12" md="12" sm="12" xs="12" className="justify-center text-center">
          <button
                className="urdu-font bg-kgcbrown text-white font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                <span style={{direction : 'rtl' , textAlign : 'right'}}>
             رہائشی پلاٹس سائزذ: 125, 250, 500
             </span>
              <br/>
              <span style={{direction : 'rtl' , textAlign : 'right'}}>

              کمرشل پلاٹس سائزذ:  125, 250
</span>
              </button>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <h5
              className="h5 urdu-font"
              style={{
                color: "#323232",
                fontWeight: "lighter",
                textTransform: "uppercase",
                direction : 'rtl',
                textAlign : 'right',
              }}
            >

کراچی ہلز میں جدید ضروریات ِ زندگی اور دورِ حاضر کی تمام بنیادی سہولیات کو ملحوضِ خاطر رکھا گیا ہے تا کہ آ پ کی زندگی کو آسان بنایا جا سکے۔ جس میں تعمیر کرداہ جدید، مضبوط اور پائیدار انفراسٹر کچر، چوڑی سٹرکیں، کشاداں گلیاں،وسیع و عریض سر سبز و شاداب، کھیلوں کے میدان، اور پارکس، تعلیمی وصحت کی سہولیات اور کمیونیٹی سینڑز کے علاوہ گرِ دونوح میں کئی منفرد جدید تفریحی اور تجارتی منصوبے شامل کیے گئے ہیں جو کہ اسکے رہائشیوں کو ایک نہایت سہل اور پر مسرت زندگی فراہم کریں گے۔جو کہ KARACHI HILLS کو دوسرے منصوبوں سے منفرد بناتا ہے۔



</h5>
<br />
          </Col>
        </Row>
        


        <Row >
          <Col lg="12" md="12" sm="12" xs="12">
            <Row>
              <Col lg="12" md="12" sm="12" xs="12">
                <hr className="hr" />
                <h6
                  className="h6 flex flex-wrap justify-center text-center urdu-font"
                  style={{ cursor: "pointer", fontWeight: "bolder" , fontSize : '20px',  direction : 'rtl',
                  textAlign : 'right', }}
                >
                  <span
                    onClick={() => change(0)}
                    style={{
                      color: active === 0 ? "#a0843a" : "",
                      marginRight: "8px",
                    }}
                  >
                    {" "}
                    کمیونیٹی سروس
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
                    تجارتی مراکز
                    {" "}
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
                    کمیونیٹی سہلولیات
                    {" "}
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
                    جدید انفراسٹر کچر
                    {" "}
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

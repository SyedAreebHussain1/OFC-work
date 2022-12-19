import { WebNavBar } from 'components/Navbars/WebNavBar';
import React, { useState, useEffect } from "react";
import background from 'assets/img/1.3.jpg'
import { Col, Container, Row } from 'reactstrap';
import { useTranslation } from "react-i18next";
import img1 from 'assets/img/ur1.png';
import img2 from 'assets/img/ur2.png';
import img3 from 'assets/img/ur3.png';
import img4 from 'assets/img/ur4.png';
import img5 from 'assets/img/ur5.png';
import img6 from 'assets/img/ur6.png';



import { SRLWrapper } from "simple-react-lightbox";
import { UrduNavBar } from 'components/Navbars/WebNavBar_Urdu';
import FooterUrdu from 'components/Footers/FooterUrdu';

export const UrduFacility = () => {
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
        {
            src: img5,
        },
        {
            src: img6,
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
              <Col lg="1" md="1" sm="12" xs="12">
              </Col>
              <Col lg="10" md="10" sm="12" xs="12" className="flex flex-wrap justify-center text-center">

                <img src={img1} alt="img1" className="mt-1" style={{ height: '85%', width: '75%' }} />
              </Col>
              <Col lg="1" md="1" sm="12" xs="12">
              </Col>
            </Row>

            </>
        },
        {
            key: 2,
            data:
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
                </>
        },
        {
            key: 3,
            data:
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
        },
        {
            key: 4,
            data:
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
                </>
        },
        {
            key: 5,
            data:
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

                </>
        },
        {
            key: 6,
            data:
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

                </>
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
        }else if (value === 5) {
            setActive(5);
        }
    };
    return (
        <>

           <UrduNavBar/>

            <main>
               
                    <div className="relative pt-32 pb-32 flex content-center items-center justify-center min-h1-screen-75">
                        <div
                            className="absolute top-0 w-full h-full bg-center bg-cover"
                            style={{
                                backgroundImage: "url(" + background + ")"
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
                            <Col lg="3" md="3" sm="12" xs="12"></Col>    
                            <Col className=" justify-center  text-center "
                lg="6"
                md="6"
                sm="12"
                xs="12">
                            <h5
                                className="h5 urdu-font"
                                style={{
                                textTransform: "uppercase",
                                        }}
                            >
                            آ پکی نئی پہچان کراچی ہلز            </h5>
                            </Col>
                            <Col
                lg="3"
                md="3"
                sm="12"
                xs="12"
                className="justify-center  text-center"
              >
                <button
                  className="urdu-font bg-kgcbrown text-white text-center  uppercase justify-center px-1 py-1 rounded outline-none focus:outline-none mr-1  "
                  type="button"
                  style={{ fontSize: "0.775rem" }}
                >
                  رہائشی پلاٹس سائزذ: 125, 250, 500
                  <br />
                  کمرشل پلاٹس سائزذ:  125, 250
                </button>
              </Col>
            </Row>
                        <br />
                        <hr className="hr" />
                        <br />
                        {/* <Row>
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
                        </Row> */}
                        <br />


                        <Row>
                            <Col >
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
                            </Col>
                        </Row>
                        <br />

                        <Row >
                            <Col lg="12" md="12" sm="12" xs="12">
                                <Row>
                                    <Col lg="12" md="12" sm="12" xs="12">
                                        <hr className="hr" />
                                        <br></br>
                                        <h6
                  className="h6 flex flex-wrap justify-center text-center urdu-font"
                  style={{ cursor: "pointer", fontWeight: "bolder" , fontSize : '20px',  direction : 'rtl',
                  textAlign : 'right', }}
                >
                    <button type="button" className="bg-kgcbrown font-bold uppercase px-2 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                style={{
                                                    color: active === 0 ? "#a0843a" : "#ffffff",

                                                    backgroundColor: active === 0 ? '#fff' : '#a0843a'
                                                }}>      
                                               
                  <span
                    onClick={() => change(0)}
                  
                  >
                    {" "}
                    کمیونیٹی سینٹرز
                  </span>
                  </button>
                  <button type="button" className="bg-kgcbrown font-bold uppercase px-2 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                style={{
                                                    color: active === 1 ? "#a0843a" : "#ffffff",

                                                    backgroundColor: active === 1 ? '#fff' : '#a0843a'
                                                }}>      
                  <span
                    onClick={() => change(1)}
                   
                  >
                    {" "}
                    خصوصی خدمات                    {" "}
                  </span>
                </button>
                <button type="button" className="bg-kgcbrown font-bold uppercase px-2 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                style={{
                                                    color: active === 2 ? "#a0843a" : "#ffffff",

                                                    backgroundColor: active === 2 ? '#fff' : '#a0843a'
                                                }}>      
                  <span
                    onClick={() => change(2)}
                   
                  >
                    {" "}
                    جدید انفراسٹر کچر

                    {" "}
                  </span>
                   </button>
                   <button type="button" className="bg-kgcbrown font-bold uppercase px-2 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                style={{
                                                    color: active === 3 ? "#a0843a" : "#ffffff",

                                                    backgroundColor: active === 3 ? '#fff' : '#a0843a'
                                                }}>      
                  <span
                    onClick={() => change(3)}
                   
                  >
                    {" "}
                    تجارتی مراکز                    {" "}
                  </span>
                  </button>



                  <button type="button" className="bg-kgcbrown font-bold uppercase px-2 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                style={{
                                                    color: active === 4 ? "#a0843a" : "#ffffff",

                                                    backgroundColor: active === 4 ? '#fff' : '#a0843a'
                                                }}>      
                  <span
                    onClick={() => change(4)}
                   
                  >
                    {" "}
                    تفریحی مراکز                    {" "}
                  </span>
                  </button>
                  <button type="button" className="bg-kgcbrown font-bold uppercase px-2 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                style={{
                                                    color: active === 5 ? "#a0843a" : "#ffffff",

                                                    backgroundColor: active === 5 ? '#fff' : '#a0843a'
                                                }}>      
                  <span
                    onClick={() => change(5)}
                   
                  >
                    {" "}
                    پروجیکٹ سیکیورٹی                    {" "}
                  </span>
                  </button>

                </h6>
                <br></br>
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
                        </Row>

                    </section>
                    </Container>
            </main>
            <br/>
            <FooterUrdu/>
        </>
    );
}
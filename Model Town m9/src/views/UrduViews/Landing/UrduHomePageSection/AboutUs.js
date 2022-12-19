import React, { useState } from "react";
import { Row, Col, Container } from "reactstrap";

import SideImage from "assets/img/2.png";
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
import Footer from "components/Footers/Footer.js";
export const About = () => {
  const { t, i18n } = useTranslation();

  const responsive = {
    0: { items: 3 },
    568: { items: 4 },
    1024: { items: 5 },
  };
  const items = [
    <img src={img1} />,
    <img src={img2} />,
    <img src={img3} />,
    <img src={img5} />,
    <img src={img6} />,
    <img src={img7} />,
    <img src={img8} />,
  ];
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
      <Container>
        <Row>
          <Col className="flex flex-wrap justify-center text-center ">
            <h3
              className="h3"
              style={{ fontWeight: "bold", textTransform: "uppercase" , fontFamily :'Jameel Noori Nastaleeq'  }}
            >
              <span style={{ color: "#A0843A"  }}>
                     مارکیٹڈ
              </span>{" "}
              بائے   
            </h3>
          </Col>
        </Row>
        <Row>
          <Col

            className="flex flex-wrap justify-center text-center mt-1"
          >
            <a href="https://www.squarefootexchange.com" target="_blank">
            <img className="w-20 h-201" src={sfex} />
            </a>
          </Col>
        </Row>

        <Row>
          <Col className="flex flex-wrap justify-center text-center mt-5">
            <h1
              className="h1"
              style={{ fontWeight: "bold", textTransform: "uppercase" , fontFamily :'Jameel Noori Nastaleeq' }}
            >
              <span style={{ color: "#A0843A" }}>
                معاون
                {/* {t.partnerText('color')} */}
              </span>{" "}
              ادارے
            </h1>
          </Col>
        </Row>
        <br />

        <Row>
          <Col>
            {/* <Button color="success">ABCD</Button> */}

            <AliceCarousel
              animationDuration={1000}
              items={items}
              responsive={responsive}
              autoPlay={true}
              infinite
              disableButtonsControls={true}
              disableButtonsControls={true}
              disableDotsControls
            />
          </Col>
        </Row>
        <Row>
          <Col className="flex flex-wrap justify-center text-center mt-5">
            <h1
              className="h1"
              style={{ fontWeight: "bold", textTransform: "uppercase" , fontFamily :'Jameel Noori Nastaleeq' }}
            >
              <span style={{ color: "#A0843A" }}>
                پروجیکٹ کے
              </span>
              بارے میں
              </h1>
          </Col>
        </Row>
        <Row>
          <Col className="flex flex-wrap justify-center text-center">
            <h5
              className="h5"
              style={{
                color: "#323232",
                fontWeight: "lighter",
                textTransform: "uppercase",
                fontFamily :'Jameel Noori Nastaleeq'
              }}
            >
              ہم کون ہیں
            </h5>
          </Col>
        </Row>
        <hr className="hr" />
        <br />
        <Row >
        <Col lg="6" md="6" sm="12" xs="12" >
            
            <img src={SideImage} alt="SideImage" />
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
           

            <Row>
              
              <Col lg="12" md="12" sm="12" xs="12">
                <h2
                  className="h2"
                  style={{
                    direction : 'rtl',
                    textAlign : 'right',
                    color: "#A0843A",
                    fontWeight: 'bold',
                    textTransform: "",
                    fontFamily :'Jameel Noori Nastaleeq'
                  }}
                >
                  کریں گے اہل ِ نظر تازہ بستیاں آباد                </h2>
                <hr className="hr" />
                <br />
              </Col>
            </Row>
            <Row>
              <Col lg="12" md="12" sm="12" xs="12" className="justify-center text-center">
                <h6
                  className="h6"
                  style={{ color: "#323232" , fontSize : '20px' , fontWeight: "lighter" ,  direction : 'rtl',
                  textAlign : 'right', fontFamily :'Jameel Noori nastaleeq' }}
                >
کراچی اور سندھ کے دیگر شہروں کی تیزی سے بڑھتی ہوئی آبادی، بنیادی سہولیات کی کمی، ٹریفک کا رش، ماحول کی آلودگی، شہروں کا ارتقا ء اور زمین کی بے انتہا بڑھتی ہوئی قیمتیں۔ ان وجوہات سے کراچی کے ساتھ سپر ہائی وے پر ایک نئے جدید شہر کی بنیاد پڑی۔اس علاقے میں بڑے پیمانے پر کئی اہم ترقیاتی منصوبوں کا آغاز ہو چکا ہے۔
                </h6>
                <br />
              </Col>
              </Row>

                  <Row>
              
              <Col lg="12" md="12" sm="12" xs="12">
                <h2
                  className="h2"
                  style={{
                    direction : 'rtl',
                    textAlign : 'right',
                    color: "#A0843A",
                    fontWeight: 'bold',
                    textTransform: "",
                    fontFamily :'Jameel Noori Nastaleeq'
                  }}
                >
                  مستقبل کا کراچی

                   </h2>
                <hr className="hr" />
                <br />
              </Col>
            </Row>
            <Row>
              <Col lg="12" md="12" sm="12" xs="12" className="justify-center text-center">
                <h6
                  className="h6"
                  style={{ color: "#323232", fontWeight: "lighter" , fontSize : '20px' , fontFamily :'Jameel Noori nastaleeq' ,  direction : 'rtl',
                  textAlign : 'right', }}
                >
کراچی حیدرآباد سپر ہائی وے پر اس نئے جدید اور بڑے ڈولپمنٹ زون میں پہلے سے ہی کچھ اہم منصوبے شروع ہو چکے ہیں۔ جیسے کے ڈی ایچ اے سٹی، بحریہ ٹاؤن، اے ایس ایف سٹی، نیول اینکیر یج   ، ایجوکیشن سٹی،  کے جی سیپراپرٹیز، پام ڈریمز اور دیگر شامل ہیں  اور اب   کراچی ہلز بھی اس  بڑی اور جدید اسکیم میں شاندار اضافہ ہے۔
    

    
                </h6>
                <br />
              </Col>
            </Row>

            <br />  </Col>
        
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

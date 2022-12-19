import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import ModalVideo from 'react-modal-video'
import SideImage from 'assets/img/process.png';
import { Video } from './Video';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Portal = () => {
    const [active, setActive] = useState(0);
    const { t, i18n } = useTranslation();


    const step1 = [
        {
            key: 1,
            text: "www.karachihills.com وزٹ  کریں",
        },
        {
            key: 2,
            text: "اپنے نام ، پاس ورڈ ، ای میل CNIC اور فون نمبر کے ساتھ سائن اپ کریں۔",
        },
        {
            key: 3,
            text: "ایک بار جب آپ www.karachihills.com پر سائن اپ کرلیں ، آپ کو توثیقی مقاصد کے لئے فون نمبر اور ای میل پتے کے ذریعہ او ٹی پی موصول ہوگا۔",
        },
        {
            key: 4,
            text: "ایک بار توثیقی عمل مکمل ہوجانے کے بعد ، آپ پورٹل کے میری درخواستیں ٹیب پر فارم کی درخواست کے بٹن پر کلک کرکے پروسیسنگ فارم خرید سکتے ہیں۔",
        },
        {
            key: 5,
            text: "مطلوبہ فارم میری درخواستوں کے ٹیب پر آئیں گے۔ فارم تک رسائی حاصل کرنے کے لئے ، براہ کرم اب ادا کے بٹن پر کلک کرکے ادائیگی کے ساتھ آگے بڑھیں اور کسی بھی ڈیبٹ / کریڈٹ کارڈ کا استعمال کرکے یا آن لائن بینک ٹرانسفر کے ذریعے ادائیگی کریں۔",
        },
        {
            key: 6,
            text: "اس لین دین کی تکمیل اور تصدیق کے بعد ، ایک منفرد ID والا ایک پروسیسنگ فارم تیار کیا جائے گا۔ (پروسیسنگ فارم ابھی یا بعد میں جمع کرائے جاسکتے ہیں)۔",
        },
    ];
    const step2 = [
        {
            key: 1,
            text: "اپنے مطلوبہ پروسیسنگ فارموں تک رسائی حاصل کرنے کے لئے ، ایپلی کیشنز ٹیب پر کلک کریں۔ یہاں آپ اپنے جمع کروائے ہوئے اور زیر التواء تمام فارموں کو تلاش کرسکیں گے۔",
        },
        {
            key: 2,
            text: "آپ جس فارم کو پُر کرنا چاہتے ہیں اس پر کلک کریں اور تمام تفصیلات پُر کرکے آگے بڑھیں اور پھر پر کلک کریں (براہ کرم درست معلومات فراہم کرنا یقینی بنائیں)۔",
        },
        {
            key: 3,
            text: "آپ کو ایپلی کیشنز ٹیب پر بھیج دیا جائے گا۔ آپ اس کے ساتھ والے پے اب ادا بٹن پر کلک کرکے بھرے ہوئے فارم کی ادائیگی کرسکتے ہیں۔",
        },
        {
            key: 4,
            text: "بیلٹنگ کے عمل کے اہل بننے کے لئے اب آپ پی کے آر 10،000 کی پروسیسنگ فارم کی ادائیگی کے ساتھ آگے بڑھ سکتے ہیں۔ ادائیگی کسی بھی ڈیبٹ / کریڈٹ کارڈ یا آن لائن بینک ٹرانسفر کے ذریعے کی جاسکتی ہے۔ (PKR 10،000 کی رقم واپسی اور پلاٹ کی ادائیگی میں سایڈست ہے)",
        },
        {
            key: 5,
            text: "عمل کی تکمیل کے بعد ، آپ کو ای میل اور ایس ایم ایس کے ذریعے اپنے عمل کو پیش کرنے کے بارے میں مطلع کیا جائے گا۔",
        },
    ]
    const checkOpen = () => {

    }
    const [isOpen, setOpen] = useState(false)

    // const [text, setText] = useState(steps)
    const changeState = () => {
        debugger;
        setOpen(!isOpen)
        debugger;
        if (isOpen === true) {
            debugger;
            setActive(0);
        }
    }
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
    }
    return (
        <>
            <Container>
            <Row>
          <Col className="flex flex-wrap justify-center text-center mt-1">
          <h1 className="h1 urdu-font" style={{ fontWeight: 'bold', textTransform: 'uppercase' }}><span style={{ color: "#A0843A" }}>پروجیکٹ</span> سہولیات </h1>
          </Col>
        </Row>
        <hr classname="hr" />
        <br />
        <Row>
          <Col
            className=" justify-center  text-center "
            lg="12"
            md="12"
            sm="12"
            xs="12"
          >
           <Link to="/urfacility">
                
              <button
                className="urdu-font bg-kgcbrown text-white text-center font-bold  uppercase justify-center px-1 py-1 rounded outline-none focus:outline-none mr-1  "
                type="button"
                style={{fontSize : '25px'}}
              >
                ہماری سہولیات کی جانچ کے لئے کلک کریں

              </button>
              </Link>
          </Col>
        </Row>

                <Row>

                    <Col className="flex flex-wrap justify-center text-center mt-5">
                        <h1 className="h1 urdu-font" style={{ fontWeight: 'bold', textTransform: 'uppercase' }}><span style={{ color: "#A0843A" }}>کراچی ہلز</span> آن لائن پورٹل </h1>
                    </Col>
                </Row>
                <hr classname="hr" />
                <br />
                <Row>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <Row>

                            <Col lg="12" md="12" sm="12" xs="12">
                                <h5 className="h5 urdu-font" style={{
                                    color: '#323232', fontWeight: 'bold', textTransform: 'uppercase', direction: 'rtl', textAlign: 'right',
                                }}>
                                    براہ کرم ذیل مراحل پر عمل کریں
                                </h5>
                                <br />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="12" md="12" sm="12" xs="12">

                                <hr className="hr" />

                                <h6 className="h6 urdu-font" style={{ cursor: 'pointer', fontWeight: 'bolder', fontSize: '14px', textAlign: 'right', direction: 'rtl' }} >
                                    <span onClick={() => change(0)} style={{ color: active === 0 ? '#a0843a' : '', marginRight: '6px' }}> رکنیت / رجسٹریشن فارم </span>
                                |
                                <span onClick={() => change(1)} style={{ color: active === 1 ? '#a0843a' : '', marginRight: '6px', marginLeft: '6px' }}>بالٹ پروسیس</span>
                                |
                                <span onClick={() => change(2)} style={{ color: active === 2 ? '#a0843a' : '', marginRight: '6px', marginLeft: '6px' }}>ویڈیو دیکھئیے</span>
                                </h6>
                                <hr className="hr" />
                                <br />
                                {

                                    active === 0 ?
                                        <ul className="ul urdu-font" style={{
                                            listStyleType: 'circle',
                                            textAlign: 'right', direction: 'rtl',
                                            color: '#000', display: 'list-item'
                                        }}>
                                            {step1.map((step) => {
                                                return (
                                                    <li style={{ textAlign: 'right', direction: 'rtl' }} key={step.key}>{step.text}</li>
                                                )
                                            })}

                                        </ul>
                                        :
                                        //active === 1 ?
                                        <ul className="ul urdu-font" style={{
                                            listStyleType: 'circle',
                                            textAlign: 'right', direction: 'rtl', color: '#000', display: 'list-item'
                                        }}>
                                            {step2.map((step) => {
                                                return (
                                                    <li style={{ textAlign: 'right', direction: 'rtl' }} key={step.key}>{step.text}</li>
                                                )
                                            })}

                                        </ul>
                                }
                                {/* :
                                     <Video/>


                                {/* } */}
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="IC_56fOomTQ" onClose={() => changeState()} />

                            </Col>
                        </Row>
                    </Col>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <img src={SideImage} alt="SideImage" />
                    </Col>
                </Row>



            </Container>
        </>
    )
}
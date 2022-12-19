import React from 'react'
import { Col, Nav, Row, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { useTranslation } from "react-i18next";
import kgc1 from "assets/img/kgc1.jpg";
import kgc2 from "assets/img/kgc2.png";

export const KGC = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Row>
                <Col className="flex flex-wrap justify-center text-center mt-5">
                    <h1
                        className="h1 urdu-font"
                        style={{ fontWeight: "bold", textTransform: "uppercase" }}
                    >
                        <span style={{ color: "#A0843A" }}> کے جی سی</span> پراپرٹیز
                    </h1>
                </Col>
            </Row>
            <hr className="hr" />
            <br />
            <Row className="pb-5    ">
                <Col lg="12" md="12" sm="12" xs="12">
                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12">
                            <h6
                                className="h6 urdu-font inline-block"
                                style={{ color: "#323232", fontWeight: "bold", direction: 'rtl', textAlign: 'right' , fontSize : '22px' }}
                            >
کے جی سی پی ملٹی نیشنل گروپوں کی کنسرشیم کا ایک حصہ ہے جو متحد ہ ارب امارات،مشرقِ وستع اور آفریکہ میں ریل اسٹیٹ ڈیو یلپمنٹ اور ایف ایم سی جی سیکٹر میں پہلے ہی اپنا کردار ادا کر رہا ہے،اور اسکے علاوہ M/9، موٹر وئے/ سپر ہائی وئے پر ریل اسٹیٹ کی ترقی میں حصہ لے رہا ہے۔کے جی سی پر اپرٹیز (KGC Properties)ایک تنظیم ہے جو شہری زندگی کی تین بنیادی پہلو، رہائشی، تجارتی اور تفریح کو ملاکر دنیا کی خواہش کے لیے DHA City   کے پار مرقضی سپر ہائی وئے پر واقع ہے۔ جنا ح ٹرمینل کراچی ائیر پورٹ سے ۰۴ منٹ کے فاصلے پر اور سپر ہا ئی وئے کراچی ایڈوکیشن سٹی (Education City)  سے ۰۱ منٹ کی فاصلے پر، یس کو ایک متحرک انفراسٹکچر کے ساتھ تیار کیا جا رہا ہے جس کی مدد سے زندگی کو بہترین میعارگزارنے کا تجربہ کر سکیں گے جو آ پ کو اپنے گھر کی طرح محسوس ہو گا۔ سیکیورٹی کے جی سی کا اولین پہلو ہے جسکی متعدد میٹرؤ  شہروں میں کمی ہے۔ ہمارا مقصد آ پ کو ایک ایسا تجربہ فراہم کرنا ہے جو یقینی طور پر پہلے سع کہیں زیادہ آرام دہ اور پرسکون ہو گا۔ بجلی کی پیداوار، پانی کی فراہمی، گندے پانی کی صفائی، فائر برگیڈ کا نظام، ٹرانسپورٹیشن اور سیٹلائٹ سرویلنس کے ساتھ، کے جی سی شہری زندگی کا اعلیٰ نمونہ بنئے گا۔ کے جی سی ایک خود مختار میگا لینڈ ڈیولپمنٹ ہے۔، جس کو متعدد تعر یخی سر گرمیوں کے آس پاس تیار کیا جا رہا ہے جس میں ایک 18 ہول گولف کورس، سفاری اور تھیم پارکس، سپورٹس سینٹر وغیرہ شامل ہیں۔KGC کے مختلف مراحل میں مساجد اور فارمیسیز کے ساتھ ہسپتال، سکولز، ڈے کیئر سینٹر، کالجز، تجارتی علاقے، پارکس اور کمیونٹی مراکز بھی ہوں گے تاکے ہر دن زیادہ مستعفید ہوسکے۔ کے جی سی ایک بے مثال طرزِ ذندگی پیش کرتا ہے جس میں صاف ستھرا اور صحت مند ماحول آپ کو خوبصور ت زندگی کا احساس دیتا ہے
                                </h6>


                        </Col>
                    </Row>
                    .


                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12">
                            <h6
                                className="h6"
                                style={{ color: "#323232", fontWeight: "bold", direction: 'rtl', textAlign: 'right' }}
                            >

                                </h6>


                        </Col>
                    </Row>





                  

















                   
                </Col>
            </Row>
            <Row>
                <Col lg="6" md="6" sm="12" xs="12">
                    <img src={kgc1} alt="SideImage" className="rounded" />

                </Col>
                <Col lg="6" md="6" sm="12" xs="12">
                    <img src={kgc2} alt="SideImage" className="rounded" />

                </Col>
            </Row>

        </>
    );
}
import React from 'react'
import { Col, Nav, Row, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { useTranslation } from "react-i18next";




export const SDA = () => {
    const { t, i18n } = useTranslation();
    return (

        <>
            <Row>
                <Col className="flex flex-wrap justify-center text-center mt-5">
                    <h1
                        className="h1 urdu-font"
                        style={{ fontWeight: "bold", textTransform: "uppercase" , direction : 'rtl' , textAlign : 'right' }}
                    >
                        <span style={{ color: "#A0843A" }}>
                        سہون ڈیولمپنٹ اتھارٹی
                            </span> 
                            {t("abber")}
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
                                className="h6 urdu-font"
                                style={{ color: "#323232", fontSize : '22px', fontWeight: "bold" , direction : 'rtl' , textAlign : 'right' }}

                            >
                               سہون ڈیولمپنٹ اتھارٹی(SDA)(SDA Act, 1993 and Revival - Amending 2013)
                            </h6>


                        </Col>
                    </Row>





                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12">
                            <h6
                                className="h6 urdu-font"
                                style={{ color: "#323232", fontWeight: "bold" , fontSize : '22px',direction : 'rtl' , textAlign : 'right' }}
                            >
حکومت سندھ کا قائم کردہ ایک خود مختار ذیلی ادارہ ہے۔  جسکا اولین مقصد Housing Sector   میں ترقی کو فروغ دینا اور عوام کو بہترین رہائشی سہولتیں فراہم کرنا ہے۔
                                </h6>


                        </Col>
                    </Row>




                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12">
                            <h6
                                className="h6 urdu-font"
                                style={{ color: "#323232", fontWeight: "bold" , fontSize : '22px' ,direction : 'rtl' , textAlign : 'right' }}
                            >
                                خاص طور پر کراچی،حیدرآباد اور سندھ کے دیگر شہروں میں آبادی کی شرح میں اضافے کی وجہ سے کراچی حیدرآباد سپر ہائی وے  M9/  موٹروے پر بڑے پیمانے پر ہاؤسینگ سیکٹر میں کئی نامور ترقیاتی منصوبوں کا آغاز ہو چکا ہے۔جس کابڑا حصہ SDA کی حدود میں آتا ہے اور اب یہ علاقہ جدید شہر بنے جا رہا ہے۔

                                </h6>


                        </Col>
                    </Row>



                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12">
                            <h6
                                className="h6 urdu-font"
                                style={{ color: "#323232", fontWeight: "bold" , fontSize : '22px' , direction : 'rtl' , textAlign : 'right' }}
                            >
جس کی وجہ سے اگلے چند سالوں میں SDA   سندھ کی ترقیاتی ڈیولپنٹ اتھارٹی میں سرِ فہرست ہو گا۔

                                </h6>


                        </Col>
                    </Row>



                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12">
                            <h6
                                className="h6 urdu-font"
                                style={{ color: "#323232", fontWeight: "bold" , fontSize : '22px', direction : 'rtl' , textAlign : 'right' }}
                            >
جسکو مدِ نظر رکھتے ہوئے سہون ڈیولمپنٹ اتھارٹی جدید طرزِ زندگی پر مشتمل ایک بے مثال رہائشی منصوبے کا آغاز "KARACHI HILLS''  کے نام سے کر رہا ہے۔ جس میں دور ِ حاضر کی تمام جدید ضرویات اور سہولیات کو ملحوض خاطر رکھا گیا ہے۔ جسکی تعمیر و ترقی کے لیے KGCP  کے ساتھ اشتراک کیا گیا ہے تا کہ کراچی اور اندونِ سند ھ کے دیگر شہروں کے رہنے والوں کو ایک بہتر رہا ئشی معیا ر زندگی، مناسب قیمت پر مہیا کی جا سکے۔

                                </h6>


                        </Col>
                    </Row>



                </Col>

            </Row>
        </>
    );
}
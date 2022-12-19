import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "assets/imgfolder1/modeltownlogo1.png";
import footerlogo from "assets/imgfolder1/footerimg.png";
export default function FooterV() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <footer className="relative bg-gray-900 pt-8 pb-6">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                            className="text-kgcred fill-current"
                            points="2560 30 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
                {/* style={{}} */}
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px',marginLeft:'11%',marginRight:'3%',color:'#fff' }}>
                    <div style={{ width: '70%', marginTop: '-20px' }}>
                        <div>
                            <img src={footerlogo} style={{ height: '100px' }} />
                        </div>
                        {/* <p className=""> */}
                        Model Town Karachi is launching an unrivaled modern lifestyle housing complex that has all the necessary amenities and technological conveniences.
                        {/* </p> */}
                    </div>
                    <div style={{ width: '50%', padding: '10px' }}>
                        <div style={{ color: '',fontWeight:'bold' }}>Haed Office</div>
                        <br />

                        <br />
                        <a 
                        className="" 
                        href="https://goo.gl/maps/XcxUXkpzPVwmJ5U97"
                        target="_blank"
                        style={{color:'white'}}
                        
                        >B-6 A Miran Muhammad Shah Road Muhammad Ali Cooperative Housing Society. (MACHS) Karachi Pakistan.
                        </a>
                    </div>
                    <div style={{ width: '50%', padding: '10px' }}>
                        <div style={{ color: '',fontWeight:'bold' }}>Links</div>
                        <br />
                        <br />

                        <div>Contact us</div>
                        {/* <div>FAQ</div> */}
                        <br />

                        <div>Privacy</div>
                        {/* <div>Schedule Charges</div> */}
                        <div></div>
                    </div>
                    <div style={{ width: '50%', color: '#fff' }}>
                        <div style={{ color: '',fontWeight:'bold' }}>Follow Us</div>

                        <div style={{marginTop:'40px',marginLeft:'-20px'}}>
                            <button
                                className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <a
                                    className="fab fa-instagram text-kgcred"
                                    href="https://www.instagram.com/ModelTownM9/"
                                    target="_blank"
                                ></a>
                            </button>
                            <button
                                className="bg-white  text-red-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <a
                                    className="fab fa-facebook text-kgcred"
                                    href="https://www.facebook.com/ModelTownM9/"
                                    target="_blank"
                                ></a>
                            </button>
                            <button
                                className="bg-white  shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <a
                                    className="fab fa-youtube text-kgcred"
                                    href="https://www.youtube.com/channel/UChn39cmGJHDgrsQaE_oqiJg"
                                    target="_blank"
                                ></a>
                            </button>
                            <button
                                className="bg-white  shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <a
                                    className="fab fa-whatsapp text-kgcred"
                                    href="https://wa.link/xm9fs5"
                                    target="_blank"
                                ></a>
                            </button>
                        </div>
                    </div>
                </div>

                {/* <hr className="my-6 border-gray-400" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-white font-semibold py-1">
                            {t("copyRight")} © {new Date().getFullYear()} {t("kHills")}{" "}
                            <a
                                href="https://www.kgcp.com.pk"
                                className="text-white hover:text-white"
                                target="_blank"
                            >
                                {t("copyLink")}
                            </a>
                            .
                        </div>
                    </div>
                </div> */}
            </footer>
        </>
    );
}

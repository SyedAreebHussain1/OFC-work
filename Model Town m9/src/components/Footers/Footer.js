import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import footerlogo from "assets/imgfolder1/footerimg.png";
import { auto } from "@popperjs/core";

export default function Footer() {
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
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              {/* <h4 className="text-3xl text-white font-semibold">
                {t("touch")}
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-white">{t("subTouch")} </h5> */}
              <div className="mt-6 lg:mb-0 mb-6">
                {/* <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a
                    className="fab fa-instagram"
                    href="https://www.instagram.com/karachi_hills/"
                    target="_blank"
                  ></a>
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a
                    className="fab fa-facebook-square"
                    href="https://www.facebook.com/SDAKarachiHills"
                    target="_blank"
                  ></a>
                </button>
                <button
                  className="bg-white text-red-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a
                    className="fab fa-youtube"
                    href="https://www.youtube.com/channel/UCMyHcGXbKge5bLKHOc12rMg"
                    target="_blank"
                  ></a>
                </button> */}
              </div>
              {/* <br /> */}
            </div>
            <div className="w-full lg:w-12/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-12/12 px-4 ml-auto">
                  <span className="block uppercase text-white text-lg font-semibold mb-2">
                    {/* {t("contact")}{" "} */}
                    <div style={{ border: '' }}>
                      <img src={footerlogo} style={{ height: '100px', margin: '20px auto' }} />
                    </div>
                  </span>
                  <div className="text-white">
                    Model Town Karachi is launching an unrivaled modern lifestyle housing complex that has all the necessary amenities and technological conveniences.</div>
                  <div></div>

                  <hr className="my-6 border-gray-400" />
                  <ul className="list-unstyled">

                    {/* {t("address")} */}
                    <span className="block uppercase text-white text-lg font-semibold mb-2">
                      {/* {t("contact")}{" "} */}
                      Head Office
                    </span>
                    <a
                      className=""
                      href="https://goo.gl/maps/XcxUXkpzPVwmJ5U97"
                      target="_blank"
                      style={{ color: 'white' }}

                    >B-6 A Miran Muhammad Shah Road Muhammad Ali Cooperative Housing Society. (MACHS) Karachi Pakistan.
                    </a>
                    <span className="block uppercase text-white text-lg font-semibold mb-2">
                      {/* {t("contact")}{" "} */}
                      Link
                    </span>
                    <a
                      className=""
                      // href="https://goo.gl/maps/XcxUXkpzPVwmJ5U97"
                      // target="_blank"
                      style={{ color: 'white' }}
                    >Contact </a><br />
                    <a
                      className=""
                      // href="https://goo.gl/maps/XcxUXkpzPVwmJ5U97"
                      // target="_blank"
                      style={{ color: 'white' }}
                    >Privacy</a>
                    <br />
                    {/* <span className="block uppercase text-white text-lg font-semibold mb-2" > */}
                    {/* {t("contact")}{" "} */}
                    {/* Follow Us */}
                    {/* </span> */}
                    <div style={{display: 'flex',justifyContent: 'space-around' }}>
                      {/* <div style={{ display: '',marginLeft:"", border: '1px solid red'}}> */}
                        <li>
                          {/* <br /> */}
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
                        </li>
                        <li>
                          <button
                            className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                            type="button"
                          >
                            <a
                              className="fab fa-facebook text-kgcred"
                              href="https://www.facebook.com/ModelTownM9/"
                              target="_blank"
                            ></a>
                          </button>
                        </li>
                        <li>
                          <button
                            className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                            type="button"
                          >
                            <a
                              className="fab fa-youtube text-kgcred"
                              href="https://www.youtube.com/channel/UChn39cmGJHDgrsQaE_oqiJg"
                              target="_blank"
                            ></a>
                          </button>
                        </li>
                        <li>
                          <button
                            className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                            type="button"
                          >
                            <a
                              className="fab fa-whatsapp text-kgcred"
                              href="https://wa.link/xm9fs5"
                              target="_blank"
                            ></a>
                          </button>
                        </li>
                      {/* </div> */}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <hr className="my-6 border-gray-400" /> */}
          {/* <div className="flex flex-wrap items-center md:justify-between justify-center">
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
        </div>
      </footer>
    </>
  );
}

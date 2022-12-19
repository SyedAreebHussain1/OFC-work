import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function FooterUrdu() {
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
              className="text-kgcbrown fill-current"
              points="2560 30 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            {/* <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl text-white font-semibold urdu-font">
                ہم سے رابطے میں رہیں
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-white urdu-font">
                ان پلیٹ فارم پر ہم آپکی خدمت کے لیے موجود ہیں۔
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
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
                </button>
                <br />
                <br />
                
              </div>
            </div> */}
            <div className="w-full lg:w-12/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-12/12 px-4 ml-auto">
                  <span className="block uppercase text-white text-lg font-semibold mb-2 urdu-font">
                    رابطہ کریں{" "}
                  </span>
                  <hr className="my-6 border-gray-400" />
                  <ul className="list-unstyled">
                    <li>
                      <i className="fa fa-envelope text-white"></i>
                      <a
                        className="text-white hover:text-white font-semibold block pb-2 text-sm"
                        href="mailto:[info@karachihills.com]"
                      >
                        {t("email")}
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-map-marker text-white"></i>
                      <a
                        className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://www.google.com/maps/place/KGC+Properties/@24.8758418,67.0873991,17z/data=!3m1!4b1!4m5!3m4!1s0x3eb33eb38c66b6bd:0xe192a03e76b8211a!8m2!3d24.8758369!4d67.0895878"
                        target="_blank"
                      >
                        {t("time")}
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-clock text-white"></i>
                      <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm">
                        {t("address")}
                      </a>
                    </li>
                    <li>
                    <h6 className="h6" style={{ color: "#ffffff" }}>
                  <Link to="/privacy" className="text-white urdu-font">
                    <span style={{ fontWeight: "bold" }}></span>
                    پرائیویسی پالیسی
                  </Link>
                </h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
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
          </div>
        </div>
      </footer>
    </>
  );
}

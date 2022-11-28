import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
class FeaturesV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    let customClass = this.props.customClass ? this.props.customClass : "";

    return (
      <div className={customClass}>
        <div className="container">
          <div 
          className="row ltn__custom-gutter--- justify-content-center go-top"
          >
            <div className="col-lg-4 col-sm-6 col-12">
              <div
                // style={{ backgroundColor: "#E9EAEC" }}
                className="ltn__feature-item ltn__feature-item-6 bg-white  box-shadow-1 active"
              >
                {/* <div className="ltn__feature-icon">
                  <img src={icon2} alt="#" />
                </div> */}
                <div className="ltn__feature-info">
                  <h3>
                    <Link
                      className="freature-link-hover"
                      style={{ color: "black" }}
                      to="/service-details"
                    >
                      Consumer<br/> Insights
                    </Link>
                  </h3>
                  <p style={{ color: "grey", fontSize: "15px" }}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  {/* <Link className="ltn__service-btn" to="/service-details">
                    Find A Home <i className="flaticon-right-arrow" />
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div
                // style={{ backgroundColor: "#E9EAEC" }}
                className="ltn__feature-item ltn__feature-item-6 bg-white  box-shadow-1 active"
              >
                {/* <div className="ltn__feature-icon">
                  <img src={icon2} alt="#" />
                </div> */}
                <div className="ltn__feature-info">
                  <h3>
                    <Link
                      className="freature-link-hover"
                      style={{ color: "black" }}
                      to="/service-details"
                    >
                      Emerging 
                      <br/>
                      Ideas
                    </Link>
                  </h3>
                  <p style={{ color: "grey", fontSize: "15px" }}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  {/* <Link className="ltn__service-btn" to="/service-details">
                    Find A Home <i className="flaticon-right-arrow" />
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 bg-white box-shadow-1">
                {/* <div className="ltn__feature-icon">
                  <img src={icon3} alt="#" />
                </div> */}
                <div className="ltn__feature-info">
                  <h3>
                    <Link
                      className="freature-link-hover"
                      style={{ color: "black" }}
                      to="/service-details"
                    >
                      Thought<br/>
                      Leadership
                    </Link>
                  </h3>
                  <p style={{ color: "grey", fontSize: "15px" }}>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      // //
      // 
      // <div className={customClass}>
      //   <div className="container">
      //     {/* <div className="row">
      //       <div className="col-lg-12">
      //         <div className="section-title-area ltn__section-title-2--- text-center">
      //           <h6
      //             style={{ color: "black" }}
      //             className="section-subtitle section-subtitle-2 "
      //           >
      //             Our Services
      //           </h6>
      //           <h1 className="section-title">Our Main Focus</h1>
      //         </div>
      //       </div>
      //     </div> */}
      //     <div className="row ltn__custom-gutter--- justify-content-center go-top">
      //       <div className="col-lg-4 col-sm-6 col-12">
      //         <div
      //           // style={{ backgroundColor: "#E9EAEC" }}
      //           className="ltn__feature-item ltn__feature-item-6 text-center bg-grey  box-shadow-1 active"
      //         >
      //           <div className="ltn__feature-icon">
      //             <img src={icon2} alt="#" />
      //           </div>
      //           <div className="ltn__feature-info">
      //             <h3>
      //               <Link
      //                 className="freature-link-hover"
      //                 style={{ color: "#27A3A3" }}
      //                 to="/service-details"
      //               >
      //                 Easy to use
      //               </Link>
      //             </h3>
      //             <p style={{ color: "#27A3A3", fontSize: "20px" }}>
      //               You can easily navigate through our app without being a tech
      //               specialist.
      //             </p>
      //             {/* <Link className="ltn__service-btn" to="/service-details">
      //               Find A Home <i className="flaticon-right-arrow" />
      //             </Link> */}
      //           </div>
      //         </div>
      //       </div>
      //       <div className="col-lg-4 col-sm-6 col-12">
      //         <div className="ltn__feature-item ltn__feature-item-6 ltn__feature-item-free text-center bg-dark-green  box-shadow-1">
      //           <div className="ltn__feature-icon">
      //             <img src={icon1} alt="#" />
      //           </div>
      //           <div className="ltn__feature-info">
      //             <h3>
      //               <Link style={{ color: "white" }} to="/service-details">
      //                 Free
      //               </Link>
      //             </h3>
      //             <p style={{ color: "white", fontSize: "20px" }}>
      //               Avail all our services for free to manage your business
      //               smoother than ever.
      //             </p>
      //             {/* <Link className="ltn__service-btn" to="/service-details">
      //               Find A Home <i className="flaticon-right-arrow" />
      //             </Link> */}
      //           </div>
      //         </div>
      //       </div>
      //       <div className="col-lg-4 col-sm-6 col-12">
      //         <div className="ltn__feature-item ltn__feature-item-6 text-center bg-grey  box-shadow-1">
      //           <div className="ltn__feature-icon">
      //             <img src={icon3} alt="#" />
      //           </div>
      //           <div className="ltn__feature-info">
      //             <h3>
      //               <Link
      //                 className="freature-link-hover"
      //                 style={{ color: "#27A3A3" }}
      //                 to="/service-details"
      //               >
      //                 24/7 Service
      //               </Link>
      //             </h3>
      //             <p style={{ color: "#27A3A3", fontSize: "20px" }}>
      //               Adding to your convenience by helping you manage your
      //               business online at all times.
      //             </p>
      //             {/* <Link className="ltn__service-btn" to="/service-details">
      //               Find A Home <i className="flaticon-right-arrow" />
      //             </Link> */}
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default FeaturesV1;

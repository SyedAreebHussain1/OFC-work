import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import img1 from "../images/inventory.jpg";
import img2 from "../images/staff.jpg";
import img3 from "../images/commision.jpg";
import img4 from "../images/calculator.jpg";
import '../V2/styleareeb.css'
import iconsss from "../images/iconn.png"



import img5 from "../images/singlephone.png"
class ApartmentV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    let customClass = this.props.customClass ? this.props.customClass : "";

    return (

      <div className="container">
        <div className="mainContainer_areeb">
          {/*  */}
          <div className="managementDiv">
            <div className="managementLogoP"><img className="iconpng" src={iconsss} alt="logo" /><p className="pTag"> <span> Inventory <br/> Management</span></p></div>
            <div className="managementLogoP"><img className="iconpng" src={iconsss} alt="logo" /><p className="pTag"><span>Staff <br/> Management</span></p></div>
            <div className="managementLogoP"><img className="iconpng" src={iconsss} alt="logo" /><p className="pTag"><span>Commision<br/> Management</span></p></div>
            <div className="managementLogoP"><img className="iconpng" src={iconsss} alt="logo" /><p className="pTag"><span>Report<br/> Management</span></p></div>
            <div className="managementLogoP"><img className="iconpng" src={iconsss} alt="logo" /><p className="pTag"><span>Payment Plan<br/> Calculator</span></p></div>
            <div className="managementLogoP"><img className="iconpng" src={iconsss} alt="logo" /><p className="pTag"><span>Sales Target</span></p></div>
          </div>
          <div className="imgDiv">
            <img className="imgIphone" src={img5} alt="img" />
          </div>
          <div style={{ backgroundColor: '', width: '100%' }}>
            {/* <img style={{ width: '70%', paddingLeft: '100px' }} src={img5} alt="img" /> */}
            <div
              className="ltn__feature-item ltn__feature-item-8 bg-white  box-shadow-1 active"
            >
              <div className="ltn__feature-info">
                <h3>
                  <div
                    className="freature-link-hover"
                    style={{ color: "black" }}
                    to="/service-details"
                  >
                    <h1>Benefits of <br /> wellbeing and<br /> positive employee</h1>
                  </div>
                </h3>
                <p style={{ color: "grey", fontSize: "15px" }}>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum pariatur.
                </p>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>


      // <div className="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1">
      //   <div className="ltn__slider-11-inner">
      //     <div className="ltn__slider-11-active">
      //       {/* slide-item */}
      //       <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
      //         <div className="ltn__slide-item-inner">
      //           <div className="margin-top-fix container">
      //             <div className="row">
      //               <div className="col-lg-12 align-self-center">
      //                 <div className="slide-item-info">
      //                   <div className="slide-item-info-inner ltn__slide-animation">
      //                     <div className="slide-video mb-50 d-none">
      //                       <a
      //                         className="ltn__video-icon-2 ltn__video-icon-2-border"
      //                         href="https://www.youtube.com/embed/tlThdr3O5Qo"
      //                         data-rel="lightcase:myCollection"
      //                       >
      //                         <i className="fa fa-play" />
      //                       </a>
      //                     </div>
      //                     <h6 className="slide-sub-title white-color--- animated">
      //                       <span>
      //                         <i
      //                           className="fas fa-home"
      //                           style={{ color: "#27A3A3" }}
      //                         />
      //                       </span>
      //                       Property wallet
      //                     </h6>
      //                     <h1 className="slide-title animated slide-title-show">
      //                       Manage Your
      //                       <br />
      //                       <span style={{ color: "#27A3A3" }}>
      //                         Real Estate Business
      //                       </span>
      //                       <br /> Anytime, Anywhere
      //                     </h1>
      //                     <h1
      //                       style={{ display: "none" }}
      //                       className="animated slide-title-hide"
      //                     >
      //                       Manage Your
      //                       <br />
      //                       <span style={{ color: "#27A3A3" }}>
      //                         Real Estate Business
      //                       </span>
      //                       <br /> Anytime, Anywhere
      //                     </h1>

      //                     <div className="slide-brief animated">
      //                       <p>
      //                         Lorem ipsum dolor sit amet, consectetur
      //                         adipisicing elit, sed do eiusmod tempor incididunt
      //                         ut labore.
      //                       </p>
      //                     </div>

      //                     <div className="btn-wrapper animated">
      //                       <Link to="#" className="theme-btn-Home btn">
      //                         Watch tutorial
      //                       </Link>
      //                       <a
      //                         className="ltn__video-play-btn-home btn-effect-1"
      //                         href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0"
      //                         data-rel="lightcase"
      //                         style={{ marginTop: "5%" }}
      //                       >
      //                         <i
      //                           className="icon-play icon-home-play"
      //                         // style={{ color: "#27A3A3" }}
      //                         />
      //                       </a>
      //                     </div>
      //                   </div>
      //                 </div>
      //                 <div className="slide-item-img">
      //                   <img src={bannerImg} alt="#" />
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>

      // //
      // <div
      //   className={"ltn__apartments-plan-area pt-115--- pb-70 " + CustomClass}
      // >
      //   <div className="container">
      //     <div className="mainContanier_areeb">
      //       <div>
      //         <a className="active show" data-bs-toggle="tab" href="#liton_tab_3_2">Inventory Management</a>
      //         <a data-bs-toggle="tab" href="#liton_tab_3_1">Staff Management</a>
      //         <a data-bs-toggle="tab" href="#liton_tab_3_3">Commission Management</a>
      //       </div>
      //       <div className="img5mobile" >
      //         <img src={img5} alt="img" />
      //       </div>
      //       <div
      //         style={{ marginTop: "4%" }}
      //         className="col-lg-6 margin-top-fix-0"
      //       >
      //         <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
      //           <h2 style={{ fontSize: "22px" }}>
      //             Get the best digital tools for property businesses
      //             all-in-one app!
      //           </h2>
      //           <p>
      //             This includes Payment Plan Creator, ROI Calculator,
      //             Commission Calculator, Property Document Creator,
      //             Rental Affordability Calculator.
      //           </p>
      //           <div
      //             style={{
      //               display: "flex",
      //               justifyContent: "center",
      //             }}
      //             className="btn-wrapper animated"
      //           >
      //             <Link
      //               to="/about"
      //               className="theme-btn-1 btn btn-effect-1"
      //             >
      //               Learn more
      //             </Link>
      //           </div>
      //         </div>
      //       </div>
      //       <div>
      //       </div>
      //     </div>
      //   </div>
      // </div>

      // //
      // //
      //<div
      //   className={"ltn__apartments-plan-area pt-115--- pb-70 " + CustomClass}
      // >
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-lg-12">
      //         {/* <div className="section-title-area ltn__section-title-2--- text-center">
      //           <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
      //             Apartment Sketch
      //           </h6>
      //           <h1 className="section-title">Apartments Plan</h1>
      //         </div> */}
      //         <div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center">
      //           <div className="nav">
      //             <a
      //               className="active show"
      //               data-bs-toggle="tab"
      //               href="#liton_tab_3_2"
      //             >
      //               Inventory Management
      //             </a>
      //             <a data-bs-toggle="tab" href="#liton_tab_3_1">
      //               Staff Management
      //             </a>

      //             <a data-bs-toggle="tab" href="#liton_tab_3_3">
      //               Commission Management
      //             </a>
      //             <a data-bs-toggle="tab" href="#liton_tab_3_4">
      //               Rental Management
      //             </a>
      //             <a data-bs-toggle="tab" href="#liton_tab_3_5">
      //               Digital Tools
      //             </a>
      //           </div>
      //         </div>
      //         <div className="tab-content">
      //           <div className="tab-pane fade" id="liton_tab_3_1">
      //             <div className="ltn__apartments-tab-content-inner">
      //               <div className="row">
      //                 <div className="col-lg-6">
      //                   <div className="apartments-plan-img">
      //                     <img
      //                       src={
      //                         img2
      //                         // "https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/slider/62.jpg"
      //                       }
      //                       alt="#"
      //                     />
      //                   </div>
      //                 </div>
      //                 <div
      //                   style={{ marginTop: "5%" }}
      //                   className="margin-top-fix-0 col-lg-6"
      //                 >
      //                   <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
      //                     <h2>Oversee your team of agents on-the go!</h2>
      //                     <p>
      //                       Manage, coordinate and communicate with your
      //                       subordinates easily with the Property Wallet app.
      //                     </p>
      //                     <div
      //                       style={{
      //                         display: "flex",
      //                         justifyContent: "center",
      //                       }}
      //                       className="btn-wrapper animated"
      //                     >
      //                       <Link
      //                         to="/about"
      //                         className="theme-btn-1 btn btn-effect-1"
      //                       >
      //                         Learn more
      //                       </Link>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //           <div className="tab-pane fade active show" id="liton_tab_3_2">
      //             <div className="ltn__product-tab-content-inner">
      //               <div className="row">
      //                 <div className="col-lg-6">
      //                   <div className="apartments-plan-img">
      //                     <img
      //                       src={
      //                         img1
      //                         // "https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/slider/62.jpg"
      //                       }
      //                       alt="#"
      //                     />
      //                   </div>
      //                 </div>
      //                 <div
      //                   style={{ marginTop: "7%" }}
      //                   className="margin-top-fix-0 col-lg-6"
      //                 >
      //                   <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
      //                     <h2>Leave no stone unturned!</h2>
      //                     <p>
      //                       Stay up-to-date with your available inventory to
      //                       manage your operations in real-time smoother than
      //                       ever.
      //                     </p>
      //                     <div
      //                       style={{
      //                         display: "flex",
      //                         justifyContent: "center",
      //                       }}
      //                       className="btn-wrapper animated"
      //                     >
      //                       <Link
      //                         to="/about"
      //                         className="theme-btn-1 btn btn-effect-1"
      //                       >
      //                         Learn more
      //                       </Link>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //           <div className="tab-pane fade" id="liton_tab_3_3">
      //             <div className="ltn__product-tab-content-inner">
      //               <div className="row">
      //                 <div className="col-lg-6">
      //                   <div className="apartments-plan-img">
      //                     <img
      //                       src={
      //                         img3
      //                         // "https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/slider/62.jpg"
      //                       }
      //                       alt="#"
      //                     />
      //                   </div>
      //                 </div>
      //                 <div
      //                   style={{ marginTop: "5%" }}
      //                   className="col-lg-6 margin-top-fix-0"
      //                 >
      //                   <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
      //                     <h2>Quickest way to calculate commissions!</h2>
      //                     <p>
      //                       Calculate and record all commissions on a property
      //                       that you and your agents deserve as they sell.
      //                     </p>
      //                     <div
      //                       style={{
      //                         display: "flex",
      //                         justifyContent: "center",
      //                       }}
      //                       className="btn-wrapper animated"
      //                     >
      //                       <Link
      //                         to="/about"
      //                         className="theme-btn-1 btn btn-effect-1"
      //                       >
      //                         Learn more
      //                       </Link>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //           <div className="tab-pane fade" id="liton_tab_3_4">
      //             <div className="ltn__product-tab-content-inner">
      //               <div className="row">
      //                 <div className="col-lg-6">
      //                   <div className="apartments-plan-img">
      //                     <img
      //                       src={
      //                         img4
      //                         // "https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/slider/62.jpg"
      //                       }
      //                       alt="#"
      //                     />
      //                   </div>
      //                 </div>
      //                 <div
      //                   style={{ marginTop: "5%" }}
      //                   className="col-lg-6 margin-top-fix-0"
      //                 >
      //                   <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
      //                     <h2>
      //                       Mediating tenant-owner relationships in all ways!
      //                     </h2>
      //                     <p>
      //                       Digitalizing ledger, agreements and helping you keep
      //                       track of all your client’s cash flows.
      //                     </p>
      //                     <div
      //                       style={{
      //                         display: "flex",
      //                         justifyContent: "center",
      //                       }}
      //                       className="btn-wrapper animated"
      //                     >
      //                       <Link
      //                         to="/about"
      //                         className="theme-btn-1 btn btn-effect-1"
      //                       >
      //                         Learn more
      //                       </Link>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //           <div className="tab-pane fade" id="liton_tab_3_5">
      //             <div className="ltn__product-tab-content-inner">
      //               <div className="row">
      //                 <div className="col-lg-6">
      //                   <div className="apartments-plan-img">
      //                     <img
      //                       src={
      //                         img1
      //                         // "https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/slider/62.jpg"
      //                       }
      //                       alt="#"
      //                     />
      //                   </div>
      //                 </div>
      //                 <div
      //                   style={{ marginTop: "4%" }}
      //                   className="col-lg-6 margin-top-fix-0"
      //                 >
      //                   <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
      //                     <h2 style={{ fontSize: "22px" }}>
      //                       Get the best digital tools for property businesses
      //                       all-in-one app!
      //                     </h2>
      //                     <p>
      //                       This includes Payment Plan Creator, ROI Calculator,
      //                       Commission Calculator, Property Document Creator,
      //                       Rental Affordability Calculator.
      //                     </p>
      //                     <div
      //                       style={{
      //                         display: "flex",
      //                         justifyContent: "center",
      //                       }}
      //                       className="btn-wrapper animated"
      //                     >
      //                       <Link
      //                         to="/about"
      //                         className="theme-btn-1 btn btn-effect-1"
      //                       >
      //                         Learn more
      //                       </Link>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //        
      //  <div className="tab-pane fade" id="liton_tab_3_5">
      //   <div className="ltn__product-tab-content-inner">
      //     <div className="row">
      //       <div className="col-lg-6">
      //         <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
      //           <h2>Double Height</h2>
      //           <p>
      //             Enimad minim veniam quis nostrud exercitation
      //             ullamco laboris. Lorem ipsum dolor sit amet cons
      //             aetetur adipisicing elit sedo eiusmod
      //             tempor.Incididunt labore et dolore magna aliqua. sed
      //             ayd minim veniam.
      //           </p>
      //           <div className="apartments-info-list apartments-info-list-color mt-40">
      //             <ul>
      //               <li>
      //                 <label>Total Area</label>{" "}
      //                 <span>2800 Sq. Ft</span>
      //               </li>
      //               <li>
      //                 <label>Bedroom</label> <span>150 Sq. Ft</span>
      //               </li>
      //               <li>
      //                 <label>Bathroom</label> <span>45 Sq. Ft</span>
      //               </li>
      //               <li>
      //                 <label>Belcony/Pets</label> <span>Allowed</span>
      //               </li>
      //               <li>
      //                 <label>Lounge</label> <span>650 Sq. Ft</span>
      //               </li>
      //             </ul>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="col-lg-6">
      //         <div className="apartments-plan-img">
      //           <img
      //             src={publicUrl + "assets/img/others/10.png"}
      //             alt="#"
      //           />
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div> 
      // 
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>

    );
  }
}

export default ApartmentV2;

import React from "react";
import Navbar from "./global-components/navbar-v2";
import PageHeader from "./global-components/page-header";
import AboutV5 from "./section-components/about-v5";
import ServiceV1 from "./section-components/service-v1";
import BlogSlider from "./blog-components/blog-slider-v1";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import MoreServices from "./shop-components/more-services";

const Service_V1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader
        headertitle="Services"
        content="Property Wallet is pleased to offer you a platform which will contribute to your property business success through fostering collaboration between agents."
        subheader="Services"
      />
      <MoreServices />
      {/* <AboutV5 /> */}
      {/* <ServiceV1 /> */}
      {/* <BlogSlider sectionClass="pt-120" /> */}
      {/* <CallToActionV1 /> */}
      <Footer />
    </div>
  );
};

export default Service_V1;

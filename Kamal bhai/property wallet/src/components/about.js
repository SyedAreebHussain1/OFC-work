import React from "react";
import Navbar from "./global-components/navbar-v2";
import PageHeader from "./global-components/page-header";
import AboutV4 from "./section-components/about-v4";
import Features from "./section-components/features-v1";
import Team from "./section-components/team-v1";
import Testimonial from "./section-components/testimonial-v1";
import BlogSlider from "./blog-components/blog-slider-v1";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import { OurEthics } from "./section-components/our-ethics";

const About_v1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader
        headertitle="About Us"
        content="Our mission is to provide complete convenience to all estate dealers through a safe, fast and reliable service that you can access anywhere, anytime,"
      />
      <AboutV4 />
      <OurEthics />
      {/* <Features customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---" /> */}
      {/* <Team /> */}
      {/* <Testimonial /> */}
      {/* <BlogSlider /> */}
      {/* <CallToActionV1 /> */}
      <Footer />
    </div>
  );
};

export default About_v1;

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "bootstrap/dist/css/bootstrap.css";
import "./i18nextConf";
import "react-modal-video/scss/modal-video.scss";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
// import './assets/fonts/Jameel.Noori.Nastaleeq.ttf';
import "./assets/styles/new.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import { VFXProvider } from "react-vfx";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Landing.js";
import { Suspense } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import SimpleReactLightbox from "simple-react-lightbox";
import { Chat } from "components/chat/chat";
import { CustomChat } from "components/chat/CustomChat";
import { ChatButton } from "components/chat/helpers/floaingButton";
import Faqs from "views/FAQs";
import { About } from "views/About/about";
import { AboutCompany } from "views/About Company/about_company";
import "react-component-countdown-timer/lib/styles.css";
import { useTranslation } from "react-i18next";
import i18n from "./i18nextConf";
import UrduLanding from "views/UrduViews/Landing";
import { AboutCompanyUrdu } from "views/UrduViews/About Company/about_company";
import { Privacy } from "views/Privacy/privacy";
import { Facility } from "views/Facility/facility";
import { Work } from "views/HomePageSection/Work";
import { UrduFacility } from "views/UrduViews/UrduFacility/facility";
import { Contact } from "views/Contact/contact";
import { FloatingSocial } from "components/FloatingSocial/floating_social";
import Blogs from "views/Blogs/Blogs";
import BlogDetails from "views/Blogs_Details/blog_details";
import StateContextProvider from "context/state_context";
// document.body.dir = i18n.dir();
ReactDOM.render(
  <StateContextProvider>
    <BrowserRouter>
      <ParallaxProvider>
        <SimpleReactLightbox>
          <Suspense fallback="">
            <Chat />
            <FloatingSocial />
            {/* <CustomChat /> */}
            {/* <ChatButton/> */}
            <Switch>
              {/* add routes with layouts */}
              {/* <Route path="/admin" component={Admin} />
              <Route path="/auth" component={Auth} /> */}
              {/* add routes without layouts */}
              {/* <Route path="/landing" exact component={Landing} /> */}
              {/* <Route path="/profile" exact component={Profile} /> */}

              {/* <Route path="/faqs" exact component={Faqs} /> */}

              <Route path="/ur" exact component={UrduLanding} />

              <Route path="/aboutus" exact component={About} />
              <Route path="/company" exact component={AboutCompany} />

              <Route path="/facility" exact component={Facility} />

              <Route path="/urfacility" exact component={UrduFacility} />

              <Route path="/blogs" exact component={Blogs} />
              <Route path="/blogs/:slug" exact component={BlogDetails} />

              <Route path="/contact" exact component={Contact} />
              <Route path="/urduabout" exact component={About} />
              <Route path="/urducompany" exact component={AboutCompanyUrdu} />
              <Route path="/privacy" exact component={Privacy} />
              <Route path="/" exact component={Index} />

              {/* add redirect for first page */}
              <Redirect from="*" to="/" />
            </Switch>
          </Suspense>
        </SimpleReactLightbox>
      </ParallaxProvider>
    </BrowserRouter>
  </StateContextProvider>,
  document.getElementById("root")
);

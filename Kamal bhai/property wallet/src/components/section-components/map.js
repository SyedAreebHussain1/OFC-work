import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class Map extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div
        style={{ marginTop: "5%", marginLeft: "5%", marginRight: "5%" }}
        className="google-map mb-100"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.649514918248!2d67.08741851398605!3d24.875817350770454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f3589b6779b%3A0xed998af55f578813!2sSquare%20Foot%20Exchange!5e0!3m2!1sen!2s!4v1663762770636!5m2!1sen!2s"
          width="100%"
          height="100%"
          frameBorder={0}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    );
  }
}

export default Map;

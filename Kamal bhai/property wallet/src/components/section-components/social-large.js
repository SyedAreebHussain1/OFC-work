import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class SocialLarge extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__social-media">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/propertywalletpk"
              title="Facebook"
            >
              <i style={{ fontSize: "20px" }} className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/propertywalletpk"
              title="Linkedin"
            >
              <i style={{ fontSize: "20px" }} className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/propertywalletpk"
              title="Instagram"
            >
              <i style={{ fontSize: "20px" }} className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="#" title="Youtube">
              <i style={{ fontSize: "20px" }} className="fab fa-youtube" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SocialLarge;

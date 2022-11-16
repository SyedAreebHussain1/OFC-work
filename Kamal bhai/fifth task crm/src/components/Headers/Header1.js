/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {Container, Row} from "reactstrap";
import picture from '../../assets/img/bg3.png'

const Header = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${picture})` }} className="header  pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
          {/* <Row>
              <img
                alt="..."
                src={
                  require("../../assets/img/square-pro-1.png")
                    .default

                }
                style={{ marginTop: '-70px' }}
                width='110'
                height='110'
                className="rounded-circle"
              />
            </Row> */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;

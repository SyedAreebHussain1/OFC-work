import React, { useRef } from "react";
import { render } from "react-dom";
import {
  CardBody,
  Button,
  Container,
  CardHeader,
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Table,
  Label,
  Input,
  FormGroup,
} from "reactstrap";
import "../../../assets/css/style.css";
import axios from "axios";
import { BASEURL } from "config/api/URL";
import Positioning from "./Positioning";
import Verify from "./Verify";

// class ComponentToPrint extends React.Component {
//   constructor(props) {

//     super(props);
//     this.state = {
//       filPath: null

//     }
//   }

//   componentDidMount() {

//   }

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div className="d-none d-print-block">
        <Card style={{ margin: "10px" }} className="shadow">
          {/* <CardHeader className="border-0">

          </CardHeader> */}

          <CardHeader className="border-0">
            <h3 className="mb-0"> Personal Information </h3>
          </CardHeader>
          <CardBody>
            <form>
              <div className="pl-lg-4">
                <Row>
                  <Col className="centerr">
                    <img
                      src={this.props.img1}
                      alt="Logo"
                      height={192}
                      width={192}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Name:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input type="textbox" value={this.props.name}></input>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Father Name/ Husband Name:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input type="textbox" value={this.props.father}></input>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Email:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input type="textbox" value={this.props.email}></input>
                      </div>
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>CNIC:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input type="textbox" value={this.props.cnic}></input>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Passport No:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input
                          type="textbox"
                          value={this.props.passport}
                        ></input>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Mobile:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input type="textbox" value={this.props.mobile}></input>
                      </div>
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Address Residence:</label>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input
                          type="textbox"
                          style={{ width: "240px", textAlign: "left" }}
                          value={this.props.addressR}
                        ></input>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Address Office:</label>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input
                          style={{ width: "240px", textAlign: "left" }}
                          type="textbox"
                          value={this.props.addressO}
                        ></input>
                      </div>
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Profession:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input
                          type="textbox"
                          value={this.props.profession}
                        ></input>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Organization:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input
                          type="textbox"
                          value={this.props.organization}
                        ></input>
                      </div>
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Tel Office:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input type="textbox" value={this.props.tellO}></input>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Tel Residence:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input type="textbox" value={this.props.tellR}></input>
                      </div>
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Date of birth:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input type="textbox" value={this.props.date}></input>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Nationality:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input
                          type="textbox"
                          value={this.props.nationality}
                        ></input>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </form>
          </CardBody>
        </Card>

        <br />
        <br />

        {/* <Card style={{ margin: '10px' }} className="shadow"> */}
        <Positioning
          ShowAllPositions={this.props.ShowAllPositions}
          AllPositions={this.props.AllPositions}
          ShowPlotPositions={this.props.ShowPlotPositions}
          Position={this.props.Position}
          Plotid={this.Plotid}
        />

        {/* <CardHeader className="border-0">
            <h3 className="mb-0"> Positioning </h3>
            <CardBody>
              <form>
                <div className="pl-lg-4">
                  <Row>
                    <Col>
                      <label
                        className="form-control-label"
                        for="input-username"
                      >
                        Standard
                      </label>



                    </Col>
                    <Col >
                      <input
                        // disabled={!position.normal}
                        checked={this.props.normal}
                        type="checkbox"
                        name="period"

                        // hidden={hide}
                        id='ck'
                      // onChange={handle}

                      />
                    </Col>
                    <Col >
                      <label
                        className="form-control-label"
                        for="input-username"
                      >
                        Special Location (at 10% Premium)
                      </label>



                    </Col>
                    <Col >
                      <input
                        //disabled={true}
                        type="checkbox"
                        name="period"
                        defaultValue
                        // hidden={hide}
                        id='ck'
                      // onChange={handle}

                      />
                    </Col>
                    <Col >
                      <label
                        className="form-control-label"
                        for="input-username"
                      >
                        Park/Green area facing at 10% Premium
                      </label>



                    </Col>
                    <Col>
                      <input

                        type="checkbox"
                        name="period"
                        //  disabled={!position.facing}
                        checked={this.props.facing}

                        id='ck'
                      />
                    </Col>



                  </Row>
                  <br />
                  <Row>
                    <Col >
                      <label
                        className="form-control-label"
                        for="input-username"
                      >
                        Boulevard Facing at 10% premium
                      </label>



                    </Col>
                    <Col >
                      <input
                        //   disabled={true}
                        type="checkbox"
                        name="period"
                        defaultValue
                        // hidden={hide}
                        id='ck'
                      // onChange={handle}

                      />
                    </Col>
                    <Col>
                      <label
                        className="form-control-label"
                        for="input-username"
                      >
                        Corner at 10% premium
                      </label>



                    </Col>
                    <Col >
                      <input

                        type="checkbox"
                        name="period"
                        //   disabled={!position.corner}
                        checked={this.props.corner}
                        id='ck'

                      />
                      <label
                        className="form-control-label"
                        for="input-username"
                      >
                        &nbsp; &nbsp; 10%
                      </label>
                    </Col>
                    <Col >
                      <input
                        //    disabled={true}
                        type="checkbox"
                        name="period"
                        // defaultValue

                        id='ck'


                      />
                      <label
                        className="form-control-label"
                        for="input-username"
                      >
                        &nbsp; &nbsp; 20%
                      </label>
                    </Col>
                    <Col>
                      <input
                        //   disabled={true}
                        type="checkbox"
                        name="period"
                        // defaultValue

                        id='ck'

                      />
                      <label
                        className="form-control-label"
                        for="input-username"
                      >
                        &nbsp; &nbsp; 30%
                      </label>
                    </Col>
                    <Col>
                      <input
                        //    disabled={true}

                        type="checkbox"
                        name="period"
                        //   defaultValue
                        id='ck'
                      />
                      <label
                        className="form-control-label"
                        for="input-username"
                      >
                        &nbsp; &nbsp; 40%
                      </label>
                    </Col>

                  </Row>
                  <br />
                  <Row>
                    <Col >
                      <label
                        className="form-control-label"
                        for="input-username"
                      >
                        West Open
                      </label>



                    </Col>
                    <Col >
                      <input
                        //    disabled={true}

                        type="checkbox"
                        name="period"
                        //  defaultValue

                        id='ck'

                      />
                    </Col>
                    <Col >
                      <label
                        className="form-control-label"
                        for="input-username"
                      >
                        Multiple Location Facing
                      </label>



                    </Col>
                    <Col >

                      <input
                        type="text"
                        id="input-username"
                        className="form-control"
                        placeholder=""
                      //   disabled={true}

                      ></input>
                    </Col>

                  </Row>

                  <br /><br />
                  <Row>
                    <Col>
                      <label
                        style={{ fontWeight: 'bold' }}
                        className="form-control-label"
                        for="input-username"
                      >
                        Plot (Residential)
                      </label>



                    </Col>
                    <Col >
                      <input

                        type="checkbox"
                        name="period"
                        checked={this.props.box1}


                      />
                    </Col>
                    <Col>
                      <label
                        style={{ fontWeight: 'bold' }}
                        className="form-control-label"
                        for="input-username"
                      >
                        Commercial Plot

                      </label>



                    </Col>
                    <Col >
                      <input

                        type="checkbox"
                        name="period"


                        id='ck'

                        checked={this.props.box2}
                      />
                    </Col>
                    <Col>
                      <label
                        style={{ fontWeight: 'bold' }}
                        className="form-control-label"
                        for="input-username"
                      >
                        Any other Category
                      </label>

                    </Col>
                    <Col>
                      <input

                        type="checkbox"
                        name="period"


                        id='ck'

                      />
                    </Col>

                  </Row>
                  <br />
                  <br />
                  <Row>
                    <Col>
                      <label
                        className="form-control-label"
                        for="input-username"

                      >
                        120 Sq. yards
                      </label>



                    </Col>
                    <Col >
                      <input

                        checked={this.props.cat2}
                        type="checkbox"
                        name="period"
                        defaultValue

                        id='ck'


                      />
                    </Col>
                    <Col >
                      <label
                        className="form-control-label"
                        for="input-username"
                      >
                        240 Sq. yards
                      </label>

                    </Col>
                    <Col>
                      <input
                        checked={this.props.cat1}
                        type="checkbox"
                        name="period"
                        defaultValue
                        id='ck'

                      />
                    </Col>
                    <Col >
                      <label
                        className="form-control-label"
                        for="input-username"
                      >
                        500 Sq. yards
                      </label>

                    </Col>
                    <Col>
                      <input
                        checked={this.props.cat3}
                        type="checkbox"
                        name="period"
                        defaultValue
                        id='ck'
                      />
                    </Col>
                    <Col >
                      <label
                        className="form-control-label"
                        for="input-username"
                      >
                        1000 Sq. yards
                      </label>
                    </Col>

                    <Col>
                      <input
                        checked={this.props.cat4}
                        type="checkbox"
                        name="period"
                        defaultValue

                        id='ck'
                      />
                    </Col>
                  </Row>
                </div>
              </form>
            </CardBody>
          </CardHeader> */}
        {/* </Card> */}
        {/* <br /> */}

        <br />
        <br />
        <Card style={{ margin: "10px" }} className="shadow">
          <CardHeader className="border-0">
            <h3 className="mb-0"> Nominee Information </h3>
          </CardHeader>
          <CardBody>
            <form>
              <div className="pl-lg-4">
                <Row>
                  <Col className="centerr">
                    <img
                      src={this.props.img2}
                      alt="Logo"
                      height={192}
                      width={192}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Name:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input type="textbox" value={this.props.gname}></input>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Relation with Applicant:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input
                          type="textbox"
                          value={this.props.nrelation}
                        ></input>
                      </div>
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>CNIC:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input type="textbox" value={this.props.ncnic}></input>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Passport No:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input
                          type="textbox"
                          value={this.props.npassport}
                        ></input>
                      </div>
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Telephone:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input type="textbox" value={this.props.ntel}></input>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Mobile:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input type="textbox" value={this.props.mobile}></input>
                      </div>
                    </div>
                  </Col>
                </Row>
                <br />
              </div>
            </form>
          </CardBody>
        </Card>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Card style={{ margin: "10px" }} className="shadow">
          <CardHeader className="border-0">
            <h3 className="mb-0">Plots Information </h3>
          </CardHeader>
          <CardBody>
            <form>
              <div className="pl-lg-4">
                <Row>
                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Project Name:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input type="textbox" value={this.props.pname}></input>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Sector Name:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input type="textbox" value={this.props.sname}></input>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Street Name:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input type="textbox" value={this.props.stname}></input>
                      </div>
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Plot No:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input type="textbox" value={this.props.pno}></input>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Plot Type</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input type="textbox" value={this.props.ptype}></input>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Category Name:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input type="textbox" value={this.props.cname}></input>
                      </div>
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Direction Name:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input type="textbox" value={this.props.pdis}></input>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>House Status</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input
                          type="textbox"
                          value={this.props.pstatus}
                        ></input>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <label>Position Name:</label>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="carddd">
                      <div className="containerrr">
                        <input
                          type="textbox"
                          value={this.props.posname}
                        ></input>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </form>
          </CardBody>
        </Card>
        {/* <Verify cnic={this.props.cnic} getData={this.props.getData} /> */}
        <Card style={{ margin: "10px" }} className="shadow">
          <CardHeader className="border-0">
            <br />
            <label>
              {" "}
              I hereby declare that the Information provided by me in this form
              is acurate to he best of my knowledege and that i have read and
              understood the terms of allotment and schedules of price and
              payment and accept the same unconditionally. Furthermore, I
              declare that i shall abide by the rules and regulations of the
              company, which are intimated to me by the management from time to
              time.
              <br />
              Date: ________
            </label>
            <CardBody>
              <form>
                <div className="pl-lg-4">
                  <Row>
                    <Col
                      lg="3"
                      md="3"
                      sm="3"
                      style={{ alignItems: "center" }}
                    ></Col>
                    <Col lg="3" md="3" sm="3" style={{ alignItems: "center" }}>
                      <div className="cardd">
                        <img
                          src={
                            this.props.signaturePath !== "" &&
                            this.props.signaturePath !== undefined &&
                            this.props.signaturePath !== null
                              ? this.props.signaturePath
                              : ""
                          }
                          style={{ width: "20%", marginTop: "3px" }}
                          alt="img"
                        />
                      </div>
                      <p>___________________________</p>
                      <h4> Applicant Signature</h4>
                    </Col>
                    <Col lg="3" md="3" sm="3" style={{ alignItems: "center" }}>
                      <div className="cardd">
                        <img
                          src={
                            this.props.figPath !== "" &&
                            this.props.figPath !== undefined &&
                            this.props.figPath !== null
                              ? this.props.figPath
                              : ""
                          }
                          style={{ width: "20%", marginTop: "3px" }}
                          alt="img"
                        />
                      </div>
                      <p>___________________________</p>
                      <h4> Applicant Thumb print</h4>
                    </Col>
                    <Col
                      lg="3"
                      md="3"
                      sm="3"
                      style={{ alignItems: "center" }}
                    ></Col>
                  </Row>
                </div>
              </form>
            </CardBody>
          </CardHeader>
        </Card>

        <Card style={{ margin: "10px" }} className="shadow">
          <CardHeader className="border-0">
            <h3 className="mb-0">Verification of Information </h3>
            <br />
            <label>
              {" "}
              I have read and understand all the terms and condtions and i
              hereby agree to abide these unconditionally as well as any future
              rules and regulations from the company. <br />
              <br />
              <br />
              Signature of Applicant ________________ &nbsp; Date ____________{" "}
              <br />
              <br />
              Note: The Management of Palm Dream/KGCP, reservses the right to
              change or ammend the application form, may alter and append the
              construction by-laws, terms and conditions and rules and
              regulations if required as its discretion with or without
              assigning any reason or noice thereof and allotee shall accept the
              decision in this regard.
            </label>
          </CardHeader>
        </Card>
      </div>
    );
  }
}

export default ComponentToPrint;

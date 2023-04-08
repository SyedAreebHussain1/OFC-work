import axios from "axios";
import { BASEURL } from "config/api/URL";
import React, { useEffect, useState } from "react";
import {
  Badge,
  Card,
  CardHeader,
  Table,
  Container,
  CardBody,
  Row,
  Col,
  Input,
  Button,
} from "reactstrap";

function Verify(props) {
  const [filepath, setFilePath] = useState({
    SignaturePath: "",
    FingerPrintPath: "",
  });
  const getverification = () => {
    let path = "GetFingerPrint";
    let token = localStorage.getItem("auth");
    let body = {
      cnic: props.cnic,
    };

    axios
      .post(`${BASEURL}${path}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          setFilePath({
            ...filepath,
            SignaturePath: res.data.response[0].SignaturePath,
            FingerPrintPath: res.data.response[0].FingerPrintPath,
          });
        }
      })
      .catch((error) => console.log(error));
    // if (props.cnic !== undefined && props.cnic !== null && props.cnic !== "") {
    //   let path = "GetFingerPrint"
    //   let token = localStorage.getItem("auth");
    //   let body = {
    //     cnic: props.cnic,
    //   }

    // }
  };
  const sendPath = () => {
    if (filepath !== null) {
      props.getData(filepath.SignaturePath, filepath.FingerPrintPath);
    }
  };
  useEffect(() => {
    sendPath();
  }, [filepath]);
  return (
    <div>
      <Card style={{ margin: "10px" }} className="shadow">
        <CardHeader className="border-0">
          <Row>
            <Col lg="10" md="10" sm="10">
              <h3 className="mb-0"> Declaration </h3>
            </Col>
            <Col lg="2" md="2" sm="2">
              <Button color="success" onClick={getverification}>
                LOAD IMAGES
              </Button>
            </Col>
          </Row>
          {/* <h3 className="mb-0"> Declaration </h3> */}
          <br />
          <label>
            {" "}
            I hereby declare that the Information provided by me in this form is
            acurate to he best of my knowledege and that i have read and
            understood the terms of allotment and schedules of price and payment
            and accept the same unconditionally. Furthermore, I declare that i
            shall abide by the rules and regulations of the company, which are
            intimated to me by the management from time to time.
            <br />
            Date: ________
          </label>
          <CardBody>
            <form>
              <div className="pl-lg-4">
                <Row style={{ alignContent: "center" }}>
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
                          filepath.SignaturePath !== "" &&
                          filepath.SignaturePath !== undefined &&
                          filepath.SignaturePath !== null
                            ? filepath.SignaturePath
                            : ""
                        }
                        style={{ width: "80%", marginTop: "3px" }}
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
                          filepath.FingerPrintPath !== "" &&
                          filepath.FingerPrintPath !== undefined &&
                          filepath.FingerPrintPath !== null
                            ? filepath.FingerPrintPath
                            : ""
                        }
                        style={{ width: "54%", marginTop: "3px" }}
                        alt="img"
                      />
                      {/* <img src="https://d2znhq0qo3pk40.cloudfront.net/Biometric/789798788975FingerPrint.jpg" style={{ width: "54%", marginTop: "3px" }} alt="img" /> */}
                    </div>
                    <p>___________________________</p>
                    <h4> Applicant Thumb Impression</h4>
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
            I have read and understand all the terms and condtions and i hereby
            agree to abide these unconditionally as well as any future rules and
            regulations from the company. <br />
            <br />
            <br />
            Signature of Applicant ________________ &nbsp; Date ____________{" "}
            <br />
            <br />
            Note: The Management of Palm Dream/KGCP, reservses the right to
            change or ammend the application form, may alter and append the
            construction by-laws, terms and conditions and rules and regulations
            if required as its discretion with or without assigning any reason
            or noice thereof and allotee shall accept the decision in this
            regard.
          </label>
        </CardHeader>
      </Card>
    </div>
  );
}

export default Verify;

import React, { useState, useEffect } from "react";
import background from "assets/img/1.3.jpg";
import {
  Col,
  Nav,
  Row,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import logo from "assets/img/khlogo.png";
import { render } from "react-dom";
import { useForm } from "react-cool-form";
import validate from 'Utility/ValidationWrapper';
import axios from 'axios'
//import HubspotFormReact from 'hubspot-form-react';
import HubspotForm from 'react-hubspot-form'
let count = 0;

export const Contact = () => {
  count++;
  const [signal, setSignal] = useState(false);

  const { form, getState } = useForm({
    defaultValues: { firstName: "", lastName: "", framework: "" },
    onSubmit: (values) => alert(JSON.stringify(values, undefined, 2)),
  });
  //const errors = getState("errors");

  const [state, setState] = useState({
    name: "",
    number: "",
    email: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (error.numberError === null && error.emailError === null && error.nameError === null) {
      // console.log('postRecord');
      Submit();
    }
  }, [signal]);
  const Change = (val, name) => {
    if (
      name !== null &&
      name !== undefined &&
      val !== null &&
      name !== undefined
    ) {
      setState({
        ...state,
        [name]: val,
      });
    }
  };
  const [error, setError] = useState({
    numberError: "",
    emailError: "",
    nameError: "",
  });
  const PostRecord = (e) => {
    setError({
      numberError: validate("ContactNumber", state.number),
      emailError: validate("email", state.email),
      nameError: validate("required", state.name),
    });
    setSignal(!signal);
  };
  const Check = (name) => {
    if (name === "number") {
      setError({
        ...error,
        numberError: validate("ContactNumber", state.number),
      });
    } else if (name === "email") {
      setError({
        ...error,
        emailError: validate("email", state.email),
      });
    } else if (name === "name") {
      setError({
        ...error,
        nameError: validate("required", state.name),
      });
    }
  };
  const config = {
    cors: 'https://cors-anywhere.herokuapp.com/', // <optional> doesn't display the cors error
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSewCVaXl4HeRtuvFIH5_jwOz9OlDzyp56SXYMRMJ4j_dxwRgQ/formResponse'

  };

  const Submit = async () => {
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/hamza786/google_sheets/yRNdvFYxjjRpSWEW?tabId=Sheet1",
        {
          method: "post",
          body: JSON.stringify([[state.name, state.email, state.number]]),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const json = await response.json();
      //console.log("Success:", JSON.stringify(json));
      setMessage("Success");
    } catch (error) {
      // console.error("Error:", error);
      setMessage("Error");
    }
  }
  const resetFields = () => {
    setState({
      ...state,
      name: '',
      email: '',
      number: ''
    })
  }
  return (
    <>
      <main>
        <div className="relative pt-32 pb-32 flex content-center items-center justify-center min-h1-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url(" + background + ")",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
            <Row>
              <Col lg="3" md="3" sm="3" xs="3"></Col>
              <Col
                lg="6"
                md="6"
                sm="6"
                xs="6"
                className="flex content-center items-center justify-center"
              >
                <img src={logo} width="240px" className="mt-5" />
              </Col>
              <Col lg="3" md="3" sm="3" xs="3"></Col>
            </Row>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-kgcbrown fill-current"
                points="2560 50 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <br></br>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h3 className="text-kgcbrown  font-bold">
                      Karachi Hills inquiry form
                    </h3>
                  </div>

                  <hr className="mt-6 border-b-1 border-gray-400" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  {/* <HubspotFormReact
                    portalId="9140048" required
                    formId="ca6c4dc4-a613-4bad-ac58-8b20d02399ae" required
                     fields={[ ]}  // optional for any other custom fields
                    //   {
                    //     name: "name",   // should match name in your Hubspot form
                    //     value: "value",   // default value you want to set
                    //     type: "type"  // input type for hidden field in form
                    //   }
                    // ]}
                    formClass="class" optional for styling form
                    inputClass="class" optional for styling email input field
                    submitButtonClass="class" optional for styling submit button
                    submitButtonId="id" optional for targeting submit button by ID
                    submitButtonValue="value" optional for adding specific text to submit button
                    //onSubmit={submitFunction} // optional for adding any submit events
                    divClass="class" // optional styling for custom fields
                  /> */}
                  <HubspotForm
   portalId='9140048'
   formId='ca6c4dc4-a613-4bad-ac58-8b20d02399ae'
   onSubmit={() => console.log('Submit!')}
   onReady={(form) => console.log('Form ready!')}
   loading={<div>Loading...</div>}
   />


                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <WebNavBar /> */}



    </>
  );
};

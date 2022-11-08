// import React, { useState, useEffect } from "react";
// import { userAction } from "../../store/action/userAction";
// import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useLocation, useNavigate } from "react-router-dom";

function Tabels(props) {
  console.log("props", props.sendd.firstName);
  const [search, setSearch] = useState(null);
  const [data, setData] = useState([]);
  // console.log('data=>',data?.firstName)
  const location = useLocation();
  // console.log('location=>',location?.state?.body)
  const sty = {
    boxShadow: "none",
    border: 0,
    outline: 0,
    background: "transparent",
    // borderBottom: "1px solid black",
    borderRadius: "2px",
    width: "50%",
  };


  useEffect(() => {
    // let localData = localStorage.getItem("localData");
    // console.log('localData=>',localData)
    if (props.sendd) {
      setData(props.sendd);
    }else{
      alert('hello')
    }
    // console.log('hello world')
  }, [props.sendd])
  return (
    <div>
      <div className="App">
        <br />
        {/* <div style={{ display: "flex", justifyContent: "center" }}></div> */}
        <br />
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              {/* <th>#</th> */}
              <th>Name</th>
              <th>F name</th>
              <th>Gender</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((v, i) => {
              console.log("v", v);
              return (
                <tr key={i}>
                  <td>
                    {v?.firstName} {v?.lastName}
                  </td>
                  <td>{v?.fatherName}</td>
                  <td>{v?.gender}</td>
                  <td>{v?.email}</td>
                </tr>
              );
            })}
            <tr>
              <td>Umar Khan</td>
              <td>Ali Khan</td>
              <td>Male</td>
              <td>umar123@gmail.com</td>
            </tr>
            <tr>
              <td>Talha Khan</td>
              <td>Obaid Khan</td>
              <td>Male</td>
              <td>Talha123@gmail.com</td>
            </tr>
            <tr>
              <td>Uzair Ali</td>
              <td>Farhan Khan</td>
              <td>Male</td>
              <td>uzair123@gmail.com</td>
            </tr>
            <tr>
              <td>Shan Hussain</td>
              <td>Usman Hussain</td>
              <td>Male</td>
              <td>shan123@gmail.com</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default Tabels;

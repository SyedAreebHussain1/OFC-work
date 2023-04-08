// import React, { useEffect, useState } from "react";
import { userAction } from "../../store/action/userAction";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { KEY_C } from "keycode-js";

const User = () => {
  const [search, setSearch] = useState(null);
  const [total, setTotal] = useState(null);
  // console.log(search);
  // console.log("total", total[0].id);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userred);
  console.log("state=>", state?.user);
  console.log("state data=>", state?.user?.data?.data?.items);

  const searchData = (e) => {
    if (search) {
      dispatch(userAction(search));
    }

    console.log("search=>", search);
    // if (keyboard==13) {
    //     // Cancel the default action, if needed
    // }
  };
  useEffect(() => {
    if (state?.user?.status == 200) {
      setTotal(state?.user?.data?.data?.items);
    }
  }, [state?.user]);
  useEffect(() => {
    dispatch(userAction(search));
  }, []);
  const sty = {
    boxShadow: "none",
    border: 0,
    outline: 0,
    background: "transparent",
    // borderBottom: "1px solid black",
    borderRadius: "2px",
    width: "50%",
  };
  return (
    <div>
      <div className="App">
        <br />
        {/* <h4 style={{ color: "green" }}>City Search</h4> */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "55ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              style={sty}
              id="outlined-basic"
              label="Search"
              variant="outlined"
              onChange={(text) => setSearch(text.target.value)}
            />
            <SearchIcon style={{ cursor: "pointer" }} onClick={searchData} />
          </Box>
          {/* <Form.Control
            style={sty}
            placeholder="Search"
            onChange={(text) => setSearch(text.target.value)}
            aria-label="Username"
            aria-describedby="basic-addon1"
          /> */}
        </div>
        <br />
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>CountryId</th>
            </tr>
          </thead>
          <tbody>
            {total?.map((v, i) => {
              return (
                <tr style={{ cursor: "no-drop" }} key={i}>
                  <td>{v.id}</td>
                  <td>{v.title}</td>
                  <td>{v.countryId}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default User;

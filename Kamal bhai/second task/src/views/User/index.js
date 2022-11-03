import React, { useEffect, useState } from "react";
import { userAction } from "../../store/action/userAction";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import SearchIcon from "@mui/icons-material/Search";

const User = () => {
  const [search, setSearch] = useState(null);
  const [total, setTotal] = useState(null);
  // console.log(search);
  // console.log("total", total[0].id);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userred);
  console.log("state=>", state?.user);
  console.log("state data=>", state?.user?.data?.data?.items);
  const searchData = () => {
    console.log("search=>", search);
    if (search) {
      dispatch(userAction(search));
    }
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
    borderBottom: "1px solid black",
    borderRadius: "2px",
    width: "50%",
  };
  return (
    <div>
      <div className="App">
        <br />
        <h4 style={{ color: "green" }}>Square Pro</h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Form.Control
            style={sty}
            placeholder="Search"
            onChange={(text) => setSearch(text.target.value)}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <SearchIcon style={{ cursor: "pointer" }} onClick={searchData} />
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
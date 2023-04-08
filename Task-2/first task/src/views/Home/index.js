import React, { useEffect, useState } from "react";
import { userAction } from "../../store/action/userAction";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { BrowserRouter, Routes, Route,Link,useLocation  } from "react-router-dom";

// import SearchIcon from "@mui/icons-material/Search";
import Loading from 'react-fullscreen-loading';
// import AppRoute from "./routes/AppRoutes";
const Home = () => {
  const [search, setSearch] = useState(null);
  const [total, setTotal] = useState(null);
  // let location = useLocation()
  // console.log(location)
  // console.log(search);
  // console.log("total", total[0].id);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userred);
  // console.log("state=>", state?.user);
  // console.log("state data=>", state?.user?.data?.data?.items);
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

      {/* <Loading loading background="#2ecc71" loaderColor="#3498db" /> */}
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
          /> <Link to='/about'>About</Link>
          {/* <SearchIcon style={{ cursor: "pointer" }} onClick={searchData} /> */}
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
export default Home;

// const Home = () => {
//   const [search, setSearch] = useState(null);

//   // const [d, setD] = useState(null);
//   const dispatch = useDispatch();
//   const state = useSelector((state) => state?.userred);
//   console.log("state=>", state);
//   // console.log("dataaa state", state?.user?.status);
//   // useEffect(() => {
//   // }, []);
//   // useEffect(() => {
//   //   if (state?.user?.status == 200) {
//   //     setD(state?.user?.data);
//   //   }
//   // }, [state?.user]);
//   const searchData = () => {
//     if (search) {
//       dispatch(userAction({ search: search }));
//     }
//   };
//   return (
//     <div>
//       <div className="App">
//         <h1>Hello world</h1>
//         {/* {d?.map((v, i) => {
//           return (
//             <p key={i}>
//               {v.id}) {v.title}
//             </p>
//           );
//         })} */}
//         <input
//           placeholder="search"
//           onChange={(text) => setSearch(text.target.value)}
//         />
//         <button onClick={searchData}>Search</button>
//       </div>
//     </div>
//   );
// };
// export default Home;

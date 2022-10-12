import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
const Home = (props) => {
    console.log("propsHOME=>>", props);
    const location = useLocation();
    // const navigate = useNavigate();
    let token = localStorage.getItem("token") 
    console.log(token);
    // useEffect(() => {
    //     if (token == null) {
    //         navigate("/login");
    //     }
    // }, []);
    return (
        <div>
            <h1>Profile Page</h1>
            {/* <p>token: {props.users.data.token}</p> */}
            <p>token: {token}</p>
            <p>{location.state.email}</p>
        </div>
    );
};

const mapStateToProps = (state) => ({
    users: state.users,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
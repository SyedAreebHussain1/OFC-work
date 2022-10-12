import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
const Home = (props) => {
    console.log("propsHOME=>>", props);
    const location = useLocation();
    // const navigate = useNavigate();
    console.log(location.state);
    // useEffect(() => {
    //     if (!props.users) {
    //         navigate("/");
    //     }
    // }, [props.users]);
    return (
        <div>
            <h1>Home Page</h1>
            <p>token: {props.users.data.token}</p>
            <p>{location.state.email}</p>
        </div>
    );
};

const mapStateToProps = (state) => ({
    users: state.users,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
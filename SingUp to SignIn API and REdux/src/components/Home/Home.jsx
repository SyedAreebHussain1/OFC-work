import React, { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar"
import { ProfileUser } from "../../store/action"
const Home = (props) => {
    console.log("propsHOME=>>", props);
    console.log("propsPro=>>", props.profile);
    const location = useLocation();
    console.log('state=>', location.state)
    // const navigate = useNavigate();
    let token = localStorage.getItem("token")
    console.log(token);
    useEffect(() => {
        props.ProfileUser()
    }, []);
    return (
        <div>
            <Navbar />
            <div>
                <h1>Profile</h1>
                <p>Last Name: {props.profile?.data.lastName}</p>
                <p>Gender: {props.profile?.data.gender}</p>
                <p>AGE: {props.profile?.data.age}</p>
                <p>CNIC: {props.profile?.data.user.cnic}</p>
                <p>Phone: {props.profile?.data.user.phone}</p>
            </div>
            <div>
                {/* <p>token: {props.users.data}</p> */}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    users: state.users,
    profile: state.profile
});
const mapDispatchToProps = (dispatch) => ({
    ProfileUser: () => dispatch(ProfileUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
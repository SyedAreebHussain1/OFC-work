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
    const navigate = useNavigate();
    let token = localStorage.getItem("token")
    console.log(token);
    useEffect(() => {
        props.ProfileUser()
    }, []);
    useEffect(()=>{
        if(props.users == null){
            navigate('/login')
        }
    },[props.users])
    return (
        <div>
            <Navbar />
            <div>
                <h1>Profile</h1>
                <div style={{border:'1px solid gray'}} >
                    <p>First Name: {props.profile?.data.firstName}</p>
                    <p>Last Name: {props.profile?.data.lastName}</p>
                    <p>Gender: {props.profile?.data.gender}</p>
                    <p>AGE: {props.profile?.data.age}</p>
                    <p>CNIC: {props.profile?.data.user.cnic}</p>
                    <p>Phone: {props.profile?.data.user.phone}</p>
                </div>
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
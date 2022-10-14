import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "../Header/Header"
import { profileUser } from "../../store/action/index"

const UserProfile = (props) => {
    console.log('UserProfile=>', props)
    // console.log('UserProfileData=>', props.profile.data.age)
    // console.log('UserProfile=>', props.profile.message)
    const [data, setData] = useState(null)

    // const data = props.profile.data
    useEffect(() => {
        props.profileUser()
    }, [])
    useEffect(() => {
        if(props.profile){
            setData(props.profile?.data)
        }
    }, [props.profile])
    return (
        <div>
            <Header />
            <h1>User Profile</h1>
            <div>
                <p>Name: {data?.firstName} {data?.lastName}</p>
                <p>Gender: {data?.gender}</p>
                <p>Date of Birth: {data?.dob}</p>
                <p>Country: {data?.country?.title}</p>
                <p>City: {data?.city?.title}</p>
                <p>#cnic: {data?.user?.cnic}</p>
                <p>Phone: {data?.user?.phone}</p>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    profile: state.profile
});
const mapDispatchToProps = (dispatch) => ({
    profileUser: (data) => dispatch(profileUser(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
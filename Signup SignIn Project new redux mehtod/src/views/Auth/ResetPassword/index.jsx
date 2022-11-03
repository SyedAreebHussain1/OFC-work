import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordAction } from "../../../store/action/resetPassword"
// import { authResetPassword } from "../../../store/reducer/authResetPassword"


const ResetPassword = () => {
    const [password, setPassword] = useState(null)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation()
    console.log('state=>', location.state.token)

    const state = useSelector((state) => state.authResetPassword);
    console.log('ResetPassword props=>', state.resetpassword)
    const resetPass = () => {
        if (password) {
            dispatch(resetPasswordAction({ password: password }, location.state.token));
        }
    }
    useEffect(() => {
        // console.log(props.forgetpass?.statusCode);
        if (state.resetpassword?.statusCode == 200) {
            alert(state.resetpassword?.message)
            navigate("/login");
        } else if (state.resetpassword?.statusCode == 404) {
            alert(state.resetpassword?.message)
        }
    }, [state.resetpassword])
    return (
        <div style={{
            border: "1px solid gray",
            padding: '20px',
            width: "50%",
            height: "100%",
            marginTop: "100px",
            marginLeft: "250px",
        }}>
            <h2>Password</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Enter new Password</Form.Label>
                    <Form.Control type="password" name='password' onChange={(text) => setPassword(text.target.value)} placeholder="Enter new Password" />
                    <Form.Text className="text-muted">
                        Our verification team vets all requests thoroughly and bases their review on a number of inputs to determine whether an account is eligible to be verified.                    </Form.Text>
                </Form.Group>
                <Button variant="outline-success" onClick={resetPass}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default ResetPassword
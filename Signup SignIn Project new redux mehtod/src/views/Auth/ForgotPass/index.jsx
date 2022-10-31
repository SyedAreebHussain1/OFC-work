import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { forgetPasswordAction } from "../../../store/action/forgetPassword"
// import { forgotpassword } from "../../../store/reducer/authForgetPassword"


const ForgotPass = () => {
    const [email, setEmail] = useState(null)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const state = useSelector((state) => state.authForgetPassword);
    console.log('forgotpassword props=>', state.forgotpassword)
    const verifying = () => {
        if (email) {
            dispatch(forgetPasswordAction({ email: email }));
        }
    }
    useEffect(() => {
        // console.log(props.forgetpass?.statusCode);
        if (state.forgotpassword?.statusCode == 201) {
            alert(state.forgotpassword?.message)
           navigate("/fp_code_verify");
        } else if (state.forgotpassword?.statusCode == 404) {
            alert(state.forgotpassword?.message)
        }
    }, [state.forgotpassword])
    return (
        <div style={{
            border: "1px solid gray",
            padding: '20px',
            width: "50%",
            height: "100%",
            marginTop: "100px",
            marginLeft: "250px",
        }}>
            <h2>EMAIL</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label> Forget Email verification code</Form.Label>
                    <Form.Control type="email" name='email' onChange={(text) => setEmail(text.target.value)} placeholder="Enter verification code" />
                    <Form.Text className="text-muted">
                        Our verification team vets all requests thoroughly and bases their review on a number of inputs to determine whether an account is eligible to be verified.                    </Form.Text>
                </Form.Group>
                <Button variant="outline-success" onClick={verifying}>
                    Confirm
                </Button>
            </Form>
        </div>
    )
}

export default ForgotPass
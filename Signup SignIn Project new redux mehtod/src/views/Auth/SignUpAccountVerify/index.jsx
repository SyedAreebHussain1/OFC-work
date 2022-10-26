import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
// r
import { useDispatch, useSelector } from "react-redux";
import { signUpAccountVerifyAction } from "../../../store/action/signUpAccountVerifyAction";
import { authSignUpAccountVerify } from "../../../store/reducer/index"

const SignUpAccountVerify = () => {
    const [code, setCode] = useState(null)
    console.log( code)
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const state = useSelector((state) => state.authSignUpAccountVerify);
    console.log('state verify=>', state)
    console.log('state verify=>', state.accountverify)
    const verifying = (e) => {
        e.preventDefault();
        if (code) {
            dispatch(signUpAccountVerifyAction({code:code}));
        }
    }
    useEffect(() => {
        // console.log(props.verify?.statusCode);
        if (state.accountverify?.statusCode == 201) {
            alert(state.accountverify?.message)
           navigate("/login");
        } else if (state.accountverify?.statusCode == 404) {
            alert(state.accountverify?.message)
        }
    }, [state.accountverify])
    return (
        <div style={{
            border: "1px solid gray",
            padding: '20px',
            width: "50%",
            height: "100%",
            marginTop: "100px",
            marginLeft: "250px",
        }}>
            <h2>Verification</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>SignUp verification code</Form.Label>
                    <Form.Control type="text" name='code' onChange={(text) => setCode(text.target.value)} placeholder="Enter verification code" />
                    <Form.Text className="text-muted">
                        Our verification team vets all requests thoroughly and bases their review on a number of inputs to determine whether an account is eligible to be verified.                    </Form.Text>
                </Form.Group>
                <Button variant="outline-success" onClick={verifying}>
                    Verify
                </Button>
            </Form>
        </div>
    )
}

export default SignUpAccountVerify
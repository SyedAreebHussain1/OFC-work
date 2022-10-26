import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { fpCodeAction } from "../../../store/action/fpCodeVerify"
import { authFpCodeVerify } from "../../../store/reducer/authFpCodeVerify"


const FpCodeVerify = () => {
    const [code, setCode] = useState(null)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const state = useSelector((state) => state.authFpCodeVerify);
    console.log('fpcode props=>', state?.fpcode)
    console.log('fpcode props=>', state?.fpcode?.data.token)

    const verifying = () => {
        if (code) {
            dispatch(fpCodeAction({ code: code }));
        }
    }
    useEffect(() => {
        // console.log(props.forgetpass?.statusCode);
        if (state?.fpcode?.statusCode == 201) {
            alert(state?.fpcode?.message)
            navigate("/reset_password", { state: { token: state?.fpcode?.data.token } });
        } else if (state?.fpcode?.statusCode == 404) {
            alert(state?.fpcode?.message)
        }
    }, [state?.fpcode])
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
                    <Form.Label>Enter verification code</Form.Label>
                    <Form.Control type="text" name='code' onChange={(text) => setCode(text.target.value)} placeholder="Enter new Password" />
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

export default FpCodeVerify
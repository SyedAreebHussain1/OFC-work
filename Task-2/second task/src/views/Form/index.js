import * as React from "react";
import { useState ,useEffect} from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import Button from "@mui/material/Button";

import Tabels from "../Tabels";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {formSubmitAction} from "../../store/action/userAction";

const Formm = () => {
  const [value, setValue] = React.useState(dayjs(""));
  const [total, setTotal] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userred);
  console.log("state formdata=>", state.formdata);
  const navigate = useNavigate();

  const [body, setBody] = useState({
    firstName: null,
    lastName: null,
    fatherName: null,
    address: null,
    email: null,
    tel: null,
    phone: null,
    whatsapp_no: null,
    cnic: null,
    dob: null,
    // countryId: null,
    // cityId: null,
    gender: null,
  });
  const submit = () => {
    // console.log(body.cnic);
    // if (body) {
      let tempArr = [];
      tempArr.push(body);
      // console.log("body=>", body);
      setTotal([...total, ...tempArr]);
      // console.log('total',total)
      // console.log('temarry',tempArr)
      
    // navigate("/user/data", { state: { body: [body] } });
      dispatch(formSubmitAction([...total, ...tempArr]));
  };
  return (
    <div>
      <div
        style={{
          border: "1px solid gray",
          padding: "20px",
          width: "60%",
          // height: "100%",
          marginTop: "1px",
          marginLeft: "20%",
        }}
      >
        <FormControl>
          <h5 style={{ color: "green" }}>User information</h5>
          <p
          //  style={{ marginTop: "-10px" }}
          >
            It's quick and easy.
          </p>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "35ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              // style={{ width: "40%" }}
              id="standard-basic"
              label="First name"
              variant="standard"
              value={body.firstName}
              onChange={(text) =>
                setBody({ ...body, firstName: text.target.value })
              }
            />
            <TextField
              // style={{ width: "52%" }}
              id="standard-basic"
              label="Surname"
              variant="standard"
              value={body.lastName}
              onChange={(text) =>
                setBody({ ...body, lastName: text.target.value })
              }
            />
            <TextField
              id="standard-basic"
              label="Father's/Spouse's name"
              variant="standard"
              value={body.fatherName}
              onChange={(text) =>
                setBody({ ...body, fatherName: text.target.value })
              }
            />
            <TextField
              id="standard-basic"
              label="Address (Residence)"
              variant="standard"
              value={body.address}
              onChange={(text) =>
                setBody({ ...body, address: text.target.value })
              }
            />
            <TextField
              style={{ width: "91%" }}
              id="standard-basic"
              label="Mobile number or email address"
              variant="standard"
              value={body.email}
              onChange={(text) =>
                setBody({ ...body, email: text.target.value })
              }
            />
            <TextField
              // type="number"
              id="standard-basic"
              label="Cnic no."
              variant="standard"
              // type="number"
              pattern="[0-9]*"
              // inputProps={{ maxLength: 13 }}
              value={body.cnic}
              onChange={(text) => setBody({ ...body, cnic: text.target.value })}
            />
            <TextField
              id="standard-basic"
              label="Tel."
              inputProps={{ maxLength: 13 }}
              value={body.tel}
              onChange={(text) => setBody({ ...body, tel: text.target.value })}
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Phone no."
              variant="standard"
              inputProps={{ maxLength: 13 }}
              value={body.phone}
              onChange={(text) =>
                setBody({ ...body, phone: text.target.value })
              }
            />
            <TextField
              id="standard-basic"
              label="Whatsapp no."
              variant="standard"
              inputProps={{ maxLength: 13 }}
              value={body.whatsapp_no}
              onChange={(text) =>
                setBody({ ...body, whatsapp_no: text.target.value })
              }
            />
            <div>
              <FormLabel id="demo-radio-buttons-group-label">
                Date of birth?
              </FormLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                  <DesktopDatePicker
                    // label="Date desktop"
                    inputFormat="YYYY/MM/DD"
                    value={body.dob}
                    onChange={(texts) => setBody({ ...body, dob: texts })}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
            </div>
            {/*  */}
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              onChange={(text) =>
                setBody({ ...body, gender: text.target.value })
              }
            >
              <FormLabel id="demo-radio-buttons-group-label">Gender?</FormLabel>
              <div style={{ display: "flex" }}>
                <FormControlLabel
                  value="FEMALE"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="MALE"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="disabled"
                  disabled
                  control={<Radio />}
                  label="other"
                />
              </div>
            </RadioGroup>
          </Box>
          <hr />
          <p>
            People who use our service may have uploaded your contact
            information to Square One. <a href="#">Learn more.</a>{" "}
          </p>
          <Button variant="contained" onClick={submit}>
            Submit
          </Button>
        </FormControl>
      </div>
      <br />
      <br />
      <div>
      {/* sendd={total} */}
        <Tabels sendd={state.formdata}  />
      </div>
    </div>
  );
};
export default Formm;

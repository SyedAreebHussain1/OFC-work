import React from "react";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import ComponentToPrint from "./ComponentToPrint";
import { useReactToPrint } from "react-to-print";
import { connect } from "react-redux";
import { showAgent, GetUser, GetData, LeadId } from "../middleware";
import swal from "sweetalert";
import Positioning from "./Positioning";
import Project from "./Project";
import Verify from "./Verify";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useHistory } from "react-router";
import {
  CardBody,
  Button,
  Container,
  CardHeader,
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Table,
  Label,
  Input,
  FormGroup,
} from "reactstrap";
import Nomine from "./Nomine";
// import { Path } from "@react-pdf/renderer";
import thunk from "redux-thunk";
import { Save } from "@material-ui/icons";

function Personal(props) {
  let cnic = "abc";
  function getprops(props) {
    cnic = props.cnic;
  }
  const componentRef = useRef();
  // const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [getlead, setlead] = useState({
    Dataposition: "",
  });
  // const handlePrint = () => {
  //   html2canvas(componentRef.current).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF();
  //     pdf.addImage(imgData, "JPEG", 0, 0);
  //     pdf.save("download.pdf");
  //   });
  // };

  // const handlePrint=()=>{

  //     const pdf = new jsPDF();
  //    const input=document.getElementById("components")
  //    pdf.html(input)
  //     // pdf.output('dataurlnewwindow');
  //     pdf.save("download.pdf");

  // ;
  //   // var divContents = ("components").html();
  // //  pdf.write(divContents);
  //   // html2canvas(input)
  //   //   .then((canvas) => {
  //       // const imgData = canvas.toDataURL('image/png');

  //       // pdf.addImage(imgData, 'JPEG', 0, 0);
  //       // pdf.output('dataurlnewwindow');
  //       // pdf.save("download.pdf");
  //     // })
  //   // ;
  // }
  const location = useLocation();

  // useEffect(() => {
  //   setState({
  //     ...state,
  //     ClientId: location.state.id,
  //     ClientName: location.state.name,
  //     Clientcnic: location.state.cnic,
  //     TaskId: parseInt(location.state.taskid)
  //   });

  // }, [location])
  const [state, setState] = useState({
    ClientId: null,
    ClientName: null,
    Clientcnic: null,
    projectid: null,
    projectName: null,
    sectorid: null,
    streetId: null,
    plotno: null,
    plotid: null,
    category: null,
    type: null,
    direction: null,
    status: null,
    position: null,
    TaskId: null,
  });

  const [upload, setUpload] = useState({
    profileImg: null,
  });
  const [wid, setWid] = useState({});
  const [hei, setHei] = useState({});
  const [wid2, setWid2] = useState({});
  const [hei2, setHei2] = useState({});
  // useEffect(() => {
  //   function imageSize(url) {
  //     const img = document.getElementById('i1')
  //     const promise = new Promise((resolve, reject) => {
  //       img.onload = () => {

  //         const width = img.naturalWidth;
  //         const height = img.naturalHeight;
  //         resolve({ width, height });
  //         if (width === 192 && height === 192) {
  //         }
  //       }
  //       img.onerror = reject;
  //     });

  //     img.src = url;

  //     return promise;
  //   }
  //   (async () => {
  //     const imageUrl = upload.profileImg;
  //     const imageDimensions = await imageSize(imageUrl);

  //   })();

  // })
  const copy = () => {
    // if(body.cnic !== )
    if (
      getlead.cnic !== "" &&
      getlead.cnic !== undefined &&
      getlead.cnic !== null
    ) {
      navigator.clipboard.writeText(getlead.cnic);
      swal("Successfully", "CNIC Copied", "success");
      // window.alert("CNIC Copied")
    }
  };
  // Targeting Image 01
  useEffect(() => {
    if (upload.profileImg !== null && upload.profileImg !== undefined) {
      var fileUpload = document.getElementById("i1");
      if (typeof fileUpload.files != "undefined") {
        var reader = new FileReader();

        if (fileUpload.files[0] && fileUpload.files[0].type.match("image.*")) {
          reader.readAsDataURL(fileUpload.files[0]);
        }
        reader.onload = function (e) {
          var image = new Image();
          image.src = e.target.result;
          image.onload = function () {
            var height = this.height;
            var width = this.width;
            setHei(height);
            setWid(width);
          };
        };
      }
    }
  });
  const [body2, setBody2] = useState({
    Name: "",
    Relation: "",
    nomineecnic: "",
    Telephone: "",
    Mobile: "",
    Passport_no: "",
    user_id: 2,
  });
  // Targeting Image 02
  useEffect(() => {
    if (upload2.profileImg !== null && upload2.profileImg !== undefined) {
      var fileUpload = document.getElementById("i2");
      if (typeof fileUpload.files != "undefined") {
        var reader = new FileReader();
        if (fileUpload.files[0] && fileUpload.files[0].type.match("image.*")) {
          reader.readAsDataURL(fileUpload.files[0]);
        }
        reader.onload = function (e) {
          var image = new Image();
          image.src = e.target.result;
          image.onload = function () {
            var height = this.height;
            var width = this.width;
            setHei2(height);
            setWid2(width);
          };
        };
      }
    }
  });

  if (difff == 0) {
    setBody({
      Dateofbirth: new Date().toISOString().split("T")[0],
    });
  }

  // Use Effect for Date (18 years OLD limitation)
  useEffect(() => {
    if (getlead.Dateofbirth !== null && getlead.Dateofbirth !== undefined) {
      var valv = getlead.Dateofbirth.slice(8, 15);
      var valv1 = getlead.Dateofbirth.slice(5, 7);
      var valv2 = getlead.Dateofbirth.slice(0, 4);
      var final = valv2;
      var abc = final + "-" + valv1 + "-" + valv;
      var Fdate = new Date().toISOString().split("T")[0];
      var diff = Math.floor((Date.parse(Fdate) - Date.parse(abc)) / 86400000);
      setDiff(diff);
    }
  });
  const [difff, setDiff] = useState({});
  // For CheckBoxs of Positioning
  const [box, setBox] = useState({
    box1: false,
    box2: false,
  });
  const [cat, setCat] = useState({
    cat1: false,
    cat2: false,
    cat3: false,
    cat4: false,
  });
  const [position, setPosition] = useState({
    corner: false,
    nexttocorner: false,
    normal: false,
    facing: false,
  });
  // useEffect(() => {
  //   if (location.state !== null && location.state !== undefined ? location.state.PlotType_id === 2 : window.location.href="/admin/dashboard") {
  //     setBox({
  //       box1: true
  //     })
  //   }
  //   else if (location.state !== null && location.state !== undefined ? location.state.PlotType_id === 1 : window.location.href="/admin/dashboard") {
  //     setBox({
  //       box2: true
  //     })
  //   }

  // }, [location.state !== null && location.state !== undefined ? location.state.PlotType_id : window.location.href="/admin/dashboard"]);

  // useEffect(() => {
  //   if (location.state.Category_id === 2) {
  //     setCat({
  //       cat1: true
  //     })
  //   }
  //   else if (location.state.Category_id === 1) {
  //     setCat({
  //       cat2: true
  //     })
  //   }
  //   else if (location.state.Category_id === 3) {
  //     setCat({
  //       cat3: true
  //     })
  //   }
  //   else if (location.state.Category_id === 4) {
  //     setCat({
  //       cat4: true
  //     })
  //   }

  // }, [location.state.Category_id]);

  // useEffect(() => {
  //   if (location.state.Position_id === 1) {
  //     setPosition({
  //       corner: true
  //     })
  //   }
  //   else if (location.state.Position_id === 2) {
  //     setPosition({
  //       nexttocorner: true
  //     })
  //   }
  //   else if (location.state.Position_id === 3) {
  //     setPosition({
  //       normal: true
  //     })
  //   }
  //   else if (location.state.Position_id === 4) {
  //     setPosition({
  //       facing: true
  //     })
  //   }

  // }, [location.state.Category_id]);
  const [path, setPath] = useState({
    signaturePath: null,
    thumbPath: null,
  });
  useEffect(() => {
    props.GetData(body, onSuccess, OnFailure);
  }, [props.GetData]);

  const imageHandler = (e) => {
    CheckFields("city");
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState == 2) {
        setUpload({ profileImg: reader.result });
      }
    };
    if (e.target.files[0] && e.target.files[0].type.match("image.*")) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const [upload2, setUpload2] = useState({
    profileImg: null,
  });
  const imageHandle2 = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState == 2) {
        setUpload2({ profileImg: reader.result });
      }
    };
    if (e.target.files[0] && e.target.files[0].type.match("image.*")) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  //---------------BODY------------
  const [body, setBody] = useState({
    // user_email: location.state.email,
    password: "",
    user_id: 3265,
    cnic: "",
    // user_name: location.state.name,
    Father: "",
    PassportNo: "",
    AddressResidence: "",
    Addressoffice: "",
    Profession: "",
    Organization: "",
    Teloffice: "",
    TelResidence: "",
    // user_phone: location.state.phone,
    Nationality: "",
    Dateofbirth: "",
  });

  const [disabled, setDisabled] = useState(false);
  const [disabledd, setDisabledd] = useState(false);
  const [hide, setHide] = useState(false);
  const [error, setError] = useState({
    emailError: null,
    passwordError: null,
    CNICError: null,
    Nnameerror: null,
    lastError: null,
    AddRError: null,
    AddOError: null,
    ProError: null,
    OError: null,
    DError: null,
    RError: null,
    TError: null,
    KError: null,
    CError: null,
    imageError: null,
    NationError: null,
    fullNameError: null,
    FfullNameError: null,
    ContactNumber: null,
    DOB: null,
    ContactNumberError: null,
    phoneNumberError: null,
    NationalityError: null,
    NomineeCnicError: null,
    NomineePhoneError: null,
    NomineeNameError: null,
    NomineeRelationError: null,
  });
  const getData = (sigPath, figPath) => {
    setPath({
      ...path,
      signaturePath: sigPath,
      thumbPath: figPath,
    });
  };
  var maxBirthdayDate = new Date();
  maxBirthdayDate.setFullYear(maxBirthdayDate.getFullYear() - 18);
  const CheckFields = (name) => {
    if (name === "email") {
      setError({
        ...error,
        emailError: validate("email", getlead.user_email),
      });
    } else if (name === "CNIC") {
      setError({
        ...error,
        CNICError: validate("CNIC", getlead.cnic),
      });
    } else if (name === "lastName") {
      setError({
        ...error,
        lastError: validate("lastName", getlead.Father),
      });
    } else if (name === "AddressResidence") {
      setError({
        ...error,
        AddRError: validate("required", getlead.AddressResidence),
      });
    } else if (name === "DOB") {
      setError({
        ...error,
        DError: validate("DOB", getlead.Dateofbirth),
      });
    } else if (name === "TelResidence") {
      setError({
        ...error,
        TError: validate("required", getlead.TelResidence),
      });
    } else if (name === "Profession") {
      setError({
        ...error,
        ProError: validate("required", getlead.Profession),
      });
    } else if (name === "Organization") {
      setError({
        ...error,
        OError: validate("required", getlead.Organization),
      });
    } else if (name === "Nationality") {
      setError({
        ...error,
        NationError: validate("required", getlead.Nationality),
      });
    } else if (name === "user_name") {
      setError({
        ...error,
        fullNameError: validate("fullName", getlead.user_name),
      });
    } else if (name === "user_phone") {
      setError({
        ...error,
        phoneNumberError: validate("ContactNumber", getlead.user_phone),
      });
    } else if (name === "ContactNumber") {
      setError({
        ...error,
        ContactNumberError: validate("ContactNumber", getlead.Teloffice),
      });
    } else if (name === "NomineeName") {
      setError({
        ...error,
        NomineeNameError: validate("required", StateNominee.NomineeName),
      });
    } else if (name === "NomineeCnic") {
      setError({
        ...error,
        NomineeCnicError: validate("CNIC", StateNominee.NomineeCnic),
      });
    } else if (name === "NomineeRelation") {
      setError({
        ...error,
        NomineeRelationError: validate(
          "required",
          StateNominee.NomineeRelation
        ),
      });
    } else if (name === "NomineePhone") {
      setError({
        ...error,
        NomineePhoneError: validate("ContactNumber", StateNominee.NomineePhone),
      });
    }
  };
  // Concatination for PDF name
  // let name1 = location.state.name;
  // let name2 = location.state.Plot_no;
  let name3 = " ";
  //let p1 = name1.concat(name3, name2);
  // const nDate = new Date(location.state.Datetime).toLocaleString('en-US', {
  //   timeZone: 'Asia/Karachi'
  // });

  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const OnChange = (value, name) => {
    setlead({
      ...getlead,
      [name]: value,
    });
  };
  let array = [];
  const onSuccessInsert = () => {
    swal("Succesful!", "Successfully Inserted", "success");
    // setlead("")
  };
  const OnFailureInsert = () => {
    swal("Sorry!", "Something went wron please contact to admin", "error");
  };

  //---- Checkbox Function to Lock the Entering
  const Addd = () => {
    setError({
      ...error,
      emailError: validate("email", getlead.user_email),
      CNICError: validate("CNIC", getlead.cnic),
      lastError: validate("lastName", getlead.Father),
      AddRError: validate("required", getlead.AddressResidence),
      DError: validate("DOB", getlead.Dateofbirth),
      TError: validate("required", getlead.TelResidence),
      ProError: validate("required", getlead.Profession),
      OError: validate("required", getlead.Organization),
      NationError: validate("required", getlead.Nationality),
      fullNameError: validate("fullName", getlead.user_name),
      phoneNumberError: validate("ContactNumber", getlead.user_phone),
      // NomineePhoneError: validate("ContactNumber", StateNominee.NomineePhone),
      // NomineeRelationError: validate("required", StateNominee.NomineeRelation),
      // NomineeCnicError: validate("CNIC", StateNominee.NomineeCnic),
      // NomineeNameError: validate("required",StateNominee.NomineeName),
    });

    if (
      getlead.user_name == "" ||
      getlead.user_name == null ||
      getlead.Father == "" ||
      getlead.Father == null ||
      getlead.user_email == "" ||
      getlead.user_email == null ||
      getlead.Dateofbirth == "" ||
      getlead.Dateofbirth == null ||
      getlead.Nationality == "" ||
      getlead.Nationality == null ||
      getlead.cnic == "" ||
      getlead.cnic == null ||
      getlead.TelResidence == "" ||
      getlead.TelResidence == null ||
      getlead.AddressResidence == null ||
      getlead.AddressResidence == "" ||
      getlead.user_phone == "" ||
      getlead.user_phone == null ||
      getlead.Profession == "" ||
      getlead.Profession == null
      //  || StateNominee.NomineeName == '' || StateNominee.NomineeName == null ||
      //  StateNominee.NomineeCnic == ''|| StateNominee.NomineeCnic == null || StateNominee.NomineePhone == ''|| StateNominee.NomineePhone == null
      //  ||StateNominee.NomineeRelation == ''|| StateNominee.NomineeRelation == null
    ) {
      swal(
        "Sorry!",
        "Please Fill all required Enteries to lock fields",
        "error"
      );
    } else {
      setlead({ ...getlead, Dataposition: array });
    }
  };

  useEffect(() => {
    if (getlead.Dataposition !== "") {
      props.InsertIntegrateCRM(getlead, onSuccessInsert, OnFailureInsert);
    }
  }, [getlead.Dataposition]);

  const [cd, setCd] = useState(false);

  const handle = () => {
    setError({
      ...error,
      emailError: validate("email", getlead.user_email),
      CNICError: validate("CNIC", getlead.cnic),
      lastError: validate("lastName", getlead.Father),
      AddRError: validate("required", getlead.AddressResidence),
      DError: validate("DOB", getlead.Dateofbirth),
      TError: validate("required", getlead.TelResidence),
      ProError: validate("required", getlead.Profession),
      OError: validate("required", getlead.Organization),
      NationError: validate("required", getlead.Nationality),
      fullNameError: validate("fullName", getlead.user_name),
      phoneNumberError: validate("ContactNumber", getlead.user_phone),
      NomineePhoneError: validate("ContactNumber", StateNominee.NomineePhone),
      NomineeRelationError: validate("required", StateNominee.NomineeRelation),
      NomineeCnicError: validate("CNIC", StateNominee.NomineeCnic),
      NomineeNameError: validate("required", StateNominee.NomineeName),
    });

    if (
      getlead.user_name == "" ||
      getlead.user_name == null ||
      getlead.Father == "" ||
      getlead.Father == null ||
      getlead.user_email == "" ||
      getlead.user_email == null ||
      getlead.Dateofbirth == "" ||
      getlead.Dateofbirth == null ||
      getlead.Nationality == "" ||
      getlead.Nationality == null ||
      getlead.cnic == "" ||
      getlead.cnic == null ||
      getlead.TelResidence == "" ||
      getlead.TelResidence == null ||
      getlead.AddressResidence == null ||
      getlead.AddressResidence == "" ||
      getlead.user_phone == "" ||
      getlead.user_phone == null ||
      getlead.Profession == "" ||
      getlead.Profession == null
      //  || StateNominee.NomineeName == '' || StateNominee.NomineeName == null ||
      //  StateNominee.NomineeCnic == ''|| StateNominee.NomineeCnic == null || StateNominee.NomineePhone == ''|| StateNominee.NomineePhone == null
      //  ||StateNominee.NomineeRelation == ''|| StateNominee.NomineeRelation == null
    ) {
      swal(
        "Sorry!",
        "Please Fill all required Enteries to lock fields",
        "error"
      );
    } else {
      setCd(true);
      setDisabled(!disabled);
      setDisabledd(!disabledd);
      setHide(true);
    }
  };
  const onSuccess = () => {};
  const OnFailure = () => {
    swal(
      "Sorry!",
      "Something Went Wrong Please Try Again Later or Contact Admin",
      "error"
    );
  };

  const [stateForm, setstateForm] = useState({
    FormID: "",
  });
  const OnChangeFormId = (value) => {
    setstateForm({ ...stateForm, FormID: value });
  };
  useEffect(() => {
    let body = {
      FormId: stateForm.FormID,
    };
    props.ShowAllForms(body, onSuccess, OnFailure);
  }, [stateForm.FormID]);

  const [StateNominee, setStateNominee] = useState({
    NomineeCnic: "",
    NomineePhone: "",
    NomineePassport: "",
    NomineeRelation: "",
    NomineeName: "",
  });

  useEffect(() => {
    if (props.Forms !== null && props.Forms !== undefined) {
      if (props.Forms[0] !== null && props.Forms[0] !== undefined) {
        setlead({
          ...getlead,
          user_name: props.Forms[0]?.CustomerName,
          user_email: props.Forms[0]?.CustomerEmail,
          user_phone: props.Forms[0]?.CustomerPhone,
          cnic: props.Forms[0]?.CustomerCNIC,
          Leadsource: 4,
          assigned_by: props.Forms[0]?.AssignBy,
          handled_by: props.Forms[0]?.ReceivedBy,
          order_description: null,
          TokenMoney: "200000",
        });
      }
    }
  }, [props.Forms]);

  let history = useHistory();
  const Back = () => {
    history.push({
      pathname: "/admin/PaymentStages",
      state: location.state,
    });
  };

  const SaveFile = () => {
    // Create an object of formData
    const formData = new FormData();
    let file = stateFile.selectedFile;
    formData.append("Varification", file);
    formData.append("FilePathId", location.appReqFilePath);
    props.InsertVerificationFile(formData, onSuccessFile, onFailureFile);
  };
  const onSuccessFile = () => {
    swal({
      title: "Successful",
      text: "successfully Entered",
      type: "success",
      icon: "success",
      // buttons: true,
      // dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
      } else {
      }
    });
  };
  const onFailureFile = () => {
    swal({
      title: "Un Successful",
      text: "Something is wrong Please contact to admin",
      type: "warning",
      // buttons: true,
      dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
      } else {
      }
    });
  };

  const [stateFile, setstateFile] = useState({
    // Initially, no file is selected
    selectedFile: null,
  });

  // On file select (from the pop up)
  const onFileChange = (event) => {
    // Update the state
    setstateFile({ selectedFile: event.target.files[0] });
  };

  return (
    <div>
      {/* <ComponentToPrint ref={componentRef}  
           ShowAllPositions={props.ShowAllPositions}
           AllPositions={props.AllPositions} ShowPlotPositions={props.ShowPlotPositions} Position={props.Position} 
           Plotid={location.state.Plotid}
           name={getlead.user_name}
                email={getlead.user_email}
                father={getlead.Father}
                mobile={getlead.user_phone}
                cnic={getlead.cnic}
                passport={getlead.PassportNo}
                addressR={getlead.AddressResidence}
                addressO={getlead.Addressoffice}
                profession={getlead.Profession}
                organization={getlead.Organization}
                tellO={getlead.Teloffice}
                tellR={getlead.TelResidence}
                date={getlead.Dateofbirth}
                nationality={getlead.Nationality}
               
                pname={location.state.Project_name}
                sname={location.state.Sector_Name}
                stname={location.state.Streename}
                pno={location.state.Plot_no}
                ptype={location.state.PlotType_Name}
                cname={location.state.CategoryName}
                pdis={location.state.DirectionName}
                pstatus={location.state.House_Status}
                posname={location.state.PositionName}
                pdiscrip={location.state.Description}
                img1={upload.profileImg}
                img2={upload2.profileImg}
                box1={box.box1}
                box2={box.box2}
                cat1={cat.cat1}
                cat2={cat.cat2}
                ca3={cat.cat3}
                cat={cat.cat4}
                corner={position.corner}
                nexttocorner={position.nexttocorner}
                normal={position.normal}
                facing={position.facing}
                gname={StateNominee.NomineeName}
                nrelation={StateNominee.NomineeRelation}
                ncnic={StateNominee.NomineeCnic}
                ntel={StateNominee.NomineePhone}
                npassport={StateNominee.NomineePassport}
                // getData={getData}
                img2={upload2.profileImg}
                figPath={path.thumbPath}
                signaturePath={path.signaturePath}
                 />
         */}

      <Card style={{ margin: "10px" }} className="shadow">
        <CardHeader className="border-0"></CardHeader>

        <CardHeader className="border-0">
          <h3 className="mb-0"> Personal Information </h3>

          <CardBody>
            <form>
              <div className="pl-lg-4">
                <Row>
                  {/* <Col className="centerr" lg="2" md="3" sm="6" xs='12'>
                            < Card style={{ borderColor: 'black', borderRadius: '10px' }} >
        
                              <input type="file"
                                hidden={disabled}
                                accept=".png,  .jpg"
                                id='i1'
                                style={{ display: 'true', color: 'white' }}
                                onChange={imageHandler}
        
                              >
                              </input> <br />
                              <CardImg height='96px' width="96px" alt='Image must be in passport size format' 
                              src={wid == 192 && hei == 192 ? upload.profileImg : ""} />
                              <CardBody>
        
                              </CardBody>
                            </Card >
                            {(wid !== 192 &&
                              hei !== 192 && upload.profileImg !== null) ? (
                              <small style={{ marginTop: "2px" }}>
                                <span style={{ color: "red" }}>
                                  Incorrect Image Format{" "}
                                  <i className="fas fa-exclamation-circle"></i>
                                </span>
                              </small>
                            ) : ''}
                          </Col> */}
                  <Col lg="12" md="6" sm="6">
                    <label className="form-control-label" for="input-username">
                      Form ID
                    </label>

                    <input
                      type="text"
                      id="input-username"
                      className="form-control"
                      placeholder=""
                      value={stateForm.FormID}
                      onChange={(e) => OnChangeFormId(e.target.value)}
                    ></input>
                  </Col>

                  <Col lg="12" md="6" sm="6">
                    <label className="form-control-label" for="input-username">
                      Name
                    </label>

                    <input
                      type="text"
                      id="input-username"
                      className="form-control"
                      placeholder=""
                      disabled
                      onBlur={() => CheckFields("user_name")}
                      value={getlead.user_name}
                      onChange={(e) => OnChange(e.target.value, "user_name")}
                    ></input>
                    {error.fullNameError !== "" &&
                      error.fullNameError !== null && (
                        <small style={{ marginTop: "2px" }}>
                          <span style={{ color: "red" }}>
                            {error.fullNameError}{" "}
                            <i className="fas fa-exclamation-circle"></i>
                          </span>
                        </small>
                      )}
                  </Col>
                  <Col lg="6" md="5" sm="5">
                    <label className="form-control-label" for="input-username">
                      Father's/ Spouse Name
                    </label>
                    <input
                      type="text"
                      id="input-username"
                      className="form-control"
                      placeholder=""
                      onBlur={() => CheckFields("lastName")}
                      value={getlead.Father}
                      onChange={(e) => OnChange(e.target.value, "Father")}
                    ></input>
                    {error.lastError !== "" && error.lastError !== null && (
                      <small style={{ marginTop: "2px" }}>
                        <span style={{ color: "red" }}>
                          {error.lastError}{" "}
                          <i className="fas fa-exclamation-circle"></i>
                        </span>
                      </small>
                    )}
                  </Col>
                  <Col lg="6" md="4" sm="4">
                    <label className="form-control-label" for="input-username">
                      Email
                    </label>
                    <input
                      type="text"
                      id="input-username"
                      disabled
                      className="form-control"
                      placeholder=""
                      onBlur={() => CheckFields("email")}
                      value={getlead.user_email}
                      onChange={(e) => OnChange(e.target.value, "user_email")}
                    ></input>
                    {error.emailError !== "" && error.emailError !== null && (
                      <small>
                        <span style={{ color: "red" }}>
                          {error.emailError}{" "}
                          <i className="fas fa-exclamation-circle"></i>
                        </span>
                      </small>
                    )}
                  </Col>
                  <Col lg="4" md="4" sm="4">
                    <label className="form-control-label" for="input-username">
                      Mobile
                    </label>
                    <input
                      type="text"
                      disabled
                      id="input-username"
                      className="form-control"
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      placeholder=""
                      onBlur={() => CheckFields("user_phone")}
                      value={getlead.user_phone}
                      onChange={(e) => OnChange(e.target.value, "user_phone")}
                    ></input>
                    {error.phoneNumberError !== "" &&
                      error.phoneNumberError !== null && (
                        <small style={{ marginTop: "2px" }}>
                          <span style={{ color: "red" }}>
                            {error.phoneNumberError}{" "}
                            <i className="fas fa-exclamation-circle"></i>
                          </span>
                        </small>
                      )}
                  </Col>
                  <Col lg="6" md="6" sm="6">
                    <label className="form-control-label" for="input-username">
                      CNIC
                    </label>
                    <input
                      type="text"
                      id="input-username"
                      disabled
                      className="form-control"
                      placeholder=""
                      onBlur={() => CheckFields("CNIC")}
                      maxLength={13}
                      value={getlead.cnic}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      onChange={(e) => OnChange(e.target.value, "cnic")}
                    ></input>
                    {error.CNICError !== "" && error.CNICError !== null && (
                      <small style={{ marginTop: "2px" }}>
                        <span style={{ color: "red" }}>
                          {error.CNICError}{" "}
                          <i className="fas fa-exclamation-circle"></i>
                        </span>
                      </small>
                    )}
                  </Col>
                  <Col lg="2" md="2" sm="2">
                    <br />

                    <Button
                      className="mt-2"
                      color="success"
                      id="search"
                      onClick={copy}
                    >
                      <span className="btn-inner--text"></span>
                      <span className="btn-inner--icon">
                        <i class="fas fa-copy"></i>
                      </span>
                    </Button>
                  </Col>
                  <Col lg="12" md="6" sm="6">
                    <label className="form-control-label" for="input-username">
                      Passport No.
                    </label>
                    <input
                      type="text"
                      id="input-username"
                      className="form-control"
                      placeholder=""
                      disabled={disabledd}
                      value={getlead.PassportNo}
                      onChange={(e) => OnChange(e.target.value, "PassportNo")}
                    ></input>
                  </Col>
                </Row>

                <Row>
                  <Col lg="12" md="6" sm="6">
                    <label className="form-control-label" for="input-username">
                      Address (Residence)
                    </label>
                    <input
                      type="text"
                      id="input-username"
                      className="form-control"
                      placeholder=""
                      onBlur={() => CheckFields("AddressResidence")}
                      disabled={disabledd}
                      value={getlead.AddressResidence}
                      onChange={(e) =>
                        OnChange(e.target.value, "AddressResidence")
                      }
                    ></input>
                    {error.AddRError !== "" && error.AddRError !== null && (
                      <small style={{ marginTop: "2px" }}>
                        <span style={{ color: "red" }}>
                          {error.AddRError}{" "}
                          <i className="fas fa-exclamation-circle"></i>
                        </span>
                      </small>
                    )}
                  </Col>
                  <Col lg="12" md="6" sm="6">
                    <label className="form-control-label" for="input-username">
                      Address (Office)
                    </label>
                    <input
                      type="text"
                      id="input-username"
                      className="form-control"
                      placeholder=""
                      disabled={disabledd}
                      value={getlead.Addressoffice}
                      onChange={(e) =>
                        OnChange(e.target.value, "Addressoffice")
                      }
                    ></input>
                  </Col>
                </Row>

                <Row>
                  <Col lg="6" md="6" sm="6">
                    <label className="form-control-label" for="input-username">
                      Profession
                    </label>
                    <input
                      type="text"
                      id="input-username"
                      className="form-control"
                      placeholder=""
                      disabled={disabledd}
                      onBlur={() => CheckFields("Profession")}
                      value={getlead.Profession}
                      onChange={(e) => OnChange(e.target.value, "Profession")}
                    ></input>
                    {error.ProError !== "" && error.ProError !== null && (
                      <small style={{ marginTop: "2px" }}>
                        <span style={{ color: "red" }}>
                          {error.ProError}{" "}
                          <i className="fas fa-exclamation-circle"></i>
                        </span>
                      </small>
                    )}
                  </Col>
                  <Col lg="6" md="6" sm="6">
                    <label className="form-control-label" for="input-username">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="input-username"
                      className="form-control"
                      placeholder=""
                      disabled={disabledd}
                      value={getlead.Organization}
                      onChange={(e) => OnChange(e.target.value, "Organization")}
                    ></input>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6" md="6" sm="6">
                    <label className="form-control-label" for="input-username">
                      Tel (Office)
                    </label>
                    <input
                      type="text"
                      id="input-username"
                      className="form-control"
                      placeholder=""
                      maxLength={11}
                      disabled={disabledd}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      value={getlead.Teloffice}
                      onChange={(e) => OnChange(e.target.value, "Teloffice")}
                    ></input>
                  </Col>
                  <Col lg="6" md="6" sm="6">
                    <label className="form-control-label" for="input-username">
                      Tel (Residence)
                    </label>
                    <input
                      type="text"
                      disabled={disabledd}
                      id="input-username"
                      className="form-control"
                      placeholder=""
                      maxLength={11}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      onBlur={() => CheckFields("TelResidence")}
                      value={getlead.TelResidence}
                      onChange={(e) => OnChange(e.target.value, "TelResidence")}
                    ></input>
                    {error.TError !== "" && error.TError !== null && (
                      <small style={{ marginTop: "2px" }}>
                        <span style={{ color: "red" }}>
                          {error.TError}{" "}
                          <i className="fas fa-exclamation-circle"></i>
                        </span>
                      </small>
                    )}
                  </Col>
                  <Col lg="6" md="6" sm="6">
                    <label className="form-control-label" for="input-username">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="input-username"
                      className="form-control"
                      placeholder="DD-MM-YYYY"
                      disabled={disabledd}
                      //  max={abc}
                      //  onClick={checker}
                      onBlur={() => CheckFields("DOB")}
                      value={getlead.Dateofbirth}
                      onChange={(e) => OnChange(e.target.value, "Dateofbirth")}
                    ></input>
                    {error.DError !== "" && error.DError !== null && (
                      <small style={{ marginTop: "2px" }}>
                        <span style={{ color: "red" }}>
                          {error.DError}{" "}
                          <i className="fas fa-exclamation-circle"></i>
                        </span>
                      </small>
                    )}

                    {/* {(difff < 6575) ? (
                              <small style={{ marginTop: "2px" }}>
                                <span style={{ color: "red" }}>
                                  Age Less than 18 years{" "}
                                  <i className="fas fa-exclamation-circle"></i>
                                </span>
                              </small>
                            ) : ''}
         */}
                  </Col>
                  <Col lg="6" md="6" sm="6">
                    <label className="form-control-label" for="input-username">
                      Nationality
                    </label>
                    <input
                      type="text"
                      id="input-username"
                      className="form-control"
                      placeholder=""
                      onBlur={() => CheckFields("Nationality")}
                      disabled={disabledd}
                      value={getlead.Nationality}
                      onChange={(e) => OnChange(e.target.value, "Nationality")}
                    ></input>
                    {error.NationError !== "" && error.NationError !== null && (
                      <small style={{ marginTop: "2px" }}>
                        <span style={{ color: "red" }}>
                          {error.NationError}{" "}
                          <i className="fas fa-exclamation-circle"></i>
                        </span>
                      </small>
                    )}
                  </Col>
                </Row>
              </div>
            </form>
          </CardBody>
        </CardHeader>
      </Card>

      {/* <Card style={{ margin: '10px' }} className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0"> Nominee Information </h3>
                  <CardBody>
                    <form>
                      <div className="pl-lg-4">
                        <Row>
                          <Col className="centerr" lg="2" md="3" sm="6" xs='12'>
                            < Card style={{ borderColor: 'black', borderRadius: '10px' }}>
        
                              <input type="file"
                                accept=".png,  .jpg"
                                // disabled={disabledd}
                                id='i2'
                                hidden={disabled}
                                style={{ display: 'true', color: 'white' }}
                                onChange={imageHandle2}
                              >
                              </input> <br />
                              <CardImg height='96px' width="96px" alt='Image must be in passport size format' src={wid2 == 192 && hei2 == 192 ? upload2.profileImg : ""} />
                              <CardBody>
        
                              </CardBody>
                            </Card>
                            {(wid2 !== 192 &&
                              hei2 !== 192 && upload2.profileImg !== null) ? (
                              <small style={{ marginTop: "2px" }}>
                                <span style={{ color: "red" }}>
                                  Incorrect Image Format{" "}
                                  <i className="fas fa-exclamation-circle"></i>
                                </span>
                              </small>
                            ) : ''}
                          </Col>
        
                          <Col lg="12" md="6" sm="6">
                            <label
                              className="form-control-label"
                              for="input-username"
                            >
                              Name
                            </label>
        
                            <input
                              type="text"
                              id="input-username"
                              className="form-control"
                              placeholder=""
                              disabled={disabledd}
                              onBlur={() => CheckFields("NomineeName")}
                              value={StateNominee.NomineeName}
                              onChange={(e) => OnChange(e.target.value, "NomineeName")}
                            ></input>
                            {error.NomineeNameError !== "" && error.NomineeNameError !== null && (
                              <small style={{ marginTop: "2px" }}>
                                <span style={{ color: "red" }}>
                                  {error.NomineeNameError}{" "}
                                  <i className="fas fa-exclamation-circle"></i>
                                </span>
                              </small>
                            )}
                          </Col>
                          <Col lg="6" md="6" sm="6">
                            <label
                              className="form-control-label"
                              for="input-username"
                            >
                              Relation with Applicant
                            </label>
                            <input
                              type="text"
                              id="input-username"
                              className="form-control"
                              placeholder=""
                              disabled={disabledd}
                              onBlur={() => CheckFields("NomineeRelation")}
                              value={StateNominee.NomineeRelation}
                              onChange={(e) =>
                                OnChange(e.target.value, "NomineeRelation")
                              }
                            ></input>
                            {error.NomineeRelationError !== "" && error.NomineeRelationError !== null && (
                              <small style={{ marginTop: "2px" }}>
                                <span style={{ color: "red" }}>
                                  {error.NomineeRelationError}{" "}
                                  <i className="fas fa-exclamation-circle"></i>
                                </span>
                              </small>
                            )}
                          </Col>
        
                          <Col lg="6" md="6" sm="6">
                            <label
                              className="form-control-label"
                              for="input-username"
                            >
                              CNIC
                            </label>
                            <input
        
                              type="text"
                              id="input-username"
                              className="form-control"
                              placeholder=""
                              onBlur={() => CheckFields("NomineeCnic")}
                              maxLength={13}
                              disabled={disabledd}
                              onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                  event.preventDefault();
                                }
                              }}
                             
                              value={StateNominee.NomineeCnic}
                              onChange={(e) =>
                                OnChange(e.target.value, "NomineeCnic")
                              }
                            ></input>
                            {error.NomineeCnicError !== "" && error.NomineeCnicError !== null && (
                              <small style={{ marginTop: "2px" }}>
                                <span style={{ color: "red" }}>
                                  {error.NomineeCnicError}{" "}
                                  <i className="fas fa-exclamation-circle"></i>
                                </span>
                              </small>
                            )}
                          </Col>
        
                          <Col lg="6" md="6" sm="6">
                            <label
                              className="form-control-label"
                              for="input-username"
                            >
                              Passport No.
                            </label>
                            <input
                              type="text"
                              id="input-username"
                              disabled={disabledd}
                              className="form-control"
                              placeholder=""
                              value={StateNominee.NomineePassport}
                              onChange={(e) =>
                                OnChange(e.target.value, "NomineePassport")
                              }
                            ></input>
                          </Col>
                          <Col lg="6" md="6" sm="6">
                            <label
                              className="form-control-label"
                              for="input-username"
                            >
                              Telephone
                            </label>
                            <input
                              type="text"
                              id="input-username"
                              className="form-control"
                              onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                  event.preventDefault();
                                }
                              }}
                              disabled={disabledd}
                              placeholder=""
                              onBlur={() => CheckFields("NomineePhone")}
                              value={StateNominee.NomineePhone}
                              maxLength={11}
                              onChange={(e) =>
                                OnChange(e.target.value, "NomineePhone")
                              }
                            ></input>
                            {error.NomineePhoneError !== "" && error.NomineePhoneError !== null && (
                              <small style={{ marginTop: "2px" }}>
                                <span style={{ color: "red" }}>
                                  {error.NomineePhoneError}{" "}
                                  <i className="fas fa-exclamation-circle"></i>
                                </span>
                              </small>
                            )}
                          </Col>
                        </Row>
                      </div>
                    </form>
        
                  </CardBody>
                </CardHeader>
              </Card> */}
      <Project
        Project={props.Project}
        showProject={props.showProject}
        showPlotSector={props.showPlotSector}
        Sector={props.Sector}
        Size={props.Size}
        showPlotSize={props.showPlotSize}
        Type={props.Type}
        showPlotType={props.showPlotType}
        Street={props.Street}
        showPlotStreet={props.showPlotStreet}
        getlead={getlead}
        setlead={setlead}
      />
      <Positioning
        ShowAllPositions={props.ShowAllPositions}
        AllPositions={props.AllPositions}
        getlead={getlead}
        setlead={setlead}
        array={array}
      />

      <Verify
        cnic={getlead.cnic !== undefined && getlead.cnic}
        getData={getData}
      />
      <CardBody>
        <Row>
          <Col lg="3" md="4" sm="6" xs="8">
            <Button color="success" onClick={Addd} size="sm">
              <i class="fas fa-print"></i>
            </Button>
          </Col>
        </Row>
        {/* <Row>
                  <Col lg="3" md="4" sm="6" xs="8" >
                    <label className="form-control-label"> &nbsp;Lock &nbsp;</label>
                    <input
        
                      type="checkbox"
                      name="period"
                      defaultValue
                      hidden={hide}
                      checked={cd}
                      id='ck'
                      onChange={handle}
                    />
        
                    <input
                      style={{ margin: '20px' }}
                      type="checkbox"
                      name="period"
                      defaultValue
                      hidden={!hide}
                      checked
                      id='ck'
                    />
                  </Col>
                  <Col lg="3" md="4" sm="6" xs="8" >
                    <Button color="success"
                      disabled={!disabledd}
                      onClick={handlePrint}
                      size="sm"
                    >
                      
                      <i class="fas fa-print"></i>
                    </Button>
{/*         
                  </Col>
                  <Col lg="3" md="4" sm="6" xs="12"> 
                    <Button color="success" disabled={!disabledd} onClick={Addd} size="sm">
                     <i className="ni ni-fat-add" />
                    </Button>
                    <Button color="success" onClick={Back} size="sm">
                    <i class="fas fa-arrow-left"></i>
                      
                    </Button>
                  </Col>
                </Row> */}

        <hr />
        {/* <Row>
        <Col lg="4" md="4" sm="6">
          <h2>Select a file for save</h2>
          <input type="file" 
           onChange={onFileChange} 
          />

          <Button color="success" 
         onClick={SaveFile} 
          >
            <i class="fas fa-save"></i>
            <span className="btn-inner--icon">Save</span>
          </Button>
        </Col>
      </Row> */}
        <br />
      </CardBody>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isLoading: state.appRequest.isLoading,
  isError: state.appRequest.isError,
  Data: state.appRequest.Users,
  Error: state.appRequest.error,
  Response: state.appRequest.Response,

  Value: state.appRequest.Data,
  Delete: state.viewCustomerDetail.Delete,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    GetData: (body, OnSuccess, OnFailure) =>
      dispatch(GetData(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(Personal);

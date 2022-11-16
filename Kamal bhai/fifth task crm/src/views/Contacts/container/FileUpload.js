import React from "react";
import swal from "sweetalert";
import { Button } from "reactstrap";
import { useState } from "react";
import { Tooltip } from "reactstrap";
const FileUpload = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState({
    upload: false,
  });
  const toggle = (name) => {
    if (name == "upload") {
      setTooltipOpen({ ...tooltipOpen, upload: !tooltipOpen.upload });
    }
  };
  function GetFormattedCurrentDate(d) {
    if (d == null) {
      return null;
    }
    var date = new Date(d);
    return (
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
  }
  const upload = () => {
    let wrongRow = 0;
    let arrayWrongRow = [];

    if (
      props.arrayOfUploadedFile[0] !== null &&
      props.arrayOfUploadedFile[0] !== undefined
    ) {
      if (
        props.arrayOfUploadedFile[0][0] == "user_name" &&
        props.arrayOfUploadedFile[0][1] == "user_email" &&
        props.arrayOfUploadedFile[0][2] == "user_phone" &&
        props.arrayOfUploadedFile[0][3] == "Dashboarduserid" &&
        props.arrayOfUploadedFile[0][4] == "Father" &&
        props.arrayOfUploadedFile[0][5] == "cnic" &&
        props.arrayOfUploadedFile[0][6] == "PassportNo" &&
        props.arrayOfUploadedFile[0][7] == "Dateofbirth" &&
        props.arrayOfUploadedFile[0][8] == "Profession" &&
        props.arrayOfUploadedFile[0][9] == "Organization" &&
        props.arrayOfUploadedFile[0][10] == "Addressoffice" &&
        props.arrayOfUploadedFile[0][11] == "AddressResidence" &&
        props.arrayOfUploadedFile[0][12] == "Teloffice" &&
        props.arrayOfUploadedFile[0][13] == "TelResidence" &&
        props.arrayOfUploadedFile[0][14] == "Nationality"
      ) {
        for (var i = 1; i < props.arrayOfUploadedFile.length; i++) {
          var dataarray = [];
          dataarray = props.arrayOfUploadedFile[i];
          if (
            dataarray[0] == null ||
            dataarray[1] == null ||
            dataarray[2] == null
          ) {
            arrayWrongRow[wrongRow] = i;
            wrongRow++;

            swal(
              "Row Number: " + arrayWrongRow + "",
              "something is wrong with row " + arrayWrongRow + "",
              "error"
            );
          } else {
            if (dataarray[3] == "null" || dataarray[3] == null) {
              bodyOfApi = {
                user_name: dataarray[0],
                user_email: dataarray[1],
                user_phone: dataarray[2],
                Dashboarduserid: null,
                Leadsource: 4,
                Father: dataarray[4] !== "" ? dataarray[4] : null,
                cnic: dataarray[5] !== "" ? dataarray[5] : null,
                PassportNo: dataarray[6] !== "" ? dataarray[6] : null,
                Dateofbirth:
                  dataarray[7] !== ""
                    ? GetFormattedCurrentDate(dataarray[7])
                    : null,
                Profession: dataarray[8] !== "" ? dataarray[8] : null,
                Organization: dataarray[9] !== "" ? dataarray[9] : null,
                Addressoffice: dataarray[10] !== "" ? dataarray[10] : null,
                AddressResidence: dataarray[11] !== "" ? dataarray[11] : null,
                Teloffice: dataarray[12] !== "" ? dataarray[12] : null,
                TelResidence: dataarray[13] !== "" ? dataarray[13] : null,
                Nationality: dataarray[14] !== "" ? dataarray[14] : null,
              };
            } else {
              bodyOfApi = {
                user_name: dataarray[0],
                user_email: dataarray[1],
                user_phone: dataarray[2],
                Dashboarduserid: dataarray[3],
                Leadsource: 4,
              };
            }

            props.NewUser(bodyOfApi, onSuccessUpload, onFailureUpload);
          }
        }
      } else {
        swal("Wrong File!", "Please Choose Correct Excel File", "error");
      }
    }
  };
  let bodyOfApi = {};
  const onSuccessUpload = () => {
    swal({
      title: "Congratulations!",
      text: "Lead Added From Uploaded File",
      type: "Success",
    }).then(function (isConfirm) {
      if (isConfirm) {
        window.location.reload();
      } else {
        window.location.reload();
      }
    });
  };
  const onFailureUpload = (e) => {
    swal({
      title: "Sorry!",
      text: e,
      //text: "Something Went Wrong Please Try Again Later or Contact Admin",
      type: "error",
    }).then(function (isConfirm) {
      if (isConfirm) {
      } else {
        swal({});
      }
    });
  };
  return (
    <>
      <Button
        color="info"
        size="sm"
        onClick={upload}
        id="upload"
        className="mt--1"
      >
        <span className="btn-inner--icon">
          <i class="fas fa-upload"></i>
        </span>
      </Button>
      <Tooltip
        placement="bottom"
        isOpen={tooltipOpen.upload}
        autohide={false}
        target="upload"
        toggle={() => toggle("upload")}
      >
        Upload Leads
      </Tooltip>
    </>
  );
};
export default FileUpload;

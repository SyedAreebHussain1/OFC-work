import React from "react";
import swal from "sweetalert";
import { Button } from "reactstrap";
const FileUpload = (props) => {
  const { uploadCurrrencyNotes } = props;

  const upload = () => {
    if (
      props.arrayOfUploadedFile[0] !== null &&
      props.arrayOfUploadedFile[0] !== undefined
    ) {
      if (
        props.arrayOfUploadedFile[0][0] == "10rs" &&
        props.arrayOfUploadedFile[0][1] == "50rs" &&
        props.arrayOfUploadedFile[0][2] == "100rs"
      ) {
        let body = {
          data: props.arrayOfUploadedFile,
        };
        uploadCurrrencyNotes(body, onSuccessUpload, onFailureUpload);
      } else {
        swal("Wrong File!", "Please Choose Correct Excel File", "error");
      }
    }
  };

  const onSuccessUpload = () => {
    swal({
      title: "Congratulations!",
      text: "Currency Added From Uploaded File",
      type: "Success",
    }).then(function (isConfirm) {
      if (isConfirm) {
        window.location.reload();
      } else {
        window.location.reload();
      }
    });
  };

  const onFailureUpload = () => {
    swal({
      title: "Sorry!",
      text: "Something Went Wrong Please Try Again Later or Contact Admin",
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
        color="danger"
        size="sm"
        onClick={upload}
        id="uploadFile"
        className="mt--1"
      >
        <span className="btn-inner--icon">
          <i class="fas fa-upload"></i>
        </span>
      </Button>
    </>
  );
};

export default FileUpload;

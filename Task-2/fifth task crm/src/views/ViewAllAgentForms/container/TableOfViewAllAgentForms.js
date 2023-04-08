import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Button, Col, Input, Row, Table } from "reactstrap";
// import { useBarcode } from "@createnextapp/react-barcode";
import swal from "sweetalert";
// import bwipjs from "bwip-js";
import BarCode from "react-barcode";
import ApproveFormModal from "./ApproveFormModal";

const TableOfViewAllAgentForms = (props) => {
  const { upgradeFormStatus } = props;
  const [barcode, setBarcode] = useState("xxxxxxxx");
  const [multiBarcode, setMultiBarcode] = useState([]);
  const [newMultiArray, setNewMultiArray] = useState([]);
  const [singleBarcode, setSingleBarcode] = useState([]);
  var checkboxes = document.getElementsByName("check");

  const [isOpen, setIsOpen] = useState(false);
  const [post, setPost] = useState(false);
  const ToggleApproveFormModal = (post) => {
    setPost(post);
    // getSupportFiles({ support_id: id }, onSuccess, onFailure);
    // setComment(comment);
    setIsOpen(!isOpen);
  };
  // const svgRef = useRef();

  // const { inputRef } = useBarcode({
  //   value: barcode,
  //   options: {
  //     background: "#ffffff",
  //     text:"xxxxxxxx"
  //   },
  // });

  // const onSuccess = () => {
  //   setBarcode("xxxxxxxx");
  //   swal("Congratulations!", "Barcode generated successfully", "success");
  // };
  // const onFailure = () => {};

  // const upgradeStatus = (barcodeArray) => {
  //   let body = {
  //     FormStatus: 71,
  //     remarks: "ok",
  //     Statusarr: barcodeArray,
  //   };
  //   upgradeFormStatus(body, onSuccess, onFailure);
  // };

  // const barCodeGenerate = () => {
  //   const svg = svgRef.current.innerHTML;
  //   const blob = new Blob([svg], { type: "image/svg+xml" });
  //   const objectUrl = URL.createObjectURL(blob);
  //   let downloadLink = document.createElement("a");
  //   downloadLink.href = objectUrl;
  //   downloadLink.download = `mybarcode${barcode}.svg`;
  //   document.body.appendChild(downloadLink);
  //   downloadLink.click();
  //   document.body.removeChild(downloadLink);
  //   // const canvas = document.getElementById("mybarcode");

  //   // const pngUrl = canvas
  //   //   .toDataURL("image/png")
  //   //   .replace("image/png", "image/octet-stream");
  //   // downloadLink.href = pngUrl;
  //   // downloadLink.download = `mybarcode${barcode}.png`;
  //   // document.body.appendChild(downloadLink);
  //   // downloadLink.click();
  //   // document.body.removeChild(downloadLink);
  //   // upgradeStatus();
  // };
  const downloadBarcode = (canvas) => {
    // const canvas = document.getElementById("mycanvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "mybarcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  const onHandleBC = (num, index) => {
    // ref through all svg
    var svg = document.querySelectorAll("svg");
    var data = new XMLSerializer().serializeToString(svg[index]);
    // make it base64
    var svg64 = btoa(data);
    var b64Start = "data:image/svg+xml;base64,";

    // prepend a "header"
    var image64 = b64Start + svg64;

    const downloadLink = document.createElement("a");
    downloadLink.href = image64;
    downloadLink.download = `mybarcode-${num}`;
    downloadLink.click();
  };
  const addInArray = (boolean, code, barCode) => {
    if (boolean === true) {
      setMultiBarcode([...multiBarcode, code]);
      setNewMultiArray([...newMultiArray, barCode]);
    } else if (boolean === false) {
      let position = multiBarcode.indexOf(code);
      multiBarcode.splice(position, 1);
      let position1 = newMultiArray.indexOf(barCode);
      newMultiArray.splice(position1, 1);
    }
  };

  const multiPrint = () => {
    newMultiArray.map((num, index) => {
      onHandleBC(num, index);
    });
    // upgradeStatus(multiBarcode);
    setMultiBarcode([]);
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
  };

  const singlePrint = () => {
    // singleBarcode.map((num, index) => {
    onHandleBC(singleBarcode[1], 1);
    // });
    // upgradeStatus([singleBarcode[0]]);
    setSingleBarcode([]);
  };
  // const multiPrint = (val) => {
  //   // for (let i = 0; i < tempArr.length; i++) {
  //   //   const element = tempArr[i];
  //   //   setBarcode({...barcode , element});
  //   // }
  //   setBarcode(tempArr)
  //   // tempArr.map((i) => {
  //   //   setBarcode({...barcode , i});
  //   // });

  // };

  // useEffect(() => {
  //   if (barcode !== "xxxxxxxx") {
  //     barCodeGenerate();
  //   }
  // }, [barcode]);

  useEffect(() => {
    if (singleBarcode.length === 2) {
      singlePrint();
    }
  }, [singleBarcode]);

  return (
    <>
      {/* <div ref={svgRef} style={{ display: "none" }}>
        <svg id="mybarcode" ref={inputRef} />
      </div> */}
      {/* <canvas id="mycanvas" style={{ display: "none" }}></canvas> */}
      <div style={{ display: "none" }}>
        {newMultiArray.map((code, index) => {
          return <BarCode value={code} key={index} />;
        })}
        {singleBarcode.map((code, index) => {
          return <BarCode value={code} key={index} />;
        })}
      </div>

      {/* <BarCode value={item.value} /> */}
      <ApproveFormModal
        modal={isOpen}
        toggle={ToggleApproveFormModal}
        post={post}
        upgradeFormStatus={upgradeFormStatus}
        // supportImages={supportFiles || []}
        // comment={comment}
      />
      <Row>
        <Col>
          <Button
            onClick={multiPrint}
            disabled={multiBarcode.length > 0 ? false : true}
            color="success"
          >
            Print
          </Button>
        </Col>
      </Row>
      <br />
      <Table className="align-items-center" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col"></th>
            <th scope="col">S.No</th>
            <th scope="col">Agent's Name</th>
            <th scope="col">Form No</th>
            <th scope="col">Deposite Slip No.</th>
            <th scope="col">10Rs</th>
            <th scope="col">50Rs</th>
            <th scope="col">100Rs</th>
            <th scope="col">Verified</th>
            <th scope="col">Verification Amount</th>
            <th scope="col">Unit Amount</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.paginatedPosts !== null &&
          props.paginatedPosts !== undefined ? (
            props.paginatedPosts.map((posts, index) => {
              return (
                <tr>
                  <td>
                    <Input
                      style={{ position: "static" }}
                      type="checkbox"
                      name="check"
                      onChange={(e) =>
                        addInArray(e.target.checked, posts.FromId, posts.FormNo)
                      }
                      disabled={posts.FormStatus !== 70}
                    />
                  </td>
                  <td>{index + 1}</td>
                  <td>{posts.name}</td>
                  <td>{posts.FormNo}</td>
                  <td>{posts.FormSlipNumber}</td>
                  <td>{posts["10Rs"]}</td>
                  <td>{posts["50Rs"]}</td>
                  <td>{posts["100Rs"]}</td>
                  <td>{posts.NoOfVerify}</td>
                  <td>
                    {posts.TotalVerifyAmount ? posts.TotalVerifyAmount : 0}
                  </td>
                  <td>{posts.amount ? posts.amount : "null"}</td>
                  <td>{posts.VerifyStatusName}</td>
                  <td>
                    <Button
                      color="info"
                      size="sm"
                      // disabled
                      onClick={() => ToggleApproveFormModal(posts)}
                    >
                      <span className="btn-inner--icon">
                        <i className="fas fa-eye"></i>
                      </span>
                    </Button>
                    {/* <Button color="danger" disabled size="sm">
                      <span className="btn-inner--icon">
                        <i class="fas fa-trash-alt"></i>
                      </span>
                    </Button> */}

                    <Button
                      color="success"
                      size="sm"
                      disabled={posts.FormStatus !== 70}
                      onClick={() =>
                        setSingleBarcode([posts.FromId, posts.FormNo])
                      }
                    >
                      <span className="btn-inner--icon">
                        <i class="fas fa-barcode"></i>
                      </span>
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <th></th>
              <th></th>
              <th>
                <h3>No data found</h3>
              </th>
              <th></th>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default TableOfViewAllAgentForms;

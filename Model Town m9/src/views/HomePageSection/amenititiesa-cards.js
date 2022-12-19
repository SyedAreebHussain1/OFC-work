import React, { useEffect, useState } from "react";
import "./amenititiesa.css";
import '../../assets/styles/tailwind.css'
import { Col, Row } from "reactstrap";

// import { useSelector, useDispatch } from "react-redux";

import img1 from '../../assets/imgfolder1/cctv.jpg'
import img2 from '../../assets/imgfolder1/electricity.jpg'
import img3 from '../../assets/imgfolder1/waste.jpg'
import img4 from '../../assets/imgfolder1/modernhouse.jpg'
import img5 from '../../assets/imgfolder1/road.jpg'
import img6 from '../../assets/imgfolder1/suigas.jpg'

const AmenCards = () => {

  let propss = [
    {
      name: 'CCTV',
      btn: 'See more',
      desc: 'Our security teams duties are primarily to secure and protect the residents of society.',
      img: img1
    },
    {
      name: 'Electricity Power',
      btn: 'See more',
      desc: 'Providing Electricity advantages that can benefit your family and Society Road Networks.',
      img: img2

    },
    {
      name: 'Waste Management',
      btn: 'See more',
      desc: 'Includes daily routine collection, transportation, processing, and disposal.',
      img: img3

    },
    {
      name: 'Modern Infrastructure',
      btn: 'See more',
      desc: 'Social & Economic Infrastructure provides Schools, Wide-Roads, and Ready-Made Houses.',
      img: img4

    },
    {
      name: 'Wide Road Network',
      btn: 'See more',
      desc: 'A system of interconnected paved carriageways designed to carry buses, cars, and goods vehicles.',
      img: img5

    },
    {
      name: 'Natural Gas',
      btn: 'See more',
      desc: 'Because it burns smoother, it is the most environmentally beneficial fossil fuel.',
      img: img6

    }
  ]
  // console.log(propss)
  const data = 'en'


  return (
    <>
      <Row className="pb-5 ">
        {
          propss.map((itemss, i) => {
            return (
              <Col lg="4" md="6" sm="12" xs="12" className="p-4" key={i}>

                <div
                  style={
                    data == "en"
                      ? { backgroundImage: `url(${propss[i].img})`, fontFamily: "", objectFit: 'contain' }
                      : {
                        backgroundImage: `url(${propss[i].img})`,
                        fontFamily: "JameelNoori"
                      }

                  }
                  // style={{ backgroundImage: `url(${itemss.img})`, fontFamily: "Poppins", border: '1px solid green' }}

                  className="amencard"
                // style={{border:'1px solid green'}}
                >
                  <div className="amencard-content">
                    <h6 className="amencard-title" style={{ marginTop: "-15px" ,paddingBottom:'6px'}}>{itemss.name}</h6>
                    <p
                      style={data == "en" ? {} : {}}
                      className="amencard-body"
                    >
                      {itemss.desc}{" "}
                      {itemss.desc.includes("modern amenities") ||
                        itemss.desc.includes("island resort") ||
                        itemss.desc.includes("ready-made") ||
                        itemss.desc.includes("franchise") ? (
                        <span
                          // unselectable="on"
                          style={{
                            color: "transparent",
                            cursor: "context-menu",
                            userSelect: "none",
                          }}
                        >
                          fsdfdfdfsd
                        </span>
                      ) : null}
                    </p>
                  </div>
                </div>
              </Col>
            )
          })
        }
      </Row>
      <div>

      </div>


      {/* <div style={{ display: 'flex', justifyContent: 'space-between',padding:'' }}>
        <div
          style={
            data == "en"
              ? { backgroundImage: `url(${propss[0].img})`, fontFamily: "Poppins" }
              : {
                backgroundImage: `url(${propss[0].img})`,
                fontFamily: "JameelNoori"
              }

          }
          // style={{ backgroundImage: `url(${itemss.img})`, fontFamily: "Poppins", border: '1px solid green' }}

          className="amencard flexdirect"
        // style={{border:'1px solid green'}}
        >
          <div className="amencard-content">
            <h2 className="amencard-title">{propss[0].name}</h2>
            <p
              style={data == "en" ? {} : { textAlign: "right" }}
              className="amencard-body"
            >
              {propss[0].desc}{" "}
              {propss[0].desc.includes("modern amenities") ||
                propss[0].desc.includes("island resort") ||
                propss[0].desc.includes("ready-made") ||
                propss[0].desc.includes("franchise") ? (
                <span
                  // unselectable="on"
                  style={{
                    color: "transparent",
                    cursor: "context-menu",
                    userSelect: "none",
                  }}
                >
                  fsdfdfdfsd
                </span>
              ) : null}
            </p>
          </div>
        </div>
        <div>
        </div>

        <div
          style={
            data == "en"
              ? { backgroundImage: `url(${propss[1].img})`, fontFamily: "Poppins" }
              : {
                backgroundImage: `url(${propss[1].img})`,
                fontFamily: "JameelNoori"
              }

          }
          // style={{ backgroundImage: `url(${itemss.img})`, fontFamily: "Poppins", border: '1px solid green' }}

          className="amencard flexdirect"
        // style={{border:'1px solid green'}}
        >
          <div className="amencard-content">
            <h2 className="amencard-title">{propss[1].name}</h2>
            <p
              style={data == "en" ? {} : { textAlign: "right" }}
              className="amencard-body"
            >
              {propss[1].desc}{" "}
              {propss[1].desc.includes("modern amenities") ||
                propss[1].desc.includes("island resort") ||
                propss[1].desc.includes("ready-made") ||
                propss[1].desc.includes("franchise") ? (
                <span
                  // unselectable="on"
                  style={{
                    color: "transparent",
                    cursor: "context-menu",
                    userSelect: "none",
                  }}
                >
                  fsdfdfdfsd
                </span>
              ) : null}
            </p>
          </div>
        </div>
        <div>
        </div>
        <div
          style={
            data == "en"
              ? { backgroundImage: `url(${propss[2].img})`, fontFamily: "Poppins" }
              : {
                backgroundImage: `url(${propss[2].img})`,
                fontFamily: "JameelNoori"
              }

          }
          // style={{ backgroundImage: `url(${itemss.img})`, fontFamily: "Poppins", border: '1px solid green' }}

          className="amencard flexdirect"
        // style={{border:'1px solid green'}}
        >
          <div className="amencard-content">
            <h2 className="amencard-title">{propss[2].name}</h2>
            <p
              style={data == "en" ? {} : { textAlign: "right" }}
              className="amencard-body"
            >
              {propss[2].desc}{" "}
              {propss[2].desc.includes("modern amenities") ||
                propss[2].desc.includes("island resort") ||
                propss[2].desc.includes("ready-made") ||
                propss[2].desc.includes("franchise") ? (
                <span
                  // unselectable="on"
                  style={{
                    color: "transparent",
                    cursor: "context-menu",
                    userSelect: "none",
                  }}
                >
                  fsdfdfdfsd
                </span>
              ) : null}
            </p>
          </div>
        </div>
        <div>
        </div>
      </div> */}
    </>
  );
};
export default AmenCards;

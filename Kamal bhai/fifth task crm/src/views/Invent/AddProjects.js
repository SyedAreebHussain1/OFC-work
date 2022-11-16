import axios from "axios";
import React from "react";
import {Modal,ModalHeader,ModalBody,ModalFooter,} from "reactstrap";
import { useState,useEffect } from "react";


const AddProjects = (props) => {
    return (
        <Modal size="sm" isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>
          <h3>
            {props.project.projectid}
            {props.project.Project_name}
          </h3>
        </ModalHeader>
        <ModalBody>
        </ModalBody>
        <ModalFooter>
        <input type="file"
      accept=".xlsx, .xls, .csv"
           id='fileinput'
      >
        </input> 
        </ModalFooter>
      </Modal>
    );
  };
export default AddProjects

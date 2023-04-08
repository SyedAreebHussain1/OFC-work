import React,{useEffect} from 'react'
import {Button,Table,} from "reactstrap";
import { Tooltip } from "reactstrap";

const TableOfFileInfo = (props) => {

  const dateTime=(date)=>{
    let str = date
  str = str.split("T");
  return str[0]
  }
    return (
        <>
            <Table className="align-items-center" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">S.No</th>
                       <th scope="col">Agent Name</th>
                       <th scope="col">Date</th>
                        <th scope="col">Call Outcome</th> 
                        <th scope="col">Call Outcome description</th>
                        <th scope="col">Log type</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.paginatedPosts !== null &&
                        props.paginatedPosts !== undefined ?(
                        props.paginatedPosts.map((posts, index) => {
                            return (
                              <tr>
                                <td>{index+1}</td>
                                <td>{posts.Agentname}</td>
                                <td>{dateTime(posts.Datetime)}</td>
                                <td>{posts.CallOutcome}</td> 
                                <td>{posts.CallOutcomedescription}</td>
                                <td>{posts.logtype}</td>
                               

                                {/* <td>{dateFunction(posts.Datetime).toLocaleString('en-US', {timeZone: 'Asia/Karachi'})}</td> */}
                                <td>
                                  {/* <Button color="danger"size="sm"onClick={(e) => toggler(posts)}id="info">
                                    <span className="btn-inner--icon">
                                      <i class="fas fa-info-circle"></i>
                                    </span>
                                  </Button> */}
                                  {/* <Tooltip placement="bottom"isOpen={tooltipOpen.info}autohide={false}target="info"toggle={() => toggle("info")}>Detail</Tooltip>
                                
                         
                                  <Button color="info"size="sm"
                                  onClick={()=>onClickProceed(posts)}>
                                    <span className="btn-inner--icon">
                                     
                                      <i class="fas fa-arrow-right"></i>
                                    </span>
                                  </Button> */}
                                  {/* <Tooltip placement="bottom"isOpen={tooltipOpen.info}autohide={false}target="info"toggle={() => toggle("info")}>Detail</Tooltip> */}
                                </td>
                              </tr>
                            );
                        }
                        )):<tr>
                        <th></th>
                        <th></th>
                        <th></th>
                         <th><h3>No data found</h3></th>
                        <th></th></tr>
                        }
                    </tbody>
                  </Table>
                  
        </>
    )
}

export default TableOfFileInfo

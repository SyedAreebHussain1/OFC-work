import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { Badge, Button, Col, Input, Row, Table, Label } from "reactstrap";
import { connect } from "react-redux";
import { get_Report } from "../middleware";
import { async } from "validate.js";

const UserProfile = (props) => {
  const { Reports, get_Report } = props;
  const [data,setData] = useState(null)
  // console.log(data)
  console.log("props user=>", Reports);
  // console.log("props user 100=>", Reports[100]);
  // useEffect (async() => {
  //   // if(){
  //     let bb = await Reports;
  //     console.log('bb',bb)
  // }, []);
  useEffect (() => {
    // if(){
       get_Report();
      // console.log('bb',bb)
      // setData(bb)
      // if(props !== null){
      // }else{
      //   // 
      // }
  }, []);
  return (
    <div>
      {/* <Row className="mt-5">
        <Col xl="2" lg="4" md="4" sm="6" xs="6">
          <Label className="form-control-label"> Rows Per Pages </Label>
          <Input
            id="exampleFormControlSelect1"
            type="select"
            // onChange={(e) => onChangeNoOfRows(e.target.value)}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </Input>
        </Col>
      </Row> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <Table className="align-items-center" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">user name</th>
            <th scope="col">cnic</th>
            <th scope="col">sale order</th>
            <th scope="col">1</th>
            <th scope="col">2</th>
            <th scope="col">3</th>
            <th scope="col">4</th>
            <th scope="col">5</th>
            <th scope="col">6</th>
            <th scope="col">7</th>
            <th scope="col">8</th>
            <th scope="col">9</th>
            <th scope="col">10</th>
            <th scope="col">11</th>
            <th scope="col">12</th>
            <th scope="col">13</th>
            <th scope="col">14</th>
            <th scope="col">15</th>
            <th scope="col">16</th>
            <th scope="col">17</th>
            <th scope="col">18</th>
            <th scope="col">19</th>
            <th scope="col">20</th>
            <th scope="col">21</th>
            <th scope="col">21</th>
            <th scope="col">22</th>
            <th scope="col">23</th>
            <th scope="col">24</th>
            <th scope="col">25</th>
            <th scope="col">26</th>
            <th scope="col">27</th>
            <th scope="col">28</th>
            <th scope="col">29</th>
            <th scope="col">30</th>
            <th scope="col">31</th>
            <th scope="col">32</th>
            <th scope="col">33</th>
            <th scope="col">34</th>
            <th scope="col">35</th>
            <th scope="col">36</th>
            <th scope="col">37</th>
            <th scope="col">38</th>
            <th scope="col">39</th>
            <th scope="col">40</th>
            <th scope="col">41</th>
            <th scope="col">42</th>
            <th scope="col">43</th>
            <th scope="col">44</th>
            <th scope="col">45</th>
            <th scope="col">46</th>
            <th scope="col">47</th>
            <th scope="col">48</th>
            <th scope="col">49</th>
            <th scope="col">50</th>
            <th scope="col">51</th>
            <th scope="col">52</th>
            <th scope="col">53</th>
            <th scope="col">54</th>
            <th scope="col">55</th>
            <th scope="col">56</th>
            <th scope="col">57</th>
            <th scope="col">58</th>
            <th scope="col">59</th>
          </tr>
        </thead>
        <tbody>
          {Reports?.map((v, i) => {
            console.log('v',v)
            return (
              <tr key={i}>
                <td>{i}</td>
                <td>{v.user_name}</td>
                <td>{v.CNIC}</td>
                <td>{v.SaleOrderNo}</td>
                {/* <td>Farha</td>
                <td>ALi</td>
                <td>Khan</td>
                <td>ali</td>
                <td>Hussain</td>
                <td>Areeb</td> */}
              </tr>
            );
          })}
          <tr>
            <th></th>
            <th></th>
            <th>
              <h3>No data found</h3>
            </th>
            <th></th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
const mapStateToProps = (state) => ({
  Reports: state.Report?.Reports,
});

const mapDispatchToProps = (dispatch) => ({
  get_Report: (onSuccess, onFailure) =>
    dispatch(get_Report(onSuccess, onFailure)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

import React,{useState, useEffect} from 'react';
import jsPDF from "jspdf";
import { connect } from "react-redux";
import { showReport } from "../middleware";
import {
    Button,
  } from "reactstrap";
const PDF = (props) => {
  
    // const [body, setBody] = useState({
    //     projectid: props.data.id
    //   });
    
      var arr1 = [];
      useEffect(() => {
          let body ={
            projectid: props.data.id
          }
      
        // if (body !== 0) {
          props.showReport(body, onsuccessReport, onfailureReport);
         
          arr1.push(props.Report)
        // }
       
      }, [props.data])
      const onsuccessReport = () => { }
      const onfailureReport = () => { }
    
    const columns = [
        { title: "Plot no", field: "Plot_no", },
        { title: "Project name", field: "Project_name", },
        { title: "Sector Name", field: "Sector_Name", },
        { title: "PlotType Name", field: "PlotType_Name", },
        { title: "Category Name", field: "CategoryName", },
        { title: "House Status", field: "House_StatusName", },
        { title: "Name", field: "user_name", },
        { title: "Phone", field: "user_phone", },
        { title: "Sell Agent Name", field: "SellAgentName", },
        { title: "Team Name", field: "TeamName", },
        { title: "Sale Quotation No", field: "SaleQuotationNo", },
    ]
    const printDocument = (e) => {
        
   
        // if (e.id !== 0) {
           
            const doc = new jsPDF();
            doc.text(e.label, 20, 10)
            doc.autoTable({
                columns: columns.map(col => ({ ...col, dataKey: col.field })),
                body: arr1[0],
                styles: { fontSize: 8, cellWidth: 'auto', halign: 'justify' },
                columnStyles: {
                    4: { cellWidth: 'wrap' },
                    5: { cellWidth: 'wrap' },
                    6: { cellWidth: 'wrap' }
                },
                rowPageBreak: 'avoid',
            })
            // setBody({ ...body, projectid: e.id })
            doc.save('download.pdf')
        // }
    }
    return (
        <Button color="success"
            onClick={(e) => printDocument(props.data)}
        >
            Print &nbsp;
            <i class="fas fa-print"></i>
        </Button>
    )
}
const mapStateToProps = (state) => ({
  isLoading: state.allProjectsGraph.isLoading,
  isError: state.allProjectsGraph.isError,
  Error: state.allProjectsGraph.error,
  Report: state.allProjectsGraph.Report,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    showReport: (body, OnSuccess, OnFailure) =>
      dispatch(showReport(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(PDF);
// export default PDF

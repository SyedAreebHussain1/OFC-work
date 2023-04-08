import jsPDF from 'jspdf'
import React from 'react'
import { Button } from 'reactstrap'
import PalmDreamLogo from '../../Payments/images/palm_dreams_logo.png'


const Print = (props) => {

    const PlotChange=()=>{
    var today = new Date();
    var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
        var lMargin=15; 
        var rMargin=15; 
        var pdfInMM=210;
      
       const doc = new jsPDF();
        doc.setFont("Helvetica");
        doc.setFontSize(10);
        doc.addImage(PalmDreamLogo, 'JPEG', 150, 10, 40,40);
        doc.text(date, 20, 50);
        doc.text("Subject:", 20, 80);
        doc.text("Change in allocation number", 40, 80);
         doc.text("Dear Mr/Ms "+props.posts.user_name +"," , 20, 100);
     
     
        let para1="Please note that the Plot No."+props.posts.oldPlot+" "+ props.posts.OldPlotSize+"sqyds allocated to you previously has now been changed to Plot No."+props.posts.newPlot+" "+ props.posts.OldPlotSize+"sqyds due to the change in Sectors Layout. ";
       
      let paragraph1 =  doc.splitTextToSize(para1, (pdfInMM-lMargin-rMargin));
      doc.text(paragraph1, 20, 110);
      doc.text("Currency verification no", 20, 160);
      doc.text("This is a computer-generated Document therefore it does not require any signatures.", 40, 270);
 
    
        doc.save("PlotChange");
    }
    return (
        <>
            <Button color="danger" id="search" size="sm" 
                                         onClick={ PlotChange}
                                        
                                        disabled={props.posts.requestStatusId!==59}>
                                                <span className="btn-inner--text"></span>
                                                <span className="btn-inner--icon">
                                                <i class="fas fa-print"></i>
                                                </span>
                                            </Button>
                                            
            
        </>
    )
}

export default Print

import React, { useEffect, useState } from 'react'
import { Pie, Chart } from "react-chartjs-2";


const Projects = (props) => {
  const [stage, setStage] = useState("");

  useEffect(() => {
   
    props.showProjectsGraph(onsuccess, onfailure);
   
  }, [true])

  useEffect(() => {

    let labels = [];
    let data = [];
    if (props.Project !== null && props.Project !== undefined) {
      props.Project.map(element => {
    
        labels.push(element.Project_name);
        data.push(element.Plot);
      });
    }

    setStage({
      labels: labels,
      datasets: [{
        label: "Project",
        data: data,
        backgroundColor: [
          'blue',
          '#fb6340',
          '#577893',
          'rgb(94, 82, 228)',
          'rgb(255, 205, 86)',
          'rgb(255, 99, 132)',
        ],
        hoverBackgroundColor: [
          'blue',
          '#fb6340',
          '#577893',
          'rgb(94, 82, 228)',
          'rgb(255, 205, 86)',
          'rgb(255, 99, 132)',
        ],
        defaultStatus: false,
        // borderWidth: 1
      }]
    });
  }, [props.Project])
  const onsuccess = () => { }
  const onfailure = () => { }
  return (
    <div>
      <div className="chart">
        {/* <canvas width="200" height="200"></canvas> */}
        {Object.keys(stage).length &&
          <Pie
            data={stage}
            // width='350px'
            // height="420px"
            // options={stage}
            options={{
              title: {
                display: true,
                text: 'Year 2021',
                fontSize: 15
              },
              animation:{
                animateScale: true,
              },
              legend: {
                display: true,
                position: 'top'
              }
            }}
          />}
      </div>
    </div>
  )
}

export default Projects

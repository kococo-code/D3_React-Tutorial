import React from 'react';
import LineCharts from '../LineChart/LineChartComponent';
import ReChart from '../LineChart/reChart';
import HookChart from '../LineChart/Hook';
export default function LineChart(){
    let wording ={
        position : 'absolute',
        left : 300,
        top : 50,
        fontSize : 30
      }
      let data = [
        {
          x : 0,
          y : 1.22
        },
        {
          x: 1,
          y: 1.55
        },
        {
          x : 2,
          y: 2.43
        },
        {
          x: 3,
          y: 1.2
        },
        {
          x:4,
          y:5.5
        }
      ]
      let epoch = [1,2,3,4]
      let loss = [1.22,1.55,2.43,0.12]

      return(
          <div>
               <span style={wording}>Line Graph</span>
                <div className="LineChartComponent" >
                    <LineCharts data={data}></LineCharts>
                </div>
                <div className="LineChart_reChart">
                <ReChart data={data}></ReChart>
                </div> 
          </div>
      )
}
import React from 'react';
import './App.css';
import './css/LineChart.css';
import LinearChart from './LineChart/Component';
import ReChart from './LineChart/reChart';
import HookChart from './LineChart/Hook';
function App() {
  let wording ={
    position : 'absolute',
    left : 405,
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
    }
  ]
  let epoch = [1,2,3,4]
  let loss = [1.22,1.55,2.43,0.12]
  return (
    <div className="App">
      <span style={wording}>Line Graph</span>
    <div className="LineChartComponent" >
      <LinearChart data={data} loss={loss} epoch={epoch}></LinearChart>
    </div>
    <div className="LineChart_reChart">
  
      <ReChart data={data}></ReChart>
      </div>
    </div>
  );
}

export default App;

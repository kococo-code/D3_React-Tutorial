import React from 'react';
import './App.css';
import LinearChart from './LineChart/Component'
import HookChart from './LineChart/Hook';
function App() {
  let CompoenentStyle ={
    position : 'absolute',
    left : 50,
    top : 100,
    width : 800,
    height : 300,
    backgroundColor : "#ffffff",
    border : "1px solid #000000"
  }
  let HookStyle ={
    position : 'absolute',
    left : 50,
    top: 500,
    width : 800,
    height : 300,
    backgroundColor : "#222222",
    border : "1px solid #000000"
  }
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
      y: 0.12
    }
  ]
  let epoch = [1,2,3,4]
  let loss = [1.22,1.55,2.43,0.12]
  return (
    <div className="App">
      <span style={wording}>Line Graph</span>
    <div style={CompoenentStyle}>
      <LinearChart data={data} loss={loss} epoch={epoch}></LinearChart>
    </div>
    <div style={HookStyle}>
      <HookChart data={data}></HookChart>
    </div>
    </div>
  );
}

export default App;

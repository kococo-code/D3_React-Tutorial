import React from 'react';
import './css/App.css';
import './css/LineChart.css';
import {Route} from 'react-router-dom';
import LineChart from './page/LineChart';
import BirthRateComponenet from './BirthRate/BirthRate';
function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LineChart}></Route>
      <Route path='/BirthRate' component={BirthRateComponenet}></Route>
    </div>
  );
}

export default App;

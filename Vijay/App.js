import './App.css';
import React from 'react';
//import Legal from './components/legal'; 
// import Navigationbar from "./components/navbar";
import Insurance from './components/insurance';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="scroll">
      {/* <Legal/> */}
      {/* <Navigationbar/> */}
      <Insurance/>
    </div>
  );
}

export default App;

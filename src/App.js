import React from 'react';
import './App.css';
import FixedContainer from './Components/Layout/Container';
import ButtonAppBar from './Components/Surfaces/app-bar';
import PrimarySearchAppBar from './Components/Surfaces/app-barSearch';

function App() {
  return (
    <div>
      {/* <ButtonAppBar/> */}
      <PrimarySearchAppBar/>
      <br/>
      <FixedContainer/>
    </div>
  );
}

export default App;

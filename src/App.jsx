import './App.css';
import Body from './contexts/Body.jsx';
import Dropmenu from './contexts/Dropmenu';
import {useState} from "react";

const App = props => {
  return (
    <div className="App">
      <div className='search-bar'>
        <img src='./resources/logo.png'></img>
        <Dropmenu />
      </div>
      <div className='main-view'> 
        <Body />
      </div>
    </div>
  );
}

export default App;

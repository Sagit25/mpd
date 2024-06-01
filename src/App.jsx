import './App.css';
import Body from './components/Body.jsx';
import Dropdown from './components/Dropdown';
import {useState} from "react";

const App = props => {
  const [dropdownVisibility1, setDropdownVisibility1] = useState(false);
  const [dropdownVisibility2, setDropdownVisibility2] = useState(false);
  const [dropdownVisibility3, setDropdownVisibility3] = useState(false);

  return (
    <div className="App">
      <div className='search-bar'>
        <img src='./resources/logo.png'></img>
        <div id='app'>
            <button onClick={e => setDropdownVisibility1(!dropdownVisibility1)}>
                군종
            </button>
            <Dropdown visibility={dropdownVisibility1}>
                <ul>
                    <li>육군</li>
                    <li>해군</li>
                    <li>공군</li>
                    <li>부사관</li>
                    <li>장교</li>
                </ul>
            </Dropdown>
        </div>
        <div id='app'>
            <button onClick={e => setDropdownVisibility2(!dropdownVisibility2)}>
                입대일
            </button>
            <Dropdown visibility={dropdownVisibility2}>
                <ul>
                    <li>
                        <input placeholder='2024.03.04'/> 
                        부터
                    </li>
                    <li>
                        <input placeholder='2025.09.03'/> 
                        까지
                    </li>
                </ul>
            </Dropdown>
        </div>
        <div id='app'>
            <button onClick={e => setDropdownVisibility3(!dropdownVisibility3)}>
                전역일
            </button>
            <Dropdown visibility={dropdownVisibility3}>
                <ul>
                    <li>
                        <input placeholder='2024.03.04'/> 
                        부터
                    </li>
                    <li>
                        <input placeholder='2025.09.03'/> 
                        까지
                    </li>
                </ul>
            </Dropdown>
        </div>
      </div>
      <div className='main-view'> 
        <Body />
      </div>
    </div>
  );
}

export default App;

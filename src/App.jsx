import './App.css';
import Table from './components/Table';
import Dropdown from './components/Dropdown';
import {useEffect, useState} from "react";

const App = props => {
  const [searchKey, setSearchKey] = useState("");
  const [militaryType, setMilitaryType] = useState("");
  const [enterStartDate, setEnterStartDate] = useState("");
  const [enterEndDate, setEnterEndDate] = useState("");
  const [outerStartDate, setOuterStartDate] = useState("");
  const [outerEndDate, setOuterEndDate] = useState("");

  const [dropdownVisibility1, setDropdownVisibility1] = useState(false);
  const [dropdownVisibility2, setDropdownVisibility2] = useState(false);
  const [dropdownVisibility3, setDropdownVisibility3] = useState(false);

  return (
    <div className="App">
      <div className='search-bar'>
        <img src='./resources/logo.png'></img>
        <div>
          <button className='dropdown-button' onClick={(e) => setDropdownVisibility1(!dropdownVisibility1)}>
            군종
          </button>
          <Dropdown visibility={dropdownVisibility1}>
            <ul>
              <li> <button className='dropdown-select-button' onClick={(e) => setMilitaryType("육군")}> 육군 </button> </li>
              <li> <button className='dropdown-select-button' onClick={(e) => setMilitaryType("해군")}> 해군 </button> </li>
              <li> <button className='dropdown-select-button' onClick={(e) => setMilitaryType("공군")}> 공군 </button> </li>
              <li> <button className='dropdown-select-button' onClick={(e) => setMilitaryType("부사관")}> 부사관 </button> </li>
              <li> <button className='dropdown-select-button' onClick={(e) => setMilitaryType("장교")}> 장교 </button> </li>
            </ul>
          </Dropdown>
        </div>
        <div>
          <button className='dropdown-button' onClick={(e) => setDropdownVisibility2(!dropdownVisibility2)}>
            입대일
          </button>
          <Dropdown visibility={dropdownVisibility2}>
            <ul>
              <li>
                <input value={enterStartDate} onChange={(e) => setEnterStartDate(e.target.value)} placeholder='20240304'/> 부터
              </li>
              <li>
                <input value={enterEndDate} onChange={(e) => setEnterEndDate(e.target.value)} placeholder='20250903'/> 까지
              </li>
            </ul>
          </Dropdown>
        </div>
        <div>
          <button className='dropdown-button' onClick={(e) => setDropdownVisibility3(!dropdownVisibility3)}>
            전역일
          </button>
          <Dropdown visibility={dropdownVisibility3}>
            <ul>
              <li>
                <input placeholder='20240304'/> 부터
              </li>
              <li>
                <input placeholder='20250903'/> 까지
              </li>
            </ul>
          </Dropdown>
        </div>
      </div>
      <div className='main-view'> 
        <div className="search-box">
          <div className="search">
            <input className="word" value={searchKey} onChange={(e) => setSearchKey(e.target.value)} placeholder="찾으시는 모집병이 있나요 ?" />
              <button>
                <img src='../resources/search-icon.jpg' />
              </button>
          </div>
        </div>
        {(searchKey!=="") ? 
          <Table searchWord={searchKey}/>
        : 
          <div>
            <div>
              <p> 인기모집병 </p>
              <p> 이거는 그냥 2개 골라서 직접 적어놓는걸로 퉁치고 </p>
            </div>
            <div>
              <p> 마감세일 </p>
              <p> 요거는 테이블 형식으로 생각하고 만들면 될듯이 아니라 한 5개 정도로 요약하고 </p>
              <p> 디자인은 부탁한다 ㅎㅎ  </p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;

import './Searchbox.css';
import Dropdown from './Dropdown';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const Searchbox = props => {
    const navigate = useNavigate();
    const handleClick = (searchKey, militaryType, enterDateRange, outerDateRange) => {
        navigate("/search", {state: {sword: searchKey, mtype:militaryType, erange: enterDateRange, orange: outerDateRange}});
    }

    const [searchKey, setSearchKey] = useState(null);
    const [militaryType, setMilitaryType] = useState(null);
    const [enterDateRange, setEnterDateRange] = useState([null, null]);
    const [enterStartDate, enterEndDate] = enterDateRange;
    const [outerDateRange, setOuterDateRange] = useState([null, null]);
    const [outerStartDate, outerEndDate] = outerDateRange;

    const [dropdownVisibility1, setDropdownVisibility1] = useState(false);
    const [dropdownVisibility2, setDropdownVisibility2] = useState(false);
    const [dropdownVisibility3, setDropdownVisibility3] = useState(false);

    return (
        <div className='search-box'>
            <input className="word" value={searchKey} onChange={(e) => setSearchKey(e.target.value)} placeholder="찾으시는 모집병이 있나요 ?" />
            <div>
                <button className='dropdown-button' onClick={(e) => setDropdownVisibility1(!dropdownVisibility1)}>
                    군종
                </button>
                <Dropdown visibility={dropdownVisibility1}>
                    <ul>
                        <li> <button className='dropdown-select-button' onClick={(e) => setMilitaryType("roka")}> 육군 </button> </li>
                        <li> <button className='dropdown-select-button' onClick={(e) => setMilitaryType("navy")}> 해군 </button> </li>
                        <li> <button className='dropdown-select-button' onClick={(e) => setMilitaryType("rokaf")}> 공군 </button> </li>
                        <li> <button className='dropdown-select-button' onClick={(e) => setMilitaryType("co")}> 부사관 </button> </li>
                        <li> <button className='dropdown-select-button' onClick={(e) => setMilitaryType("star")}> 장교 </button> </li>
                    </ul>
                </Dropdown>
            </div>
            <div>
                <button className='dropdown-button' onClick={(e) => setDropdownVisibility2(!dropdownVisibility2)}>
                    입대일
                </button>
                <Dropdown visibility={dropdownVisibility2}>
                    <div>
                        <DatePicker
                            selectsRange={true}
                            startDate={enterStartDate}
                            endDate={enterEndDate}
                            onChange={(update) => setEnterDateRange(update)}
                            dateFormat="yyyy년 MM월 dd일"
                            isClearable={true}
                        />
                    </div>
                </Dropdown>
            </div>
            <div>
                <button className='dropdown-button' onClick={(e) => setDropdownVisibility3(!dropdownVisibility3)}>
                    전역일
                </button>
                <Dropdown visibility={dropdownVisibility3}>
                    <div>
                        <DatePicker
                            selectsRange={true}
                            startDate={outerStartDate}
                            endDate={outerEndDate}
                            onChange={(update) => setOuterDateRange(update)}
                            dateFormat="yyyy년 MM월 dd일"
                            isClearable={true}
                        />
                    </div>
                </Dropdown>
            </div>
            <button onClick={(e) => handleClick(searchKey, militaryType, enterDateRange, outerDateRange)}>
                <img src='../resources/search-icon.jpg' />
            </button>
        </div>
    );
}

export default Searchbox;
import './Body.css';
import { useState, useContext } from "react";

const Body = () => {
    const [searchKey, setSearchKey] = useState("");

    return(
        <div>
            <div className="search-box">
                <div className="search">
                    <input className="word" value={searchKey} onChange={(e) => setSearchKey(e.target.value)} placeholder="찾으시는 모집병이 있나요 ?" />
                    <button>
                        <img src='../resources/search-icon.jpg' />
                    </button>
                </div>

            </div>
            <div>
                <p> 인기모집병 </p>
            </div>
            <div>
                <p> 마감세일 </p>
            </div>
        </div>
    );
}

export default Body;
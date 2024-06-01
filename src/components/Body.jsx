import './Body.css';
import {useState} from "react";

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
                <p> 이거는 그냥 2개 골라서 직접 적어놓는걸로 퉁치고 </p>
            </div>
            <div>
                <p> 마감세일 </p>
                <p> 요거는 테이블 형식으로 생각하고 만들면 될듯 </p>
                <p> 디자인은 부탁한다 ㅎㅎ  </p>
            </div>
        </div>
    );
}

export default Body;
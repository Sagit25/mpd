import './Home.css';
import Header from '../components/Header';
import Table from '../components/Table';
import Dropdown from '../components/Dropdown';
import Popular from '../components/Popular';
import {useState} from "react";
import {Link} from "react-router-dom";
import Searchbox from '../components/Searchbox';

const Home = props => {
    return (
        <div>
            <Header />
            <div className='main-view'> 
                <Searchbox />
                <div>
                    <div>
                        <p> 인기모집병 </p>
                        <div className='pop-container'>
                            <Popular />
                        </div>
                    </div>
                    <div>
                        <p> 마감세일 </p>
                        <p> 요거는 테이블 형식으로 생각하고 만들면 될듯이 아니라 한 5개 정도로 요약하고 </p>
                        <p> 디자인은 부탁한다 ㅎㅎ  </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
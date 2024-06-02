import './Search.css';
import Header from '../components/Header';
import Table from '../components/Table';
import {useState} from "react";
import moment from "moment";
import {useLocation} from "react-router-dom";
import Searchbox from '../components/Searchbox';

const Search = props => {
    const {state} = useLocation();
    const {sword, mtype, erange, orange} = state;

    return (
        <div>
            <Header />
            <Searchbox />

            <p> "{sword}" 검색결과 </p>
            <p> 총 n건 </p>

            <p> 입력 검색어 : {sword} </p>
            <p> 군종 : {mtype} </p>
            <p> 입대일 시작 : {moment(erange[0]).format("YYYYMMDD")} </p>
            <p> 입대일 끝 : {moment(erange[1]).format("YYYYMMDD")} </p>
            <p> 전역일 시작 : {moment(orange[0]).format("YYYYMMDD")} </p>
            <p> 전역일 끝 : {moment(orange[1]).format("YYYYMMDD")} </p>

        </div>
    );
}

export default Search;
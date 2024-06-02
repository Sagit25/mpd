import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';
import Detail from './pages/Detail';
import {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes, Navigate, useNavigate} from "react-router-dom";

const App = props => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

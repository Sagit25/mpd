import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    function handleClick(e) {
        navigate("/");
    }

    return (
        <header className="header">
            <img src='../resources/logo.png' onClick={handleClick}></img>
        </header>
    );
}

export default Header;
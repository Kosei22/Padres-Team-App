import classes from "./Header.css";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <ul className="contents">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/San_Diego_Padres_%282020%29_cap_logo.svg/1200px-San_Diego_Padres_%282020%29_cap_logo.svg.png"
                alt="logo"
                width="90" />
            <li>
                <Link to="/" className="content">HOME</Link>
                <Link to="/Roster" className="content">ROSTER</Link>
            </li>

        </ul >
    )
}

export default Header;
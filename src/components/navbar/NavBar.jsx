import { useState } from "react";
import "./NavBar.css";
import{ NavLink} from "react-router-dom";

const NavBar = () => {
    const user = localStorage.getItem("user");  
    const [show,setShow] = useState(false);
    const setUser = () => {
        localStorage.removeItem("user");
    };
    const toggleMenu = () => {
        setShow(!show);
    };
    return (
        <nav className="navWrapper">
            <div>
                <NavLink to="/">
                    <span>Recipe App</span>
                </NavLink>
            </div>
            <div className={show ?"linkWrapper show" : "linkWrapper"}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to ="favourites">Favourites</NavLink>
                <NavLink onClick={setUser} to="login"> {user ? "Logout" : "Login"} </NavLink>
            </div>

            <div className="burgerMenu" onClick={toggleMenu}>
                &#9776; 
            </div>
        </nav>
    );
};

export default NavBar;

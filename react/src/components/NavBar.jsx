import React from 'react';
import { NavLink } from "react-router-dom";
//import PropTypes from "prop-types";

//const [isLogged, setIsLogged] = useState(false);

const NavBar = () => {

    const getPublicRoutes = () => {
        return (
            <ul className="public-navbar-list">
                <li className="public-navbar-item">
                    <NavLink to={"/about"} className="public-navbar-link">
                        About
                    </NavLink>
                </li>
                <li className="public-navbar-item">
                    <NavLink to={"/products"} className="public-navbar-link">
                        Products
                    </NavLink>
                </li>
                <li className="public-navbar-item">
                    <NavLink to={"/blogs"} className="public-navbar-link">
                        Blogs
                    </NavLink>
                </li>
                <li className="public-navbar-item">
                    <NavLink to={"/contact"} className="public-navbar-link">
                        Contact&nbsp;Us
                    </NavLink>
                </li>
                <li className="public-navbar-item login-link">
                    <NavLink to={"/login"} className="public-navbar-link">
                        Login
                    </NavLink>
                </li>
            </ul>
            );
    }

    //return isLogged ? getPrivateRoutes(""):  getPublicRoutes();
    return getPublicRoutes();

}

export default NavBar;
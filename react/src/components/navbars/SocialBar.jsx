import React from 'react';
import { NavLink } from "react-router-dom";
//import PropTypes from "prop-types";

const SocialBar = () => {

        return (
            <ul className="social-navbar-list">
                <li className="social-navbar-item">
                    <NavLink to={"/linkedin"} className="social-navbar-link">
                        Linked&nbsp;In
                    </NavLink>
                </li>
                <li className="social-navbar-item">
                    <NavLink to={"/facebook"} className="social-navbar-link">
                        Facebook
                    </NavLink>
                </li>
                <li className="social-navbar-item">
                    <NavLink to={"/twitter"} className="social-navbar-link">
                        Twitter
                    </NavLink>
                </li>
                <li className="social-navbar-item">
                    <NavLink to={"/instagram"} className="social-navbar-link">
                        Instagram
                    </NavLink>
                </li>
            </ul>
            );
}

export default SocialBar;
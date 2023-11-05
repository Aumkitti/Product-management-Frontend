/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "./Navbar.css"


const NavBar = () => {
    const [ user, setUser] = useState()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Product Manage</Link>
                    <li className="nav-item">
                        <Link className="nav-link " to="/search">Search</Link>
                    </li>

                    
                    <li className="nav-item">
                        <Link className="nav-link " to="/signIn">SignIn</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link " to="/signUp">SignUp</Link>
                    </li>
                   
                    
                        <li className="nav-item">
                            <Link className="nav-link " to="/Logout">Logout</Link>
                        </li>
                
        </nav>
    )
}

export default NavBar;
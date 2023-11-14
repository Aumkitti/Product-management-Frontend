import React from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { useAuthContext } from '../context/AuthContext';


const Navbar = () => {
  const { user, logout, navigate } = useAuthContext();

  const handleLogout = () => {
        logout();
        Swal.fire({
            title: "Successfully logged out!",
            icon: "success"
        });
        navigate("/");
    };

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Product Management
          </Link>
  

  
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
            <li className="nav-item">
          <Link className="nav-link active" 
          aria-current="page" to="/">
            Home</Link>
            </li>
            <div className="navbar-end ">
            {user && user.roles.includes("ROLE_ADMIN") && (
            <Link className="btn btn-link no-underline hover:no-underline text-lg text-base-300 normal-case w-28 hover:text-base-100 hover:bg-[#671c2165]"
               to="/add">
              Add
            </Link>
            )}
                {!user &&(
        <li className="nav-item">
          <Link className="nav-link" to="signup" >
            Sign Up
            </Link>
        </li>
        )}

{!user &&(
        <li className="nav-item">
          <Link className="nav-link" to="signin">
            Sign In
            </Link>
        </li>
        )}
            </div>
            {user &&(
        <div className="from-inline my-2 my-lg-0">
              <span className="badge">Welcome,<span className="mr-sm2 h4">
                <Link className='nav-link' to={"Profile"}>{user.username}</Link></span>
              </span>
              <button className="btn btn-outline-danger my-2 my-sm-0" onClick={handleLogout}>Logout</button>
            </div>
        )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }

export default Navbar;

import React from "react";
import { useNavigate } from "react-router-dom";


const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        AuthService.logout();
        navigate("/");
    }

    setTimeout(() => {
        handleLogout();
    }, 3000); 

    return <div>Logout</div>;
};

export default Logout;

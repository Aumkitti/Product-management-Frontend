import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { VITE_BASE_URL } from '../App';
import { useNavigate } from 'react-router-dom';
import AuthService from '../service/auth.service';



const Signup = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword:'',
  });
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState({message: ""});
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (user.confirmpassword === user.password) {
        const register = await AuthService.register
        (user.username, user.email, user.password);
        navigate("/signin");
      } else {
        setError(true);
        setErrorMessage({ message: "Failed Password mis"})
      }
      // Assuming successful signup, you can navigate to a success page or login page.
     
    } catch (error) {
      console.error(error);
      setError(true);
      setErrorMessage(error.response.data);
    }
  };
  const handleClear = (e) => {
    setUser({
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    })
    setError(false);
  };

  return (
    <div className="container bg-white rounded-lg shadow-lg w-full md:w-96 mx-auto p-4 md:p-7 my-10">
      <div className="form-container items-center justify-center p-4">
        <form className="w-full max-w-md" onSubmit={handleSignup}>
          <h1 className="text-2xl font-bold text-center mb-4">Register</h1>

          <span className="text-sm text-center mt-4">Please fill in information</span>
          <br/>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Username"
            className="input input-info my-3 w-full"
          />
          <br/>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            className="input input-info my-3 w-full"
          />
          <br/>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
            className="input input-info my-3 w-full"
          />
          <br/>
          <input
            type="password"
            name="confirmpassword"
            value={user.confirmpassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="input input-info my-3 w-full"
          />
          <br/>

          <button className="btn" onClick={handleSignup}>SignUp</button>
          <br/>
          <Link to="" className="btn btn-danger w-full mt-2" onClick={handleClear}>Cancel</Link>

          {error && <div className="text-red-500 mt-4">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Signup;

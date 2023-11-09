import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { VITE_BASE_URL } from '../App';

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${VITE_BASE_URL}/api/signup`, user);
  
      if (response.status === 200) {
        console.log('Signup successful!', response.data);
        // Optionally, you can redirect the user or show a success message.
      } else {
        console.error('Error signing up:', response.data);
        setError(response.data.error || 'Signup failed');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setError(error.message);
    }
  };

  const handleClear = () => {
    setUser({
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
    setError(null);
  };

  return (
    <div className="container bg-white rounded-lg shadow-lg w-full md:w-96 mx-auto p-4 md:p-7 my-10">
      <div className="form-container items-center justify-center p-4">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-center mb-4">Register</h1>

          <span className="text-sm text-center mt-4">Please fill in information</span>
          <br/>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            placeholder="Username"
            className="input input-info my-3 w-full"
          />
          <br/>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="input input-info my-3 w-full"
          />
          <br/>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="input input-info my-3 w-full"
          />
          <br/>
          <input
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm Password"
            className="input input-info my-3 w-full"
          />
          <br/>

          <button type="submit" className="btn btn-info mt-4 w-full">
            Sign Up
          </button>
          <br/>
          <Link to="" className="btn btn-danger w-full mt-2" onClick={handleClear}>Cancel</Link>

          {error && <div className="text-red-500 mt-4">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Signup;

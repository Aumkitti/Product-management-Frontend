import React from 'react';
import { Link } from 'react-router-dom';


const Signin = () => {

  const handleClear = (e) => {
    setUser({
      username: "",
      password: "",
    })
    setError(false);
  }

  return (
    
    <div className="container bg-white rounded-lg shadow-lg w-full md:w-96 mx-auto p-4 md:p-7 my-20">
      <div className="form-container items-center justify-center p-4">
        <form className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4">Login Account</h1>
          
          <span className="text-sm text-center mt-4"></span>
          <input
            type="email"
            placeholder="Email"
            className="input input-success my-3 w-full"
          />
          <br/>
          <input
            type="password"
            placeholder="Password"
            className="input input-success my-3 w-full"
          />
          <br></br>
          <button className="btn btn-success mt-4 w-full">
            login
          </button>
            <br></br>
          <Link to="" className="btn btn-danger w-full mt-2" onClick={handleClear}>Cencal</Link>
        </form>
      </div>
    </div>
  );
};

export default Signin;
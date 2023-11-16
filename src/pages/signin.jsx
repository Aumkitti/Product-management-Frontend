import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../service/auth.service';
import { useAuthContext } from '../context/AuthContext';


const Signin = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = useAuthContext() || {};
  const [error, setError] = useState();

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClear = (e) => {
    setUser({
      username: "",
      password: "",
    })
    setError(false);
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const currentUser = await AuthService.login(user.username, user.password);
      login(currentUser)
      // สมมติว่าลงชื่อเข้าใช้สําเร็จ คุณสามารถไปที่แดชบอร์ดหรือหน้าโปรไฟล์ได้
      navigate("/Profile") 
      //ส่งคําขอ POST ไปยังตําแหน่งข้อมูลการลงชื่อเข้าใช้ด้วยข้อมูลประจําตัวของผู้ใช้ (อีเมลและรหัสผ่าน)
      await axios.post(`${URL}/signin`, user);
      
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return (
    
    <div className="container bg-white rounded-lg shadow-lg w-full md:w-96 mx-auto p-4 md:p-7 my-20">
      <div className="form-container items-center justify-center p-4">
        <form className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4">Login Account</h1>
          
          <span className="text-sm text-center mt-4"></span>
          <input
              type="text"
              placeholder="username"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="input input-warning  my-4 w-full"
            />
          <br/>
          <input
              type="password"
              name="password"
              placeholder='password'
              value={user.password}
              onChange={handleChange}  
              className="input input-warning  my-4 w-full"
            />
          <br></br>
          <button className="btn btn-warning" onClick={handleClick}>
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
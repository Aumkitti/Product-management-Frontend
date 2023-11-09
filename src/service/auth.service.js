import axios from "axios";

const URL = import.meta.env.VITE_BASE_URL;
const API_URL = URL + "/api/auth/";

const login = async (username, password) => {
    try {
      const response = await axios.post(
        API_URL + "signin",
        { username, password },
        config
      );
  
      if (response.data.accessToken) {
        // Sign in successfully
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("token", JSON.stringify(response.data.accessToken));
      }
  
      return response.data;
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error for the caller to handle
    }
  };
  
  const register = async (username, email, password) => {
    try {
      return await axios.post(API_URL + "signup", { username, email, password }, config);
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error for the caller to handle
    }
  };
  
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  
  const AuthService = {
    login,
    register,
    getCurrentUser,
    logout,
  };
  
  export default AuthService;
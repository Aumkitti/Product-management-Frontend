import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Add from './pages/add';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Logout from './pages/logout';
import HomePage  from './pages/Home';
import Profile from './pages/Profile';
import NotAllow from './pages/NotAllow';
import ProtectedRouts from './pages/ProtectedRoute';
import AdminRoute from './pages/AdminRoute';
import Layout from './components/Layout';
import ProductPage from './pages/ProductPage';
import EditProduct from './pages/EditProduct';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/add" element={<Add/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/product/:productId/edit" element={<EditProduct />} />

      </Routes>
    </BrowserRouter>
  );
}
export const VITE_BASE_URL = 'http://localhost:3000';

export default App;

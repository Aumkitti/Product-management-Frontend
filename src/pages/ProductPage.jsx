// ProductPage.jsx

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { VITE_BASE_URL } from "../App";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const baseUrl = VITE_BASE_URL;

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getProduct();
  }, [baseUrl, id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${baseUrl}/api/product/${id}`);
      // Redirect to homepage or other page after deletion
    } catch (error) {
      console.error(error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.details}</p>
      <img src={product.image} alt={product.name} />

      <Link to={`/product/${id}/edit`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};


export default ProductPage;

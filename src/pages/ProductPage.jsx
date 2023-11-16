import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { VITE_BASE_URL } from "../App";

const ProductPage = () => {
  const { id: productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        console.log('productId:', productId);
        const response = await axios.get(`${VITE_BASE_URL}/api/product/`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    getProduct();
  }, [VITE_BASE_URL, productId]);
  
  


  const handleDelete = async () => {
    try {
      console.log('Deleting product with productId:', productId)
      await axios.delete(`${VITE_BASE_URL}/api/product/${productId}`);
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

      <Link to={`/product/${productId}/edit`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};


export default ProductPage;

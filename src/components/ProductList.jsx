// ProductList.jsx

import React from "react";
import ProductItem from "./ProductItem"; // Import the ProductItem component

const ProductList = ({ products }) => {
  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

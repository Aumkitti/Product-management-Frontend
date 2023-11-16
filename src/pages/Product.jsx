import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      
      <img
        src={product.image}
        alt={product.name}
        style={{
            
          maxWidth: '30%',
          height: '300px',
          border: '4px solid #ccc', 
          borderRadius: '8px' 
        }}
      />
        <p>{product.details}</p>
    </div>
  );
}

export default Product;

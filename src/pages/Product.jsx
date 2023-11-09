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
          border: '4px solid #ccc', // เพิ่มกรอบ
          borderRadius: '8px' // เพิ่มขอบมนเรนเนอร์
        }}
      />
        <p>{product.details}</p>
    </div>
  );
}

export default Product;

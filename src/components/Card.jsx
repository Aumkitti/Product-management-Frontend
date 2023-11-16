import { Link } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import { useAuthContext } from '../context/AuthContext'
import EditProduct from '../pages/EditProduct'

const Card = ({ product, handleDelete }) => {
  const { user } = useAuthContext();
  return (
    <div className="card" style={{ width: "18rem" }} key={product.id}>
      <img src={product.image} alt="" className='card-img-top' />
      <div className="card-body">
        <h5 className='title'>{product.name}</h5>
        <p className="card-text">{product.type}</p>
        
        {user && user.roles.includes("ROLES_ADMIN") && (
          <>
         
        <Link to="" className='btn btn-danger px-2' onClick={() => {
          handleDelete(process.id);
        }}>
          Delete
        </Link>
        
        
        
        <Link to={`/EditProduct/${product.id}`} className='btn btn-warning px-2'>
          Edit
        </Link>
        </>
        )}
      </div>
    </div>
  )
}

export default Card
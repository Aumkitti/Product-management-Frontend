import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { VITE_BASE_URL } from '../App'

const Add = () => {
  const [product, setProduct] =useState({
    name:"",
    details:"",
    type:"",
    image:""
  })
  const navigate = useNavigate();
  const [error , setError] = useState(false);

  const handleChange = (e) => {
    setProduct((prev)=>({...prev,[e.target.name]:e.target.value}));

  }

  const handleClick = async (e) =>{
    e.preventDefault();
    try {
      await axios.post(`${VITE_BASE_URL}/api/product`,{
        name: product.name,
        details: product.details,
        type: product.type,
        image: product.image
      });
      navigate('/');
    } catch (error) {
      console.error(error);
      setError(true);
    }
  }


  return (
    <div className="container">
      <h1>Product management</h1>
      <div className="row form">
        <div className="col-6 card justify-content-center">
          <h5 className='card-header'>Add new product</h5>
          <div className="error">{error && "somethingwrong"}</div>
          <div className="card-body">

            <form>
              <div className="form-group">
                <label htmlFor="name">product name</label>
                <input 
                type="text"
                className='form-control' 
                name="name" 
                placeholder='Product name'
                onChange={handleChange}
                value={product.name} />
              </div>

              <div className="form-group">
                  <label htmlFor="type">product details</label>
                  <input
                    type="text"
                    className='form-control'
                    name="details"
                    placeholder='Product details' 
                    onChange={handleChange}
                    value={product.details}/>
                </div>
              
                <div className="form-group">
                  <label htmlFor="type">product Type</label>
                  <input
                    type="text"
                    className='form-control'
                    name="type"
                    placeholder='Product type' 
                    onChange={handleChange}
                    value={product.type}/>
                </div>

                
                  <div className="form-group">
                    <label htmlFor="image">product image</label>
                    <input
                      type="text"
                      className='form-control'
                      name="image"
                      placeholder='Product image'
                      onChange={handleChange} 
                      value={product.image}/>
                  </div>

                  <Link to="" className='btn btn-success' onClick={handleClick}>
                    Add
                  </Link>
              <Link to="/" className='btn btn-danger' >
                    Cancel
                  </Link>


            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add
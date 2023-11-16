import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { VITE_BASE_URL } from "../App";

const EditProduct = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: "",
        type: "",
        image: ""
    });
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    useEffect(() => {
        const fetchProduct = async (productId) => {
            try {
                const res = await axios.get(`${VITE_BASE_URL}/api/product/${productId}`);
                setProduct(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProduct();
    }, [productId]);

    const handleClick = async (e) => {
        e.preventDefault();
        try {
          console.log('Updating product with ID:', productId); 
          await axios.put(
            `${VITE_BASE_URL}/api/product/${productId}`,
            product
          );
          navigate('/');
        } catch (error) {
          console.error(error);
          setError(true);
        }
      };
      


    return (
        <div className="container">
            <h1>Edit Product</h1>
            <div className="row form">
                <div className="col-6 card justify-content-center">
                    <h5 className='card-header'>Edit Product</h5>
                    <div className="error">{error && "Something went wrong"}</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Product Name</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    name="name"
                                    placeholder='Product Name'
                                    onChange={handleChange}
                                    value={product.name} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="type">Product Type</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    name="type"
                                    placeholder='Product Type'
                                    onChange={handleChange}
                                    value={product.type} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="image">Product Image</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    name="image"
                                    placeholder='Product Image URL'
                                    onChange={handleChange}
                                    value={product.image} />
                            </div>

                            <button className='btn btn-success' onClick={handleClick}>
                                Save
                            </button>
                            <Link to="/" className='btn btn-danger'>
                                Cancel
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProduct;

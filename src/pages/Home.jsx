import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";
import { VITE_BASE_URL } from "../App";
import Product from "./Product"; 



const HomePage = () => {
    const baseUrl = VITE_BASE_URL;
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [allCategories, setAllCategories] = useState(['']);

  const getProducts = async () => {
    try {
        console.log(baseUrl);
        const response = await axios.get(`${baseUrl}/api/product`);
        
      console.log(response.data);
      setProducts(response.data);
      setAllCategories(['All', ...new Set(response.data.map(item => item.type))]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    getProducts();
  }, [baseUrl]); 

  const filterItem = async (category) => {
    try {
      if (category === 'All') {
        getProducts(); 
      } else {
        const newItems = products.filter(item => item.type === category);
        setProducts(newItems); 
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div>
        <h1 style={{ fontSize: '3rem', color: '#333', textAlign: 'center' }}>
          Product management
        </h1>
        <div >
          <Categories allCategories={allCategories} filterItems={filterItem}/>
        </div>
        <div>
          {products.map((product, index) => (
              <Link key={index} to={`/product/${product.id}`}>
            <Product product={product} />
            </Link>
          ))}
        </div> 
        <br />
        <div style={{ textAlign: 'center' }}>
          <Link to="/add" className="btn btn-warning" style={{ fontSize: '1rem', padding: '10px 20px' }}>
            Create a Product
          </Link>
        </div>  
  
      </div>
    </div>
  );
          }  

export default HomePage;

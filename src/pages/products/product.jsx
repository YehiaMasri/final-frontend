import React, {useState, useEffect} from 'react';
// import Products from '../../components/Products';
import Navbar from '../../components/navbar/navbar';
import Hero from '../../components/heroSection/hero.jsx'
import axios from 'axios';
import Products from '../../components/Products/product.jsx';
function Product(props) {
	const [data, setData] = useState(null);
  const [loading, setLoading]= useState(false)

    const fetchData = async () => {
        setLoading(true)
            try {
                const respone = await axios.get(`${process.env.REACT_APP_URL}/product/products`);
                setData(respone.data.docs);
          console.log(respone.data.docs)
          setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        useEffect(() => {
            fetchData();
        }, []);
    
    return (
        <div>
            <Navbar />
            <Products />
        </div>
    );
}

export default Product;
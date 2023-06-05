// import React, {useState, useEffect} from 'react';
// // import Products from '../../components/Products';
// import Navbar from '../../components/navbar/navbar';
// import Hero from '../../components/heroSection/hero.jsx'
// import axios from 'axios';
// import Products from '../../components/Products/product.jsx';
// function Product(props) {
// 	const [data, setData] = useState(null);
//   const [loading, setLoading]= useState(false)

//     const fetchData = async () => {
//         setLoading(true)
//             try {
//                 const respone = await axios.get(`${process.env.REACT_APP_URL}/product/products`);
//                 setData(respone.data.docs);
//           console.log(respone.data.docs)
//           setLoading(false);
//             } catch (err) {
//                 console.log(err);
//             }
//         };
//         useEffect(() => {
//             fetchData();
//         }, []);
    
//     return (
//         <div>
//             <Navbar />
//             <Products />
//         </div>
//     );
// }

// export default Product;

import styled from "styled-components";
import Navbar from "../../components/navbar/navbar.jsx"
import FilterSection from "../../components/filterSection";
import ProductList from "../../components/productList";
import Sort from "../../components/sort";
import { useFilterContext } from "../../components/context/filter_context";

const Products = () => {
    return (
      <>
      <Navbar />
      <Wrapper>
        <div className="container grid grid-filter-column">
          <div>
            <FilterSection />
          </div>
  
          <section className="product-view--sort">
            <div className="sort-filter">
              <Sort />
            </div>
            <div className="main-product">
              <ProductList />
            </div>
          </section>
        </div>
      </Wrapper>
      </>
    );
  };
  
  const Wrapper = styled.section`
    .grid-filter-column {
      grid-template-columns: 0.2fr 1fr;
    }
  
    @media (max-width: 767px) {
      .grid-filter-column {
        grid-template-columns: 1fr;
      }
    }
  `;
  
  export default Products;
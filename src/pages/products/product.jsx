import React from 'react';
// import Products from '../../components/Products';
import Navbar from '../../components/navbar/navbar';
import Hero from '../../components/heroSection/hero.jsx'
import Products from '../../components/Products/product.jsx';
function Product(props) {
    return (
        <div>
            <Navbar />
            <Hero />
            <Products />
        </div>
    );
}

export default Product;
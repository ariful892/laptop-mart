import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const { id, name, price, img } = props.product;
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <p>Price: ${price}</p>
            </div>
            <button className='cart-btn'><p>Add To Cart</p></button>
        </div>
    );
};

export default Product;
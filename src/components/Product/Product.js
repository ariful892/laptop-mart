import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props.product);
    const { name, price, img } = props.product;


    const { handleAddToCart, product } = props;

    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='cart-btn'><p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';
import image5 from '../../images/image5.jpg';
import image6 from '../../images/image6.jpg';
import image7 from '../../images/image7.jpg';
import image8 from '../../images/image8.jpg';
import image9 from '../../images/image9.jpg';


const Shop = () => {

    const products = [
        {
            id: 1,
            price: 4857,
            img: image1,
            name: "Apple Mac Book"
        },
        {
            id: 2,
            price: 4813,
            img: image2,
            name: "Apple Premium"
        },
        {
            id: 3,
            price: 4608,
            img: image3,
            name: "Apple Note Book"
        },
        {
            id: 4,
            price: 3672,
            img: image4,
            name: "HP Pavilion 15"
        },
        {
            id: 5,
            price: 3365,
            img: image5,
            name: "HP Ultra H15"
        },
        {
            id: 6,
            price: 3165,
            img: image6,
            name: "HP Gladiator 4S"
        },
        {
            id: 7,
            price: 2596,
            img: image7,
            name: "Dell Ultra 5S"
        },
        {
            id: 8,
            price: 2596,
            img: image8,
            name: "Dell Premium 12"
        },
        {
            id: 9,
            price: 2596,
            img: image9,
            name: "Dell Note 30"
        }
    ];

    const [cart, setCart] = useState([]);
    const [productId, setProductId] = useState([]);
    const [selectItem, setSelectItem] = useState("");

    const handleAddToCart = (product) => {
        const { name, id } = product;
        const newCart = [...cart, name];
        if (newCart.length <= 4) {
            setCart(newCart);
            const newId = [...productId, id];
            setProductId(newId);
        }
    };

    const chooseItem = (productId, cart) => {

        if (productId.length === 1) {
            setSelectItem(cart[0]);
        }
        if (productId.length > 1) {
            let i = 1;
            while (i < 20) {
                const randomNumber = Math.floor(Math.random() * 10);
                for (let j = 1; j <= productId.length; j++) {
                    console.log("out If", randomNumber);
                    console.log("product id", productId[j]);
                    if (randomNumber === productId[j]) {
                        console.log(randomNumber);
                        setSelectItem(cart[j]);
                        break;
                    }
                }
                i++;
            }
        }

    }

    const chooseAgain = () => {
        setCart([]);
        setSelectItem([]);
    };

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <div className='cart'>
                    <h2>Selected Laptop: {cart.length}</h2>
                    {
                        cart.map(name => <li>{name}</li>)
                    }

                    <button onClick={() => chooseItem(productId, cart)} className='choose-btn'><p>Choose 1 For Me</p></button>

                    <h3>Chosen Item: {selectItem}</h3>

                    <button onClick={chooseAgain} className='choose-btn'><p>Choose Again</p></button>

                </div>

            </div>

        </div>
    );
};

export default Shop;
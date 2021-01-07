import Link from 'next/link';
import React from 'react';
import { useState, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { addFirstProduct } from '../../functions';

const AddToCartButton = (props) => {
    const { product } = props;
    const [cart, setCart] = useContext(AppContext);

    // Function on what will happen once the add to cart button is clicked 
    const handleAddToCartClick = () => {
        if (process.browser) {
            let existingCart = localStorage.getItem('hjartanavguld');
            // checks if cart has items already and if so, updates the existing 
            if (existingCart) {

            } else {
                // Add first product to cart
                const newCart = addFirstProduct(product);
                setCart(newCart);
            }
        }
    };
    return (
        <React.Fragment>
            <button onClick={handleAddToCartClick} className="btn btn-secondary">Lägg i kundvagn</button>
        </React.Fragment>
    )
};

export default AddToCartButton;
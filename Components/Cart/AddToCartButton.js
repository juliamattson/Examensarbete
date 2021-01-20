import Link from 'next/link';
import React from 'react';
import { useState, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { addFirstProduct, updateCart } from '../../functions';

const AddToCartButton = (props) => {
    const { product } = props;
    const [cart, setCart] = useContext(AppContext);

    const addProductToCart = () => {
        if (process.browser) {
            let existingCart = JSON.parse(localStorage.getItem('hjartanavguld'))
            if (existingCart) {
                const qtyToBeAdded = 1;
                const updatedCart = updateCart(existingCart, product, qtyToBeAdded)
                setCart(updatedCart);
            } else {

                const newCart = addFirstProduct(product);
                setCart(newCart);
            }
        }
    }
    return (
        <React.Fragment>
            <button onClick={addProductToCart} className="btn">Köp</button>
        </React.Fragment>
    )
};

export default AddToCartButton;
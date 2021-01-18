import Link from 'next/link';
import React from 'react';
import { useState, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { addFirstProduct, updateCart } from '../../functions';

const AddToCartButton = (props) => {
    const { product } = props;
    const [cart, setCart] = useContext(AppContext);

    // Function on what will happen once the add to cart button is clicked 
    /*  const handleAddToCartClick = () => {
         if (process.browser) {
             let existingCart = localStorage.getItem('hjartanavguld');
             // checks if cart has items already and if so, updates the existing 
             if (existingCart) {
                 existingCart = JSON.parse(existingCart);
                 const quantityAdded = 1;
                 const updatedCart = updateCart(existingCart, product, quantityAdded);
                 setCart(updatedCart);
             } else {
                 // Add first product to cart
                 const newCart = addFirstProduct(product);
                 setCart(newCart);
             }
         }
     }; */

    const createNewProduct = (product) => {
        return {
            productId: product.id,
            image: product.image,
            name: product.name,
            price: product.price,
            quantity: 1,
        }
    };

    const addProductToCart = () => {
        let productPrice = product.price


        if (process.browser) {
            let existingCart = JSON.parse(localStorage.getItem('hjartanavguld'))
            if (existingCart) {
                const newProduct = createNewProduct(product);
                console.log(newProduct)
                existingCart.products.push(newProduct);
                localStorage.setItem('hjartanavguld', JSON.stringify(existingCart));
                return existingCart;
            } else {
                let newCart = {
                    products: []
                }
                const newProduct = createNewProduct(product);
                newCart.products.push(newProduct);
                localStorage.setItem('hjartanavguld', JSON.stringify(newCart));
                return newCart;
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
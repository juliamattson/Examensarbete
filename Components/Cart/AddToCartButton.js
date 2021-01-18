import Link from 'next/link';
import React from 'react';
import { useState, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { addFirstProduct, updateCart } from '../../functions';

const AddToCartButton = (props) => {
    const { product } = props;
    const [cart, setCart] = useContext(AppContext);

    function refreshPage() {
        window.location.reload(false);
    }

    const createNewProduct = (product) => {
        return {
            productId: product.id,
            image: product.image,
            name: product.name,
            price: parseFloat(product.price),
            quantity: 1,
        }
    };

    const addProductToCart = () => {
        const existingCart = JSON.parse(localStorage.getItem('hjartanavguld'))


        if (process.browser) {
            if (existingCart) {

                const newProduct = createNewProduct(product);
                let productPrice = newProduct.price
                existingCart.products.push(newProduct);
                existingCart.totalProductsPrice.push(productPrice);
                existingCart.totalProductsCount.push(1);
                localStorage.setItem('hjartanavguld', JSON.stringify(existingCart));
                refreshPage()
                return existingCart;
            } else {
                let shoppingCart = {
                    products: [],
                    totalProductsPrice: [],
                    totalProductsCount: [],
                }
                const newProduct = createNewProduct(product);
                let productPrice = newProduct.price
                shoppingCart.products.push(newProduct);
                shoppingCart.totalProductsPrice.push(productPrice);
                shoppingCart.totalProductsCount.push(1);
                localStorage.setItem('hjartanavguld', JSON.stringify(shoppingCart));
                refreshPage()
                return shoppingCart;
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
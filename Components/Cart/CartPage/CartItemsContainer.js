import React from 'react';
import { useState, useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import CartItem from './CartItem';
import Link from 'next/link';
import { removeItemFromCart } from '../../../functions';
import Checkout from '../../../pages/checkout';
import { useForm } from "react-hook-form";
import ContactUs from '../../../pages/checkout';

const CartItemsContainer = () => {
    const [cart, setCart] = useContext(AppContext);
    console.log(cart)
    const removeProductClick = (event, productId) => {

        const updatedCart = removeItemFromCart(productId)

        setCart(updatedCart);

    };

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return (
        <div>
            {cart ? (
                <div className="cart-wrapper container">
                    <h1 className="mt-5 cart-header">Kundvagn</h1>
                    <table className="table table-hover">
                        <thead>
                            <tr className="header-container">
                                <th className="cart-heading" scope="col" />
                                <th className="cart-heading" scope="col">Produkt</th>
                                <th className="cart-heading" scope="col">Pris/st</th>
                                <th className="cart-heading" scope="col" />
                            </tr>
                        </thead>
                        <tbody>
                            {cart.products.length && (
                                cart.products.map(item => (
                                    <CartItem
                                        key={item.productId}
                                        item={item}
                                        removeProductClick={removeProductClick}
                                        setCart={setCart}
                                    />
                                ))
                            )}
                        </tbody>
                    </table>
                    <hr />
                    <h5 className="cart-header">Totalt: </h5>
                    <table className="table">
                        <tbody>
                            <tr className="table-light">
                                <td className="cart-element-total">Antal produkter:</td>
                                <td className="cart-element-total">{cart.totalProductsCount}</td>
                            </tr>
                            <tr className="table-light">
                                <td className="cart-element-total">Totalbelopp:</td>
                                <td className="cart-element-total">{cart.totalProductsPrice} kr</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <h5 className="cart-header">Fraktsätt: </h5>
                    <table className="table">
                        <tbody>
                            <tr className="table-light delivery-method-small">
                                <td className="cart-element-shippingmethod-input"><input type="radio" name="shipping-method" id="pickup" value="00,00" />  Hämta</td>
                                <td className="cart-element-shippingmethod-2">Hämta upp varorna hos oss enligt överenskommelse.</td>
                                <td className="cart-element-shippingmethod-3">+ 00,00 SEK</td>
                            </tr>
                            <hr />
                            <tr className="table-light delivery-method-small">
                                <td className="cart-element-shippingmethod-input"><input type="radio" name="shipping-method" id="postnord" value="29,00" /> Postnord</td>
                                <td className="cart-element-shippingmethod-2">Vi skickar med Postnord efter erhållen betalning via Swish, fraktavgift tillkommer.</td>
                                <td className="cart-element-shippingmethod-3">+ 29,00 SEK</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <h5 className="cart-header">Betalsätt: </h5>
                    <table className="table">
                        <tbody>
                            <tr className="table-light delivery-method-small">
                                <td className="cart-element-payment-input"><input type="radio" defaultChecked /><img className="swish-icon" src="https://wp.hjartanavguld.se/wp-content/uploads/2021/01/Swish_payment-Logo.wine_.png" /></td>
                                <td className="cart-element-payment">Swisha till xxx innan du går vidare till slutför köp. Belopp att swisha ser du här nedanför.</td>
                                <td className="cart-element-payment">+ 00,00 SEK</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <h5 className="cart-header">Sammanfattning: </h5>
                    <table className="table">
                        <tbody>
                            <tr className="table-light">
                                <td className="cart-element-total">Totalsumma (inkl frakt):</td>
                                <td className="cart-element-total">{cart.totalProductsCount}</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <ContactUs />
                    <hr />

                </div>
            ) : (
                    <>
                        <div className="empty-cart">
                            <h2>Din kundvagn är tom..</h2>
                        </div>
                    </>
                )
            }
        </div >
    )
};

export default CartItemsContainer;
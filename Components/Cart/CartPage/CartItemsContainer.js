import React from 'react';
import { useState, useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import CartItem from './CartItem';
import Link from 'next/link';
import { removeItemFromCart } from '../../../functions';

const CartItemsContainer = () => {
    const [cart, setCart] = useContext(AppContext);
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
                                <th className="cart-heading" scope="col" />
                                <th className="cart-heading" scope="col">Produkt</th>
                                <th className="cart-heading" scope="col">Pris/st</th>
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
                    <div className="row cart-total-container mt-5">
                        <div className="col-6">
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
                                    <tr className="table-light">
                                        <td className="cart-element-shippingmethod"><input type="radio" name="shipping-method" /> Hämtas upp</td>
                                        <td className="cart-element-shippingmethod">Hämtas upp hos oss</td>
                                        <td className="cart-element-shippingmethod">+ 00,00 SEK</td>
                                    </tr>
                                    <tr className="table-light">
                                        <td className="cart-element-shippingmethod"><input type="radio" name="shipping-method" /> Postnord</td>
                                        <td className="cart-element-shippingmethod">Skickas med Postnord</td>
                                        <td className="cart-element-shippingmethod">+ 29,00 SEK</td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr />
                            <h5 className="cart-header">Betalsätt: </h5>
                            <table className="table">
                                <tbody>
                                    <tr className="table-light">
                                        <td className="cart-element-payment"><input type="radio" defaultChecked /> Swish</td>
                                        <td className="cart-element-payment">Swisha till xxx innan du går vidare till slutför köp</td>
                                        <td className="cart-element-payment">+ 00,00 SEK</td>
                                    </tr>
                                </tbody>
                            </table>
                            <Link href="/checkout">
                                <button className="btn btn-secondary">Slutför köp</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                    <>
                        <div className="empty-cart">
                            <h2>Din kundvagn är tom..</h2>
                        </div>
                    </>
                )}
        </div>
    )
};

export default CartItemsContainer;
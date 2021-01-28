import React from 'react';
import { useState, useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import CartItem from './CartItem';
import { removeItemFromCart } from '../../../functions';
import ContactUs from '../../../pages/checkout';

const CartItemsContainer = () => {
    const [cart, setCart] = useContext(AppContext);
    const [radio, setRadio] = useState('00,00')

    const removeProductClick = (event, productId) => {

        const updatedCart = removeItemFromCart(productId)

        setCart(updatedCart);

    };

    return (

        <div>
            {cart ? (
                <div className="cart-wrapper container cart-page-container">
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
                    <form>
                        <input type="radio"
                            value="00,00"
                            checked={radio === '00,00'}
                            onChange={(e) => { setRadio(e.target.value) }}
                            className="input-delivery-method"
                        />
                        <label>Hämta upp</label>
                        <p className="delivery-method-info-text">Hämta upp dina varor hos oss enligt överenskommelse. Fyll i vem du kommit överens med under övrigt i formuläret för dina kunduppgifter längre ner på denna sidan. <br /> + 00,00 kr</p>
                        <br />
                        <input type="radio"
                            value="29,00"
                            checked={radio === '29,00'}
                            onChange={(e) => { setRadio(e.target.value) }}
                            className="input-delivery-method"
                        />
                        <label>Postnord</label>
                        <p className="delivery-method-info-text">Vi skickar din beställning med Postnord efter erhålllen betalning via Swish, köparen står för frakten. <br />+ 29,00 kr</p>
                    </form>
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
                                <td className="cart-element-total">{parseFloat(cart.totalProductsPrice) + parseFloat(radio)} kr</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <ContactUs totalPrice={parseFloat(cart.totalProductsPrice) + parseFloat(radio)} deliveryMethod={radio} />
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
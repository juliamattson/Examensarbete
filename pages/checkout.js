import React from 'react';
import emailjs from 'emailjs-com';
import Link from 'next/link';
import { useState, useContext } from 'react';
import { AppContext } from '../Components/Context/AppContext';

export default function ContactUs({ totalPrice, deliveryMethod }) {
    const [cart, setCart] = useContext(AppContext);

    const productArray = cart.products;
    const productNamesArray = productArray.map(product => {
        return product.name
    })
    let modifiedArray = productNamesArray.join(' + ')
    let stringifiedNamesArray = modifiedArray.toString();

    const toConfirmation = () => {
        window.location = "/confirmation"
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_hjartanavguld', 'template_7mka56c', e.target, 'user_2SgCEPJav3CQFGRwj9Wrz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        window.localStorage.clear();
        toConfirmation();
        user_name.value = "";
        personnummer.value = "";
        user_email.value = "";
        user_phone.value = "";
        user_adress.value = "";
        postnummer.value = "";
        postort.value = "";
        ovrigt.value = "";
    }

    return (
        <>
            <div className="checkoutContactForm">
                <h5 className="cart-header">Kunduppgifter: </h5>
                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="inputBox">
                        <input type="hidden" name="contact_number" />
                    </div>
                    <div className="inputBox">
                        <input type="text" name="user_name" required />
                        <label>Namn:</label>
                    </div>
                    <div className="inputBox">
                        <input type="text" name="personnummer" required maxLength="10" minLength="10" />
                        <label>Personnummer:</label>
                    </div>
                    <div className="inputBox">
                        <input type="email" name="user_email" required />
                        <label>Epost:</label>
                    </div>
                    <div className="inputBox">
                        <input type="tel" name="user_phone" required maxLength="10" minLength="10" />
                        <label>Telefon:</label>
                    </div>
                    <div className="inputBox">
                        <input type="text" name="user_adress" required />
                        <label>Adress:</label>
                    </div>
                    <div className="inputBox">
                        <input type="text" name="postnummer" required maxLength="5" minLength="5" />
                        <label>Postnummer:</label>
                    </div>
                    <div className="inputBox">
                        <input type="text" name="postort" required />
                        <label>Postort:</label>
                    </div>
                    <div className="inputBox">
                        <input type="text" name="ovrigt" />
                        <label>Övrigt:</label>
                    </div>
                    <textarea className="hidden-textarea" name="products" readOnly defaultValue={stringifiedNamesArray} />
                    <input type="hidden" name="delivery-price" readOnly value={deliveryMethod} />
                    <input type="hidden" name="totalProductsPrice" readOnly value={totalPrice} />
                    <input type="hidden" name="totalProductsCount" readOnly value={cart.totalProductsCount} />
                    <div className="inputBox">
                        <input type="submit" name="" value="Skicka" />
                    </div>
                </form>
            </div>
        </>
    );
}
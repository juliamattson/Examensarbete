import React from 'react';
import emailjs from 'emailjs-com';
import Link from 'next/link';
import { useState, useContext } from 'react';
import { AppContext } from '../Components/Context/AppContext';

export default function ContactUs() {
    const [cart, setCart] = useContext(AppContext);

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

    }

    return (
        <>
            <h5 className="cart-header">Kunduppgifter: </h5>
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Namn:</label>
                <input type="text" name="user_name" required />
                <label>Personnummer:</label>
                <input type="text" name="personnummer" required placeholder="ÅÅMMDDNNNN" maxLength="10" minLength="10" />
                <label>Epost:</label>
                <input type="email" name="user_email" required />
                <label>Telefon:</label>
                <input type="tel" name="user_phone" required maxLength="10" minLength="10" />
                <label>Adress:</label>
                <input type="text" name="user_adress" required />
                <label>Postnummer:</label>
                <input type="text" name="postnummer" required />
                <label>Postort:</label>
                <input type="text" name="postort" required />
                <input type="hidden" name="products" readOnly value="Produktinfo" />
                <input type="hidden" name="totalProductsPrice" readOnly value={cart.totalProductsPrice + " kr"} />
                <input type="hidden" name="totalProductsCount" readOnly value={cart.totalProductsCount} />
                <input type="submit" value="Slutför köp" className="btn btn-secondary mt-3" />
            </form>
        </>
    );
}
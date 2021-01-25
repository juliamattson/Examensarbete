import React from 'react';
import { useState, useContext } from 'react';
import { AppContext } from '../Components/Context/AppContext';
import emailjs from 'emailjs-com';

export default function ContactUs() {
    const [cart, setCart] = useContext(AppContext);
    console.log(cart)

    const existingProducts = () => {
        cart.products.forEach(product => {
            <p>{product.name}</p>

        });
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_hjartanavguld', 'template_7mka56c', e.target, 'user_2SgCEPJav3CQFGRwj9Wrz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Namn:</label>
            <input type="text" name="user_name" />
            <label>Personnummer:</label>
            <input type="text" name="personnummer" />
            <label>Epost:</label>
            <input type="email" name="user_email" />
            <label>Telefon:</label>
            <input type="email" name="user_phone" />
            <label>Adress:</label>
            <input type="email" name="user_adress" />
            <label>Postnummer:</label>
            <input type="email" name="postnummer" />
            <label>Postort:</label>
            <input type="email" name="postort" />
            <label>Produkter</label>
            <textarea name="products" readOnly value={"Totalbelopp:" + cart.totalProductsPrice + "kr<br />" + "Antal produkter:" + cart.totalProductsCount} />
            <input type="submit" value="Send" />
        </form>
    );
}
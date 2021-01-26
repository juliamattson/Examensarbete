import React from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {

    const message = () => {
        window.location = "/message"
    }
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_hjartanavguld', 'template_mqwrous', e.target, 'user_2SgCEPJav3CQFGRwj9Wrz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        message();
        user_name.value = "";
        user_email.value = "";
        user_phone.value = "";
        user_message.value = "";
    }

    return (
        <>
            <h5 className="cart-header">Dina kontaktuppgifter: </h5>
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Namn:</label>

                <input type="text" name="user_name" required />
                <label>Epost:</label>

                <input type="email" name="user_email" required />
                <label>Telefon:</label>

                <input type="tel" name="user_phone" maxLength="10" minLength="10" />
                <label>Ditt meddelande:</label>

                <textarea type="message" name="user_message" />

                <input type="submit" value="Skicka" />
            </form>
        </>
    );
}
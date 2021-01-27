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
            <div className="contactForm">
                <h5 className="cart-header">Dina kontaktuppgifter: </h5>
                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="inputBox">
                        <input type="hidden" name="contact_number" />
                        <label>Namn:</label>
                    </div>
                    <div className="inputBox">
                        <input type="text" name="user_name" required />
                        <label>Namn:</label>
                    </div>
                    <div className="inputBox">
                        <input type="email" name="user_email" required />
                        <label>E-post:</label>
                    </div>
                    <div className="inputBox">
                        <input type="tele" name="user_phone" required />
                        <label>Telefon:</label>
                    </div>
                    <div className="inputBox">
                        <textarea type="message" name="user_message" required />
                        <label>Ditt meddelande:</label>
                    </div>
                    <div className="inputBox">
                        <input type="submit" name="" value="Skicka" />
                    </div>
                </form>
            </div>
        </>
    );
}
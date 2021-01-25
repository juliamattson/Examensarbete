import Layout from "../Components/Layout";
import styled from 'styled-components';
import Link from 'next/link';

const CheckoutWrapper = styled.div`
    .checkout-container {
        width: 70%;
        font-family: 'Raleway', sans-serif;
    }
    p {
        margin: 0;
        font-size: 16px;
    }
    h5 {
       font-family: 'Raleway', sans-serif;
    }
    input {
        height: 25px;
        width: 50%;
    }
    @media (max-width: 768px) {
        input {
            width: 100%;
        }
    }
`;

const Checkout = () => {
    return (
        <CheckoutWrapper>
            <div className="checkout-container">
                <h5>Kunduppgifter</h5>
                <p>Personnummer:</p>
                <input type="text" id="personnummer" placeholder="ÅÅMMDDNNNN" required />
                <p>Förnamn:</p>
                <input type="text" id="fornamn" required />
                <p>Efternamn:</p>
                <input type="text" id="efternamn" required />
                <p>Epost:</p>
                <input type="text" id="epost" required />
                <p>Telefon:</p>
                <input type="text" id="telefon" required />
                <p>Adress:</p>
                <input type="text" id="adress" required />
                <p>Postnummer:</p>
                <input type="text" id="postnummer" required />
                <p>Postort:</p>
                <input type="text" id="postort" required />
            </div>
        </CheckoutWrapper>
    )
};

export default Checkout;
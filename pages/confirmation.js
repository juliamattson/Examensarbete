import React from 'react';
import Layout from "../Components/Layout";
import Link from "next/link";
import { useState, useContext } from 'react';
import { AppContext } from '../Components/Context/AppContext';

const Confirmation = () => {
    const [cart, setCart] = useContext(AppContext);
    return (
        <Layout>
            <div className="confirmation-wrapper">
                <h4 className="mt-2 mb-2">Tack för din beställning!</h4>
                <div className="info-wrapper"><p>Så fort vi fått din betalning via Swish kommer du få en bekräftelse via epost från oss samt information om leverans.</p></div>
                <Link href="/index">
                    <button className="btn btn-secondary">Till startsidan</button>
                </Link>
            </div>
        </Layout>
    )
};

export default Confirmation;
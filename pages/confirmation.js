import React from 'react';
import Layout from "../Components/Layout";
import Link from "next/link";
import { Helmet } from 'react-helmet';

const Confirmation = () => {
    return (
        <Layout>
            <div className="confirmation-wrapper">
                <Helmet>
                    <title>Bekräftelse - Hjärtan av guld UF</title>
                </Helmet>
                <h1 className="mt-2 mb-2">Tack för din beställning!</h1>
                <div className="info-wrapper"><p>Så fort vi fått din betalning via Swish kommer du få en bekräftelse via epost från oss samt information om leverans.</p></div>
                <Link href="/index">
                    <button className="btn btn-secondary">Till startsidan</button>
                </Link>
            </div>
        </Layout>
    )
};

export default Confirmation;
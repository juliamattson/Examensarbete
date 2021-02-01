import React from 'react';
import Layout from "../Components/Layout";
import Link from "next/link";
import { useState, useContext } from 'react';
import { AppContext } from '../Components/Context/AppContext';
import { Helmet } from 'react-helmet';

const message = () => {
    const [cart, setCart] = useContext(AppContext);
    return (
        <Layout>
            <div className="confirmation-wrapper">
            <Helmet>
                    <title>Bekräftelse - Hjärtan av guld UF</title>
                </Helmet>
                <h1 className="mt-2 mb-2">Tack för ditt meddelande!</h1>
                <div className="info-wrapper"><p> Ditt meddelande har mottagits, vi återkommer så snart vi kan!</p></div>
                <Link href="/index">
                    <button className="btn btn-secondary">Till startsidan</button>
                </Link>
            </div>
        </Layout>
    )
};

export default message;
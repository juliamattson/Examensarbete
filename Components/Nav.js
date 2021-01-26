import React, { useState } from 'react';
import CartIcon from './Cart/CartIcon';
import { Squash as Hamburger } from 'hamburger-react';

const Nav = () => {
    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    const myFunction = (e) => {
        e.preventDefault();
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    return (
        <>
            <div className="topnav" id="myTopnav">
                <a href={"index"}><img src="https://wp.hjartanavguld.se/wp-content/uploads/2021/01/logo_dark_charcoal.png" alt="logo" className="logo-image" /></a>
                <a href={"/produktsida"}>Produkter</a>
                <a href={"/kontakt"}>Kontakt</a>
                <CartIcon />
                <a href="#" className="icon" onClick={myFunction}>
                    <Hamburger duration={0.5} />
                </a>
            </div>
        </>
    )
};

export default Nav;

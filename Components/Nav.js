import Link from 'next/link';
import Burger from './Burger';
import CartIcon from './Cart/CartIcon';
import Menu from './Menu';
import React, { useState } from 'react';

const Nav = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="navbar">
            <a className="navbar-brand logo-one" href={"index"}><img src="https://wp.hjartanavguld.se/wp-content/uploads/2021/01/logo_dark_charcoal.png" alt="logo" className="logo-image" /></a>
            <div className="pages">
                <ul className="nav-list">
                    <li className="nav-item active">
                        <Link href={"/omoss"}>
                            <a className="nav-link" >Hem
                            <span className="sr-only">(current)</span>
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={"/produktsida"}>Produkter</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={"/kontakt"}>Kontakt</a>
                    </li>
                </ul>
            </div>
            <div className="cart-nav-icon">
                <CartIcon />
            </div>
            <div className="burger-menu">
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
            <a className="navbar-brand logo-two" href={"index"}><img src="https://wp.hjartanavguld.se/wp-content/uploads/2021/01/logo_dark_charcoal.png" alt="logo" className="logo-image" /></a>
        </nav>
    )
};

export default Nav;

import Burger from './Burger';
import React, { useState } from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
    width: 100%;
    height: 70px;
    border-bottom: 2px solid #f1f1f1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    background-color: #000000;

    .logo {
        margin: auto 0;
    }
`;

const Nav = () => {
    return (
        <NavBar>
            <div className="logo">
                <a href={"index"}><img src="https://wp.hjartanavguld.se/wp-content/uploads/2021/01/logo_dark_charcoal.png" alt="logo" className="logo-image" /></a>
            </div>
            <Burger />
        </NavBar>
    )
};

export default Nav;

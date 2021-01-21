import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { bool, func } from 'prop-types';
import CartIcon from './Cart/CartIcon';
import Link from 'next/link';

export const StyledMenu = styled.ul`
  list-style-type: none;
  display: flex;
  flew-flow: row nowrap;
  text-align: right;
  font-family: 'Raleway', sans-serif;
  margin: auto 0;

  .company-name {
    display: none;
  }

  li {
    padding: 10px 20px;
    position: relative;
  }

  a {
    text-decoration: none;
    color: #FFFFFF;
    position: relative;
  }
  a:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 1px;
    position: absolute;
    background: #FFFFFF;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
}
  a:hover:after { 
    width: 100%; 
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #FFFFFF;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    transition: transform 0.3s ease-in-out;

   a {
      color: #000000;
    }
    .company-name {
      display: flex;
      font-size: 30px;
      font-weight: bold;
      font-family: 'Raleway', sans-serif;
      padding-top: 3rem;
    }
  }
`;

const Menu = ({ open }) => {
  return (
    <>
      <StyledMenu open={open}>
        <li>
          <div className="company-name">Hjärtan av guld UF</div>
        </li>
        <li>
          <Link href={"/index"}>
            <a>Hem</a>
          </Link>
        </li>
        <li>
          <a href={"/produktsida"}>Produkter</a>
        </li>
        <li>
          <a href={"/kontakt"}>Kontakt</a>
        </li>
        <li>
          <CartIcon />
        </li>
      </StyledMenu>
    </>
  )
}
export default Menu;
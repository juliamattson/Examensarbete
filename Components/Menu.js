import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { bool, func } from 'prop-types';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: ${theme.lightyellow};
  height: 100vh;
  width: 30vw;
  text-align: right;
  padding: 1rem 1rem 3rem 5rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: transform 0.3s ease-in-out;
  font-family: 'Raleway', sans-serif;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (max-width: ${theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 20px;
    color: ${theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${theme.primaryHover};
    }
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <h3>Hjärtan av guld UF</h3>
      <a href={"/omoss"}>
        Hem
      </a>
      <a href={"/produktsida"}>
        Produkter
      </a>
      <a href={"/kontakt"}>
        Kontakt
      </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;
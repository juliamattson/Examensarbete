import styled from 'styled-components';
import React from 'react';
import { theme } from '../theme'
import { bool, func } from 'prop-types';

export const StyledBurger = styled.button`
  position: absolute;
  top: 30%;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${theme.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;
const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;
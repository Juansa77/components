import React, { useState } from 'react';
import styled from 'styled-components';

const NavbarStyled= () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo href="/" onClick={() => setIsOpen(false)}>
        Logo
      </Logo>
      <MenuIcon onClick={toggleNavbar}>
        <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </MenuIcon>
      <Menu isOpen={isOpen}>
        <MenuItem href="/" onClick={() => setIsOpen(false)}>
          Home
        </MenuItem>
        <MenuItem href="/about" onClick={() => setIsOpen(false)}>
          About
        </MenuItem>
        <MenuItem href="/services" onClick={() => setIsOpen(false)}>
          Services
        </MenuItem>
        <MenuItem href="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </MenuItem>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Logo = styled.a`
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 1.5rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    background-color: #333;
    color: #fff;
  }
`;

const MenuItem = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem;
  margin-right: 1rem;

  &:hover {
    color: #aaa;
  }
`;

export default NavbarStyled;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  background: linear-gradient(to right, rgb(255, 255, 255), rgb(255, 255, 255));
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 calc((100vw - 1200px) / 2);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 4px 20px rgba(0, 102, 204, 0.1);
  backdrop-filter: blur(8px);
  border-bottom: 2px solid rgba(0, 102, 204, 0.05);
`;

const Logo = styled(Link)`
  color: #0066cc;
  font-size: 2rem;
  font-weight: 800;
  padding: 0 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    color: #003366;
    transform: translateY(-1px);
  }

  img {
    height: 55px;
    width: auto;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 80px;
    left: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.98), rgba(240, 245, 255, 0.98));
    padding: 2rem 0;
    transition: all 0.4s ease;
    box-shadow: 0 4px 15px rgba(0, 102, 204, 0.12);
    border-bottom: 2px solid rgba(0, 102, 204, 0.05);
    z-index: 1000;
  }

  @media screen and (max-width: 480px) {
    padding: 1.5rem 0;
  }
`;

const NavLink = styled(Link)`
  color: #333;
  padding: 0.8rem 1.8rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  position: relative;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: #0066cc;
    background: linear-gradient(120deg, rgba(0, 102, 204, 0.08), rgba(0, 102, 204, 0.12));
    transform: translateY(-1px);
  }

  &.active {
    color: #0066cc;
    background: linear-gradient(120deg, rgba(0, 102, 204, 0.12), rgba(0, 102, 204, 0.15));
    box-shadow: 0 2px 8px rgba(0, 102, 204, 0.15);
  }

  @media screen and (max-width: 768px) {
    padding: 1.2rem 2rem;
    width: 100%;
    text-align: center;
    border-radius: 0;
    font-size: 1.1rem;
    
    &:hover {
      background: linear-gradient(120deg, rgba(0, 102, 204, 0.05), rgba(0, 102, 204, 0.08));
    }

    &:active {
      background: linear-gradient(120deg, rgba(0, 102, 204, 0.08), rgba(0, 102, 204, 0.12));
    }
  }

  @media screen and (max-width: 480px) {
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    transform: translate(-50%, 50%);
    font-size: 1.6rem;
    cursor: pointer;
    color: #0066cc;
    transition: all 0.3s ease;
    padding: 0.5rem;
    border-radius: 50%;
    background: rgba(0, 102, 204, 0.05);

    &:hover {
      color: #003366;
      background: rgba(0, 102, 204, 0.1);
      transform: translate(-50%, 50%) scale(1.05);
    }
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo to="/">
        <img src="/images/logo.png" alt="AllClear Logo" />
      </Logo>
      <MobileIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      <NavMenu isOpen={isOpen}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/servicos">Serviços</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </NavMenu>
    </Nav>
  );
}

export default Navbar;
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: var(--poker-dark-green);
  color: var(--text-light);
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid var(--accent-color);
  
  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-color);
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  &:hover {
    text-decoration: none;
    color: white;
  }
  
  @media (min-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 0;
  }
`;

const LogoIcon = styled.span`
  margin-right: 0.5rem;
  font-size: 1.8rem;
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  
  @media (min-width: 768px) {
    gap: 1.5rem;
    flex-wrap: nowrap;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-light);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: var(--border-radius);
  transition: all 0.2s;
  font-size: 0.9rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    text-decoration: none;
  }

  &.active {
    background-color: var(--accent-color);
    color: var(--text-dark);
  }
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const MobileMenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  color: var(--text-light);
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: auto;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          <LogoIcon>♠</LogoIcon>
          Pokerový Slovník
        </Logo>
        
        <NavLinks>
          <NavLink to="/">Domů</NavLink>
          <NavLink to="/slovnik">Slovník</NavLink>
          <NavLink to="/o-projektu">O projektu</NavLink>
          <NavLink to="/pridat-vyraz">Přidat výraz</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

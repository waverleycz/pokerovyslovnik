import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: var(--poker-dark-green);
  color: var(--text-light);
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid var(--accent-color);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--accent-color);
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: none;
    color: white;
  }
`;

const LogoIcon = styled.span`
  margin-right: 0.5rem;
  font-size: 2rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: var(--text-light);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: var(--border-radius);
  transition: all 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    text-decoration: none;
  }

  &.active {
    background-color: var(--accent-color);
    color: var(--text-dark);
  }
`;

const Header = () => {
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
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

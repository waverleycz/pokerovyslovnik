import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: var(--poker-dark-green);
  color: var(--text-light);
  padding: 3rem 2rem;
  border-top: 2px solid var(--accent-color);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  text-align: left;
`;

const FooterTitle = styled.h3`
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.75rem;

  a {
    color: var(--text-light);
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: var(--accent-color);
    }
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 3rem auto 0;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: var(--text-light);
  font-size: 1.2rem;
  transition: color 0.2s;

  &:hover {
    color: var(--accent-color);
  }
`;

// Prostor pro Google Ads
const AdSpace = styled.div`
  max-width: 1200px;
  margin: 0 auto 2rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius);
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <AdSpace id="footer-ad">
        Prostor pro reklamu - Google AdSense
      </AdSpace>

      <FooterContainer>
        <FooterContent>
          <FooterSection>
            <FooterTitle>Pokerový Slovník</FooterTitle>
            <p>Kompletní slovník pokerových pojmů a termínů pro všechny hráče pokeru.</p>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Navigace</FooterTitle>
            <FooterLinks>
              <FooterLink><Link to="/">Domů</Link></FooterLink>
              <FooterLink><Link to="/slovnik">Slovník</Link></FooterLink>
              <FooterLink><Link to="/o-projektu">O projektu</Link></FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Užitečné odkazy</FooterTitle>
            <FooterLinks>
              <FooterLink><Link to="/pravidla-pokeru">Pravidla pokeru</Link></FooterLink>
              <FooterLink><Link to="/strategie">Pokerové strategie</Link></FooterLink>
              <FooterLink><Link to="/kde-hrat">Kde hrát poker</Link></FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Kontakt</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="mailto:info@pokerovyslovnik.cz">info@pokerovyslovnik.cz</a></FooterLink>
            </FooterLinks>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            &copy; {currentYear} Pokerový Slovník. Všechna práva vyhrazena.
          </Copyright>

          <SocialLinks>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </SocialLink>
          </SocialLinks>
        </FooterBottom>
      </FooterContainer>
    </>
  );
};

export default Footer;

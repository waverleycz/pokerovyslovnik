import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import AlphabetNav from '../components/AlphabetNav';

const HomeContainer = styled.div`
  text-align: center;
`;

const Hero = styled.div`
  padding: 4rem 1.5rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: var(--border-radius);
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('https://images.unsplash.com/photo-1529311564000-4d36f1a41992?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.15;
    z-index: -1;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: var(--accent-color);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: 700;
  letter-spacing: -1px;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-light);
  max-width: 800px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: var(--accent-color);
  color: var(--text-dark);
  padding: 0.85rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  margin-top: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #e5c254;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
    text-decoration: none;
  }
`;

// Prostor pro Google Ads
const AdContainer = styled.div`
  margin: 3rem auto;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius);
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  max-width: 800px;
`;

// Horizontální banner pro mobilní zařízení
const MobileBanner = styled.div`
  display: none;
  margin: 2rem auto;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius);
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  width: 100%;
  height: 100px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FeaturesSection = styled.section`
  margin: 4rem 0;
  position: relative;

  &::before {
    content: '♠ ♥ ♦ ♣';
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.1);
    letter-spacing: 1rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2.5rem;
`;

const FeatureCard = styled.div`
  background-color: rgba(255, 255, 255, 0.08);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-align: left;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
    border-color: var(--accent-color);
  }
`;

const FeatureTitle = styled.h3`
  color: var(--accent-color);
  margin-bottom: 1rem;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '♠';
    position: absolute;
    left: 0;
    top: 0;
    font-size: 1rem;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero>
        <Title>Pokerový Slovník</Title>
        <Subtitle>
          Kompletní slovník pokerových pojmů a termínů. Najděte rychle a snadno vysvětlení všech pokerových výrazů a staňte se lepším hráčem.
        </Subtitle>
        <SearchBar />
        <CTAButton to="/slovnik">Procházet celý slovník</CTAButton>
      </Hero>

      <AlphabetNav />

      <AdContainer id="home-ad-1">
        Prostor pro reklamu - Google AdSense
      </AdContainer>

      <MobileBanner id="mobile-banner-1">
        <p>Reklamní banner</p>
        <small>728 x 90</small>
      </MobileBanner>

      <FeaturesSection>
        <h2>Proč používat náš pokerový slovník?</h2>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureTitle>Kompletní databáze</FeatureTitle>
            <p>
              Náš slovník obsahuje stovky pokerových termínů od základních pojmů až po specializovaný pokerový slang používaný profesionály.
            </p>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Rychlé vyhledávání</FeatureTitle>
            <p>
              Díky našemu vyhledávači najdete požadovaný termín během několika sekund. Stačí začít psát a výsledky se zobrazí okamžitě.
            </p>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Přehledné uspořádání</FeatureTitle>
            <p>
              Všechny termíny jsou přehledně uspořádány podle abecedy, takže se v nich snadno zorientujete a rychle najdete co potřebujete.
            </p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <AdContainer id="home-ad-2">
        Prostor pro reklamu - Google AdSense
      </AdContainer>

      <MobileBanner id="mobile-banner-2">
        <p>Reklamní banner</p>
        <small>728 x 90</small>
      </MobileBanner>

      <FeaturesSection>
        <h2>Zlepšete svou pokerovou hru</h2>
        <Subtitle>
          Porozumění pokerovým termínům je klíčem k úspěchu. Náš slovník vám pomůže lépe pochopit hru a komunikovat s ostatními hráči.
        </Subtitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureTitle>Pro začátečníky</FeatureTitle>
            <p>
              Pokud jste s pokerem teprve začali, náš slovník vám pomůže rychle se zorientovat v základních pojmech a pravidlech.
            </p>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Pro pokročilé</FeatureTitle>
            <p>
              I zkušení hráči ocení náš komplexní slovník, který zahrnuje pokročilé strategie a specializované termíny.
            </p>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Aktuální terminologie</FeatureTitle>
            <p>
              Pokerový svět se neustále vyvíjí a s ním i jeho slovník. Držíme krok s nejnovějšími trendy a termíny.
            </p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
    </HomeContainer>
  );
};

export default Home;

import styled from 'styled-components';
import SearchBar from '../components/SearchBar';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 3rem;
  background-color: rgba(255, 255, 255, 0.08);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const SectionTitle = styled.h2`
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: var(--accent-color);
  }
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.7;
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
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <Title>O projektu Pokerový Slovník</Title>
      
      <SearchBar />
      
      <Section>
        <SectionTitle>Náš cíl</SectionTitle>
        <Paragraph>
          Pokerový Slovník vznikl s cílem poskytnout komplexní a snadno dostupný zdroj informací o pokerové terminologii pro všechny hráče pokeru v České republice. Ať už jste začátečník, který se teprve seznamuje se základními pravidly, nebo zkušený hráč, který chce prohloubit své znalosti, náš slovník vám pomůže lépe porozumět světu pokeru.
        </Paragraph>
        <Paragraph>
          Naším posláním je demystifikovat pokerovou terminologii a zpřístupnit ji všem, kdo se o tuto fascinující karetní hru zajímají. Věříme, že porozumění jazyku pokeru je klíčem k lepší hře a většímu požitku z této strategické hry.
        </Paragraph>
      </Section>
      
      <AdContainer id="about-ad-1">
        Prostor pro reklamu - Google AdSense
      </AdContainer>
      
      <Section>
        <SectionTitle>Jak používat Pokerový Slovník</SectionTitle>
        <Paragraph>
          Náš slovník je navržen tak, aby byl co nejintuitivnější a nejužitečnější:
        </Paragraph>
        <ul>
          <li>Použijte vyhledávací pole v horní části stránky pro rychlé nalezení konkrétního termínu</li>
          <li>Procházejte termíny podle abecedy pomocí navigace</li>
          <li>Klikněte na libovolný termín pro zobrazení jeho detailního popisu</li>
          <li>Objevujte související termíny na stránkách s detaily</li>
        </ul>
        <Paragraph>
          Slovník je pravidelně aktualizován, aby odrážel nejnovější trendy a terminologii v pokerovém světě.
        </Paragraph>
      </Section>
      
      <Section>
        <SectionTitle>Zdroje a metodologie</SectionTitle>
        <Paragraph>
          Při tvorbě Pokerového Slovníku jsme čerpali z různých důvěryhodných zdrojů, včetně odborné literatury, profesionálních pokerových webů a konzultací s aktivními hráči. Každý termín byl pečlivě vybrán a jeho definice byla formulována tak, aby byla přesná, srozumitelná a užitečná.
        </Paragraph>
        <Paragraph>
          Naše databáze obsahuje stovky pokerových termínů, od základních pojmů až po specializovaný žargon používaný profesionálními hráči. Definice jsou napsány jasným a přístupným jazykem, aby byly srozumitelné pro všechny úrovně hráčů.
        </Paragraph>
      </Section>
      
      <AdContainer id="about-ad-2">
        Prostor pro reklamu - Google AdSense
      </AdContainer>
      
      <Section>
        <SectionTitle>SEO informace</SectionTitle>
        <Paragraph>
          Pokerový Slovník je optimalizován pro vyhledávače, aby byl snadno nalezitelný pro všechny, kdo hledají informace o pokerové terminologii. Naše stránky obsahují relevantní klíčová slova, meta popisky a strukturovaná data, která pomáhají vyhledávačům lépe porozumět obsahu a kontextu našeho webu.
        </Paragraph>
        <Paragraph>
          Mezi hlavní klíčová slova patří: pokerový slovník, poker terminologie, pokerové výrazy, poker pojmy, poker slang, poker pravidla, jak hrát poker, pokerové strategie, texas holdem terminologie, a mnoho dalších specifických pokerových termínů.
        </Paragraph>
      </Section>
      
      <Section>
        <SectionTitle>Kontaktujte nás</SectionTitle>
        <Paragraph>
          Máte-li jakékoli dotazy, návrhy na zlepšení nebo chcete-li nahlásit chybu, neváhejte nás kontaktovat na adrese info@pokerovyslovnik.cz. Vážíme si zpětné vazby od našich uživatelů a neustále pracujeme na vylepšování našeho slovníku.
        </Paragraph>
        <Paragraph>
          Děkujeme, že používáte Pokerový Slovník, a přejeme vám hodně štěstí u pokerových stolů!
        </Paragraph>
      </Section>
    </AboutContainer>
  );
};

export default AboutPage;

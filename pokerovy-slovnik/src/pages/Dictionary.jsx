import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import AlphabetNav from '../components/AlphabetNav';
import pokerTerms from '../poker_terms.json';

const DictionaryContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  color: #6c757d;
`;

const Dictionary = () => {
  const navigate = useNavigate();
  
  // Find the first letter with terms
  useEffect(() => {
    const firstAvailableLetter = Object.keys(pokerTerms)[0];
    if (firstAvailableLetter) {
      navigate(`/slovnik/${firstAvailableLetter}`);
    }
  }, [navigate]);

  return (
    <DictionaryContainer>
      <Title>Pokerový Slovník</Title>
      <Subtitle>
        Vyhledejte pokerový termín nebo vyberte písmeno pro procházení slovníku
      </Subtitle>
      
      <SearchBar />
      <AlphabetNav />
    </DictionaryContainer>
  );
};

export default Dictionary;

import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import TermCard from '../components/TermCard';
import pokerTerms from '../poker_terms.json';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  padding: 0 1rem;

  @media (max-width: 1400px) {
    flex-direction: column;
  }
`;

const SearchResultsContainer = styled.div`
  max-width: 800px;
  width: 100%;
`;

// Vertikální bannery pro reklamy na stranách
const SideBanner = styled.div`
  width: 160px;
  min-height: 600px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius);
  padding: 1rem;
  position: sticky;
  top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 1400px) {
    display: none;
  }
`;

const ResultsHeader = styled.div`
  margin-bottom: 2rem;
`;

const ResultsTitle = styled.h1`
  margin-bottom: 0.5rem;
`;

const ResultsCount = styled.p`
  color: var(--text-light);
  margin-bottom: 1.5rem;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-bottom: 2rem;
  color: var(--accent-color);
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    color: white;
  }

  &:before {
    content: '←';
    margin-right: 0.5rem;
  }
`;

const NoResultsMessage = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: var(--border-radius);
  margin-top: 2rem;
  color: var(--text-light);
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: var(--accent-color);
  }
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

const SearchResults = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q') || '';
    setSearchQuery(query);

    if (query.trim() === '') {
      setResults([]);
      setLoading(false);
      return;
    }

    // Flatten the terms from the JSON structure
    const flattenedTerms = Object.keys(pokerTerms).reduce((acc, letter) => {
      pokerTerms[letter].forEach(item => {
        acc.push(item);
      });
      return acc;
    }, []);

    // Improved search algorithm for short terms
    const searchValue = query.toLowerCase().trim();

    // First, try to find exact matches in term names
    let exactMatches = flattenedTerms.filter(item =>
      item.term.toLowerCase() === searchValue
    );

    // Then, find terms that start with the search value
    let startsWithMatches = flattenedTerms.filter(item =>
      item.term.toLowerCase().startsWith(searchValue) &&
      !exactMatches.includes(item)
    );

    // Then, find terms that include the search value
    let includesMatches = flattenedTerms.filter(item =>
      item.term.toLowerCase().includes(searchValue) &&
      !exactMatches.includes(item) &&
      !startsWithMatches.includes(item)
    );

    // Finally, search in definitions
    let definitionMatches = flattenedTerms.filter(item =>
      item.definition.toLowerCase().includes(searchValue) &&
      !exactMatches.includes(item) &&
      !startsWithMatches.includes(item) &&
      !includesMatches.includes(item)
    );

    // Combine all results, prioritizing exact matches
    const allResults = [
      ...exactMatches,
      ...startsWithMatches,
      ...includesMatches,
      ...definitionMatches
    ];

    setResults(allResults);
    setLoading(false);
  }, [location.search]);

  return (
    <PageContainer>
      {/* Levý banner pro reklamy */}
      <SideBanner>
        Prostor pro reklamu
        <br />
        160x600
      </SideBanner>

      <SearchResultsContainer>
        <BackLink to="/">Zpět na hlavní stránku</BackLink>

        <ResultsHeader>
          <ResultsTitle>Výsledky vyhledávání: "{searchQuery}"</ResultsTitle>
          <ResultsCount>
            {results.length === 0
              ? 'Nebyly nalezeny žádné výsledky'
              : `Nalezeno ${results.length} ${
                  results.length === 1 ? 'výsledek' :
                  results.length >= 2 && results.length <= 4 ? 'výsledky' : 'výsledků'
                }`}
          </ResultsCount>
        </ResultsHeader>

        <SearchBar />

        {/* Horizontální banner pro mobilní zařízení */}
        <MobileBanner>
          Prostor pro reklamu
          <br />
          320x100
        </MobileBanner>

        {loading ? (
          <p>Načítání výsledků...</p>
        ) : results.length > 0 ? (
          results.map((result, index) => (
            <TermCard
              key={index}
              term={result.term}
              definition={result.definition}
              showAd={index === 2} // Zobrazit reklamu po třetím výsledku
            />
          ))
        ) : (
          <NoResultsMessage>
            <h3>Žádné výsledky nenalezeny</h3>
            <p>
              Pro vyhledávaný výraz "{searchQuery}" nebyly nalezeny žádné pokerové termíny.
              Zkuste upravit vyhledávaný výraz nebo vyberte termín z abecedního seznamu.
            </p>
          </NoResultsMessage>
        )}
      </SearchResultsContainer>

      {/* Pravý banner pro reklamy */}
      <SideBanner>
        Prostor pro reklamu
        <br />
        160x600
      </SideBanner>
    </PageContainer>
  );
};

export default SearchResults;

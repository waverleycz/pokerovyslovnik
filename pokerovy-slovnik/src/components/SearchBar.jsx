import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import pokerTerms from '../poker_terms.json';

const SearchContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  position: relative;
`;

const SearchForm = styled.form`
  display: flex;
  position: relative;
`;

const SearchInput = styled.input`
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius);
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  background-color: rgba(255, 255, 255, 0.08);
  color: var(--text-light);

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    border-color: var(--accent-color);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    outline: none;
    background-color: rgba(255, 255, 255, 0.12);
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--accent-color);
  color: var(--text-dark);
  border: none;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;

  &:hover {
    background-color: #e5c254;
    transform: translateY(-50%) scale(1.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`;

const SearchResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(30, 30, 30, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  max-height: 300px;
  overflow-y: auto;
  z-index: 10;
  margin-top: 0.5rem;
  display: ${props => (props.show ? 'block' : 'none')};
  backdrop-filter: blur(5px);
`;

const SearchResultItem = styled.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-light);

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  &:last-child {
    border-bottom: none;
  }
`;

const TermHighlight = styled.span`
  font-weight: 700;
  color: var(--accent-color);
`;

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const [flattenedTerms, setFlattenedTerms] = useState([]);

  // Flatten the terms from the JSON structure
  useEffect(() => {
    const terms = Object.keys(pokerTerms).reduce((acc, letter) => {
      pokerTerms[letter].forEach(item => {
        acc.push(item);
      });
      return acc;
    }, []);
    setFlattenedTerms(terms);
  }, []);

  const performSearch = (value) => {
    if (value.trim() === '') {
      setSearchResults([]);
      setShowResults(false);
      return [];
    }

    // Improved search algorithm for short terms
    const searchValue = value.toLowerCase().trim();

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

    return allResults;
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const results = performSearch(value);
    setSearchResults(results.slice(0, 10)); // Limit dropdown to 10 results
    setShowResults(true);
  };

  const handleResultClick = (term) => {
    navigate(`/slovnik/term/${encodeURIComponent(term)}`);
    setSearchTerm('');
    setShowResults(false);
  };

  const handleBlur = () => {
    // Delay hiding results to allow for clicks
    setTimeout(() => {
      setShowResults(false);
    }, 200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.trim() === '') return;

    // If there's only one result, go directly to that term
    if (searchResults.length === 1) {
      handleResultClick(searchResults[0].term);
      return;
    }

    // Otherwise, navigate to search results page with all matching terms
    navigate(`/vyhledavani?q=${encodeURIComponent(searchTerm)}`);
    setShowResults(false);
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Hledat pokerový termín..."
          value={searchTerm}
          onChange={handleSearch}
          onBlur={handleBlur}
          onFocus={() => searchTerm.trim() !== '' && setShowResults(true)}
        />
        <SearchButton type="submit">Hledat</SearchButton>
      </SearchForm>
      <SearchResults show={showResults && searchResults.length > 0}>
        {searchResults.map((result, index) => (
          <SearchResultItem
            key={index}
            onClick={() => handleResultClick(result.term)}
          >
            <TermHighlight>{result.term}</TermHighlight> -
            {result.definition.length > 100
              ? `${result.definition.substring(0, 100)}...`
              : result.definition}
          </SearchResultItem>
        ))}
      </SearchResults>
    </SearchContainer>
  );
};

export default SearchBar;

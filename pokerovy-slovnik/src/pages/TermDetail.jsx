import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TermCard from '../components/TermCard';
import SearchBar from '../components/SearchBar';
import pokerTerms from '../poker_terms.json';

const TermDetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-bottom: 2rem;
  color: #0056b3;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }

  &:before {
    content: '←';
    margin-right: 0.5rem;
  }
`;

const RelatedTermsSection = styled.div`
  margin-top: 3rem;
`;

const RelatedTermsTitle = styled.h3`
  margin-bottom: 1.5rem;
  color: #495057;
`;

const RelatedTermsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const RelatedTermCard = styled(Link)`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  text-decoration: none;
  color: #212529;
  transition: all 0.2s;

  &:hover {
    background-color: #e9ecef;
    transform: translateY(-2px);
    text-decoration: none;
  }
`;

const NotFoundMessage = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-top: 2rem;
`;

const TermDetail = () => {
  const { term } = useParams();
  const navigate = useNavigate();
  const [termData, setTermData] = useState(null);
  const [relatedTerms, setRelatedTerms] = useState([]);
  const [letterOfTerm, setLetterOfTerm] = useState('');

  useEffect(() => {
    // Find the term in our data
    let foundTerm = null;
    let foundLetter = '';

    // Search through all letters
    for (const letter in pokerTerms) {
      const found = pokerTerms[letter].find(
        item => item.term.toLowerCase() === decodeURIComponent(term).toLowerCase()
      );
      
      if (found) {
        foundTerm = found;
        foundLetter = letter;
        break;
      }
    }

    if (foundTerm) {
      setTermData(foundTerm);
      setLetterOfTerm(foundLetter);

      // Find related terms (from the same letter, excluding the current term)
      const related = pokerTerms[foundLetter]
        .filter(item => item.term !== foundTerm.term)
        .sort(() => 0.5 - Math.random()) // Shuffle
        .slice(0, 6); // Take up to 6 related terms
      
      setRelatedTerms(related);
    }
  }, [term]);

  const handleBackClick = () => {
    if (letterOfTerm) {
      navigate(`/slovnik/${letterOfTerm}`);
    } else {
      navigate('/slovnik');
    }
  };

  if (!termData) {
    return (
      <TermDetailContainer>
        <BackLink to="/slovnik">Zpět na slovník</BackLink>
        <NotFoundMessage>
          <h2>Termín nenalezen</h2>
          <p>Požadovaný pokerový termín nebyl nalezen v našem slovníku.</p>
          <SearchBar />
        </NotFoundMessage>
      </TermDetailContainer>
    );
  }

  return (
    <TermDetailContainer>
      <BackLink onClick={handleBackClick}>
        Zpět na {letterOfTerm ? `termíny ${letterOfTerm}` : 'slovník'}
      </BackLink>
      
      <TermCard
        term={termData.term}
        definition={termData.definition}
        showLink={false}
      />

      {relatedTerms.length > 0 && (
        <RelatedTermsSection>
          <RelatedTermsTitle>Související pokerové termíny</RelatedTermsTitle>
          <RelatedTermsGrid>
            {relatedTerms.map((relatedTerm, index) => (
              <RelatedTermCard
                key={index}
                to={`/slovnik/term/${encodeURIComponent(relatedTerm.term)}`}
              >
                {relatedTerm.term}
              </RelatedTermCard>
            ))}
          </RelatedTermsGrid>
        </RelatedTermsSection>
      )}
    </TermDetailContainer>
  );
};

export default TermDetail;

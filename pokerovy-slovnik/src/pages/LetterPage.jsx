import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import AlphabetNav from '../components/AlphabetNav';
import TermCard from '../components/TermCard';
import pokerTerms from '../poker_terms.json';

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

const LetterPageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const LetterHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const LetterBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #0056b3;
  color: white;
  font-size: 2rem;
  font-weight: 700;
  margin-right: 1.5rem;
`;

const LetterTitle = styled.h1`
  margin: 0;
`;

const TermsCount = styled.span`
  color: #6c757d;
  font-size: 1.1rem;
  font-weight: normal;
  margin-left: 1rem;
`;

const NoTermsMessage = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-top: 2rem;
`;

const LetterPage = () => {
  const { letter } = useParams();
  const termsForLetter = pokerTerms[letter] || [];

  return (
    <LetterPageContainer>
      <SearchBar />
      <AlphabetNav activeLetter={letter} />

      <MobileBanner id={`mobile-banner-letter-${letter}-top`}>
        <p>Reklamní banner</p>
        <small>728 x 90</small>
      </MobileBanner>

      <LetterHeader>
        <LetterBadge>{letter}</LetterBadge>
        <LetterTitle>
          Pokerové termíny - {letter}
          <TermsCount>({termsForLetter.length} termínů)</TermsCount>
        </LetterTitle>
      </LetterHeader>

      {termsForLetter.length > 0 ? (
        <>
          {termsForLetter.map((term, index) => (
            <React.Fragment key={index}>
              <TermCard
                term={term.term}
                definition={term.definition}
                showAd={index % 5 === 4} // Zobrazit reklamu po každém pátém termínu
              />
              {index % 10 === 9 && ( // Zobrazit mobilní banner po každém desátém termínu
                <MobileBanner id={`mobile-banner-letter-${letter}-${index}`}>
                  <p>Reklamní banner</p>
                  <small>728 x 90</small>
                </MobileBanner>
              )}
            </React.Fragment>
          ))}

          <MobileBanner id={`mobile-banner-letter-${letter}-bottom`}>
            <p>Reklamní banner</p>
            <small>728 x 90</small>
          </MobileBanner>
        </>
      ) : (
        <NoTermsMessage>
          <h3>Žádné termíny nenalezeny</h3>
          <p>Pro toto písmeno nejsou k dispozici žádné pokerové termíny.</p>
        </NoTermsMessage>
      )}
    </LetterPageContainer>
  );
};

export default LetterPage;

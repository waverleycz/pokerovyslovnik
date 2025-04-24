import { Link } from 'react-router-dom';
import styled from 'styled-components';
import pokerTerms from '../poker_terms.json';

const NavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.3rem;
  margin: 1rem 0;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: var(--border-radius);
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  @media (min-width: 768px) {
    gap: 0.5rem;
    margin: 2rem 0;
    padding: 1.5rem;
  }
`;

const LetterLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${props => props.active ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.active ? 'var(--text-dark)' : 'var(--text-light)'};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: ${props => props.active ? '0 4px 8px rgba(0, 0, 0, 0.3)' : 'none'};
  transform: ${props => props.active ? 'scale(1.1)' : 'scale(1)'};
  font-size: 0.9rem;

  &:hover {
    background-color: ${props => props.active ? '#e5c254' : 'rgba(255, 255, 255, 0.2)'};
    text-decoration: none;
    transform: ${props => props.active ? 'scale(1.15)' : 'scale(1.05)'};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &.disabled {
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: none;
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  @media (min-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1rem;
  }
`;

const AlphabetNav = ({ activeLetter }) => {
  // Create an array of all letters in the alphabet
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // Check which letters have terms in our dictionary
  const availableLetters = Object.keys(pokerTerms);

  return (
    <NavContainer>
      {alphabet.map(letter => {
        const hasTerms = availableLetters.includes(letter);

        return (
          <LetterLink
            key={letter}
            to={hasTerms ? `/slovnik/${letter}` : '#'}
            active={activeLetter === letter ? 1 : 0}
            className={!hasTerms ? 'disabled' : ''}
          >
            {letter}
          </LetterLink>
        );
      })}
    </NavContainer>
  );
};

export default AlphabetNav;

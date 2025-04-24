import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.12);
    border-color: var(--accent-color);
  }
`;

const TermHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 0.75rem;
`;

const TermTitle = styled.h3`
  margin: 0;
  color: var(--accent-color);
  font-weight: 600;
`;

const TermLink = styled(Link)`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0.05);
  padding: 0.4rem 0.8rem;
  border-radius: 50px;
  transition: all 0.2s;

  &:hover {
    color: var(--text-dark);
    background-color: var(--accent-color);
    text-decoration: none;
  }
`;

const TermDefinition = styled.p`
  margin: 0;
  color: var(--text-light);
  line-height: 1.6;
`;

// Prostor pro Google Ads
const AdContainer = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius);
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
`;

const TermCard = ({ term, definition, showLink = true, showAd = false }) => {
  return (
    <>
      <Card>
        <TermHeader>
          <TermTitle>{term}</TermTitle>
          {showLink && (
            <TermLink to={`/slovnik/term/${encodeURIComponent(term)}`}>
              Zobrazit detail
            </TermLink>
          )}
        </TermHeader>
        <TermDefinition>{definition}</TermDefinition>
      </Card>

      {showAd && (
        <AdContainer id={`ad-${term.replace(/\s+/g, '-').toLowerCase()}`}>
          Prostor pro reklamu - Google AdSense
        </AdContainer>
      )}
    </>
  );
};

export default TermCard;

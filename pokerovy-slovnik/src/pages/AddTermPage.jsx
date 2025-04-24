import { useState } from 'react';
import styled from 'styled-components';

const AddTermContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: var(--border-radius);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: var(--border-radius);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
  color: white;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border-radius: var(--border-radius);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
  color: white;
  min-height: 150px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  border: none;
  background-color: var(--accent-color);
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--accent-color-hover);
  }
`;

const Message = styled.div`
  padding: 1rem;
  border-radius: var(--border-radius);
  margin-top: 1rem;
  text-align: center;
  
  &.success {
    background-color: rgba(0, 255, 0, 0.1);
    border: 1px solid rgba(0, 255, 0, 0.3);
  }
  
  &.error {
    background-color: rgba(255, 0, 0, 0.1);
    border: 1px solid rgba(255, 0, 0, 0.3);
  }
`;

const AddTermPage = () => {
  const [term, setTerm] = useState('');
  const [definition, setDefinition] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!term || !definition) {
      setMessage({ text: 'Prosím vyplňte všechna pole', type: 'error' });
      return;
    }
    
    // V reálné aplikaci by zde byl kód pro uložení výrazu do databáze
    // Zde pouze simulujeme úspěšné uložení
    
    // Vytvoření objektu s novým výrazem
    const newTerm = {
      term,
      definition
    };
    
    // Zde by byl kód pro uložení do databáze
    console.log('Nový výraz:', newTerm);
    
    // Zobrazení zprávy o úspěchu
    setMessage({ text: 'Výraz byl úspěšně přidán', type: 'success' });
    
    // Vyčištění formuláře
    setTerm('');
    setDefinition('');
    
    // Po 3 sekundách skryjeme zprávu
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 3000);
  };

  return (
    <AddTermContainer>
      <Title>Přidat nový výraz</Title>
      
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="term">Výraz:</Label>
          <Input 
            type="text" 
            id="term" 
            value={term} 
            onChange={(e) => setTerm(e.target.value)} 
            placeholder="Zadejte pokerový výraz"
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="definition">Definice:</Label>
          <Textarea 
            id="definition" 
            value={definition} 
            onChange={(e) => setDefinition(e.target.value)} 
            placeholder="Zadejte definici výrazu"
          />
        </FormGroup>
        
        <Button type="submit">Přidat výraz</Button>
      </Form>
      
      {message.text && (
        <Message className={message.type}>
          {message.text}
        </Message>
      )}
    </AddTermContainer>
  );
};

export default AddTermPage;

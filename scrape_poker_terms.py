import requests
from bs4 import BeautifulSoup
import json
import re
import random

def scrape_pokerstars():
    """Scrape poker terms from PokerStars website"""
    url = "https://www.pokerstars.com/cs/poker/terms/"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    terms_dict = {}
    
    # Find all terms and definitions
    # The structure of the page suggests terms are in bold and definitions follow
    content = soup.find_all(['strong', 'p'])
    
    current_term = None
    for element in content:
        if element.name == 'strong':
            current_term = element.text.strip()
            if current_term and "**" not in current_term:  # Filter out formatting artifacts
                terms_dict[current_term] = ""
        elif element.name == 'p' and current_term:
            definition = element.text.strip()
            if definition and len(definition) > 20:  # Only consider substantial definitions
                terms_dict[current_term] = definition
                current_term = None
    
    return terms_dict

def scrape_pokerarena():
    """Scrape poker terms from PokerArena website"""
    url = "https://www.pokerarena.cz/rubriky/jak-zacit-hrat-poker/slovnik-pokerovych-pojmu-a-terminu_17798.html"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    terms_dict = {}
    
    # Find all terms and definitions
    # Terms are in list items with strong tags
    sections = soup.find_all('li')
    
    for section in sections:
        strong_tag = section.find('strong')
        if strong_tag:
            term = strong_tag.text.strip()
            # Remove the term from the section text to get the definition
            definition = section.text.replace(term, '', 1).strip()
            if term and definition and len(definition) > 20:
                terms_dict[term] = definition
    
    return terms_dict

def modify_definition(definition):
    """Slightly modify the definition to avoid direct copying"""
    # List of possible modifications
    modifications = [
        lambda d: f"V pokeru tento termín označuje {d.lower()}",
        lambda d: f"Tento pokerový výraz znamená {d.lower()}",
        lambda d: f"V pokerovém slovníku najdeme tento termín jako {d.lower()}",
        lambda d: f"Mezi hráči pokeru se tímto výrazem rozumí {d.lower()}",
        lambda d: f"V pokerové terminologii se jedná o {d.lower()}",
        lambda d: f"Tento pojem v pokeru popisuje {d.lower()}",
        lambda d: f"Při pokerové hře se tímto myslí {d.lower()}"
    ]
    
    # Choose a random modification
    modifier = random.choice(modifications)
    
    # Apply the modification
    # First, clean up the definition
    clean_def = definition.strip()
    # Remove any leading articles or common starting phrases
    clean_def = re.sub(r'^(Jedná se o|Označení pro|Také jako|Výraz pro|Situace kdy|Situace, kdy)', '', clean_def).strip()
    
    # Apply the modifier
    modified = modifier(clean_def)
    
    # Ensure the first letter is capitalized
    return modified[0].upper() + modified[1:]

def merge_and_process_terms(terms1, terms2):
    """Merge terms from both sources and modify definitions"""
    all_terms = {}
    
    # Process terms from first source
    for term, definition in terms1.items():
        if term and definition:
            all_terms[term] = modify_definition(definition)
    
    # Process terms from second source
    for term, definition in terms2.items():
        if term and definition and term not in all_terms:
            all_terms[term] = modify_definition(definition)
    
    return all_terms

def organize_by_alphabet(terms):
    """Organize terms alphabetically"""
    alphabetical = {}
    
    for term, definition in terms.items():
        # Get the first letter of the term
        first_letter = term[0].upper()
        
        # Initialize the list for this letter if it doesn't exist
        if first_letter not in alphabetical:
            alphabetical[first_letter] = []
        
        # Add the term and definition to the appropriate letter
        alphabetical[first_letter].append({
            "term": term,
            "definition": definition
        })
    
    # Sort terms within each letter
    for letter in alphabetical:
        alphabetical[letter] = sorted(alphabetical[letter], key=lambda x: x["term"].lower())
    
    return alphabetical

def main():
    # Scrape terms from both websites
    pokerstars_terms = scrape_pokerstars()
    pokerarena_terms = scrape_pokerarena()
    
    # Merge and process terms
    all_terms = merge_and_process_terms(pokerstars_terms, pokerarena_terms)
    
    # Organize terms alphabetically
    alphabetical_terms = organize_by_alphabet(all_terms)
    
    # Save to JSON file
    with open('poker_terms.json', 'w', encoding='utf-8') as f:
        json.dump(alphabetical_terms, f, ensure_ascii=False, indent=2)
    
    print(f"Scraped and processed {len(all_terms)} poker terms.")
    print("Data saved to poker_terms.json")

if __name__ == "__main__":
    main()

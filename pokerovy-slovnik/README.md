# Pokerový Slovník

Webová aplikace s pokerovými termíny a jejich vysvětlením.

## Funkce

- Abecední seznam pokerových termínů
- Vyhledávání termínů
- Detailní popis každého termínu
- Responzivní design pro mobilní zařízení
- Optimalizace pro SEO

## Technologie

- React
- Vite
- React Router
- Styled Components

## Vývoj

```bash
# Instalace závislostí
npm install

# Spuštění vývojového serveru
npm run dev

# Build pro produkci
npm run build
```

## Nasazení na GitHub Pages

Aplikace je automaticky nasazována na GitHub Pages pomocí GitHub Actions při každém push do hlavní větve.

## Připojení vlastní domény

1. V souboru `public/CNAME` odkomentujte a nahraďte doménu vaší vlastní
2. V nastavení DNS vašeho poskytovatele domény přidejte následující záznamy:
   - A záznam: `@` -> `185.199.108.153`
   - A záznam: `@` -> `185.199.109.153`
   - A záznam: `@` -> `185.199.110.153`
   - A záznam: `@` -> `185.199.111.153`
   - CNAME záznam: `www` -> `[vas-github-username].github.io`
3. V nastavení GitHub repozitáře v sekci "Pages" přidejte vaši doménu

## Licence

MIT

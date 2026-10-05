# Persoonlijke Website

Een persoonlijke website gebouwd met HTML, CSS en JavaScript.

## Projectstructuur

```
persoonlijke-website/
├── index.html            # Homepage
├── css/
│   ├── style.css         # Hoofdstylesheet (blauw thema)
│   └── responsive.css    # Responsive design
├── js/
│   └── script.js         # Interactiviteit
├── images/               # Afbeeldingen
└── pages/
    ├── over-mij.html     # Over mij pagina
    ├── projecten.html    # Projecten / portfolio
    └── contact.html      # Contactpagina met formulier
```

## Functionaliteiten

- Responsive design met mobiel hamburgermenu
- Navigatie met actieve pagina-indicator
- Contactformulier met JavaScript-validatie
- Voortgangsbalken voor vaardigheden
- Smooth scroll naar secties
- Knoppenlijst onder projecten met technologietags

## Technologieen

- HTML5 (semantische structuur)
- CSS3 (Flexbox, Grid, CSS-variabelen)
- JavaScript (ES6, DOM-manipulatie)

## Aanpassen

1. Open `index.html` en vervang "MijnNaam" door je eigen naam.
2. Voeg een portretfoto toe als `images/portret.png` (of wijzig de verwijzing in `pages/over-mij.html`).
3. Vul je eigen projecten in op `pages/projecten.html`.
4. Pas contactgegevens aan in `pages/contact.html`.
5. Kleuren aanpassen kan centraal via CSS-variabelen bovenaan `css/style.css`.

## Gebruik

Open `index.html` rechtstreeks in je browser of gebruik een lokale server:

```
npx serve .
```

## Licentie

Gratis te gebruiken voor eigen doeleinden.

## Gesprekshistorie met OpenCode

1. Analyse: bekeken wat week 2 al had (`index.html`, `pages/projecten.html` met 4 placeholders, `css/style.css`, `js/script.js`).
2. Specificatie + plan: eerst analyseren en plannen voor programmeren, in kleine stappen werken.
3. Voorstel OpenCode: 1. Portfolio Website (HTML/CSS/JS), 2. Blokken-pagina (HTML/CSS), 3. Boeking Database (SQL/MySQL).
4. Beslissing leerling: 1 aanpassen, 2 aanpassen, 3 eerst afwijzen en vervangen door Python-project.
5. Daarna: geen Python-project nodig, Python-voorstel afgewezen.
6. Definitief: 1. Portfolio Website, 2. Blokken-pagina, 3. Boeking Database behouden. Naam gepersonaliseerd naar Omar / Omar Destanovic.
7. Uitgevoerd: alleen `pages/projecten.html` aangepast (titel gehouden, 4 placeholders vervangen door 3 echte kaarten met `project-card`, `h3`, `p` en `tag`). Geen nieuwe functionaliteit toegevoegd.
8. Test: aantal `project-card` = 3, `h3` = 3, `tag` = 7, navigatie vanuit `index.html` naar `pages/projecten.html` gecontroleerd.
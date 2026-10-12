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

1. Naam is gepersonaliseerd naar Omar / Omar Destanovic (`index.html`, alle `pages/`, footer).
2. Over-mij is ingevuld: 16 jaar, Leerdam, Software Development + hobby's (voetbal, Rocket League, schaken).
3. Projecten staan in `pages/projecten.html` (3 echte projecten).
4. Contactgegevens in `pages/contact.html`: school-email + Leerdam (geen nep-telefoonnummer meer).
5. Geen portretfoto nodig: `pages/over-mij.html` gebruikt een CSS-avatar (`avatar-placeholder` in `css/style.css`) i.p.v. `images/portret.png`.
6. Kleuren aanpassen kan centraal via CSS-variabelen bovenaan `css/style.css`.

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
9. Personalisatie: `pages/over-mij.html` ingevuld (16, Leerdam, Software Development + hobby's), `pages/contact.html` ingevuld (345875@student.mboutrecht.nl + Leerdam, nep-telefoonnummer weg).
10. Voorstel OpenCode (foto toevoegen als `images/portret.png`) afgewezen door leerling. Gekozen voor CSS-avatar (`avatar-placeholder` in `css/style.css`, initialen O.D.) omdat `images/` leeg was en zo geen broken image meer is. OpenCode stelde extra functionaliteit voor, leerling koos voor zelfde stijl zonder nieuwe JS.
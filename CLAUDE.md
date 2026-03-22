# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Présentation du projet

Site portfolio statique multi-pages pour "Les yeux ouverts" — photographe de mariage et de portrait. Pas de système de build ni de gestionnaire de paquets — le CSS et le JS sont pré-compilés et servis directement.

## Architecture

**Stack** : HTML5, CSS3, SASS/SCSS, Vanilla JS + jQuery — aucun framework, aucun bundler.

**Structure des pages** (un fichier HTML par page) :
- `index.html` — Page d'accueil avec hero
- `a-propos.html` — À propos de la photographe
- `portfolio.html` — Galerie avec filtres et lightbox
- `tarifs.html` — Tarifs
- `faq.html` — FAQ en accordéon
- `contact.html` — Formulaire de contact (Formspree)
- `mentions-legales.html`, `rgpd.html` — Pages légales

**Organisation des assets** :
- `assets/sass/` — Sources SASS (base/, components/, layout/, libs/)
- `assets/css/` — CSS compilé (un fichier par page : `main.css`, `about.css`, `contact.css`, etc.)
- `assets/js/` — JS custom (`nav.js`, `contact.js`, `portfolio.js`, `faq.js`, `main.js`) + librairies tierces
- `assets/fonts/` — Police custom : **Milk And Honey** (MilkAndHoney.ttf) + Font Awesome
- `images/` — Images du site et `images/portfolio/` pour la galerie

## Workflow SASS

Les sources SASS sont dans `assets/sass/`. Après modification d'un fichier `.scss`, compiler manuellement vers le fichier `assets/css/*.css` correspondant. Il n'y a pas de script watch/build — compiler avec l'outil SASS local :

```bash
sass assets/sass/main.scss assets/css/main.css
```

Répéter pour chaque feuille de style spécifique à une page si elle est modifiée.

**Tokens de design** (définis dans SASS) :
- Fond : `#4B4139` (brun chaud)
- Texte : `#EDE8D0` (crème)
- Police principale : "Milk And Honey" (custom), fallback Times New Roman

## Modules JavaScript

| Fichier | Rôle |
|---|---|
| `nav.js` | Toggle menu hamburger (mobile) |
| `portfolio.js` | Filtrage par catégorie + lightbox (clavier : Echap/flèches) |
| `faq.js` | Ouverture/fermeture accordéon |
| `contact.js` | Soumission du formulaire via `fetch` vers Formspree |

Les librairies tierces sont pré-minifiées dans `assets/js/` (jQuery, jquery.poptrox, browser, breakpoints, util).

## Formulaire de contact

Géré par Formspree. L'endpoint est configuré dans `contact.js` — mettre à jour l'ID du formulaire Formspree si le compte change.

## Branches

- `main` — production
- `develop` — branche de développement active ; merger dans `main` pour les mises en production

# BA Driving Exam

A handy study app built for expats, digital nomads, and immigrants in Argentina — helping you prepare for the Buenos Aires driving theory exam without needing fluent Spanish. The interface is in English by default, with a one-click switch to Russian — and all Spanish terms are annotated throughout.

![vanilla JS](https://img.shields.io/badge/vanilla-JS-yellow) ![license](https://img.shields.io/badge/license-MIT-blue)

## Features

- **Quiz** — 402 questions from the official Argentine driving exam, with road sign images. Questions are weighted: unseen questions appear more often.
- **Timer** — 40-minute countdown matching the real exam, with color indicators.
- **Explanations** — after each answer, a detailed explanation of why the option is correct or incorrect.
- **Word breakdown** — below each question, key vocabulary relevant to the topic is shown with Russian translations.
- **Dictionary** — 135 words and phrases across categories: documents, signs, speed, maneuvers, traffic, safety, conditions, verbs, question structure.
- **Alphabet** — Spanish alphabet with pronunciation notes and Argentine-specific quirks.
- **Statistics** — weak topics, session history, overall accuracy. Progress saved in `localStorage`.
- **Info** — step-by-step guide to getting a driving license in Buenos Aires, with Spanish terms explained.
- **EN / RU** — language toggle in the Info tab switches the entire UI between English and Russian.

## Project Structure

```
examen/
├── index.html       # HTML markup
├── src/
│   ├── style.css    # All styles
│   ├── data.js      # Questions, vocabulary, i18n strings, state + render functions
│   └── app.js       # Vocab/stats/info rendering, navigation, event handling
└── README.md
```

## Running Locally

Open `index.html` directly in a browser — no build step or dependencies needed.

Or serve with a local server:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

## Data Sources

Questions are sourced from [bandinopla/simulador-test-de-conducir](https://github.com/bandinopla/simulador-test-de-conducir) — a simulator for the Argentine testdeconducir.com.ar exam.

Official Buenos Aires license info: [buenosaires.gob.ar](https://buenosaires.gob.ar/gcaba_historico/tramites/otorgamiento-de-licencia-de-conducir)

## Tech

- Vanilla JS — no frameworks, no build tools
- CSS Custom Properties
- `localStorage` for progress persistence
- Inter font (Google Fonts)

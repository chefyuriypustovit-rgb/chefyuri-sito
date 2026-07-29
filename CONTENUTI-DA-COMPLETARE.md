# Contenuti da completare prima del lancio

Il sito è strutturalmente completo (design, home + 7 pagine Esperienze).
Quello che segue è l'elenco di ogni placeholder ancora presente nel codice.
**Non pubblicare finché questa lista non è vuota** — pagine con placeholder
visibili tradiscono l'obiettivo di fiducia del sito.

## Novità di oggi (25/07/2026)

Riepilogo delle modifiche fatte oggi sulla home, per chi non ha seguito passo
passo:

- **Apertura (Hero)**: nuovo claim "Ogni cena nasce per una sola tavola. La tua."
- **Pulsante "Prenota"** in alto reso più visibile (prima era solo un contorno)
- **Sezione "Chi sono"**: testo ridotto e riorganizzato (apertura forte + 3
  paragrafi brevi + citazione), foto con angoli arrotondati
- **Sezione "Esperienze"**: foto delle 7 card ingrandite, meno testo per card,
  più spazio, angoli arrotondati
- **Sezione "Galleria"**: completamente rifatta — ora è un **carosello 3D ad
  anello** con 6 foto (ingredienti, preparazione, impiattamento, tavola
  apparecchiata, piatto signature, brindisi). Si naviga trascinando con il
  dito/mouse, oppure con le frecce o i pallini sotto. Nessuna foto è più un
  placeholder in questa sezione.
- **Rimossa la sezione "Testimonianze"** (le citazioni erano illustrative, non
  vere — la aggiungiamo quando ci sono recensioni reali, vedi punto 4 sotto)
- **Rimossa la sezione "Instagram"** (i 6 Reel erano solo placeholder — la
  aggiungiamo quando ci sono contenuti veri da mostrare, vedi punto 5 sotto)
- **Nuova sezione "Come si svolge una serata"**: le 7 fasi del servizio a
  icone (Richiesta → Menu → Arrivo → Preparazione → Servizio → Pulizia → Fine
  esperienza)
- **Nuova sezione finale**: foto del brindisi a piena larghezza con invito a
  prenotare una consulenza
- Titoli più grandi, più spazio tra le sezioni — aspetto più curato

## 1. Foto hero (index.html, sezione `#hero-media`)
- [x] Foto hero reale caricata (`assets/img/hero.png`) — fatto il 23/07/2026
- [ ] Quando il video sarà pronto, sostituire `<img>` con `<video autoplay muted loop playsinline>`
      — istruzioni già in un commento HTML sopra `#hero-media`
- File: `index.html`

## 2. Foto — tutte le altre (classe `.ph-photo` in ogni pagina)
- [x] Chi sono — fatto il 23/07/2026 (`assets/img/chi-sono.png`, foto di dettaglio/impiattamento, non un ritratto in volto)
- [ ] Esperienze: 7 foto per la griglia home + 1 foto hero per ciascuna delle 7 pagine dedicate
  - [x] Cena Privata — foto griglia home fatta il 24/07/2026 (`assets/img/esperienza-cena-privata.png`) + foto hero della pagina dedicata fatta il 26/07/2026 (`assets/img/esperienza-cena-privata-hero.webp`) — **completa**
  - [x] Cooking Class — foto griglia home fatta il 24/07/2026 (`assets/img/esperienza-cooking-class.png`) + foto hero della pagina dedicata fatta il 26/07/2026 (`assets/img/esperienza-cooking-class-hero.webp`) — **completa**
  - [x] Chef in Villa — foto griglia home fatta il 24/07/2026 (`assets/img/esperienza-chef-in-villa.webp`) + foto hero della pagina dedicata fatta il 26/07/2026 (`assets/img/esperienza-chef-in-villa-hero.webp`) — **completa**
  - [x] Eventi Aziendali — foto griglia home fatta il 24/07/2026 (`assets/img/esperienza-eventi-aziendali.webp`) + foto hero della pagina dedicata fatta il 26/07/2026 (`assets/img/esperienza-eventi-aziendali-hero.webp`) — **completa**
  - [x] Proposte di Matrimonio — foto griglia home fatta il 24/07/2026 (`assets/img/esperienza-proposta-di-matrimonio.webp`) — manca ancora la foto hero della pagina dedicata `esperienze/proposta-di-matrimonio.html`
  - [x] Compleanni — foto griglia home fatta il 24/07/2026 (`assets/img/esperienza-compleanni.webp`) — manca ancora la foto hero della pagina dedicata `esperienze/compleanni.html`
  - [x] Anniversari — foto griglia home fatta il 24/07/2026 (`assets/img/esperienza-anniversari.webp`) — manca ancora la foto hero della pagina dedicata `esperienze/anniversari.html`
  - [x] **Griglia Esperienze in home completa** — tutte e 7 le card hanno una foto reale, ingrandite e con angoli arrotondati (25/07/2026)
- [x] **Galleria home completamente rifatta il 25/07/2026** — non più una griglia di riquadri, ma un carosello 3D ad anello con 6 foto reali (nessun placeholder rimasto):
  - Ingredienti (`assets/img/galleria-mise-en-place.webp`)
  - Preparazione (`assets/img/galleria-tecnica.jpeg`)
  - Impiattamento (`assets/img/galleria-dettaglio-impiattamento.webp`)
  - Tavola apparecchiata (`assets/img/galleria-tavola-apparecchiata.png`)
  - Piatto signature (`assets/img/galleria-piatto-signature.png`)
  - Brindisi (`assets/img/galleria-brindisi.webp`)

## 3. Testi Esperienze
- [x] Tutte e 7 le pagine hanno testo unico e sostanzioso (~320-350 parole ciascuna) — **da rileggere e validare** con Chef Yuri prima del lancio (fatti, numeri di ospiti, durate indicate sono ipotesi ragionevoli, non dati confermate).

## 4. Testimonianze
- [ ] **Sezione rimossa dalla home il 25/07/2026** (era solo illustrativa, non recensioni vere) — da riprogettare e reinserire quando ci sono testimonianze reali verificabili (nome/contesto reale, con consenso a pubblicarle)
- [ ] Statistiche (esperienze curate, anni di esperienza, ospiti serviti): da compilare solo con numeri reali e verificati quando la sezione tornerà — non inventare cifre tipo "150+ eventi" se non è vero

## 5. Instagram
- [ ] **Sezione rimossa dalla home il 25/07/2026** (i 6 Reel erano solo placeholder) — da riprogettare e reinserire quando ci sono 4-6 Reel reali da mostrare
- [ ] Confermare/correggere l'handle Instagram: attualmente placeholder `instagram.com/chefyuri` (resta come link nell'icona social del footer)

## 6. WhatsApp
- [x] Numero WhatsApp business reale collegato: `+39 389 558 2429` — fatto il 23/07/2026
      (index.html + tutte le pagine esperienze + pulsanti flottanti)

## 7. Altri dettagli minori
- [x] Email di contatto aggiornata a `chefyuriypustovit@gmail.com`
- [ ] Dominio nei tag `canonical` / `og:` — attualmente placeholder `https://www.chefyuri.it/`
- [ ] Collegare il form di prenotazione a un servizio reale di invio (es. Formspree, backend proprio) — attualmente mostra solo un messaggio di conferma lato client, senza inviare nulla

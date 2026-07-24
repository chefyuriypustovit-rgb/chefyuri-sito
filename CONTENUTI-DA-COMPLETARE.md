# Contenuti da completare prima del lancio

Il sito è strutturalmente completo (design, 8 sezioni home, 7 pagine Esperienze).
Quello che segue è l'elenco di ogni placeholder presente nel codice, in
corrispondenza della checklist §5 del brief. **Non pubblicare finché questa
lista non è vuota** — è il rischio esplicitamente segnalato nel brief: pagine
con placeholder visibili tradiscono l'obiettivo di fiducia del sito.

## 1. Foto hero (index.html, sezione `#hero-media`)
- [x] Foto hero reale caricata (`assets/img/hero.png`) — fatto il 23/07/2026
- [ ] Quando il video sarà pronto, sostituire `<img>` con `<video autoplay muted loop playsinline>`
      — istruzioni già in un commento HTML sopra `#hero-media`
- File: `index.html`

## 2. Foto — tutte le altre (classe `.ph-photo` in ogni pagina)
- [x] Chi sono — fatto il 23/07/2026 (`assets/img/chi-sono.png`, foto di dettaglio/impiattamento, non un ritratto in volto)
- [ ] Esperienze: 7 foto per la griglia home + 1 foto hero per ciascuna delle 7 pagine dedicate
  - [x] Cena Privata — foto griglia home fatta il 24/07/2026 (`assets/img/esperienza-cena-privata.png`) — manca ancora la foto hero della pagina dedicata `esperienze/cena-privata.html`
  - [x] Cooking Class — foto griglia home fatta il 24/07/2026 (`assets/img/esperienza-cooking-class.png`) — manca ancora la foto hero della pagina dedicata `esperienze/cooking-class.html`
  - [x] Chef in Villa — foto griglia home fatta il 24/07/2026 (`assets/img/esperienza-chef-in-villa.webp`) — manca ancora la foto hero della pagina dedicata `esperienze/chef-in-villa.html`
  - [x] Eventi Aziendali — foto griglia home fatta il 24/07/2026 (`assets/img/esperienza-eventi-aziendali.webp`) — manca ancora la foto hero della pagina dedicata `esperienze/eventi-aziendali.html`
  - [x] Proposte di Matrimonio — foto griglia home fatta il 24/07/2026 (`assets/img/esperienza-proposta-di-matrimonio.webp`) — manca ancora la foto hero della pagina dedicata `esperienze/proposta-di-matrimonio.html`
  - [x] Compleanni — foto griglia home fatta il 24/07/2026 (`assets/img/esperienza-compleanni.webp`) — manca ancora la foto hero della pagina dedicata `esperienze/compleanni.html`
  - [x] Anniversari — foto griglia home fatta il 24/07/2026 (`assets/img/esperienza-anniversari.webp`) — manca ancora la foto hero della pagina dedicata `esperienze/anniversari.html`
  - [x] **Griglia Esperienze in home completa** — tutte e 7 le card hanno ora una foto reale
- [ ] Galleria: 10-15 foto selezionate (attualmente 9 riquadri, 4 fatti / 5 ancora placeholder)
  - [x] Piatto signature — fatto il 24/07/2026 (`assets/img/galleria-piatto-signature.png`)
  - [x] Mise en place — fatto il 24/07/2026 (`assets/img/galleria-mise-en-place.webp`)
  - [x] Servizio in villa — fatto il 24/07/2026 (`assets/img/galleria-servizio-in-villa.webp`)
  - [x] Dettaglio — fatto il 24/07/2026 (`assets/img/galleria-dettaglio-impiattamento.webp`)
- [ ] Ogni `.ph-photo` ha una `<span class="ph-caption">` che indica cosa deve mostrare la foto reale

## 3. Testi Esperienze
- [x] Tutte e 7 le pagine hanno testo unico e sostanzioso (~320-350 parole ciascuna) — **da rileggere e validare** con Chef Yuri prima del lancio (fatti, numeri di ospiti, durate indicate sono ipotesi ragionevoli, non dati confermati).

## 4. Testimonianze (index.html, sezione `#testimonianze`)
- [ ] Le 3 citazioni attuali sono **illustrative**, non reali — sostituire con testimonianze verificabili (nome/contesto reale, con consenso a pubblicarle)
- [ ] Le 3 statistiche (mostrate come "—") vanno compilate solo con numeri reali e verificati — non inventare cifre tipo "150+ eventi" se non è vero
- [ ] Valutare aggiunta di formati misti extra (screenshot recensioni, video) come indicato nel brief

## 5. Instagram (index.html, sezione `#instagram`)
- [ ] Sostituire i 6 placeholder "Reel" con embed reali di 4-6 Reel selezionati manualmente
- [ ] Confermare/correggere l'handle Instagram: attualmente placeholder `instagram.com/chefyuri`

## 6. WhatsApp
- [x] Numero WhatsApp business reale collegato: `+39 389 558 2429` — fatto il 23/07/2026
      (index.html + tutte le pagine esperienze + pulsanti flottanti)

## 7. Altri dettagli minori
- [ ] Email di contatto `info@chefyuri.it` — confermare che sia quella corretta
- [ ] Dominio nei tag `canonical` / `og:` — attualmente placeholder `https://www.chefyuri.it/`
- [ ] Collegare il form di prenotazione a un servizio reale di invio (es. Formspree, backend proprio) — attualmente mostra solo un messaggio di conferma lato client, senza inviare nulla

# Nabi Website

Landing page semplice per l'app Nabi, creata con Next.js e Tailwind CSS.

## Installazione

1. Installa le dipendenze:
```bash
npm install
```

2. Avvia il server di sviluppo:
```bash
npm run dev
```

3. Apri [http://localhost:3000](http://localhost:3000) nel browser.

## Struttura

- `src/app/page.tsx` - Landing page principale con hero, features e footer
- `src/app/layout.tsx` - Layout principale dell'app
- `tailwind.config.js` - Configurazione Tailwind con palette colori journal

## Personalizzazione

### Link App Store

Per aggiornare il link di download iOS, modifica l'URL nel file `src/app/page.tsx`:
- Cerca `https://apps.apple.com/app/nabi` e sostituiscilo con il link reale della tua app

### Colori

I colori sono definiti in `tailwind.config.js` nella sezione `journal`. Puoi usarli con classi come:
- `bg-journal-rose-light`
- `text-journal-lavender-dark`
- `bg-journal-mint-DEFAULT`

## Build per produzione

```bash
npm run build
npm start
```

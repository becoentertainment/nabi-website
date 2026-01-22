# Guida al Deploy - Nabi Website

## Opzione 1: Vercel (Consigliato per Next.js)

Vercel è la piattaforma creata dagli sviluppatori di Next.js ed è la soluzione più semplice.

### Passaggi:

1. **Installa Vercel CLI** (opzionale, puoi anche usare l'interfaccia web):
```bash
npm i -g vercel
```

2. **Testa il build localmente** (consigliato):
```bash
npm install
npm run build
npm start
```
Se funziona, sei pronto per il deploy!

3. **Deploy su Vercel**:

   **Opzione A - Via Web (più semplice):**
   - Vai su [vercel.com](https://vercel.com)
   - Crea un account (puoi usare GitHub)
   - Clicca "New Project"
   - Connetti il tuo repository GitHub (o carica i file)
   - Vercel rileverà automaticamente Next.js
   - Clicca "Deploy"

   **Opzione B - Via CLI:**
   ```bash
   vercel
   ```
   Segui le istruzioni a schermo

4. **Collega il tuo dominio:**
   - Vai su Vercel Dashboard → Il tuo progetto → Settings → Domains
   - Aggiungi il tuo dominio (es: getnabi.app)
   - Vercel ti darà dei record DNS da aggiungere al tuo registrar
   - Aggiungi i record DNS nel pannello del tuo registrar di dominio
   - Attendi la propagazione DNS (può richiedere fino a 48 ore, di solito molto meno)

### Record DNS da aggiungere:
- **Tipo A**: `@` → IP fornito da Vercel
- **Tipo CNAME**: `www` → cname.vercel-dns.com

## Opzione 2: Netlify

1. Vai su [netlify.com](https://netlify.com)
2. Connetti il repository o carica i file
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Collega il dominio nelle impostazioni

## Opzione 3: Altri hosting

- **Railway**: Ottimo per Next.js
- **Render**: Alternativa semplice
- **AWS Amplify**: Per progetti più complessi

## Checklist Pre-Deploy:

- ✅ Tutti i file sono pronti
- ✅ Link App Store aggiornato (se disponibile)
- ✅ Privacy Policy e Termini completi
- ✅ Test locale del build funziona
- ✅ Dominio acquistato

## Dopo il Deploy:

1. Testa tutte le pagine:
   - Homepage
   - FAQ
   - Contatti
   - Chi Siamo
   - Privacy Policy
   - Termini e Condizioni

2. Verifica i link:
   - Menu di navigazione
   - Link nel footer
   - Link App Store

3. Testa su mobile e desktop

4. Verifica che il dominio funzioni correttamente

## Note Importanti:

- Il link App Store (`https://apps.apple.com/app/nabi`) va aggiornato quando l'app sarà pubblicata
- I file HTML standalone (`preview.html`, `privacy.html`, ecc.) sono solo per preview locale - Vercel userà le versioni Next.js
- Assicurati che il dominio sia configurato con HTTPS (Vercel lo fa automaticamente)

# Guida Rapida: Caricare il progetto su GitHub

## Metodo 1: Usando il Terminale (Più Semplice)

### Passo 1: Crea la repository su GitHub.com

1. Vai su [github.com](https://github.com) e accedi (o crea un account)
2. Clicca il pulsante **"+"** in alto a destra → **"New repository"**
3. Nome: `nabi-website`
4. Scegli **Public** o **Private**
5. **NON** selezionare "Add a README file"
6. Clicca **"Create repository"**

### Passo 2: Nel Terminale, esegui questi comandi

Apri il Terminale (Cmd + Spazio, cerca "Terminale") e incolla questi comandi uno alla volta:

```bash
# Vai nella cartella del progetto
cd "/Users/elisabettacillo/Desktop/nabi website"

# Inizializza git
git init

# Aggiungi tutti i file
git add .

# Fai il primo commit
git commit -m "Initial commit - Nabi website"

# Aggiungi la repository remota (SOSTITUISCI USERNAME con il tuo username GitHub)
git remote add origin https://github.com/USERNAME/nabi-website.git

# Carica su GitHub
git branch -M main
git push -u origin main
```

### Passo 3: Autenticazione

Quando esegui `git push`, ti chiederà username e password.

**IMPORTANTE**: GitHub non accetta più password normale, devi usare un **Personal Access Token**:

1. Vai su GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Clicca "Generate new token (classic)"
3. Dai un nome (es: "nabi-website")
4. Seleziona lo scope `repo` (tutti i permessi repo)
5. Clicca "Generate token"
6. **COPIA IL TOKEN** (lo vedrai solo una volta!)
7. Quando `git push` chiede la password, incolla il token invece della password

## Metodo 2: Usando Vercel senza GitHub

Se preferisci, puoi deployare direttamente senza GitHub:

1. Vai su [vercel.com](https://vercel.com)
2. Crea un account
3. Clicca "New Project"
4. Clicca "Upload" invece di connettere GitHub
5. Comprimi la cartella del progetto in un file .zip
6. Carica il file .zip su Vercel
7. Vercel farà il deploy automaticamente

**Nota**: Con questo metodo non avrai il versionamento automatico, ma funziona perfettamente per il deploy iniziale.

---

## Passo 4: Pubblicare il sito online con Vercel (Dopo aver caricato su GitHub)

Una volta che il tuo codice è su GitHub, puoi pubblicare il sito online gratuitamente con Vercel:

### Opzione A: Deploy automatico da GitHub (Consigliato)

1. **Vai su [vercel.com](https://vercel.com)** e crea un account (puoi usare il tuo account GitHub)

2. **Clicca "Add New..." → "Project"**

3. **Importa il tuo repository GitHub:**
   - Clicca "Import Git Repository"
   - Seleziona `nabi-website` dalla lista
   - Autorizza Vercel ad accedere ai tuoi repository (se richiesto)

4. **Configura il progetto:**
   - Vercel rileverà automaticamente che è un progetto Next.js
   - Non devi cambiare nulla, lascia le impostazioni di default
   - Clicca **"Deploy"**

5. **Attendi il deploy:**
   - Vercel costruirà e pubblicherà il tuo sito
   - Ci vorranno 1-2 minuti
   - Al termine vedrai un link tipo: `https://nabi-website-xxxxx.vercel.app`

6. **Il tuo sito è online! 🎉**
   - Ogni volta che fai `git push` su GitHub, Vercel aggiornerà automaticamente il sito
   - Puoi anche aggiungere un dominio personalizzato nelle impostazioni

### Opzione B: Deploy manuale con Vercel CLI

Se preferisci usare il terminale:

```bash
# Installa Vercel CLI globalmente
npm i -g vercel

# Vai nella cartella del progetto
cd "/Users/elisabettacillo/Desktop/nabi website"

# Esegui il deploy
vercel

# Segui le istruzioni a schermo
# La prima volta ti chiederà di fare login
```

### Opzione C: Usare Netlify (Alternativa a Vercel)

1. Vai su [netlify.com](https://netlify.com) e crea un account
2. Clicca "Add new site" → "Import an existing project"
3. Seleziona GitHub e autorizza l'accesso
4. Scegli il repository `nabi-website`
5. Impostazioni build:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Clicca "Deploy site"

---

## Riepilogo: Passi completi per pubblicare online

1. ✅ Crea repository su GitHub.com
2. ✅ Carica il codice con `git push` (vedi Passi 1-3 sopra)
3. ✅ Collega GitHub a Vercel o Netlify
4. ✅ Il sito è online e si aggiorna automaticamente ad ogni push!

**Vantaggi di questo approccio:**
- ✅ Deploy automatico ad ogni modifica
- ✅ HTTPS gratuito
- ✅ Dominio personalizzato gratuito (tipo `nabi-website.vercel.app`)
- ✅ Versionamento del codice su GitHub
- ✅ Facile da aggiornare: basta fare `git push`

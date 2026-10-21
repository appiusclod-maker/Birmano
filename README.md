# Birmano A2 + B1 · PWA offline

**Questa cartella contiene il sito completo:** pubblica direttamente il contenuto
nella directory principale di un repository GitHub destinato a Pages.

## Pubblicazione

1. Accedi a GitHub e crea un nuovo repository **Public** chiamato ad esempio `birmano`.
   I materiali didattici del repository saranno pubblici: non caricare JSON di backup personali o file audio privati.
2. Carica nella **radice** del repository i file `index.html`, `manifest.webmanifest`,
   `sw.js`, `icon-192.png`, `icon-512.png`, `.nojekyll` (nessuna sottocartella).
3. Apri **Settings → Pages → Build and deployment → Source: Deploy from a branch**;
   seleziona `main` e `/(root)`, poi salva.
4. Quando GitHub Pages mostra il link HTTPS, aprilo su **Chrome per Android**,
   attendi che compaia “disponibile offline” in fondo e prova la modalità aereo.
5. Chrome: **⋮ → Aggiungi a schermata Home → Installa** (etichette variabili).

## Recupero dei progressi del tuo HTML attuale

1. Sul telefono apri *esattamente il vecchio HTML* che contiene i punti,
   nello **stesso browser** usato finora.
2. Premi **Esporta backup** e salva il file `.json`.
3. Apri il **nuovo URL HTTPS pubblicato con GitHub Pages** in Chrome;
   premi **Importa backup** e scegli il file `.json`.
4. Controlla i punteggi sia A2 sia B1, **poi** installa dalla schermata Home.
5. Ripeti l'esportazione regolarmente: i dati PWA restano sul dispositivo,
   non su GitHub. NON cancellare i dati del sito da Chrome.

I due domini/origini (file locale e sito HTTPS) **non condividono il localStorage**:
il backup è obbligatorio per il primo trasferimento. Gli eventuali MP3 caricati
nel browser sono in IndexedDB e **non sono nel backup JSON**: dovrai ricaricarli.

## Uso offline e musica

Studio, Lettura, Completa, Comunica, testi delle canzoni e verifiche funzionano
senza Internet dopo la prima apertura completa online. Le canzoni ospitate su Suno
richiedono Internet; per ascoltare offline devi caricare sul telefono i file audio
che puoi legittimamente utilizzare tramite le funzioni esistenti dell'app.

## Aggiornamenti successivi

- Sostituisci i file sullo **stesso** repository e **stesso** indirizzo Pages.
  Non modificare il nome del repository dopo aver installato la PWA.
- Ogni modifica a `index.html` deve essere accompagnata da un nuovo `sw.js`
  con `CACHE_NAME` differente. Lo script `build_birmano_pages.py` genera
  automaticamente la versione della cache dal contenuto dell'HTML.
- Quando la nuova PWA è online, Chrome rileva l'aggiornamento del service worker.
  L'app mostra **Aggiorna ora**. Il vecchio corso resta utilizzabile offline
  finché non viene accettato l'aggiornamento.
- Le spunte sono salvate in localStorage con le chiavi:
  `birmano-a2-learning-v4` e `birmano-b1-learning-v1`.
  Non cambiarle senza predisporre una migrazione esplicita.
- I testi inclusi hanno la loro versione, calcolata automaticamente dal builder; gli
  aggiornamenti dei contenuti vengono caricati senza sovrascrivere il `progress`.
- Se vuoi aggiungere livelli A1, B2, canzoni o esercizi, modifica il modello
  di contenuti e la relativa migrazione, senza cambiare le chiavi dei vecchi
  progressi. Esporta un backup prima di aggiornamenti importanti.
- Il file HTML locale `Birmano_A2_B1_PWA_APRI.html` funziona da solo ma **non è
  installabile come PWA** senza un URL HTTPS.

## Privacy e hosting

Su GitHub Pages, il **codice e i materiali didattici sono pubblici**.
I tuoi progressi non vengono caricati su GitHub (salvo che tu li invii
volontariamente). L'app usa memoria locale del browser, che può essere cancellata.

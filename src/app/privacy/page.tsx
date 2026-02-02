import NavMenu from '../components/NavMenu'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-nabi-panna via-nabi-azzurro to-nabi-beige py-12">
      <NavMenu />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
          <h1 className="font-title text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            Ultimo aggiornamento: 2 febbraio 2026
          </p>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              La tua privacy è importante per noi. La presente Informativa sulla Privacy descrive come raccogliamo, utilizziamo, conserviamo e proteggiamo le informazioni personali degli utenti quando utilizzano la nostra applicazione di journal digitale (di seguito, l&apos;&quot;Applicazione&quot;).
            </p>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">1. Informazioni che raccogliamo</h2>
              <h3 className="font-title text-xl font-semibold text-gray-800 mt-6 mb-3">1.1 Informazioni dell&apos;account</h3>
              <p>Quando crei un account, raccogliamo le seguenti informazioni:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nome utente o nome visualizzato</li>
                <li>Indirizzo email</li>
                <li>Password (criptata e memorizzata in modo sicuro)</li>
              </ul>
              <h3 className="font-title text-xl font-semibold text-gray-800 mt-6 mb-3">1.2 Contenuti dell&apos;utente</h3>
              <p>Raccogliamo e memorizziamo i contenuti che l&apos;utente crea volontariamente all&apos;interno dell&apos;Applicazione, inclusi, a titolo esemplificativo:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Testi dei journal e delle voci</li>
                <li>Immagini e foto caricate</li>
                <li>Disegni e annotazioni</li>
                <li>Sticker e decorazioni utilizzate</li>
                <li>Metadati associati ai contenuti (date, tag, ecc.)</li>
              </ul>
              <p className="mt-4">Tutti i contenuti restano di esclusiva proprietà dell&apos;utente. L&apos;Applicazione non rivendica alcun diritto di proprietà sui contenuti creati o caricati dall&apos;utente.</p>
              <h3 className="font-title text-xl font-semibold text-gray-800 mt-6 mb-3">1.3 Accesso alla libreria foto del dispositivo</h3>
              <p>Per consentire all&apos;utente di selezionare e aggiungere immagini al proprio journal, l&apos;Applicazione può richiedere l&apos;accesso alla libreria foto del dispositivo.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Il permesso viene richiesto solo nel momento in cui l&apos;utente decide di aggiungere una foto</li>
                <li>L&apos;accesso è facoltativo e non necessario per l&apos;utilizzo delle funzionalità principali dell&apos;Applicazione</li>
                <li>Le immagini selezionate vengono utilizzate esclusivamente per le funzionalità di journaling</li>
                <li>Le foto non vengono utilizzate per altre finalità né condivise senza il consenso esplicito dell&apos;utente</li>
              </ul>
              <h3 className="font-title text-xl font-semibold text-gray-800 mt-6 mb-3">1.4 Informazioni tecniche</h3>
              <p>Raccogliamo automaticamente alcune informazioni tecniche quando utilizzi l&apos;Applicazione:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tipo di dispositivo e sistema operativo</li>
                <li>Versione dell&apos;Applicazione</li>
                <li>Log di utilizzo ed errori, al fine di migliorare il servizio</li>
                <li>Indirizzo IP, anonimizzato quando possibile</li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">2. Base legale del trattamento</h2>
              <p>Trattiamo i dati personali sulla base delle seguenti basi giuridiche:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Esecuzione del contratto, per fornire i servizi richiesti e gestire l&apos;account</li>
                <li>Consenso, quando richiesto per specifiche finalità</li>
                <li>Interesse legittimo, per migliorare i servizi, garantire la sicurezza e prevenire frodi</li>
                <li>Obblighi di legge, per adempiere a disposizioni normative applicabili</li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">3. Finalità del trattamento</h2>
              <p>Le informazioni raccolte vengono utilizzate per:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornire, mantenere e migliorare l&apos;Applicazione</li>
                <li>Autenticare l&apos;account e garantire la sicurezza</li>
                <li>Sincronizzare i contenuti tra dispositivi</li>
                <li>Fornire supporto tecnico e rispondere alle richieste degli utenti</li>
                <li>Analizzare l&apos;utilizzo dell&apos;Applicazione per migliorare l&apos;esperienza utente</li>
                <li>Adempiere a obblighi legali e prevenire attività fraudolente</li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">4. Conservazione e sicurezza dei dati</h2>
              <p>Adottiamo misure tecniche e organizzative adeguate per proteggere i dati personali, tra cui:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Crittografia dei dati in transito e a riposo</li>
                <li>Autenticazione sicura e controllo degli accessi</li>
                <li>Backup regolari per prevenire la perdita di dati</li>
                <li>Monitoraggio delle attività per individuare accessi non autorizzati</li>
              </ul>
              <p className="mt-4">I dati vengono conservati per tutta la durata dell&apos;account o secondo quanto richiesto dalla legge. In caso di cancellazione dell&apos;account:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>I dati personali vengono eliminati entro 30 giorni</li>
                <li>I backup possono essere conservati fino a un massimo di 90 giorni per finalità di sicurezza e ripristino tecnico</li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">5. Condivisione delle informazioni</h2>
              <p>Non vendiamo, affittiamo né condividiamo i dati personali per scopi commerciali. I dati possono essere condivisi esclusivamente:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Con il consenso esplicito dell&apos;utente</li>
                <li>Con fornitori di servizi essenziali per il funzionamento dell&apos;Applicazione, soggetti a obblighi di riservatezza</li>
                <li>Quando richiesto dalla legge o da un&apos;autorità competente</li>
                <li>Per tutelare i nostri diritti, la sicurezza degli utenti o prevenire abusi</li>
                <li>In caso di operazioni societarie (fusione, acquisizione o vendita di asset), previa comunicazione agli utenti</li>
              </ul>
              <h3 className="font-title text-xl font-semibold text-gray-800 mt-6 mb-3">Servizi di terze parti</h3>
              <p>Per fornire i nostri servizi utilizziamo i seguenti fornitori di terze parti:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Apple (App Store)</strong> – distribuzione dell&apos;Applicazione e gestione dei pagamenti in-app <a href="https://www.apple.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-nabi-beige hover:underline">https://www.apple.com/privacy/</a></li>
                <li><strong>Supabase</strong> – autenticazione degli utenti e archiviazione sicura dei dati <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-nabi-beige hover:underline">https://supabase.com/privacy</a></li>
                <li><strong>RevenueCat</strong> – gestione degli abbonamenti e dei pagamenti in-app <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-nabi-beige hover:underline">https://www.revenuecat.com/privacy</a></li>
              </ul>
              <p className="mt-4">Ciascun fornitore tratta i dati secondo le proprie informative sulla privacy e in conformità alla normativa applicabile.</p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">6. Diritti dell&apos;utente</h2>
              <p>L&apos;utente ha il diritto di:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accedere ai propri dati personali</li>
                <li>Richiederne la rettifica o l&apos;aggiornamento</li>
                <li>Richiederne la cancellazione</li>
                <li>Opporsi a determinati trattamenti dei dati personali non necessari al funzionamento dell&apos;Applicazione</li>
                <li>Richiedere la portabilità dei dati</li>
                <li>Revocare il consenso in qualsiasi momento</li>
              </ul>
              <p className="mt-4">Le richieste possono essere inviate tramite l&apos;Applicazione o all&apos;indirizzo email indicato nella sezione Contatti. Risponderemo nei termini previsti dalla normativa applicabile.</p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">7. Cookie e tecnologie simili</h2>
              <p>L&apos;Applicazione può utilizzare tecnologie simili ai cookie per finalità di autenticazione, funzionamento del servizio e analisi anonima dell&apos;utilizzo. Le preferenze possono essere gestite tramite le impostazioni del dispositivo.</p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">8. Trasferimento internazionale dei dati</h2>
              <p>I dati possono essere trasferiti e trattati su server situati al di fuori del paese di residenza dell&apos;utente, nel rispetto delle leggi applicabili e con adeguate garanzie di sicurezza.</p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">9. Privacy dei minori</h2>
              <p>L&apos;Applicazione non è destinata a minori di 14 anni (in Italia) o all&apos;età minima prevista dalla legge nel paese di residenza dell&apos;utente. Non raccogliamo consapevolmente dati personali di minori.</p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">10. Modifiche alla presente Informativa</h2>
              <p>Ci riserviamo il diritto di aggiornare periodicamente la presente Informativa sulla Privacy. Eventuali modifiche saranno comunicate tramite l&apos;Applicazione e la data di aggiornamento verrà modificata di conseguenza.</p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">11. Conformità al GDPR</h2>
              <p>Per gli utenti residenti nell&apos;Unione Europea, il trattamento dei dati personali avviene in conformità al Regolamento Generale sulla Protezione dei Dati (GDPR).</p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">12. Legge applicabile</h2>
              <p>La presente Informativa è regolata dalla legge italiana.</p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">13. Contatti</h2>
              <p>Per qualsiasi domanda riguardo a questa Privacy Policy o al trattamento dei tuoi dati personali, puoi contattarci:</p>
              <ul className="list-none pl-0 space-y-2 mt-4">
                <li><strong>Titolare del trattamento:</strong> Elisabetta Cillo</li>
                <li><strong>Email:</strong> <a href="mailto:hello@getnabi.app" className="text-nabi-beige hover:underline">hello@getnabi.app</a></li>
                <li><strong>Indirizzo:</strong> Via Nomentana 246, Roma, Italia</li>
              </ul>
            </section>

            <div className="mt-8 p-4 bg-nabi-panna/50 rounded-lg">
              <p className="text-sm">Utilizzando l&apos;Applicazione, l&apos;utente dichiara di aver letto e compreso la presente Informativa sulla Privacy e di accettare il trattamento dei dati personali come descritto.</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a href="/" className="inline-flex items-center text-nabi-beige hover:text-nabi-beige/80 font-title font-semibold">
              ← Torna alla home
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

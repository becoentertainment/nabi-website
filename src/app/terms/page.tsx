import NavMenu from '../components/NavMenu'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-nabi-panna via-nabi-azzurro to-nabi-beige py-12">
      <NavMenu />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
          <h1 className="font-title text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Termini e Condizioni di Utilizzo
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Benvenuto in Nabi. Utilizzando la nostra app, accetti i seguenti termini e condizioni.
            </p>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">1. Licenza d&apos;Uso</h2>
              <p>
                Ti concediamo una licenza limitata, non esclusiva, non trasferibile e revocabile per utilizzare Nabi esclusivamente per uso personale sui tuoi dispositivi Apple. Non è consentito copiare, modificare, distribuire, vendere o decompilare l&apos;app.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">2. Contenuti dell&apos;Utente</h2>
              <p>
                Tutte le voci del diario, le note e le immagini che crei rimangono di tua esclusiva proprietà. Non rivendichiamo alcun diritto sui contenuti da te creati.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">3. Accesso alla Galleria Fotografica</h2>
              <p>
                L&apos;app potrebbe richiedere l&apos;accesso alla tua libreria fotografica al solo scopo di permetterti di aggiungere immagini al tuo diario. Tale accesso è facoltativo e avviato esclusivamente da te.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">4. Esclusione di Garanzie</h2>
              <p>
                L&apos;app viene fornita &quot;così com&apos;è&quot;, senza garanzie di alcun tipo. Non siamo responsabili per eventuali errori, interruzioni del servizio o perdita di dati.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">5. Limitazione di Responsabilità</h2>
              <p>
                In nessun caso saremo responsabili per danni indiretti, incidentali, speciali o consequenziali derivanti dall&apos;utilizzo dell&apos;app.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">6. Modifiche ai Termini</h2>
              <p>
                Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. L&apos;uso continuato dell&apos;app dopo eventuali modifiche costituisce accettazione dei nuovi termini.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">7. Legge Applicabile</h2>
              <p>
                Questi termini sono regolati dalla legge italiana.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">8. Contatti</h2>
              <p>
                Per domande relative a questi termini, puoi contattarci tramite l&apos;app o visitando getnabi.app.
              </p>
            </section>
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

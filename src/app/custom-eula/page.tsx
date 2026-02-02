import NavMenu from '../components/NavMenu'

export default function CustomEulaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-nabi-panna via-nabi-azzurro to-nabi-beige py-12">
      <NavMenu />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
          <h1 className="font-title text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Custom EULA
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Il presente Contratto di Licenza con l&apos;Utente Finale (&quot;Contratto&quot;) è stipulato tra l&apos;utente (&quot;Utente&quot;) e Elisabetta Cillo, in qualità di sviluppatore dell&apos;applicazione (&quot;Sviluppatore&quot;), e disciplina l&apos;utilizzo dell&apos;applicazione di journaling Nabi - il tuo journal (&quot;App&quot;).
            </p>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">1. Concessione della licenza</h2>
              <p>
                Lo Sviluppatore concede all&apos;Utente una licenza limitata, non esclusiva, non trasferibile e revocabile per utilizzare l&apos;App su dispositivi Apple di cui l&apos;Utente è proprietario o controlla, in conformità alle regole dell&apos;App Store.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">2. Funzionalità dell&apos;App</h2>
              <p>
                L&apos;App consente all&apos;Utente di creare e gestire contenuti personali, inclusi testi, note, riflessioni e immagini (&quot;Contenuti dell&apos;Utente&quot;), esclusivamente per uso personale e privato.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">3. Contenuti dell&apos;Utente</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tutti i Contenuti dell&apos;Utente restano di esclusiva proprietà dell&apos;Utente.</li>
                <li>Lo Sviluppatore non rivendica alcun diritto di proprietà sui contenuti creati o caricati tramite l&apos;App.</li>
                <li>L&apos;Utente è l&apos;unico responsabile dei contenuti inseriti nell&apos;App.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">4. Accesso alle foto</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>L&apos;App può richiedere il permesso di accedere alla Libreria Foto del dispositivo al solo scopo di consentire all&apos;Utente di aggiungere immagini al proprio journal.</li>
                <li>Il permesso è facoltativo.</li>
                <li>L&apos;accesso avviene solo su iniziativa dell&apos;Utente.</li>
                <li>Le immagini non vengono utilizzate per finalità diverse dal funzionamento dell&apos;App.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">5. Privacy</h2>
              <p>
                L&apos;utilizzo dell&apos;App è soggetto all&apos;Informativa sulla Privacy dello Sviluppatore. L&apos;Utente riconosce e accetta che alcuni dati possano essere trattati per fornire le funzionalità dell&apos;App, in conformità con la normativa applicabile.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">6. Restrizioni</h2>
              <p>L&apos;Utente non può:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>copiare, modificare, distribuire o rivendere l&apos;App</li>
                <li>decompilare, effettuare reverse engineering o tentare di estrarre il codice sorgente</li>
                <li>utilizzare l&apos;App per scopi illegali o non autorizzati</li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">7. Esclusione di garanzia</h2>
              <p>
                L&apos;App è fornita &quot;così com&apos;è&quot;, senza garanzie di alcun tipo. Lo Sviluppatore non garantisce che l&apos;App sia priva di errori o interruzioni.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">8. Limitazione di responsabilità</h2>
              <p>
                Nella misura massima consentita dalla legge, lo Sviluppatore non sarà responsabile per eventuali danni derivanti dall&apos;utilizzo dell&apos;App o dalla perdita dei Contenuti dell&apos;Utente.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">9. Conformità alle condizioni Apple</h2>
              <p>L&apos;Utente riconosce che:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Apple non è parte del presente Contratto</li>
                <li>Apple non è responsabile dell&apos;App o dei suoi contenuti</li>
                <li>Apple e le sue affiliate sono beneficiari terzi del presente Contratto</li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">10. Risoluzione</h2>
              <p>
                Il presente Contratto resta in vigore fino alla sua risoluzione. Lo Sviluppatore può risolverlo in caso di violazione dei termini.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">11. Legge applicabile</h2>
              <p>
                Il presente Contratto è regolato dalle leggi italiane, salvo norme inderogabili di legge.
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

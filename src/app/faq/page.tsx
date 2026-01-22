import NavMenu from '../components/NavMenu'

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-nabi-panna via-nabi-azzurro to-nabi-beige py-12">
      <NavMenu />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
          <h1 className="font-title text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Domande Frequenti
          </h1>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="font-title text-xl font-semibold text-gray-800 mb-2">
                Cos'è Nabi?
              </h2>
              <p>
                Nabi è un'app di journaling digitale che ti permette di esprimere la tua creatività attraverso testi, immagini, disegni e decorazioni. È il tuo spazio personale per riflettere, creare e crescere.
              </p>
            </div>

            <div>
              <h2 className="font-title text-xl font-semibold text-gray-800 mb-2">
                L'app è gratuita?
              </h2>
              <p>
                Nabi offre funzionalità base gratuite. Per accedere a funzionalità premium e avanzate, è disponibile un abbonamento mensile o annuale.
              </p>
            </div>

            <div>
              <h2 className="font-title text-xl font-semibold text-gray-800 mb-2">
                I miei dati sono sicuri?
              </h2>
              <p>
                Sì, la sicurezza dei tuoi dati è la nostra priorità. Utilizziamo crittografia end-to-end e i tuoi contenuti sono accessibili solo tramite il tuo account. Per maggiori informazioni, consulta la nostra <a href="/privacy" className="text-nabi-beige hover:underline">Privacy Policy</a>.
              </p>
            </div>

            <div>
              <h2 className="font-title text-xl font-semibold text-gray-800 mb-2">
                Posso sincronizzare i miei dati su più dispositivi?
              </h2>
              <p>
                Sì, con un account Nabi puoi sincronizzare i tuoi journal su tutti i tuoi dispositivi iOS. I tuoi contenuti saranno sempre accessibili, ovunque tu sia.
              </p>
            </div>

            <div>
              <h2 className="font-title text-xl font-semibold text-gray-800 mb-2">
                Come posso cancellare il mio account?
              </h2>
              <p>
                Puoi cancellare il tuo account in qualsiasi momento dalle impostazioni dell'app. Dopo la cancellazione, i tuoi dati verranno eliminati secondo quanto previsto nella nostra Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="font-title text-xl font-semibold text-gray-800 mb-2">
                L'app è disponibile per Android?
              </h2>
              <p>
                Attualmente Nabi è disponibile solo per iOS. Stiamo lavorando per portare l'app anche su Android in futuro.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/"
              className="inline-flex items-center text-nabi-beige hover:text-nabi-beige/80 font-title font-semibold"
            >
              ← Torna alla home
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

import NavMenu from '../components/NavMenu'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-nabi-panna via-nabi-azzurro to-nabi-beige py-12">
      <NavMenu />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
          <h1 className="font-title text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Contatti
          </h1>
          
          <div className="space-y-6 text-gray-700">
            <p>
              Hai domande, suggerimenti o hai bisogno di supporto? Siamo qui per aiutarti!
            </p>

            <div className="space-y-4">
              <div>
                <h2 className="font-title text-xl font-semibold text-gray-800 mb-2">
                  Email
                </h2>
                <p>
                  <a href="mailto:hello@getnabi.app" className="text-nabi-beige hover:underline">
                    hello@getnabi.app
                  </a>
                </p>
              </div>

              <div>
                <h2 className="font-title text-xl font-semibold text-gray-800 mb-2">
                  Tempi di risposta
                </h2>
                <p>
                  Cerchiamo di rispondere a tutte le richieste entro 48 ore lavorative.
                </p>
              </div>
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

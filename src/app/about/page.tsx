import NavMenu from '../components/NavMenu'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-nabi-panna via-nabi-azzurro to-nabi-beige py-12">
      <NavMenu />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
          <h1 className="font-title text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Chi Siamo
          </h1>
          
          <div className="space-y-6 text-gray-700">
            <p>
              Nabi nasce dalla passione per il journaling e la creatività personale. Crediamo che ognuno di noi abbia bisogno di uno spazio digitale dove esprimere se stesso, riflettere e crescere.
            </p>

            <p>
              La nostra missione è offrire un'app che unisca la semplicità d'uso alla potenza creativa, permettendoti di trasformare i tuoi pensieri, memorie e progetti in qualcosa di tangibile e bello.
            </p>

            <div className="mt-8">
              <h2 className="font-title text-2xl font-semibold text-gray-800 mb-4">
                Il Team
              </h2>
              <p>
                Nabi è sviluppato da un piccolo team dedicato che crede nell'importanza della privacy, della sicurezza e dell'esperienza utente. Siamo qui per creare uno strumento che faccia la differenza nella tua vita quotidiana.
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

import NavMenu from './components/NavMenu'

const APP_STORE_URL = 'https://apps.apple.com/app/id6758015801';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-nabi-panna via-nabi-azzurro to-nabi-beige">
      <NavMenu />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-title text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Nabi
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Il tuo journal digitale dove la creatività prende forma
          </p>
          
          {/* iOS Download Button */}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-nabi-beige hover:bg-nabi-beige/90 text-white rounded-full text-lg font-title font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 2.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            Scarica su App Store
          </a>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-nabi-azzurro rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-nabi-panna rounded-full opacity-40 blur-3xl"></div>
      </section>

      {/* Footer */}
      <footer className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600">
              © 2026 Nabi. Tutti i diritti riservati.
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <a href="/privacy" className="text-gray-600 hover:text-nabi-beige transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-400">•</span>
              <a href="/terms" className="text-gray-600 hover:text-nabi-beige transition-colors">
                Termini e Condizioni
              </a>
              <span className="text-gray-400">•</span>
              <a href="/custom-eula" className="text-gray-600 hover:text-nabi-beige transition-colors">
                Custom EULA
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

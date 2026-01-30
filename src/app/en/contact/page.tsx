import NavMenu from '../../components/NavMenu'

export default function EnContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-nabi-panna via-nabi-azzurro to-nabi-beige py-12">
      <NavMenu />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
          <h1 className="font-title text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Contact
          </h1>
          <div className="space-y-6 text-gray-700">
            <p>Have questions, suggestions, or need support? We&apos;re here to help!</p>
            <div className="space-y-4">
              <div>
                <h2 className="font-title text-xl font-semibold text-gray-800 mb-2">Email</h2>
                <p><a href="mailto:hello@getnabi.app" className="text-nabi-beige hover:underline">hello@getnabi.app</a></p>
              </div>
              <div>
                <h2 className="font-title text-xl font-semibold text-gray-800 mb-2">Response time</h2>
                <p>We aim to respond to all requests within 48 business hours.</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="/en"
              className="inline-flex items-center text-nabi-beige hover:text-nabi-beige/80 font-title font-semibold"
            >
              ← Back to home
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

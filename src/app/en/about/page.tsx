import NavMenu from '../../components/NavMenu'

export default function EnAboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-nabi-panna via-nabi-azzurro to-nabi-beige py-12">
      <NavMenu />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
          <h1 className="font-title text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            About Us
          </h1>
          <div className="space-y-6 text-gray-700">
            <p>
              Nabi was born from a passion for journaling and personal creativity. We believe that everyone needs a digital space to express themselves, reflect, and grow.
            </p>
            <p>
              Our mission is to offer an app that combines ease of use with creative power, allowing you to turn your thoughts, memories, and projects into something tangible and beautiful.
            </p>
            <div className="mt-8">
              <h2 className="font-title text-2xl font-semibold text-gray-800 mb-4">
                The Team
              </h2>
              <p>
                Nabi is developed by a small dedicated team that believes in the importance of privacy, security, and user experience. We are here to create a tool that makes a difference in your daily life.
              </p>
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

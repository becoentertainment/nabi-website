export default function NavMenu() {
  return (
    <nav className="relative z-10 py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-6 md:gap-8">
          <a
            href="/faq"
            className="text-gray-700 hover:text-nabi-beige font-body text-base md:text-lg transition-colors"
          >
            FAQ
          </a>
          <a
            href="/contact"
            className="text-gray-700 hover:text-nabi-beige font-body text-base md:text-lg transition-colors"
          >
            Contatti
          </a>
          <a
            href="/about"
            className="text-gray-700 hover:text-nabi-beige font-body text-base md:text-lg transition-colors"
          >
            Chi Siamo
          </a>
        </div>
      </div>
    </nav>
  )
}

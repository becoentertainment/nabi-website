import NavMenu from '../../components/NavMenu'

export default function EnTermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-nabi-panna via-nabi-azzurro to-nabi-beige py-12">
      <NavMenu />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
          <h1 className="font-title text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Terms and Conditions of Use
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Welcome to Nabi. By using our app, you accept the following terms and conditions.
            </p>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">1. License to Use</h2>
              <p>
                We grant you a limited, non-exclusive, non-transferable, revocable license to use Nabi for personal use only on your Apple devices. You may not copy, modify, distribute, sell, or decompile the app.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">2. User Content</h2>
              <p>
                All journal entries, notes, and images you create remain your exclusive property. We do not claim any rights over content you create.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">3. Photo Library Access</h2>
              <p>
                The app may request access to your photo library solely to allow you to add images to your journal. Such access is optional and initiated only by you.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">4. Disclaimer of Warranties</h2>
              <p>
                The app is provided &quot;as is,&quot; without warranties of any kind. We are not responsible for any errors, service interruptions, or loss of data.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">5. Limitation of Liability</h2>
              <p>
                In no event shall we be liable for indirect, incidental, special, or consequential damages arising from the use of the app.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">6. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the app after any changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">7. Governing Law</h2>
              <p>
                These terms are governed by the laws of Italy.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">8. Contact</h2>
              <p>
                For questions regarding these terms, you can contact us through the app or by visiting getnabi.app.
              </p>
            </section>
          </div>

          <div className="mt-8 text-center">
            <a href="/en" className="inline-flex items-center text-nabi-beige hover:text-nabi-beige/80 font-title font-semibold">
              ← Back to home
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

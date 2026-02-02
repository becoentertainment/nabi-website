import NavMenu from '../../components/NavMenu'

export default function EnTermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-nabi-panna via-nabi-azzurro to-nabi-beige py-12">
      <NavMenu />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
          <h1 className="font-title text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Terms and Conditions of Use
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            Last updated: 22 January 2026
          </p>
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
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">2. Age Requirements</h2>
              <p>
                The app is not intended for users under 14 years of age (in Italy) or the minimum age required by law in the user&apos;s country of residence.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">3. User Content</h2>
              <p>
                All journal entries, notes, and images you create remain your exclusive property. We do not claim any rights over content you create.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">4. Photo Library Access</h2>
              <p>
                The app may request access to your photo library solely to allow you to add images to your journal. Such access is optional and initiated only by you.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">5. Subscriptions and Payments</h2>
              <p>
                The app may offer subscriptions with automatic renewal. Payment is charged to your Apple account. You can manage or cancel subscriptions in your device settings. For pricing and renewal terms, see the App Store.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">6. Disclaimer of Warranties</h2>
              <p>
                The app is provided &quot;as is,&quot; without warranties of any kind. We are not responsible for any errors, service interruptions, or loss of data.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">7. Limitation of Liability</h2>
              <p>
                In no event shall we be liable for indirect, incidental, special, or consequential damages arising from the use of the app.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the app after any changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">9. Governing Law</h2>
              <p>
                These terms are governed by the laws of Italy.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">10. Contact</h2>
              <p>For questions regarding these terms, you can contact us:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Email:</strong> <a href="mailto:hello@getnabi.app" className="text-nabi-beige hover:underline">hello@getnabi.app</a></li>
                <li><strong>Website:</strong> <a href="https://getnabi.app" target="_blank" rel="noopener noreferrer" className="text-nabi-beige hover:underline">getnabi.app</a></li>
              </ul>
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

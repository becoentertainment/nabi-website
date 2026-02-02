import NavMenu from '../../components/NavMenu'

export default function EnCustomEulaPage() {
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
              This End User License Agreement (&quot;Agreement&quot;) is entered into between the user (&quot;User&quot;) and Elisabetta Cillo, as the developer of the application (&quot;Developer&quot;), and governs the use of the journaling application Nabi - il tuo journal (&quot;App&quot;).
            </p>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">1. License Grant</h2>
              <p>
                The Developer grants the User a limited, non-exclusive, non-transferable, revocable license to use the App on Apple-branded devices owned or controlled by the User, in accordance with the App Store rules.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">2. App Functionality</h2>
              <p>
                The App allows the User to create and manage personal content, including texts, notes, reflections, and images (&quot;User Content&quot;), for personal and private use only.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">3. User Content</h2>
              <p>All User Content remains the exclusive property of the User. The Developer does not claim any ownership rights over the content created or uploaded through the App.</p>
              <p>The User is solely responsible for the content entered into the App.</p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">4. Photo Access</h2>
              <p>The App may request access to the device&apos;s Photo Library solely to allow the User to add images to their journal.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Photo access is optional</li>
                <li>Access is requested only upon the User&apos;s action</li>
                <li>Images are not used for purposes other than the App&apos;s functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">5. Privacy</h2>
              <p>
                Use of the App is subject to the Developer&apos;s Privacy Policy. The User acknowledges that certain data may be processed to provide the App&apos;s features, in compliance with applicable laws.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">6. Restrictions</h2>
              <p>The User may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>copy, modify, distribute, or resell the App</li>
                <li>reverse engineer, decompile, or attempt to extract the source code</li>
                <li>use the App for unlawful or unauthorized purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">7. Disclaimer of Warranties</h2>
              <p>
                The App is provided &quot;as is,&quot; without warranties of any kind. The Developer does not guarantee that the App will be error-free or uninterrupted.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, the Developer shall not be liable for any damages arising from the use of the App or the loss of User Content.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">9. Apple Terms Compliance</h2>
              <p>The User acknowledges that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Apple is not a party to this Agreement</li>
                <li>Apple is not responsible for the App or its content</li>
                <li>Apple and its affiliates are third-party beneficiaries of this Agreement</li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">10. Termination</h2>
              <p>
                This Agreement remains in effect until terminated. The Developer may terminate it in case of a breach of these terms.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">11. Governing Law</h2>
              <p>
                This Agreement shall be governed by the laws of Italy, without prejudice to mandatory consumer protection laws.
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

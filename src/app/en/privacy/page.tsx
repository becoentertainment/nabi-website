import NavMenu from '../../components/NavMenu'

export default function EnPrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-nabi-panna via-nabi-azzurro to-nabi-beige py-12">
      <NavMenu />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
          <h1 className="font-title text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            Last updated: 2 February 2026
          </p>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Your privacy is important to us. This Privacy Policy describes how we collect, use, store, and protect users&apos; personal information when they use our digital journal application (hereinafter, the &quot;Application&quot;).
            </p>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">1. Information We Collect</h2>
              <h3 className="font-title text-xl font-semibold text-gray-800 mt-6 mb-3">1.1 Account Information</h3>
              <p>When you create an account, we collect the following information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Username or display name</li>
                <li>Email address</li>
                <li>Password (encrypted and stored securely)</li>
              </ul>
              <h3 className="font-title text-xl font-semibold text-gray-800 mt-6 mb-3">1.2 User Content</h3>
              <p>We collect and store the content that the user voluntarily creates within the Application, including, by way of example:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Journal and entry texts</li>
                <li>Uploaded images and photos</li>
                <li>Drawings and annotations</li>
                <li>Stickers and decorations used</li>
                <li>Metadata associated with content (dates, tags, etc.)</li>
              </ul>
              <p className="mt-4">All content remains the exclusive property of the user. The Application does not claim any ownership rights over content created or uploaded by the user.</p>
              <h3 className="font-title text-xl font-semibold text-gray-800 mt-6 mb-3">1.3 Access to Device Photo Library</h3>
              <p>To allow the user to select and add images to their journal, the Application may request access to the device&apos;s photo library.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Permission is requested only when the user decides to add a photo</li>
                <li>Access is optional and not required for use of the Application&apos;s main features</li>
                <li>Selected images are used exclusively for journaling features</li>
                <li>Photos are not used for other purposes nor shared without the user&apos;s explicit consent</li>
              </ul>
              <h3 className="font-title text-xl font-semibold text-gray-800 mt-6 mb-3">1.4 Technical Information</h3>
              <p>We automatically collect some technical information when you use the Application:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device type and operating system</li>
                <li>Application version</li>
                <li>Usage and error logs, to improve the service</li>
                <li>IP address, anonymised when possible</li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">2. Legal Basis for Processing</h2>
              <p>We process personal data on the following legal bases:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contract performance, to provide the requested services and manage the account</li>
                <li>Consent, when required for specific purposes</li>
                <li>Legitimate interest, to improve services, ensure security, and prevent fraud</li>
                <li>Legal obligations, to comply with applicable regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">3. Purposes of Processing</h2>
              <p>The information collected is used to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve the Application</li>
                <li>Authenticate the account and ensure security</li>
                <li>Sync content across devices</li>
                <li>Provide technical support and respond to user requests</li>
                <li>Analyse Application usage to improve user experience</li>
                <li>Comply with legal obligations and prevent fraudulent activity</li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">4. Data Retention and Security</h2>
              <p>We adopt appropriate technical and organisational measures to protect personal data, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure authentication and access control</li>
                <li>Regular backups to prevent data loss</li>
                <li>Activity monitoring to detect unauthorised access</li>
              </ul>
              <p className="mt-4">Data is retained for the duration of the account or as required by law. In the event of account deletion:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Personal data is deleted within 30 days</li>
                <li>Backups may be retained for up to 90 days for security and technical recovery purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">5. Information Sharing</h2>
              <p>We do not sell, rent, or share personal data for commercial purposes. Data may be shared only:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With the user&apos;s explicit consent</li>
                <li>With service providers essential to the operation of the Application, subject to confidentiality obligations</li>
                <li>When required by law or a competent authority</li>
                <li>To protect our rights, user safety, or prevent abuse</li>
                <li>In the event of corporate operations (merger, acquisition, or sale of assets), with prior notice to users</li>
              </ul>
              <h3 className="font-title text-xl font-semibold text-gray-800 mt-6 mb-3">Third-Party Services</h3>
              <p>To provide our services we use the following third-party providers:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Apple (App Store)</strong> – Application distribution and in-app payment management <a href="https://www.apple.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-nabi-beige hover:underline">https://www.apple.com/privacy/</a></li>
                <li><strong>Supabase</strong> – user authentication and secure data storage <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-nabi-beige hover:underline">https://supabase.com/privacy</a></li>
                <li><strong>RevenueCat</strong> – subscription and in-app payment management <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-nabi-beige hover:underline">https://www.revenuecat.com/privacy</a></li>
              </ul>
              <p className="mt-4">Each provider processes data in accordance with its own privacy policies and applicable regulations.</p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">6. User Rights</h2>
              <p>The user has the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access their personal data</li>
                <li>Request rectification or updating</li>
                <li>Request deletion</li>
                <li>Object to certain processing of personal data not necessary for the Application&apos;s operation</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-4">Requests may be sent via the Application or to the email address indicated in the Contact section. We will respond within the time limits set by applicable law.</p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">7. Cookies and Similar Technologies</h2>
              <p>The Application may use cookie-like technologies for authentication, service operation, and anonymous usage analysis. Preferences can be managed through device settings.</p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">8. International Data Transfers</h2>
              <p>Data may be transferred to and processed on servers located outside the user&apos;s country of residence, in compliance with applicable laws and with adequate security safeguards.</p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">9. Children&apos;s Privacy</h2>
              <p>The Application is not intended for users under 14 years of age (in Italy) or the minimum age required by law in the user&apos;s country of residence. We do not knowingly collect personal data from minors.</p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">10. Changes to This Policy</h2>
              <p>We reserve the right to update this Privacy Policy periodically. Any changes will be communicated via the Application and the update date will be amended accordingly.</p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">11. GDPR Compliance</h2>
              <p>For users resident in the European Union, personal data is processed in compliance with the General Data Protection Regulation (GDPR).</p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">12. Governing Law</h2>
              <p>This Policy is governed by the laws of Italy.</p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">13. Contact</h2>
              <p>For any questions regarding this Privacy Policy or the processing of your personal data, you can contact us:</p>
              <ul className="list-none pl-0 space-y-2 mt-4">
                <li><strong>Data controller:</strong> Elisabetta Cillo</li>
                <li><strong>Email:</strong> <a href="mailto:hello@getnabi.app" className="text-nabi-beige hover:underline">hello@getnabi.app</a></li>
              </ul>
            </section>

            <div className="mt-8 p-4 bg-nabi-panna/50 rounded-lg">
              <p className="text-sm">By using the Application, the user declares that they have read and understood this Privacy Policy and accept the processing of personal data as described.</p>
            </div>
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

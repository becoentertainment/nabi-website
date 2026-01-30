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
            Last updated: 22 January 2026
          </p>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Your privacy is important to us. This Privacy Policy describes how we collect, use, store, and protect your personal information when you use our digital journal application.
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
              <p>We collect and store the content you create in the application, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Journal and entry texts</li>
                <li>Uploaded images and photos</li>
                <li>Drawings and annotations</li>
                <li>Stickers and decorations used</li>
                <li>Metadata associated with content (dates, tags, etc.)</li>
              </ul>
              <h3 className="font-title text-xl font-semibold text-gray-800 mt-6 mb-3">1.3 Technical Information</h3>
              <p>We automatically collect some technical information when you use the application:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device type and operating system</li>
                <li>Application version</li>
                <li>Usage and error logs (to improve the service)</li>
                <li>IP address (anonymised when possible)</li>
              </ul>
            </section>
            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">2. Legal Basis for Processing</h2>
              <p>We process your personal data on the following legal bases:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contract performance:</strong> to provide the requested services and manage your account</li>
                <li><strong>Consent:</strong> when you explicitly agree to the processing of certain data (e.g. for marketing communications)</li>
                <li><strong>Legitimate interest:</strong> to improve our services, ensure security, and prevent fraud</li>
                <li><strong>Legal obligation:</strong> to comply with legal and regulatory obligations</li>
              </ul>
            </section>
            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We use the information collected to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Authenticate your account and ensure security</li>
                <li>Sync your content across devices</li>
                <li>Provide technical support and respond to your requests</li>
                <li>Analyse application usage to improve user experience</li>
                <li>Comply with legal obligations and prevent fraudulent activity</li>
              </ul>
            </section>
            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">4. Data Retention and Security</h2>
              <p>We implement technical and organisational security measures to protect your information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure authentication and access control</li>
                <li>Regular backups to prevent data loss</li>
                <li>Ongoing monitoring to detect suspicious activity</li>
              </ul>
              <p className="mt-4">Your content is stored securely and is only accessible through your authenticated account. We retain your data for as long as your account is active or as required by law.</p>
              <p className="mt-4"><strong>Retention period after deletion:</strong> After your account is deleted, your personal data will be removed within 30 days, except where retention is required by law (e.g. for tax or accounting purposes). Backups may be retained for up to 90 days to ensure security and recovery in case of technical issues.</p>
            </section>
            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">5. Information Sharing</h2>
              <p>We do not sell, rent, or share your personal information with third parties for commercial purposes. We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With your explicit consent</li>
                <li>With service providers who help us operate the application (e.g. cloud hosting), subject to confidentiality obligations</li>
                <li>When required by law or court order</li>
                <li>To protect our rights, your safety, or that of others</li>
                <li>In the event of a merger, acquisition, or sale of assets (with notice to users)</li>
              </ul>
              <h3 className="font-title text-xl font-semibold text-gray-800 mt-6 mb-3">Third-Party Services</h3>
              <p>To provide our services, we use the following providers:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Apple (App Store):</strong> for app distribution and in-app payment management. Apple may collect transaction-related information. For more information, see <a href="https://www.apple.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-nabi-beige hover:underline">Apple&apos;s Privacy Policy</a>.</li>
                <li><strong>Supabase:</strong> for user authentication and secure data storage. See <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-nabi-beige hover:underline">Supabase Privacy Policy</a>.</li>
                <li><strong>RevenueCat:</strong> for subscription and in-app payment management. See <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-nabi-beige hover:underline">RevenueCat Privacy Policy</a>.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Object to the processing of your personal data</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with the competent supervisory authority (for EU users: your local data protection authority)</li>
              </ul>
              <p className="mt-4">To exercise these rights, you can contact us via the support channels in the application or at the email address in the Contact section. We will respond within the time required by applicable law (generally within 30 days).</p>
              <p className="mt-4"><strong>Account deletion:</strong> You can delete your account at any time from the application settings. Deletion will permanently remove all your content and personal data, except as set out in the &quot;Data Retention and Security&quot; section.</p>
            </section>
            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">7. Cookies and Similar Technologies</h2>
              <p>The application may use cookie-like technologies to improve user experience, authenticate sessions, and analyse usage. You can manage these preferences through your device or application settings.</p>
            </section>
            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">8. International Data Transfers</h2>
              <p>Your data may be transferred to and stored on servers located outside your country of residence. We ensure that such transfers comply with applicable data protection laws and that your data is protected with appropriate security measures.</p>
            </section>
            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">9. Children&apos;s Privacy</h2>
              <p>The application is not intended for children under 13 (or the minimum age required by law in your country). We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete such information.</p>
            </section>
            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">10. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy in the application and updating the &quot;Last updated&quot; date. We encourage you to review this policy periodically.</p>
            </section>
            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">11. GDPR Compliance</h2>
              <p>If you are resident in the European Union, this Privacy Policy complies with the General Data Protection Regulation (GDPR). We respect your fundamental rights to privacy and protection of personal data as set out in the GDPR.</p>
            </section>
            <section>
              <h2 className="font-title text-2xl font-bold text-gray-800 mt-8 mb-4">12. Contact</h2>
              <p>For any questions, concerns, or requests regarding this Privacy Policy or the processing of your personal data, you can contact us:</p>
              <ul className="list-none pl-0 space-y-2 mt-4">
                <li><strong>Data controller:</strong> Elisabetta Cillo</li>
                <li><strong>Email:</strong> <a href="mailto:hello@getnabi.app" className="text-nabi-beige hover:underline">hello@getnabi.app</a></li>
                <li><strong>Address:</strong> Via Nomentana 246, Rome, Italy</li>
              </ul>
            </section>
            <div className="mt-8 p-4 bg-nabi-panna/50 rounded-lg">
              <p className="text-sm">By using this application, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of your information as described in this document.</p>
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

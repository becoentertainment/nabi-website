import NavMenu from '../../components/NavMenu'

export default function EnFAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-nabi-panna via-nabi-azzurro to-nabi-beige py-12">
      <NavMenu />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
          <h1 className="font-title text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Frequently Asked Questions
          </h1>
          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="font-title text-xl font-semibold text-gray-800 mb-2">
                What is Nabi?
              </h2>
              <p>
                Nabi is a digital journaling app that lets you express your creativity through text, images, drawings, and decorations. It&apos;s your personal space to reflect, create, and grow.
              </p>
            </div>
            <div>
              <h2 className="font-title text-xl font-semibold text-gray-800 mb-2">
                Is the app free?
              </h2>
              <p>
                Nabi offers free basic features. For premium and advanced features, a monthly or annual subscription is available.
              </p>
            </div>
            <div>
              <h2 className="font-title text-xl font-semibold text-gray-800 mb-2">
                Is my data secure?
              </h2>
              <p>
                Yes, the security of your data is our priority. We use end-to-end encryption and your content is only accessible through your account. For more information, see our <a href="/en/privacy" className="text-nabi-beige hover:underline">Privacy Policy</a>.
              </p>
            </div>
            <div>
              <h2 className="font-title text-xl font-semibold text-gray-800 mb-2">
                Can I sync my data across multiple devices?
              </h2>
              <p>
                Yes, with a Nabi account you can sync your journals across all your iOS devices. Your content will always be accessible, wherever you are.
              </p>
            </div>
            <div>
              <h2 className="font-title text-xl font-semibold text-gray-800 mb-2">
                How can I delete my account?
              </h2>
              <p>
                You can delete your account at any time from the app settings. After deletion, your data will be removed as set out in our Privacy Policy.
              </p>
            </div>
            <div>
              <h2 className="font-title text-xl font-semibold text-gray-800 mb-2">
                Is the app available for Android?
              </h2>
              <p>
                Nabi is currently only available for iOS. We are working to bring the app to Android in the future.
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

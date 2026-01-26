import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nabi - La tua app di journaling',
  description: 'Scopri Nabi, l\'app per il journaling creativo e personale',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className="font-body">{children}</body>
    </html>
  )
}

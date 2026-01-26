import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nabi - La tua app di journaling',
  description: 'Scopri Nabi, l\'app per il journaling creativo e personale',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
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

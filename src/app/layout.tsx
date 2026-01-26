import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nabi - La tua app di journaling',
  description: 'Scopri Nabi, l\'app per il journaling creativo e personale',
  icons: {
    icon: '/favicon.png',
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

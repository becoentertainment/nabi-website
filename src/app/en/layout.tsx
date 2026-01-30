import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nabi - Your journaling app',
  description: 'Discover Nabi, the app for creative and personal journaling',
}

export default function EnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

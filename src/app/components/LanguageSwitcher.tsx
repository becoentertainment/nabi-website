'use client'

import { usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const isEnglish = pathname?.startsWith('/en')

  if (isEnglish) {
    // Strip /en from path to get Italian equivalent, or go to home
    const itPath = pathname === '/en' ? '/' : pathname?.replace(/^\/en/, '') || '/'
    return (
      <a
        href={itPath}
        className="text-gray-700 hover:text-nabi-beige font-body text-base md:text-lg font-semibold transition-colors px-3 py-1.5 rounded-lg border border-gray-300 hover:border-nabi-beige"
      >
        ITA
      </a>
    )
  }

  // Current path for English version
  const enPath = pathname === '/' ? '/en' : `/en${pathname}`
  return (
    <a
      href={enPath}
      className="text-gray-700 hover:text-nabi-beige font-body text-base md:text-lg font-semibold transition-colors px-3 py-1.5 rounded-lg border border-gray-300 hover:border-nabi-beige"
    >
      ENG
    </a>
  )
}

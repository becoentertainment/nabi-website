'use client'

import { usePathname } from 'next/navigation'
import LanguageSwitcher from './LanguageSwitcher'

export default function NavMenu() {
  const pathname = usePathname()
  const isEnglish = pathname?.startsWith('/en')
  const base = isEnglish ? '/en' : ''

  const links = isEnglish
    ? [
        { href: `${base}/faq`, label: 'FAQ' },
        { href: `${base}/contact`, label: 'Contact' },
        { href: `${base}/about`, label: 'About Us' },
      ]
    : [
        { href: '/faq', label: 'FAQ' },
        { href: '/contact', label: 'Contatti' },
        { href: '/about', label: 'Chi Siamo' },
      ]

  return (
    <nav className="relative z-10 py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-6 md:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-nabi-beige font-body text-base md:text-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="absolute right-4 top-4 sm:right-8 sm:top-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  )
}

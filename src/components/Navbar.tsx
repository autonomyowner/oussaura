'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Réalisations', href: '/gallery' },
  { label: 'Services', href: '/services' },
  { label: 'Tarifs', href: '/pricing' },
  { label: 'À propos', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const Navbar = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 12)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-white/92 backdrop-blur border-b border-neutral-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="flex items-center gap-3 leading-tight text-neutral-900 transition-colors duration-200 hover:text-[#18A999]"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#0B3C49] flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Walid Fermeture Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-semibold tracking-wide uppercase">
                Walid Fermeture
              </span>
              <span className="text-xs font-light text-neutral-500">
                Sécurité & signalétique 24/7
              </span>
            </div>
          </Link>

          <div className="hidden items-center space-x-7 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium uppercase tracking-[0.18em] transition-colors duration-200 ${
                    isActive
                      ? 'text-amber-700'
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-neutral-700 transition-colors duration-200 hover:border-neutral-500 hover:text-neutral-900 md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label="Basculer la navigation"
            type="button"
          >
            {isMobileMenuOpen ? 'Fermer' : 'Menu'}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mb-4 rounded-2xl border border-neutral-200 bg-white/95 px-3 pb-4 pt-2 backdrop-blur">
            <div className="grid gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] transition-colors duration-200 ${
                      isActive
                        ? 'bg-amber-100 text-amber-800'
                        : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

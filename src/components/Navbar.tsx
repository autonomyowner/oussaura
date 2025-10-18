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
  { label: '🔥 Casquette Jean', href: '/casquette-jean' },
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
      className={`fixed inset-x-0 top-10 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur shadow-md'
          : 'bg-white'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 h-20 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <div className="relative w-32 h-16 md:w-40 md:h-20">
            <Image
              src="/logo.png"
              alt="ouss.aura"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg font-medium transition-colors ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          aria-expanded={isMobileMenuOpen}
          aria-label="القائمة"
          type="button"
        >
          {isMobileMenuOpen ? 'إغلاق' : 'القائمة'}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}

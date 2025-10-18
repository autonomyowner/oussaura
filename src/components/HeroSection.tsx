'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { trackMetaEvent } from '@/lib/metaPixel'

export const HeroSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [typedText, setTypedText] = useState<string>('')
  const fullText = 'Sécuriser & valoriser vos espaces à Paris'

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsVisible(true), 100)
    return () => window.clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [isVisible])

  const handleContactClick = (): void => {
    const phoneNumber = '+33753969259'
    const message =
      'Bonjour! Je souhaite obtenir un devis pour vos services de fermeture et sécurité.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`
    trackMetaEvent('Contact', { source: 'hero_primary_whatsapp' })
    window.open(whatsappUrl, '_blank')
  }

  const handleUrgenceClick = (): void => {
    trackMetaEvent('Contact', { source: 'hero_urgence_phone' })
    window.open('tel:0753969259', '_self')
  }

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2069&q=80"
          alt="Fermetures métalliques et sécurité"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/72 backdrop-blur-xl" />
      </div>

      <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
        <div
          className={`max-w-3xl space-y-8 transition-all duration-700 ease-out ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Walid Fermeture
          </p>

          <h1 className="text-4xl font-elegant font-semibold text-neutral-900 sm:text-5xl lg:text-6xl">
            {typedText}
            <span className="inline-block w-1 h-[1em] ml-1 bg-neutral-900 animate-pulse" />
          </h1>

          <p className="text-lg leading-relaxed text-neutral-600 sm:text-xl">
            Pose, dépannage et maintenance 24/7 : rideaux métalliques, portes blindées, volets roulants, ALU/PVC, vitrines, enseignes lumineuses & néons. Boutiques, bureaux, immeubles et restaurants.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center rounded-full bg-[#0B3C49] px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all duration-200 hover:bg-[#18A999]"
              type="button"
            >
              Demander un devis
            </button>

            <button
              onClick={handleUrgenceClick}
              className="inline-flex items-center justify-center rounded-full border-2 border-[#18A999] px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#0B3C49] transition-all duration-200 hover:bg-[#18A999] hover:text-white"
              type="button"
            >
              Urgence 24/7 : 07 53 96 92 59
            </button>
          </div>

          <div className="flex flex-col gap-4 border-t border-neutral-300 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Intervention 24/7
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600">
              <span className="whitespace-nowrap">Matériaux pro</span>
              <span className="whitespace-nowrap">Garantie & SAV</span>
              <span className="whitespace-nowrap">Délai 4h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

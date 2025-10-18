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
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/projects/hero video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
        <div
          className={`max-w-3xl space-y-8 transition-all duration-700 ease-out ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-white/80">
            Walid Fermeture
          </p>

          <h1 className="text-4xl font-elegant font-semibold text-white sm:text-5xl lg:text-6xl">
            {typedText}
            <span className="inline-block w-1 h-[1em] ml-1 bg-white animate-pulse" />
          </h1>

          <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
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
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all duration-200 hover:bg-white hover:text-[#0B3C49]"
              type="button"
            >
              Urgence 24/7 : 07 53 96 92 59
            </button>
          </div>

          <div className="flex flex-col gap-4 border-t border-white/30 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm uppercase tracking-[0.3em] text-white/80">
              Intervention 24/7
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
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

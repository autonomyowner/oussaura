'use client'

import { trackMetaEvent } from '@/lib/metaPixel'

export const CTASection = (): JSX.Element => {
  const handleWhatsAppClick = (): void => {
    const phoneNumber = '+33753969259'
    const message =
      'Bonjour! Je souhaite obtenir un devis pour vos services de fermeture et sécurité.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`
    trackMetaEvent('Contact', { source: 'cta_whatsapp' })
    window.open(whatsappUrl, '_blank')
  }

  const handlePhoneClick = (): void => {
    trackMetaEvent('Contact', { source: 'cta_phone' })
    window.open('tel:0753969259', '_self')
  }

  const handleEmailClick = (): void => {
    trackMetaEvent('Contact', { source: 'cta_email' })
    window.open('mailto:oualidataouli4@gmail.com', '_self')
  }

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-neutral-200 bg-white/85 px-6 py-16 shadow-sm sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Un projet ou une urgence ?
          </p>
          <h2 className="mt-4 text-4xl font-elegant font-semibold text-neutral-900 sm:text-5xl">
            Contactez-nous 24/7
          </h2>
          <p className="mt-6 text-base leading-relaxed text-neutral-600">
            Notre équipe est disponible jour et nuit pour vos urgences et vos projets
            de fermeture, sécurité et signalétique à Paris et en Île-de-France.
          </p>
        </div>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button
            onClick={handleWhatsAppClick}
            className="rounded-full bg-[#0B3C49] px-10 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition-colors duration-200 hover:bg-[#18A999]"
            type="button"
          >
            Demander un devis
          </button>
          <button
            onClick={handlePhoneClick}
            className="rounded-full border-2 border-[#18A999] px-10 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#0B3C49] transition-colors duration-200 hover:bg-[#18A999] hover:text-white"
            type="button"
          >
            Appeler maintenant
          </button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white/80 px-6 py-8">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              WhatsApp
            </p>
            <p className="mt-4 text-lg font-semibold text-neutral-900">
              07 53 96 92 59
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#18A999] underline underline-offset-4"
              type="button"
            >
              Démarrer la conversation
            </button>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white/80 px-6 py-8">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Téléphone
            </p>
            <p className="mt-4 text-lg font-semibold text-neutral-900">
              07 53 96 92 59
            </p>
            <button
              onClick={handlePhoneClick}
              className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#18A999] underline underline-offset-4"
              type="button"
            >
              Appeler maintenant
            </button>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white/80 px-6 py-8">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Email
            </p>
            <p className="mt-4 text-lg font-semibold text-neutral-900">
              oualidataouli4@gmail.com
            </p>
            <button
              onClick={handleEmailClick}
              className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#18A999] underline underline-offset-4"
              type="button"
            >
              Envoyer un message
            </button>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-8 text-center text-xs uppercase tracking-[0.35em] text-neutral-500">
          Disponibles 24/7 pour vous accompagner • Paris & Île-de-France
        </div>
      </div>
    </section>
  )
}

'use client'

import { trackMetaEvent } from '@/lib/metaPixel'

export const ContactInfo = (): JSX.Element => {
  const handleWhatsAppClick = (): void => {
    const phoneNumber = '+33753969259'
    const message =
      'Bonjour! Je souhaite obtenir un devis pour vos services de fermeture et sécurité.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`
    trackMetaEvent('Contact', { source: 'contact_whatsapp' })
    window.open(whatsappUrl, '_blank')
  }

  const handlePhoneClick = (): void => {
    trackMetaEvent('Contact', { source: 'contact_phone' })
    window.open('tel:0753969259', '_self')
  }

  const handleEmailClick = (): void => {
    trackMetaEvent('Contact', { source: 'contact_email' })
    window.open('mailto:oualidataouli4@gmail.com', '_self')
  }

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-neutral-200 bg-white/90 px-6 py-10 shadow-sm">
        <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
          Coordonnées
        </p>
        <h2 className="mt-4 text-3xl font-elegant font-semibold text-neutral-900">
          Discutons de votre projet ou urgence
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600">
          Nous sommes disponibles 24/7 pour discuter de votre projet, établir un
          devis personnalisé et intervenir rapidement en cas d&apos;urgence.
        </p>
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-white/85 px-6 py-8 shadow-sm">
        <h3 className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          WhatsApp
        </h3>
        <p className="mt-2 text-lg font-semibold text-neutral-900">
          07 53 96 92 59
        </p>
        <p className="mt-2 text-sm text-neutral-600">
          Réponse rapide et devis en 2h.
        </p>
        <button
          onClick={handleWhatsAppClick}
          className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#18A999] underline underline-offset-4"
          type="button"
        >
          Ouvrir WhatsApp
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-neutral-200 bg-white/85 px-6 py-8 shadow-sm">
          <h3 className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Téléphone
          </h3>
          <p className="mt-2 text-lg font-semibold text-neutral-900">
            07 53 96 92 59
          </p>
          <p className="mt-2 text-sm text-neutral-600">
            Urgences 24/7 et prise de rendez-vous.
          </p>
          <button
            onClick={handlePhoneClick}
            className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#18A999] underline underline-offset-4"
            type="button"
          >
            Appeler
          </button>
        </div>
        <div className="rounded-3xl border border-neutral-200 bg-white/85 px-6 py-8 shadow-sm">
          <h3 className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Email
          </h3>
          <p className="mt-2 text-lg font-semibold text-neutral-900">
            oualidataouli4@gmail.com
          </p>
          <p className="mt-2 text-sm text-neutral-600">
            Pour devis détaillés et documents.
          </p>
          <button
            onClick={handleEmailClick}
            className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#18A999] underline underline-offset-4"
            type="button"
          >
            Écrire un message
          </button>
        </div>
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-white/80 px-6 py-8 text-sm uppercase tracking-[0.3em] text-neutral-500 shadow-sm">
        Disponible 24/7 - Urgences & dépannage
      </div>
    </div>
  )
}

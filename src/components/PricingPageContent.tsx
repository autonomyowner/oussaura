'use client'

import { useEffect } from 'react'
import { trackMetaEvent } from '@/lib/metaPixel'

const phoneNumber = '+33753969259'
const displayPhoneNumber = '07 53 96 92 59'

const createWhatsAppLink = (subject: string): string => {
  const message = `Bonjour! Je souhaite obtenir un devis pour ${subject}. Pouvez-vous me contacter ?`
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}

type PricingRange = {
  name: string
  description: string
  price: string
  details: string[]
  whatsappUrl: string
}

const pricingRanges: PricingRange[] = [
  {
    name: 'Dépannage / Petite réparation',
    description: 'Intervention rapide pour déblocage et réparations simples.',
    price: '149 € - 800 € HT',
    details: [
      'Déblocage rideau métallique bloqué',
      'Réparation volet roulant',
      'Sécurisation d\'urgence',
      'Déplacement selon zone',
      'Intervention 24/7 disponible',
    ],
    whatsappUrl: createWhatsAppLink('un dépannage urgent'),
  },
  {
    name: 'Remplacement standard',
    description: 'Pose et remplacement de fermetures standard.',
    price: '800 € - 2 500 € HT',
    details: [
      'Remplacement volet roulant',
      'Installation rideau métallique manuel/motorisé',
      'Fenêtres ALU/PVC standard',
      'Matériaux et pose inclus',
      'Garantie incluse',
    ],
    whatsappUrl: createWhatsAppLink('un remplacement de fermeture'),
  },
  {
    name: 'Installation moyenne',
    description: 'Projets d\'installation de taille moyenne.',
    price: '2 500 € - 6 000 € HT',
    details: [
      'Porte blindée certifiée',
      'Vitrine commerciale moyenne',
      'Enseigne lumineuse LED',
      'Installation complète',
      'Garantie décennale',
    ],
    whatsappUrl: createWhatsAppLink('une installation moyenne'),
  },
  {
    name: 'Projet complexe',
    description: 'Enseignes complexes, façades complètes ou multi-lots.',
    price: '6 000 €+ HT',
    details: [
      'Enseigne complexe sur-mesure',
      'Façade complète commerce',
      'Multi-lots immeuble',
      'Étude personnalisée',
      'Suivi de chantier',
    ],
    whatsappUrl: createWhatsAppLink('un projet complexe'),
  },
]

const processSteps = [
  {
    title: 'Visite & cotes',
    description:
      'Prise de mesures sur site ou envoi de photos avec dimensions pour établir un devis précis.',
  },
  {
    title: 'Devis détaillé',
    description:
      'Proposition avec matériaux, délais, garanties et conditions d\'intervention clairement détaillés.',
  },
  {
    title: 'Planification',
    description:
      'Organisation de l\'intervention selon vos disponibilités ou intervention immédiate en cas d\'urgence.',
  },
  {
    title: 'Réalisation',
    description:
      'Pose professionnelle ou réparation avec finitions soignées, nettoyage du chantier et réception.',
  },
]

const headerWhatsAppUrl = createWhatsAppLink('vos services')
const urgenceWhatsAppUrl = createWhatsAppLink('une urgence')

export const PricingPageContent = (): JSX.Element => {
  useEffect(() => {
    trackMetaEvent('ViewContent', {
      content_name: 'pricing_page',
      content_category: 'services',
    })
  }, [])

  const handlePhoneClick = (): void => {
    trackMetaEvent('Contact', { source: 'pricing_phone' })
    window.open('tel:0753969259', '_self')
  }

  return (
    <div className="relative isolate bg-white/90">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="pointer-events-none h-full w-full bg-[radial-gradient(circle_at_top,_rgba(11,60,73,0.12),_transparent_70%)]" />
      </div>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Tarifs & formules
          </p>
          <h1 className="text-4xl font-elegant font-semibold text-neutral-900 sm:text-5xl">
            Devis clair avant intervention
          </h1>
          <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">
            Les prix varient selon les dimensions, matériaux et contraintes chantier.
            Devis gratuit et forfaits urgence 24/7 disponibles.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={headerWhatsAppUrl}
              onClick={() =>
                trackMetaEvent('Contact', {
                  source: 'pricing_header_whatsapp',
                })
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#0B3C49] px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-200 hover:bg-[#18A999]"
            >
              Recevoir un devis en 2h
            </a>
            <button
              onClick={handlePhoneClick}
              className="inline-flex items-center justify-center rounded-full border-2 border-[#18A999] px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#0B3C49] transition-colors duration-200 hover:bg-[#18A999] hover:text-white"
            >
              Urgence : {displayPhoneNumber}
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {pricingRanges.map((range) => (
            <div
              key={range.name}
              className="relative flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-white/95 p-8 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="space-y-5">
                <div>
                  <h2 className="text-2xl font-elegant font-semibold text-neutral-900">
                    {range.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {range.description}
                  </p>
                </div>
                <div className="text-3xl font-semibold text-[#0B3C49]">
                  {range.price}
                </div>
                <ul className="space-y-3 pt-2">
                  {range.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-sm leading-relaxed text-neutral-600"
                    >
                      <span className="mt-[3px] inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#18A999] text-[10px] font-semibold text-white">
                        ✓
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={range.whatsappUrl}
                  onClick={() =>
                    trackMetaEvent('Lead', {
                      source: 'pricing_range_whatsapp',
                      content_name: range.name,
                    })
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#0B3C49] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-200 hover:bg-[#18A999]"
                >
                  Demander un devis
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-neutral-200 bg-white/80 p-10 shadow-sm">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Processus
          </p>
          <h2 className="mt-4 text-3xl font-elegant font-semibold text-neutral-900">
            De la demande à la réalisation
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="group relative rounded-2xl border border-neutral-200 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#18A999] hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B3C49] text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="mt-6 text-lg font-semibold text-neutral-900">
                  {step.title}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#18A999] bg-gradient-to-br from-[#0B3C49] to-[#18A999] p-8 text-center shadow-sm">
          <p className="text-xs uppercase tracking-[0.35em] text-white/80">
            Urgence 24/7
          </p>
          <h3 className="mt-3 text-2xl font-elegant font-semibold text-white">
            Besoin d&apos;une intervention immédiate ?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90">
            Notre équipe est disponible 24h/24 et 7j/7 pour toutes vos urgences de
            fermeture et sécurité à Paris et en Île-de-France.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={urgenceWhatsAppUrl}
              onClick={() =>
                trackMetaEvent('Contact', {
                  source: 'pricing_urgence_whatsapp',
                })
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#0B3C49] transition-colors duration-200 hover:bg-white/90"
            >
              Contacter maintenant
            </a>
            <button
              onClick={handlePhoneClick}
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-200 hover:bg-white hover:text-[#0B3C49]"
            >
              Appeler : {displayPhoneNumber}
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-neutral-200 bg-white/70 p-10 text-center shadow-sm">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Compris dans nos prestations
          </p>
          <h2 className="mt-4 text-3xl font-elegant font-semibold text-neutral-900">
            Service complet et garanties
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="space-y-3">
              <div className="text-lg font-semibold text-neutral-900">
                Prise de cotes & conseil
              </div>
              <p className="text-sm leading-relaxed text-neutral-600">
                Visite technique gratuite avec conseils personnalisés pour choisir
                les meilleures solutions.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-lg font-semibold text-neutral-900">
                Pose soignée
              </div>
              <p className="text-sm leading-relaxed text-neutral-600">
                Installation professionnelle avec finitions propres et nettoyage
                du chantier après intervention.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-lg font-semibold text-neutral-900">
                Garantie & SAV
              </div>
              <p className="text-sm leading-relaxed text-neutral-600">
                Garantie sur nos prestations avec service après-vente réactif et
                contrats de maintenance disponibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-28 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-neutral-800 bg-neutral-900 px-8 py-12 text-center text-white sm:px-12">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">
            Prêt à démarrer ?
          </p>
          <h2 className="text-3xl font-elegant font-semibold sm:text-4xl">
            Sécurisez vos espaces dès aujourd&apos;hui
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-white/70">
            Contactez-nous par WhatsApp ou téléphone pour obtenir un devis gratuit
            et personnalisé. Intervention rapide garantie sur Paris et Île-de-France.
          </p>
          <a
            href={headerWhatsAppUrl}
            onClick={() =>
              trackMetaEvent('Contact', {
                source: 'pricing_footer_whatsapp',
              })
            }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-900 transition-colors duration-200 hover:bg-[#18A999] hover:text-white"
          >
            Ouvrir WhatsApp maintenant
          </a>
          <p className="text-[12px] uppercase tracking-[0.3em] text-white/60">
            Disponible 24/7 - {displayPhoneNumber}
          </p>
        </div>
      </section>
    </div>
  )
}

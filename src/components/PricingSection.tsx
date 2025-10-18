'use client'

export const PricingSection = (): JSX.Element => {
  const handleContactClick = (): void => {
    const phoneNumber = '+33753969259'
    const message =
      'Bonjour! Je souhaite obtenir un devis pour vos services de fermeture et sécurité.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="mt-24 rounded-3xl border border-neutral-200 bg-white/85 px-6 py-16 shadow-sm sm:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
          Tarification
        </p>
        <h2 className="mt-4 text-4xl font-elegant font-semibold text-neutral-900 sm:text-5xl">
          Des devis clairs selon vos besoins
        </h2>
        <p className="mt-6 text-base leading-relaxed text-neutral-600">
          Chaque projet est unique. Nous établissons des devis personnalisés en
          fonction de vos besoins, des dimensions et de votre budget.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          {
            title: 'Dépannage Express',
            description: 'Intervention rapide 24/7 pour déblocage et sécurisation.',
            points: [
              'Déblocage rideau/volet',
              'Sécurisation vitrine/porte',
              'Intervention rapide',
            ],
          },
          {
            title: 'Installation',
            description: 'Pose et remplacement de tous types de fermetures.',
            points: [
              'Rideaux métalliques',
              'Portes blindées',
              'Fenêtres ALU/PVC',
            ],
          },
          {
            title: 'Maintenance',
            description: 'Contrats de maintenance préventive pour éviter les pannes.',
            points: [
              'Visites régulières',
              'Réglages préventifs',
              'Intervention prioritaire',
            ],
          },
        ].map((offer) => (
          <div
            key={offer.title}
            className="flex flex-col rounded-3xl border border-neutral-200 bg-white/90 px-6 py-8 text-left shadow-sm"
          >
            <h3 className="text-xl font-semibold text-neutral-900">
              {offer.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              {offer.description}
            </p>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-neutral-600">
              {offer.points.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Sur devis
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-elegant font-semibold text-neutral-900">
          Discutons de votre projet
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600">
          Nous écoutons vos besoins, prenons les mesures nécessaires et établissons
          un devis détaillé avec matériaux, délais et garanties incluses.
        </p>
        <button
          onClick={handleContactClick}
          className="mt-7 rounded-full bg-[#0B3C49] px-10 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition-colors duration-200 hover:bg-[#18A999]"
          type="button"
        >
          Demander un devis
        </button>
      </div>
    </section>
  )
}

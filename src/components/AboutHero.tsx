import Image from 'next/image'

export const AboutHero = (): JSX.Element => {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
                À propos
              </p>
              <h1 className="mt-5 text-4xl font-elegant font-semibold text-neutral-900 sm:text-5xl">
                Walid Fermeture – Paris
              </h1>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                Spécialiste fermeture & signalétique pour professionnels et particuliers. Notre équipe
                intervient dans tout Paris et IDF pour sécuriser, rénover et valoriser vos espaces :
                rideaux métalliques, portes blindées, volets roulants, ALU/PVC, vitrines, garde-corps,
                enseignes lumineuses & néons.
              </p>
            </div>

            <div className="grid gap-8">
              <div>
                <h2 className="text-lg font-semibold text-neutral-900">
                  Notre expertise
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Depuis plusieurs années, nous accompagnons les commerces et particuliers
                  à Paris pour sécuriser leurs espaces avec des installations professionnelles
                  et un service de maintenance fiable.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-neutral-900">
                  Notre engagement
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Intervenir rapidement 24/7, utiliser des matériaux de qualité professionnelle,
                  et assurer un suivi après-pose avec garantie et SAV pour votre tranquillité.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-neutral-200 pt-6">
              <div>
                <p className="text-3xl font-elegant font-semibold text-neutral-900">
                  300+
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-neutral-500">
                  Interventions
                </p>
              </div>
              <div>
                <p className="text-3xl font-elegant font-semibold text-neutral-900">
                  100%
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-neutral-500">
                  Satisfaction
                </p>
              </div>
              <div>
                <p className="text-3xl font-elegant font-semibold text-neutral-900">
                  24/7
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-neutral-500">
                  Dispo
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-white/80 shadow-lg">
              <div className="relative aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
                  alt="Équipe Walid Fermeture"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/10" />
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 w-60 -translate-x-1/2 rounded-3xl border border-neutral-200 bg-white/95 px-6 py-5 text-center shadow-lg">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                Expertise pro
              </p>
              <p className="mt-3 text-sm text-neutral-600">
                Matériaux normés et finitions soignées pour chaque installation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

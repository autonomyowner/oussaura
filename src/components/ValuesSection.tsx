type ValueItem = {
  title: string
  description: string
}

const values: ValueItem[] = [
  {
    title: 'Réactivité 24/7',
    description:
      'Dépannages, déblocages et sécurisation immédiate. Urgences et délais tenus.',
  },
  {
    title: 'Qualité pro',
    description:
      'Matériaux normés ALU, PVC, acier, motorisations fiables et finitions propres.',
  },
  {
    title: 'Transparence',
    description:
      'Devis clair, conseils honnêtes, pas de surprises sur les tarifs.',
  },
  {
    title: 'Satisfaction',
    description:
      'Suivi après-pose, maintenance préventive et service client à l\'écoute.',
  },
  {
    title: 'Garantie & SAV',
    description:
      'Mise en service, conseils techniques et intervention rapide en cas de problème.',
  },
  {
    title: 'Expertise',
    description:
      'Équipe qualifiée avec plusieurs années d\'expérience sur tous types d\'installations.',
  },
]

export const ValuesSection = (): JSX.Element => {
  return (
    <section className="border-t border-neutral-200 bg-white/70 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Nos engagements
          </p>
          <h2 className="mt-5 text-4xl font-elegant font-semibold text-neutral-900 sm:text-5xl">
            Des valeurs qui guident chaque intervention
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-neutral-600">
            Réactivité, qualité et transparence structurent notre façon
            de sécuriser vos espaces. Nous cultivons des relations solides
            et durables avec nos clients.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-neutral-200 bg-white/90 px-6 py-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-neutral-900">
                {value.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-neutral-200 bg-white/85 px-6 py-12 text-center shadow-sm sm:px-12">
          <h3 className="text-2xl font-elegant font-semibold text-neutral-900">
            Notre promesse
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-neutral-600">
            Assurer une intervention rapide et respectueuse de vos contraintes. Nous
            gérons la pose, le dépannage et la maintenance avec la même attention
            que pour la première installation.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 text-sm uppercase tracking-[0.3em] text-neutral-500 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white/80 px-6 py-6">
              Sécurité
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white/80 px-6 py-6">
              Fiabilité
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white/80 px-6 py-6">
              Réactivité
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import Image from 'next/image'

type ServiceCard = {
  id: string
  title: string
  description: string
  highlight: string
  image: string
  href: string
}

const services: ServiceCard[] = [
  {
    id: 'rideaux',
    title: 'Rideaux métalliques & volets roulants',
    description:
      'Pose, motorisation, dépannage et déblocage. Lames pleines, micro-perforées, grilles cobra. Contrats de maintenance disponibles.',
    highlight: 'Sécurité 24/7',
    image:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    href: '/services#rideaux',
  },
  {
    id: 'portes',
    title: 'Portes blindées',
    description:
      'Installation certifiée, serrures multipoints, remplacement, renforts et habillages pour une sécurité maximale.',
    highlight: 'Haute sécurité',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    href: '/services#portes',
  },
  {
    id: 'alu-pvc',
    title: 'Portes & fenêtres ALU/PVC',
    description:
      'Sur-mesure, isolation thermique & phonique. Oscillo-battant, coulissant, double/triple vitrage pour un confort optimal.',
    highlight: 'Isolation pro',
    image:
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800&q=80',
    href: '/services#alu-pvc',
  },
  {
    id: 'vitrines',
    title: 'Vitrines commerciales',
    description:
      'Verre sécurit anti-effraction, remplacement de casse, étanchéité et joints pour protéger votre commerce.',
    highlight: 'Protection commerce',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    href: '/services#vitrines',
  },
  {
    id: 'enseignes',
    title: 'Enseignes lumineuses & néons',
    description:
      'Création, fabrication et pose. LED, caissons, lettres relief, néon flexible. Mise aux normes et maintenance.',
    highlight: 'Visibilité maximale',
    image: '/projects/1.jpg',
    href: '/services#enseignes',
  },
  {
    id: 'autres',
    title: 'Garde-corps & stores',
    description:
      'Garde-corps acier/ALU/verre int. & ext., stores bannes, zip, intérieurs avec toiles techniques et motorisation.',
    highlight: 'Aménagement complet',
    image:
      'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80',
    href: '/services#autres',
  },
]

export const ServicesPreview = (): JSX.Element => {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Nos Services
          </p>
          <h2 className="mt-5 text-4xl font-elegant font-semibold text-neutral-900 sm:text-5xl">
            Solutions de fermeture & signalétique
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600">
            Nous sécurisons et valorisons vos espaces avec des installations professionnelles,
            un service de dépannage 24/7 et une maintenance préventive de qualité.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative block overflow-hidden rounded-3xl border border-neutral-200 bg-white/90 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 via-transparent to-transparent" />
              </div>

              <div className="flex h-full flex-col gap-5 p-6">
                <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                  {service.highlight}
                </span>
                <h3 className="text-2xl font-elegant font-semibold text-neutral-900">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {service.description}
                </p>
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
                  Decouvrir le service
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="inline-flex rounded-full border border-neutral-400 px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-700 transition-colors duration-200 hover:border-neutral-700 hover:text-neutral-900"
          >
            Voir tous les services
          </Link>
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import { PricingPageContent } from '@/components/PricingPageContent'

export const metadata: Metadata = {
  title: 'Tarifs - Rideaux métalliques, portes blindées & fermetures | Walid Fermeture',
  description:
    'Découvrez nos tarifs pour rideaux métalliques, portes blindées, volets roulants et enseignes lumineuses à Paris. Devis gratuit et forfaits urgence 24/7 disponibles.',
  alternates: {
    canonical: '/pricing',
  },
}

export default function PricingPage(): JSX.Element {
  return <PricingPageContent />
}

import { ContactInfo } from '@/components/ContactInfo'
import { LocationMap } from '@/components/LocationMap'
import { BudgetSlider } from '@/components/BudgetSlider'

export default function ContactPage(): JSX.Element {
  return (
    <div className="min-h-screen px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-elegant font-semibold text-neutral-900 sm:text-5xl">
            Discutons de votre projet ou urgence
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-neutral-600">
            Partagez vos besoins, dimensions et contraintes. Nous reviendrons
            vers vous rapidement avec un devis détaillé ou interviendrons en urgence
            selon votre situation.
          </p>
        </div>

        <div className="mt-16">
          <BudgetSlider />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ContactInfo />
          <LocationMap />
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'
import { ProductGrid } from '@/components/ProductGrid'

export default function HomePage(): JSX.Element {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex justify-center mb-6">
            <div className="relative w-64 h-32 md:w-96 md:h-48">
              <Image
                src="/logo.png"
                alt="ouss.aura"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 mb-2">
            قبعات أنيقة للجميع
          </p>
          <p className="text-lg text-gray-500">
            جميع المنتجات بسعر واحد: 3200 دج
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            منتجاتنا
          </h2>
          <ProductGrid />
        </div>
      </section>
    </div>
  )
}

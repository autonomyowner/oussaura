'use client'

import { useState } from 'react'
import Image from 'next/image'
import { OrderModal } from './OrderModal'

const products = [
  { id: 1, name: 'قبعة رياضية', image: '/projects/red a.jpg' },
  { id: 2, name: 'قبعة رياضية', image: '/projects/green as.jpg' },
  { id: 3, name: 'قبعة رياضية', image: '/projects/black sox.jpg' },
  { id: 4, name: 'قبعة رياضية', image: '/projects/red s blue.jpg' },
  { id: 5, name: 'قبعة رياضية', image: '/projects/red nba.jpg' },
  { id: 6, name: 'قبعة رياضية', image: '/projects/black red thor.jpg' },
  { id: 7, name: 'قبعة رياضية', image: '/projects/black nba.jpg' },
  { id: 8, name: 'قبعة رياضية', image: '/projects/pink ny.jpg' },
  { id: 9, name: 'قبعة رياضية', image: '/projects/white red b.jpg' },
  { id: 10, name: 'قبعة رياضية', image: '/projects/black ny.jpg' },
  { id: 11, name: 'قبعة رياضية', image: '/projects/black olo.jpg' },
  { id: 12, name: 'قبعة رياضية', image: '/projects/white black la.jpg' },
  { id: 13, name: 'قبعة رياضية', image: '/projects/black lacost.jpg' },
  { id: 14, name: 'قبعة رياضية', image: '/projects/white blue la.jpg' },
  { id: 15, name: 'قبعة رياضية', image: '/projects/whiye gold la.jpg' },
  { id: 16, name: 'قبعة رياضية', image: '/projects/blue la.jpg' },
  { id: 17, name: 'قبعة رياضية', image: '/projects/red polo.jpg' },
  { id: 18, name: 'قبعة رياضية', image: '/projects/polo.jpg' },
]

export const ProductGrid = (): JSX.Element => {
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; image: string } | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer"
            onClick={() => setSelectedProduct({ name: product.name, image: product.image })}
          >
            <div className="relative aspect-square overflow-hidden bg-gray-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-2xl font-bold text-blue-600 mb-3">3200 دج</p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                اطلب الآن
              </button>
            </div>
          </div>
        ))}
      </div>

      <OrderModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        productName={selectedProduct?.name || ''}
        productImage={selectedProduct?.image || ''}
      />
    </>
  )
}

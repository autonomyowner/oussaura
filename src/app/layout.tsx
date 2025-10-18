import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import Image from 'next/image'
import './globals.css'
import { AnnouncementBar } from '@/components/AnnouncementBar'
import { Navbar } from '@/components/Navbar'
import { WhatsAppButton } from '@/components/WhatsAppButton'

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ouss.aura - قبعات أنيقة للجميع',
  description:
    'متجر ouss.aura للقبعات العصرية والأنيقة. جميع المنتجات بسعر 3200 دج',
  keywords:
    'قبعات, casquette, الجزائر, caps, hats, fashion',
  authors: [{ name: 'ouss.aura' }],
  creator: 'ouss.aura',
  publisher: 'ouss.aura',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body
        className={`${cairo.className} bg-white min-h-screen text-gray-900`}
      >
        <AnnouncementBar />
        <Navbar />
        <main className="pt-[120px] pb-20">{children}</main>
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <div className="flex justify-center mb-4">
              <div className="relative w-32 h-16">
                <Image
                  src="/logo.png"
                  alt="ouss.aura"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">قبعات أنيقة للجميع</p>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-sm text-gray-400">
                تطوير بواسطة{' '}
                <a
                  href="https://www.sitedz.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors underline"
                >
                  www.sitedz.store
                </a>
              </p>
            </div>
          </div>
        </footer>
        <WhatsAppButton />
      </body>
    </html>
  )
}

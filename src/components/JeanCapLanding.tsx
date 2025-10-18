'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { calculateYalidinePrice } from '@/lib/yalidineApi'
import { ImageLightbox } from './ImageLightbox'

const caps = [
  { id: 1, name: 'قبعة جينز أسود وأبيض', image: '/cap/black white.jpg' },
  { id: 2, name: 'قبعة جينز بني وأبيض', image: '/cap/brown white.jpg' },
  { id: 3, name: 'قبعة جينز أبيض وأزرق', image: '/cap/white blue.jpg' },
  { id: 4, name: 'قبعة جينز رمادي', image: '/cap/grey b.jpg' },
  { id: 5, name: 'قبعة جينز أزرق', image: '/cap/blue.jpg' },
]

const wilayas = [
  { code: '16', name: 'Alger', zone: 'centre' },
  { code: '09', name: 'Blida', zone: 'centre' },
  { code: '35', name: 'Boumerdes', zone: 'centre' },
  { code: '42', name: 'Tipaza', zone: 'centre' },
  { code: '15', name: 'Tizi Ouzou', zone: 'centre' },
  { code: '06', name: 'Béjaïa', zone: 'centre' },
  { code: '10', name: 'Bouira', zone: 'centre' },
  { code: '26', name: 'Médéa', zone: 'centre' },
  { code: '31', name: 'Oran', zone: 'ouest' },
  { code: '27', name: 'Mostaganem', zone: 'ouest' },
  { code: '29', name: 'Mascara', zone: 'ouest' },
  { code: '13', name: 'Tlemcen', zone: 'ouest' },
  { code: '22', name: 'Sidi Bel Abbès', zone: 'ouest' },
  { code: '02', name: 'Chlef', zone: 'ouest' },
  { code: '14', name: 'Tiaret', zone: 'ouest' },
  { code: '48', name: 'Relizane', zone: 'ouest' },
  { code: '46', name: 'Ain Temouchent', zone: 'ouest' },
  { code: '25', name: 'Constantine', zone: 'est' },
  { code: '19', name: 'Sétif', zone: 'est' },
  { code: '05', name: 'Batna', zone: 'est' },
  { code: '23', name: 'Annaba', zone: 'est' },
  { code: '18', name: 'Jijel', zone: 'est' },
  { code: '21', name: 'Skikda', zone: 'est' },
  { code: '24', name: 'Guelma', zone: 'est' },
  { code: '43', name: 'Mila', zone: 'est' },
  { code: '04', name: 'Oum El Bouaghi', zone: 'est' },
  { code: '41', name: 'Souk Ahras', zone: 'est' },
  { code: '12', name: 'Tébessa', zone: 'est' },
  { code: '40', name: 'Khenchela', zone: 'est' },
  { code: '34', name: 'Bordj Bou Arreridj', zone: 'est' },
  { code: '28', name: 'M\'Sila', zone: 'est' },
  { code: '07', name: 'Biskra', zone: 'sud' },
  { code: '17', name: 'Djelfa', zone: 'sud' },
  { code: '03', name: 'Laghouat', zone: 'sud' },
  { code: '47', name: 'Ghardaïa', zone: 'sud' },
  { code: '30', name: 'Ouargla', zone: 'sud' },
  { code: '01', name: 'Adrar', zone: 'sud' },
  { code: '08', name: 'Béchar', zone: 'sud' },
  { code: '11', name: 'Tamanrasset', zone: 'sud' },
  { code: '32', name: 'El Bayadh', zone: 'sud' },
  { code: '33', name: 'Illizi', zone: 'sud' },
  { code: '36', name: 'El Tarf', zone: 'est' },
  { code: '37', name: 'Tindouf', zone: 'sud' },
  { code: '38', name: 'Tissemsilt', zone: 'ouest' },
  { code: '39', name: 'El Oued', zone: 'sud' },
  { code: '44', name: 'Ain Defla', zone: 'centre' },
  { code: '45', name: 'Naâma', zone: 'sud' },
  { code: '20', name: 'Saïda', zone: 'ouest' },
]

export const JeanCapLanding = (): JSX.Element => {
  const [selectedCap1, setSelectedCap1] = useState(caps[0])
  const [selectedCap2, setSelectedCap2] = useState(caps[1])
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    wilaya: '',
    commune: '',
    address: '',
  })
  const [deliveryPrice, setDeliveryPrice] = useState<number | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    if (formData.wilaya) {
      setIsCalculating(true)
      calculateYalidinePrice(formData.wilaya)
        .then(price => {
          setDeliveryPrice(price)
          setIsCalculating(false)
        })
        .catch(() => {
          setDeliveryPrice(null)
          setIsCalculating(false)
        })
    }
  }, [formData.wilaya])

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^(05|06|07)\d{8}$/
    return phoneRegex.test(phone)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = 'الرجاء إدخال الاسم'
    if (!formData.phone.trim()) {
      newErrors.phone = 'الرجاء إدخال رقم الهاتف'
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'رقم الهاتف يجب أن يبدأ بـ 05 أو 06 أو 07'
    }
    if (!formData.wilaya) newErrors.wilaya = 'الرجاء اختيار الولاية'
    if (!formData.commune.trim()) newErrors.commune = 'الرجاء إدخال البلدية'
    if (!formData.address.trim()) newErrors.address = 'الرجاء إدخال العنوان'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const total = 2500 + (deliveryPrice || 0)
    const message = `
━━━━━━━━━━━━━━━━━━━━
🎩 *طلب جديد - CASQUETTE JEAN*
━━━━━━━━━━━━━━━━━━━━

📍 *معلومات التوصيل:*
الولاية: ${formData.wilaya}
البلدية: ${formData.commune}
العنوان: ${formData.address}

━━━━━━━━━━━━━━━━━━━━
📦 *المنتجات:*
القبعة 1️⃣: ${selectedCap1.name}
القبعة 2️⃣: ${selectedCap2.name} ✅ مجانية

━━━━━━━━━━━━━━━━━━━━
👤 *معلومات العميل:*
الاسم: ${formData.name}
الهاتف: ${formData.phone}

━━━━━━━━━━━━━━━━━━━━
💰 *الفاتورة:*
السعر: 2500 دج
التوصيل: ${deliveryPrice || 0} دج
━━━━━━━━━━━━━━━━━━━━
*المجموع الكلي: ${total} دج*
━━━━━━━━━━━━━━━━━━━━

🎁 عرض خاص: اشتري 1 واحصل على 2!
    `.trim()

    const phoneNumber = '+213559629037'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const scrollToForm = () => {
    const formSection = document.getElementById('order-form')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden bg-[#000000]">
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-24">
              <Image
                src="/logo.png"
                alt="ouss.aura"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Headline */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400 chroma-text">
              🔥 عرض حصري 🔥
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 chroma-text-white">
              قبعة جينز بريميوم
            </h2>
            <button
              onClick={scrollToForm}
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg mb-4 transition-all hover:scale-105 cursor-pointer"
            >
              <p className="text-2xl md:text-4xl font-bold">
                اشتري 1 واحصل على 2!
              </p>
            </button>
            <p className="text-xl md:text-2xl text-gray-300">
              فقط <span className="text-yellow-400 font-bold text-3xl">2500 دج</span>
            </p>
            <p className="text-lg text-gray-400 mt-2">
              (السعر العادي: 5000 دج - وفّر 2500 دج!)
            </p>
          </div>

          {/* Caps Display */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
            {caps.map((cap) => (
              <div
                key={cap.id}
                className="bg-[#0a0a0a] rounded-lg overflow-hidden border-2 border-[#1a1a1a] hover:border-yellow-400 transition-all cursor-pointer group"
                onClick={() => setLightboxImage({ src: cap.image, alt: cap.name })}
              >
                <div className="relative aspect-square">
                  <Image
                    src={cap.image}
                    alt={cap.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                    <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                      🔍
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#0a0a0a] p-6 rounded-lg text-center border border-yellow-400/30">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-xl font-bold mb-2">جودة عالية</h3>
              <p className="text-gray-400">100% جينز أصلي</p>
            </div>
            <div className="bg-[#0a0a0a] p-6 rounded-lg text-center border border-yellow-400/30">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="text-xl font-bold mb-2">التوصيل لـ 58 ولاية</h3>
              <p className="text-gray-400">حتى باب منزلك</p>
            </div>
            <div className="bg-[#0a0a0a] p-6 rounded-lg text-center border border-yellow-400/30">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-bold mb-2">الدفع عند الاستلام</h3>
              <p className="text-gray-400">آمن 100%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="order-form" className="py-16 px-4 bg-[#000000]">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-[#0a0a0a] rounded-2xl p-8 border-2 border-yellow-400/50 shadow-2xl">
            <h3 className="text-3xl font-bold text-center mb-8 text-yellow-400">
              🎁 اطلب الآن!
            </h3>

            {/* Cap Selection */}
            <div className="mb-8 space-y-6">
              <div>
                <label className="block text-lg font-semibold mb-3">
                  اختر القبعة الأولى:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {caps.map((cap) => (
                    <div
                      key={cap.id}
                      className={`cursor-pointer rounded-lg overflow-hidden border-3 transition-all group ${
                        selectedCap1.id === cap.id
                          ? 'border-yellow-400 ring-2 ring-yellow-400'
                          : 'border-[#1a1a1a] hover:border-yellow-400/50'
                      }`}
                    >
                      <div 
                        className="relative aspect-square"
                        onClick={() => setSelectedCap1(cap)}
                      >
                        <Image src={cap.image} alt={cap.name} fill className="object-cover" />
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setLightboxImage({ src: cap.image, alt: cap.name })
                        }}
                        className="w-full bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white py-2 text-sm transition-colors"
                      >
                        🔍 عرض كامل
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold mb-3">
                  اختر القبعة الثانية (مجانية 🎁):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {caps.map((cap) => (
                    <div
                      key={cap.id}
                      className={`cursor-pointer rounded-lg overflow-hidden border-3 transition-all ${
                        selectedCap2.id === cap.id
                          ? 'border-yellow-400 ring-2 ring-yellow-400'
                          : 'border-[#1a1a1a] hover:border-yellow-400/50'
                      }`}
                    >
                      <div 
                        className="relative aspect-square"
                        onClick={() => setSelectedCap2(cap)}
                      >
                        <Image src={cap.image} alt={cap.name} fill className="object-cover" />
                        {selectedCap2.id === cap.id && (
                          <div className="absolute top-2 right-2">
                            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                              مجانية
                            </span>
                          </div>
                        )}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setLightboxImage({ src: cap.image, alt: cap.name })
                        }}
                        className="w-full bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white py-2 text-sm transition-colors"
                      >
                        🔍 عرض كامل
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value })
                    setErrors({ ...errors, name: '' })
                  }}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="رقم الهاتف (05/06/07)"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value })
                    setErrors({ ...errors, phone: '' })
                  }}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                  maxLength={10}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <select
                  value={formData.wilaya}
                  onChange={(e) => {
                    setFormData({ ...formData, wilaya: e.target.value })
                    setErrors({ ...errors, wilaya: '' })
                  }}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                >
                  <option value="">اختر الولاية</option>
                  {wilayas.map((w) => (
                    <option key={w.code} value={w.name}>
                      {w.code} - {w.name}
                    </option>
                  ))}
                </select>
                {errors.wilaya && <p className="text-red-500 text-sm mt-1">{errors.wilaya}</p>}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="البلدية"
                  value={formData.commune}
                  onChange={(e) => {
                    setFormData({ ...formData, commune: e.target.value })
                    setErrors({ ...errors, commune: '' })
                  }}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                />
                {errors.commune && <p className="text-red-500 text-sm mt-1">{errors.commune}</p>}
              </div>

              <div>
                <textarea
                  placeholder="العنوان الكامل"
                  value={formData.address}
                  onChange={(e) => {
                    setFormData({ ...formData, address: e.target.value })
                    setErrors({ ...errors, address: '' })
                  }}
                  rows={3}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>

              {/* Price Summary */}
              {deliveryPrice !== null && (
                <div className="bg-yellow-400/10 border-2 border-yellow-400 rounded-lg p-6">
                  <div className="flex justify-between text-lg mb-2">
                    <span>السعر (قبعتان):</span>
                    <span className="font-bold">2500 دج</span>
                  </div>
                  <div className="flex justify-between text-lg mb-3">
                    <span>التوصيل إلى {formData.wilaya}:</span>
                    <span className="font-bold text-yellow-400">
                      {isCalculating ? '...' : `${deliveryPrice} دج`}
                    </span>
                  </div>
                  <div className="border-t-2 border-yellow-400 pt-3 flex justify-between text-2xl font-bold">
                    <span>المجموع:</span>
                    <span className="text-yellow-400">{2500 + deliveryPrice} دج</span>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-4 px-6 rounded-lg transition-all text-xl shadow-lg hover:shadow-yellow-400/50"
              >
                🎁 اطلب الآن عبر الواتساب
              </button>
            </form>

            <p className="text-center text-gray-400 text-sm mt-6">
              ✅ الدفع عند الاستلام | 🔒 معاملة آمنة 100%
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000000] py-8 border-t border-[#1a1a1a]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="relative w-32 h-16">
              <Image src="/logo.png" alt="ouss.aura" fill className="object-contain" />
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 ouss.aura - جميع الحقوق محفوظة
          </p>
        </div>
      </footer>

      {/* Image Lightbox */}
      <ImageLightbox
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
        imageSrc={lightboxImage?.src || ''}
        imageAlt={lightboxImage?.alt || ''}
      />
    </div>
  )
}


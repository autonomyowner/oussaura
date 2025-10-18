'use client'

import { useState } from 'react'
import Image from 'next/image'

type OrderModalProps = {
  isOpen: boolean
  onClose: () => void
  productName: string
  productImage: string
}

const wilayas = [
  '01 - أدرار', '02 - الشلف', '03 - الأغواط', '04 - أم البواقي', '05 - باتنة',
  '06 - بجاية', '07 - بسكرة', '08 - بشار', '09 - البليدة', '10 - البويرة',
  '11 - تمنراست', '12 - تبسة', '13 - تلمسان', '14 - تيارت', '15 - تيزي وزو',
  '16 - الجزائر', '17 - الجلفة', '18 - جيجل', '19 - سطيف', '20 - سعيدة',
  '21 - سكيكدة', '22 - سيدي بلعباس', '23 - عنابة', '24 - قالمة', '25 - قسنطينة',
  '26 - المدية', '27 - مستغانم', '28 - المسيلة', '29 - معسكر', '30 - ورقلة',
  '31 - وهران', '32 - البيض', '33 - إليزي', '34 - برج بوعريريج', '35 - بومرداس',
  '36 - الطارف', '37 - تندوف', '38 - تيسمسيلت', '39 - الوادي', '40 - خنشلة',
  '41 - سوق أهراس', '42 - تيبازة', '43 - ميلة', '44 - عين الدفلى', '45 - النعامة',
  '46 - عين تموشنت', '47 - غرداية', '48 - غليزان', '49 - تيميمون', '50 - برج باجي مختار',
  '51 - أولاد جلال', '52 - بني عباس', '53 - عين صالح', '54 - عين قزام', '55 - تقرت',
  '56 - جانت', '57 - المغير', '58 - المنيعة'
]

export const OrderModal = ({ isOpen, onClose, productName, productImage }: OrderModalProps): JSX.Element | null => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    wilaya: '',
    baladia: '',
    deliveryType: 'home'
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  if (!isOpen) return null

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^(05|06|07)\d{8}$/
    return phoneRegex.test(phone)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'الرجاء إدخال الاسم'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'الرجاء إدخال رقم الهاتف'
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'رقم الهاتف يجب أن يبدأ بـ 05 أو 06 أو 07 ويتكون من 10 أرقام'
    }

    if (!formData.wilaya) {
      newErrors.wilaya = 'الرجاء اختيار الولاية'
    }

    if (!formData.baladia.trim()) {
      newErrors.baladia = 'الرجاء إدخال البلدية'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Create WhatsApp message
    const message = `
━━━━━━━━━━━━━━━━━━━━
🎩 *طلب جديد - OUSS.AURA*
━━━━━━━━━━━━━━━━━━━━

📍 *معلومات التوصيل:*
الولاية: ${formData.wilaya}
البلدية: ${formData.baladia}
نوع التوصيل: ${formData.deliveryType === 'home' ? '🏠 المنزل' : '🏢 المكتب'}

━━━━━━━━━━━━━━━━━━━━
📦 *المنتج:*
${productName}

━━━━━━━━━━━━━━━━━━━━
👤 *معلومات العميل:*
الاسم: ${formData.name}
الهاتف: ${formData.phone}

━━━━━━━━━━━━━━━━━━━━
💰 *السعر: 3200 دج*
━━━━━━━━━━━━━━━━━━━━
    `.trim()

    const phoneNumber = '+213559629037'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    onClose()
    setFormData({ name: '', phone: '', wilaya: '', baladia: '', deliveryType: 'home' })
    setErrors({})
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              إتمام الطلب
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
              type="button"
            >
              ×
            </button>
          </div>

          {/* Product Info */}
          <div className="flex items-center gap-4 mb-6 p-4 bg-blue-50 rounded-lg">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={productImage}
                alt={productName}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">{productName}</h3>
              <p className="text-xl font-bold text-blue-600">3200 دج</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                الاسم الكامل *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value })
                  setErrors({ ...errors, name: '' })
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="أدخل اسمك الكامل"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                رقم الهاتف *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value })
                  setErrors({ ...errors, phone: '' })
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="05XXXXXXXX"
                maxLength={10}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Wilaya */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                الولاية *
              </label>
              <select
                value={formData.wilaya}
                onChange={(e) => {
                  setFormData({ ...formData, wilaya: e.target.value })
                  setErrors({ ...errors, wilaya: '' })
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">اختر الولاية</option>
                {wilayas.map((wilaya) => (
                  <option key={wilaya} value={wilaya}>
                    {wilaya}
                  </option>
                ))}
              </select>
              {errors.wilaya && <p className="text-red-500 text-sm mt-1">{errors.wilaya}</p>}
            </div>

            {/* Baladia */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                البلدية *
              </label>
              <input
                type="text"
                value={formData.baladia}
                onChange={(e) => {
                  setFormData({ ...formData, baladia: e.target.value })
                  setErrors({ ...errors, baladia: '' })
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="أدخل اسم البلدية"
              />
              {errors.baladia && <p className="text-red-500 text-sm mt-1">{errors.baladia}</p>}
            </div>

            {/* Delivery Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                مكان التوصيل *
              </label>
              <div className="flex gap-4">
                <label className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 rounded-lg cursor-pointer transition-all hover:border-blue-500 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
                  <input
                    type="radio"
                    name="deliveryType"
                    value="home"
                    checked={formData.deliveryType === 'home'}
                    onChange={(e) => setFormData({ ...formData, deliveryType: e.target.value })}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="font-medium">🏠 إلى المنزل</span>
                </label>
                <label className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 rounded-lg cursor-pointer transition-all hover:border-blue-500 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
                  <input
                    type="radio"
                    name="deliveryType"
                    value="office"
                    checked={formData.deliveryType === 'office'}
                    onChange={(e) => setFormData({ ...formData, deliveryType: e.target.value })}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="font-medium">🏢 إلى المكتب</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg mt-6"
            >
              إرسال الطلب عبر الواتساب 📱
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}


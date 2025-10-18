'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { getAllWilayasSorted, getPricingByCode } from '@/lib/deliveryPricing'

type OrderModalProps = {
  isOpen: boolean
  onClose: () => void
  productName: string
  productImage: string
}

const wilayasData = getAllWilayasSorted()

export const OrderModal = ({ isOpen, onClose, productName, productImage }: OrderModalProps): JSX.Element | null => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    wilaya: '',
    baladia: '',
    deliveryType: 'home'
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [deliveryPrice, setDeliveryPrice] = useState<number>(0)
  const [deliveryTime, setDeliveryTime] = useState<string>('')

  useEffect(() => {
    if (formData.wilaya) {
      const wilayaCode = formData.wilaya.split(' - ')[0]
      const pricing = getPricingByCode(wilayaCode)
      if (pricing) {
        setDeliveryPrice(pricing.price)
        setDeliveryTime(pricing.deliveryTime)
      }
    } else {
      setDeliveryPrice(0)
      setDeliveryTime('')
    }
  }, [formData.wilaya])

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

    const productPrice = 3200
    const totalPrice = productPrice + deliveryPrice

    // Create WhatsApp message
    const message = `
━━━━━━━━━━━━━━━━━━━━
🎩 *طلب جديد - OUSS.AURA*
━━━━━━━━━━━━━━━━━━━━

📍 *معلومات التوصيل:*
الولاية: ${formData.wilaya}
البلدية: ${formData.baladia}
نوع التوصيل: ${formData.deliveryType === 'home' ? '🏠 المنزل' : '🏢 المكتب'}
⏱ وقت التوصيل: ${deliveryTime}

━━━━━━━━━━━━━━━━━━━━
📦 *المنتج:*
${productName}

━━━━━━━━━━━━━━━━━━━━
👤 *معلومات العميل:*
الاسم: ${formData.name}
الهاتف: ${formData.phone}

━━━━━━━━━━━━━━━━━━━━
💰 *الفاتورة:*
السعر: ${productPrice} دج
التوصيل: ${deliveryPrice} دج
━━━━━━━━━━━━━━━━━━━━
*المجموع الكلي: ${totalPrice} دج*
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
                {wilayasData.map((wilaya) => (
                  <option key={wilaya.wilayaCode} value={`${wilaya.wilayaCode} - ${wilaya.wilaya}`}>
                    {wilaya.wilayaCode} - {wilaya.wilaya}
                  </option>
                ))}
              </select>
              {errors.wilaya && <p className="text-red-500 text-sm mt-1">{errors.wilaya}</p>}
              {deliveryPrice > 0 && (
                <p className="text-sm text-gray-600 mt-2">
                  💰 تكلفة التوصيل: <span className="font-bold text-blue-600">{deliveryPrice} دج</span>
                  {deliveryTime && ` • ⏱ ${deliveryTime}`}
                </p>
              )}
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

            {/* Price Summary */}
            {formData.wilaya && (
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mt-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">ملخص الطلب</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-700">
                    <span>سعر المنتج:</span>
                    <span className="font-semibold">3200 دج</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>التوصيل إلى {formData.wilaya.split(' - ')[1]}:</span>
                    <span className="font-semibold text-blue-600">{deliveryPrice} دج</span>
                  </div>
                  {deliveryTime && (
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>وقت التوصيل المتوقع:</span>
                      <span>{deliveryTime}</span>
                    </div>
                  )}
                  <div className="border-t-2 border-blue-300 pt-2 mt-3 flex justify-between text-lg font-bold text-gray-900">
                    <span>المجموع الكلي:</span>
                    <span className="text-blue-600">{3200 + deliveryPrice} دج</span>
                  </div>
                </div>
              </div>
            )}

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


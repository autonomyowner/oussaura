'use client'

import { useState, useEffect } from 'react'

export const WhatsAppButton = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsAppClick = (): void => {
    const phoneNumber = '+213559629037'
    const message = `
━━━━━━━━━━━━━━━━━━━━
🎩 *استفسار - OUSS.AURA*
━━━━━━━━━━━━━━━━━━━━

السلام عليكم! 
أريد الاستفسار عن المنتجات المتوفرة 🛍️
    `.trim()
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div
      className={`fixed bottom-6 left-6 z-40 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <button
        onClick={handleWhatsAppClick}
        className="rounded-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl flex items-center gap-2 font-semibold"
        type="button"
        aria-label="تواصل عبر الواتساب"
      >
        <span>واتساب</span>
        <span>💬</span>
      </button>
    </div>
  )
}

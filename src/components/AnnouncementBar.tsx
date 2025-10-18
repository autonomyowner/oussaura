'use client'

export const AnnouncementBar = (): JSX.Element => {
  const message = 'مرحبا بكم التوصيل متوفر 58 ولاية الدفع عند الاستلام'
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-white overflow-hidden h-10 flex items-center shadow-md">
      <div className="animate-scroll-rtl flex items-center whitespace-nowrap">
        <span className="inline-block px-8 text-sm md:text-base font-semibold">
          ⭐ {message} ⭐
        </span>
        <span className="inline-block px-8 text-sm md:text-base font-semibold">
          ⭐ {message} ⭐
        </span>
        <span className="inline-block px-8 text-sm md:text-base font-semibold">
          ⭐ {message} ⭐
        </span>
        <span className="inline-block px-8 text-sm md:text-base font-semibold">
          ⭐ {message} ⭐
        </span>
      </div>
    </div>
  )
}

export default function ServicesPage(): JSX.Element {
  const services = [
    {
      title: 'توصيل سريع',
      description: 'نوفر خدمة التوصيل لجميع ولايات الجزائر',
      icon: '🚚',
    },
    {
      title: 'جودة عالية',
      description: 'جميع منتجاتنا ذات جودة عالية ومضمونة',
      icon: '⭐',
    },
    {
      title: 'أسعار منافسة',
      description: 'أفضل الأسعار في السوق الجزائري',
      icon: '💰',
    },
    {
      title: 'خدمة العملاء',
      description: 'نحن متواجدون دائماً للإجابة على استفساراتكم',
      icon: '💬',
    },
  ]

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            خدماتنا
          </h1>
          <p className="text-lg text-gray-600">
            نقدم أفضل الخدمات لعملائنا الكرام
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-5xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            تواصل معنا
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            للطلب أو الاستفسار، تواصل معنا عبر الواتساب
          </p>
          <a
            href="https://wa.me/213559629037"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
          >
            تواصل عبر الواتساب 📱
          </a>
        </div>
      </div>
    </div>
  )
}

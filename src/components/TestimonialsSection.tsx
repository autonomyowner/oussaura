'use client'

import { useState, useEffect, useRef } from 'react'
import ImagePreview from './ui/ImagePreview'

type Testimonial = {
  id: string
  name: string
  event: string
  content: string
  rating: string
  image: string
}

const testimonials: Testimonial[] = []

const useCountUpAnimation = (
  endValue: number,
  duration: number = 2000,
  isVisible: boolean,
): number => {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (currentTime: number): void => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * endValue))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [endValue, duration, isVisible])

  return count
}

export const TestimonialsSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [visibleTestimonials, setVisibleTestimonials] = useState<Set<string>>(
    new Set(),
  )
  const statsRef = useRef<HTMLDivElement>(null)
  const testimonialRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const projectsCount = useCountUpAnimation(300, 2000, isVisible)
  const satisfactionCount = useCountUpAnimation(100, 2000, isVisible)
  const supportCount = useCountUpAnimation(4, 1500, isVisible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    const testimonialObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const testimonialId = entry.target.getAttribute('data-testimonial-id')
            if (testimonialId) {
              setVisibleTestimonials((prev) => new Set(prev).add(testimonialId))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    Object.values(testimonialRefs.current).forEach((ref) => {
      if (ref) {
        testimonialObserver.observe(ref)
      }
    })

    return () => {
      testimonialObserver.disconnect()
    }
  }, [])

  const getAnimationClasses = (testimonialId: string): string => {
    const isTestimonialVisible = visibleTestimonials.has(testimonialId)

    if (testimonialId === '1') {
      // Allouani - from left to right
      return `transition-all duration-[1200ms] ease-out ${
        isTestimonialVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-16'
      }`
    }

    if (testimonialId === '2') {
      // elghella - from bottom to top
      return `transition-all duration-[1200ms] ease-out ${
        isTestimonialVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-16'
      }`
    }

    // Default animation for other testimonials
    return `transition-all duration-[1200ms] ease-out ${
      isTestimonialVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
    }`
  }

  return (
    <section className="border-y border-neutral-200 bg-white/80 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Témoignages clients
          </p>
          <h2 className="mt-5 text-4xl font-elegant font-semibold text-neutral-900 sm:text-5xl">
            La confiance de nos clients
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600">
            Chaque intervention est réalisée avec professionnalisme et réactivité pour assurer
            la sécurité et la satisfaction de nos clients à Paris et en Île-de-France.
          </p>
        </div>

        {testimonials.length > 0 && (
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                ref={(el) => {
                  testimonialRefs.current[testimonial.id] = el
                }}
                data-testimonial-id={testimonial.id}
                className={`flex h-full flex-col rounded-3xl border border-neutral-200 bg-white/90 p-8 shadow-sm hover:-translate-y-1 hover:shadow-md ${getAnimationClasses(testimonial.id)}`}
              >
                <div className="flex items-center gap-4">
                  <div className="overflow-hidden rounded-full border border-neutral-200">
                    <ImagePreview
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="object-cover cursor-pointer hover:opacity-80 transition-opacity rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
                      {testimonial.rating}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-neutral-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-neutral-500">{testimonial.event}</p>
                  </div>
                </div>

                <p className="mt-6 flex-1 text-sm leading-relaxed text-neutral-600">
                  {`"${testimonial.content}"`}
                </p>
              </article>
            ))}
          </div>
        )}

        <div
          ref={statsRef}
          className="mt-16 grid grid-cols-1 gap-6 text-center sm:grid-cols-3"
        >
          <div className="rounded-3xl border border-neutral-200 bg-white/70 px-6 py-8">
            <p className="text-4xl font-elegant font-semibold text-neutral-900">
              {projectsCount}+
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-neutral-500">
              Interventions réalisées
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white/70 px-6 py-8">
            <p className="text-4xl font-elegant font-semibold text-neutral-900">
              {satisfactionCount}%
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-neutral-500">
              Clients satisfaits
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white/70 px-6 py-8">
            <p className="text-4xl font-elegant font-semibold text-neutral-900">
              {supportCount}h
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-neutral-500">
              Délai moyen IDF
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

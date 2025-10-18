'use client'

import Image from 'next/image'
import { useEffect } from 'react'

type ImageLightboxProps = {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
}

export const ImageLightbox = ({ isOpen, onClose, imageSrc, imageAlt }: ImageLightboxProps): JSX.Element | null => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-yellow-400 text-4xl font-bold z-10 w-12 h-12 flex items-center justify-center rounded-full bg-gray-800/50 hover:bg-gray-800 transition-all"
        aria-label="إغلاق"
      >
        ×
      </button>

      <div
        className="relative w-full max-w-4xl aspect-square"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain"
          quality={100}
        />
      </div>

      <p className="absolute bottom-4 text-white text-sm bg-black/50 px-4 py-2 rounded-lg">
        {imageAlt}
      </p>
    </div>
  )
}


'use client'

import React, { useRef, useState, useEffect, Children } from 'react'

interface CarouselProps {
  children: React.ReactNode
  className?: string
  showDots?: boolean
  autoPlay?: boolean
}

export function Carousel({ children, className = '', showDots = true, autoPlay = false }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const childrenArray = Children.toArray(children)

  const goToSlide = (index: number) => {
    if (containerRef.current) {
      const slideWidth = containerRef.current.offsetWidth
      containerRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      })
    }
    setCurrentIndex(index)
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const slideWidth = container.offsetWidth
      const scrollLeft = container.scrollLeft
      const newIndex = Math.round(scrollLeft / slideWidth)
      setCurrentIndex(newIndex)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`relative ${className}`}>
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {childrenArray.map((child, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full snap-start"
            style={{ minWidth: '100%' }}
          >
            {child}
          </div>
        ))}
      </div>

      {showDots && childrenArray.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {childrenArray.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-[#65c6b6] scale-110'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      <style>
        {`
          .overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  )
}

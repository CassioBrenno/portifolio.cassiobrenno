'use client'

import { Testimonial } from '@/lib/types'
import { useEffect, useRef, useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import TestimonialCard from './TestimonialCard'

interface TestimonialSectionProps {
  testimonials: Testimonial[]
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const startX = useRef(0)
  const isDragging = useRef(false)
  const startAutoPlay = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6500)
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
    startAutoPlay()
  }

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    startAutoPlay()
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
    isDragging.current = true
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging.current) return

    const endX = e.changedTouches[0].clientX
    const diff = startX.current - endX

    if (diff > 50) {
      goToNext()
    } else if (diff < -50) {
      goToPrev()
    }

    isDragging.current = false
  }

  useEffect(() => {
    startAutoPlay()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  return (
    <section id="testimonials" className="my-14">
      <SectionHeading
        title="// Depoimentos"
        subtitle="Para reforçar a qualidade das minhas habilidades - veja o que usuários reais dos meus serviços têm a dizer sobre sua experiência."
      />

      <div 
        className="relative mt-12 h-[580px] w-full overflow-hidden touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative mx-auto h-full max-w-[1100px]">
          {testimonials.map((testimonial, index) => {
            const position = (index - activeIndex + testimonials.length) % testimonials.length

            let translateX = '0'
            let translateY = '0'
            let scale = 0.54
            let opacity = 0.4
            let zIndex = 10

            if (position === 0) {
              translateX = '0'
              translateY = '-35px'
              scale = 0.70
              opacity = 1
              zIndex = 30
            } else if (position === 1) {
              translateX = '38%'
              translateY = '25px'
              scale = 0.64
              opacity = 0.75
              zIndex = 20
            } else if (position === testimonials.length - 1) {
              translateX = '-38%'
              translateY = '25px'
              scale = 0.64
              opacity = 0.75
              zIndex = 20
            } else {
              translateX = position < testimonials.length / 2 ? '-88%' : '88%'
              translateY = '48px'
              scale = 0.48
              opacity = 0.22
              zIndex = 10
            }

            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2 w-full max-w-[355px] transition-all duration-700 ease-out select-none"
                style={{
                  transform: `translate(-50%, -50%) translateX(${translateX}) translateY(${translateY}) scale(${scale})`,
                  opacity,
                  zIndex,
                }}
              >
                <TestimonialCard
                  testimonial={testimonial}
                  isActive={position === 0}
                />
              </div>
            )
          })}
        </div>
        <button
          onClick={goToPrev}
          className="hidden lg:block absolute left-6 top-1/2 z-40 -translate-y-1/2 rounded-full bg-secondary/90 p-5 text-3xl shadow-2xl hover:bg-accent hover:text-white transition-all md:left-12"
        >
          ←
        </button>

        <button
          onClick={goToNext}
          className="hidden lg:block absolute right-6 top-1/2 z-40 -translate-y-1/2 rounded-full bg-secondary/90 p-5 text-3xl shadow-2xl hover:bg-accent hover:text-white transition-all md:right-12"
        >
          →
        </button>
      </div>
      <div className="mt-10 flex justify-center gap-3">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveIndex(idx)
              startAutoPlay()
            }}
            className={`h-3 rounded-full transition-all ${
              idx === activeIndex ? 'bg-accent w-9' : 'bg-neutral/40 w-3'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection
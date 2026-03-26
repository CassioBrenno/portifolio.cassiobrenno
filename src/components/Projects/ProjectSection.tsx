'use client'

import { Project } from '@/lib/types'
import { useEffect, useRef, useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectCard from './ProjectCard'

interface ProjectSectionProps {
  projects: Project[]
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current

    if (distance > 50) {
      goToNext()
    }

    if (distance < -50) {
      goToPrev()
    }
  }

  const startAutoPlay = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length)
    }, 10000)
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
    startAutoPlay()
  }

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
    startAutoPlay()
  }

  useEffect(() => {
    startAutoPlay()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [projects.length])

  return (
    <section id="projects" className="my-20">
      <SectionHeading title="// Projetos" />
      <div
        className="relative mt-16 w-full overflow-visible"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative mx-auto max-w-[920px] px-4 sm:px-6 min-h-[800px] lg:min-h-[580px]">
          {projects.map((project, index) => {
            const isActive = index === activeIndex
            return (
              <div
                key={`${project.priority}-${index}`}
                className={`absolute left-1/2 top-[50%] w-full
                -translate-x-1/2 -translate-y-1/2
                transition-all duration-700 ease-out ${
                  isActive
                    ? 'opacity-100 scale-100 z-30'
                    : 'opacity-0 scale-95 blur-sm z-10 pointer-events-none'
                }`}
              >
                <ProjectCard data={project} isFeatured={isActive} />
              </div>
            )
          })}
        </div>
        <button
          onClick={goToPrev}
          className="hidden lg:block absolute left-6 top-1/2 z-40 -translate-y-1/2 rounded-full bg-secondary/80 backdrop-blur-md p-5 text-3xl shadow-2xl hover:bg-accent hover:text-white transition-all"
        >
          ←
        </button>
        <button
          onClick={goToNext}
          className="hidden lg:block absolute right-6 top-1/2 z-40 -translate-y-1/2 rounded-full bg-secondary/80 backdrop-blur-md p-5 text-3xl shadow-2xl hover:bg-accent hover:text-white transition-all"
        >
          →
        </button>
      </div>
      <div className="mt-10 flex justify-center gap-3">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveIndex(idx)
              startAutoPlay()
            }}
            className={`h-3 rounded-full transition-all ${
              idx === activeIndex ? 'bg-accent w-10' : 'bg-neutral/40 w-3'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectSection
'use client'

import { Project } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { GithubIcon, PreviewIcon } from '@/utils/icons'

interface ProjectCardProps {
  data: Project
  isFeatured?: boolean
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data, isFeatured = false }) => {
  const {
    title,
    shortDescription,
    cover,
    livePreview,
    githubLink,
    type,
    siteAge,
    visitors,
    earned,
    githubStars,
    numberOfSales,
  } = data

  return (
    <div
      className={`group bg-white/5 backdrop-blur-xl border border-white/10
      rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]
      overflow-hidden transition-all duration-500
      lg:hover:scale-[1.02]
      lg:hover:border-white/20
      lg:hover:shadow-[0_30px_80px_rgba(0,0,0,0.55)]
      ${isFeatured ? 'ring-2 ring-accent/70 scale-[1.02]' : ''}`}
    >

      <div className="flex flex-col lg:flex-row h-[800px] lg:h-[550px]">
        
        <div className="relative lg:w-5/12 w-full h-[300px] lg:h-full bg-white flex items-center justify-center overflow-hidden">
          <Image
            src={cover}
            alt={title}
            fill
            className="object-contain transition-transform duration-700 lg:group-hover:scale-110"
            priority={isFeatured}
          />
        </div>

        <div className="lg:w-7/12 w-full flex flex-col h-full">
          
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 lg:p-10">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-primary-content">
                {title}
              </h3>

              {type && (
                <span
                  className={`px-3 py-1 sm:px-4 text-xs sm:text-sm font-medium rounded-2xl whitespace-nowrap ${
                    type.includes('New') || type.includes('🔥')
                      ? 'bg-tag text-black animate-blink'
                      : 'bg-white/10 text-accent'
                  }`}
                >
                  {type}
                </span>
              )}
            </div>

            <p className="mt-4 sm:mt-6 text-primary-content/80 leading-relaxed text-[15px] sm:text-[17px]">
              {shortDescription}
            </p>

            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4 text-sm">
              {visitors && (
                <div className="flex items-center gap-2">
                  <span className="text-accent">👥</span>
                  <span className="text-primary-content/70">{visitors}</span>
                </div>
              )}

              {earned && (
                <div className="flex items-center gap-2">
                  <span className="text-accent">💰</span>
                  <span className="text-primary-content/70">{earned}</span>
                </div>
              )}

              {siteAge && (
                <div className="flex items-center gap-2">
                  <span className="text-accent">🕒</span>
                  <span className="text-primary-content/70">{siteAge}</span>
                </div>
              )}

              {githubStars && (
                <div className="flex items-center gap-2">
                  <span className="text-accent">⭐</span>
                  <span className="text-primary-content/70">{githubStars}</span>
                </div>
              )}

              {numberOfSales && (
                <div className="flex items-center gap-2">
                  <span className="text-accent">📦</span>
                  <span className="text-primary-content/70">{numberOfSales}</span>
                </div>
              )}
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 pt-4 bg-transparent">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {livePreview && (
                <Link
                  href={livePreview}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2
                  bg-accent text-secondary font-medium py-3 sm:py-4 px-4 sm:px-6 rounded-2xl
                  transition-all hover:scale-[1.02] active:scale-[0.98]
                  shadow-lg hover:shadow-accent/40"
                >
                  <PreviewIcon className="w-5" />
                  Acessar Link
                </Link>
              )}

              {githubLink && (
                <Link
                  href={githubLink}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2
                  border border-border text-primary-content font-medium
                  py-3 sm:py-4 px-4 sm:px-6 rounded-2xl transition-all
                  hover:bg-white/5"
                >
                  <GithubIcon className="w-5" />
                  GitHub
                </Link>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProjectCard
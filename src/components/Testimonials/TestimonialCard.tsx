import { FC } from 'react'
import Image from 'next/image'

import { Testimonial } from '@/lib/types'
import { StarIcon } from '@/utils/icons'

interface TestimonialCardProps {
  testimonial: Testimonial
  isActive?: boolean
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  testimonial: { name, title, feedback, image, stars, flag },
  isActive = false,
}) => {
  return (
    <div
      className={`bg-secondary border-border flex flex-col items-center justify-between gap-6 rounded-3xl border p-6 text-center transition-all duration-500 ${
        isActive
          ? 'shadow-2xl shadow-accent/30 scale-[1.02] border-accent/50'
          : 'opacity-90'
      }`}
    >
      <p className="text-neutral leading-8 before:content-['“'] after:content-['”'] text-[15px] md:text-base">
        {feedback}
      </p>

      <div className="flex items-center justify-center gap-1.5">
        {Array.from({ length: 5 }, (_, idx) => (
          <StarIcon
            key={idx}
            className={`text-xl ${
              idx < stars ? 'text-tag fill-current' : 'text-neutral/30'
            }`}
          />
        ))}
      </div>

      <div
        className="mx-auto h-[68px] w-[68px] overflow-hidden rounded-full border-2 border-neutral/30 select-none"
        onContextMenu={(e) => e.preventDefault()}
      >
        <Image
          src={image}
          alt={name}
          width={68}
          height={68}
          draggable={false}
          className="h-full w-full object-cover pointer-events-none select-none"
        />
      </div>

      <div className="flex flex-col items-center">
        <p className="text-neutral text-lg font-semibold">{name}</p>

        <p className="text-neutral/60 text-sm flex items-center justify-center gap-1.5">
          {title}

          {flag && (
            <span
              className="select-none"
              onContextMenu={(e) => e.preventDefault()}
            >
              <Image
                src={flag}
                alt={`Flag of ${name}`}
                width={18}
                height={12}
                draggable={false}
                className="inline-block pointer-events-none select-none"
              />
            </span>
          )}
        </p>
      </div>
    </div>
  )
}

export default TestimonialCard
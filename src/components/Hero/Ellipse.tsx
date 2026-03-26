'use client'

import { forwardRef } from 'react'

type EllipseProps = React.SVGProps<SVGSVGElement>

const Ellipse = forwardRef<SVGSVGElement, EllipseProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width="412"
        height="413"
        viewBox="0 0 412 413"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <defs>
          <linearGradient 
            id="ellipseGradient" 
            x1="0%" y1="0%" x2="100%" y2="100%" 
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0%" stopColor="var(--p)" />
            <stop offset="4%" stopColor="var(--p)" />
            <stop offset="6%" stopColor="var(--s)" />
            <stop offset="9%" stopColor="var(--a)" />
            <stop offset="12%" stopColor="var(--n)" />
            <stop offset="16%" stopColor="var(--p)" />

            <stop offset="25%" stopColor="var(--p)" />
            <stop offset="29%" stopColor="var(--s)" />
            <stop offset="32%" stopColor="var(--a)" />
            <stop offset="35%" stopColor="var(--n)" />
            <stop offset="39%" stopColor="var(--p)" />

            <stop offset="48%" stopColor="var(--p)" />
            <stop offset="52%" stopColor="var(--s)" />
            <stop offset="55%" stopColor="var(--a)" />
            <stop offset="58%" stopColor="var(--n)" />
            <stop offset="62%" stopColor="var(--p)" />

            <stop offset="71%" stopColor="var(--p)" />
            <stop offset="75%" stopColor="var(--s)" />
            <stop offset="78%" stopColor="var(--a)" />
            <stop offset="81%" stopColor="var(--n)" />
            <stop offset="85%" stopColor="var(--p)" />

            <stop offset="94%" stopColor="var(--p)" />
            <stop offset="100%" stopColor="var(--p)" />
          </linearGradient>
        </defs>

        <circle
          cx="206"
          cy="206.401"
          r="204.5"
          stroke="url(#ellipseGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
)

Ellipse.displayName = 'Ellipse'

export default Ellipse
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
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0%" stopColor="var(--ellipse-main)" />
            <stop offset="12%" stopColor="var(--ellipse-main)" />

            <stop offset="18%" stopColor="var(--s)" />
            <stop offset="24%" stopColor="var(--a)" />
            <stop offset="30%" stopColor="var(--n)" />

            <stop offset="40%" stopColor="var(--ellipse-main)" />
            <stop offset="55%" stopColor="var(--ellipse-main)" />

            <stop offset="62%" stopColor="var(--s)" />
            <stop offset="70%" stopColor="var(--a)" />
            <stop offset="78%" stopColor="var(--n)" />

            <stop offset="88%" stopColor="var(--ellipse-main)" />
            <stop offset="100%" stopColor="var(--ellipse-main)" />
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
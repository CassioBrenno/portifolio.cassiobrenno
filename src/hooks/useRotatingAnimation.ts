import { useEffect, useRef } from 'react'

function useRotatingAnimation() {
  const ellipseRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const element = ellipseRef.current
    if (!element) return

    const animation = element.animate(
      [
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(-360deg)' },
      ],
      {
        duration: 10000,
        easing: 'linear',
        iterations: Infinity,
        direction: 'alternate',
      }
    )

    return () => animation.cancel()
  }, [])

  return ellipseRef
}

export default useRotatingAnimation
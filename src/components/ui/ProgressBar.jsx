import { useState, useEffect, useRef } from 'react'

function ProgressBar({
  value,
  max = 100,
  label,
  showPercentage = true,
  color = 'from-purple-500 to-gold',
  height = 'h-4',
  animated = true,
  delay = 0,
}) {
  const [progress, setProgress] = useState(0)
  const containerRef = useRef(null)
  const percentage = (value / max) * 100

  useEffect(() => {
    if (!animated) {
      setProgress(percentage)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animation with delay when visible
            const timer = setTimeout(() => {
              setProgress(percentage)
            }, delay)

            // Cleanup timer and unobserve
            observer.unobserve(entry.target)
            return () => clearTimeout(timer)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [percentage, animated, delay])

  return (
    <div className="w-full" ref={containerRef}>
      {label && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-fantasy text-white">{label}</span>
          {showPercentage && (
            <span className="text-xs font-pixel text-gold">{Math.round(progress)}%</span>
          )}
        </div>
      )}
      <div className={`bg-gray-900 ${height} rounded-full overflow-hidden border-2 border-gray-700`}>
        <div
          className={`h-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out relative`}
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar

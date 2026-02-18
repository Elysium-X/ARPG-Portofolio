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
    // Skip animation — set progress immediately
    if (!animated) {
      setProgress(percentage)
      return
    }

    // Store timer ID so we can clear it on unmount
    let timerId = null

    // Animate only when the bar scrolls into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Delayed fill animation (stagger via `delay` prop)
            timerId = setTimeout(() => {
              setProgress(percentage)
            }, delay)
            // Stop watching once triggered
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 } // Fire when 10% visible
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    // Cleanup on unmount: cancel pending timer + stop observer
    return () => {
      if (timerId) clearTimeout(timerId)
      observer.disconnect()
    }
  }, [percentage, animated, delay])

  return (
    <div className="w-full" ref={containerRef}>
      {/* Label and percentage */}
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-1">
          {label ? (
            <span className="text-sm font-fantasy text-white">{label}</span>
          ) : (
            <span />
          )}
          {showPercentage && (
            <span className="text-xs font-pixel text-gold">{Math.round(progress)}%</span>
          )}
        </div>
      )}
      {/* Progress bar container */}
      <div className={`bg-gray-900 ${height} rounded-full overflow-hidden border-2 border-gray-700`}>
        {/* Progress bar */}
        <div
          className={`h-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out relative`}
          style={{ width: `${progress}%` }}
        >
          {/* Shimmer animation */}
          <div className="pixel-bar-shimmer" />
        </div>
      </div>
    </div>
  )
}

export default ProgressBar

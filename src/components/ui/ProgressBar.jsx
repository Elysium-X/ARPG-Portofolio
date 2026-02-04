import { useState, useEffect } from 'react'

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
  const percentage = (value / max) * 100
  
  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setProgress(percentage)
      }, delay)
      return () => clearTimeout(timer)
    } else {
      setProgress(percentage)
    }
  }, [percentage, animated, delay])
  
  return (
    <div className="w-full">
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

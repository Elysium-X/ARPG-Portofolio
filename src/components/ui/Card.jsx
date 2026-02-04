function Card({ 
  children, 
  className = '', 
  variant = 'glass',
  padding = 'md',
  hoverable = false,
}) {
  const variants = {
    glass: 'glass-effect border-4 border-amber-900',
    parchment: 'parchment border-8 border-amber-900',
    dark: 'bg-gray-800 bg-opacity-70 border-2 border-gray-700',
  }
  
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }
  
  const hoverClass = hoverable ? 'hover:scale-105 transition-transform duration-300 cursor-pointer' : ''
  
  return (
    <div className={`rounded-2xl shadow-2xl ${variants[variant]} ${paddings[padding]} ${hoverClass} ${className}`}>
      {children}
    </div>
  )
}

export default Card

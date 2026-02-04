function Button({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  className = '',
  fullWidth = false,
}) {
  const baseStyles = 'font-fantasy font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
  
  const variants = {
    primary: 'bg-gradient-to-r from-gold to-yellow-600 text-gray-900 hover:from-yellow-500 hover:to-gold shadow-lg hover:shadow-xl',
    secondary: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-gray-900 glass-effect',
    danger: 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-500 hover:to-red-600 shadow-lg hover:shadow-xl',
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  }
  
  const widthClass = fullWidth ? 'w-full' : ''
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button

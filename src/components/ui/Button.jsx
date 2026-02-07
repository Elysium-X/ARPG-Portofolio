import { BUTTON_VARIANTS, BUTTON_SIZES, BUTTON_BASE_STYLES } from '../../utils/variants'

function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  fullWidth = false,
  ariaLabel,
}) {
  const widthClass = fullWidth ? 'w-full' : ''

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      className={`${BUTTON_BASE_STYLES} ${BUTTON_VARIANTS[variant]} ${BUTTON_SIZES[size]} ${widthClass} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button

import { BUTTON_VARIANTS, BUTTON_SIZES } from '../../utils/variants'

function ActionButton({
    href,
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    icon = null,
    download = false,
    newTab = true,
    ...props
}) {
    const variantStyles = BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.primary
    const sizeStyles = BUTTON_SIZES[size] || BUTTON_SIZES.md

    // Base styles including common button properties
    const baseStyles = 'inline-flex items-center gap-2 font-fantasy font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 active:scale-100'

    return (
        <a
            href={href}
            target={newTab ? '_blank' : undefined}
            rel={newTab ? 'noopener noreferrer' : undefined}
            download={download}
            className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
            {...props}
        >
            {icon && <span className="shrink-0">{icon}</span>}
            {children}
        </a>
    )
}

export default ActionButton

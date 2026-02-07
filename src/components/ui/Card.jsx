import { CARD_VARIANTS, CARD_PADDINGS, CARD_BASE_STYLES, CARD_HOVER_STYLES } from '../../utils/variants'

function Card({
  children,
  className = '',
  variant = 'glass',
  padding = 'md',
  hoverable = false,
}) {
  const hoverClass = hoverable ? CARD_HOVER_STYLES : ''

  return (
    <div className={`${CARD_BASE_STYLES} ${CARD_VARIANTS[variant]} ${CARD_PADDINGS[padding]} ${hoverClass} ${className}`}>
      {children}
    </div>
  )
}

export default Card

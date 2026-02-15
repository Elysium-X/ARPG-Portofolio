/**
 * Component variant styles
 * Centralized variant definitions for reusable styling across components
 */

// Button variant styles
export const BUTTON_VARIANTS = {
    primary: 'bg-gradient-to-r from-gold to-yellow-600 text-gray-900 hover:from-yellow-500 hover:to-gold shadow-lg hover:shadow-xl focus:ring-gold',
    github: 'bg-gray-800/60 text-gray-200 border-2 border-gray-600/40 hover:bg-gray-700/60 hover:text-white hover:border-gray-500/60 focus:ring-gray-500',
    amber: 'bg-gradient-to-r from-amber-700 via-yellow-700 to-amber-700 text-amber-100 border-2 border-amber-900/40 hover:from-yellow-600 hover:via-amber-600 hover:to-yellow-600 hover:shadow-[0_0_1.25rem_rgba(217,169,78,0.4)] focus:ring-amber-500',
}

// Button size styles
export const BUTTON_SIZES = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
}

// Button base styles - common to all variants
export const BUTTON_BASE_STYLES = 'font-fantasy font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900'

// Card variant styles
export const CARD_VARIANTS = {
    glass: 'glass-effect border-4 border-amber-900',
    parchment: 'parchment border-8 border-amber-900',
}

// Card padding sizes
export const CARD_PADDINGS = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
}

// Card base styles - common to all variants
export const CARD_BASE_STYLES = 'rounded-2xl shadow-2xl'

// Card hover effect
export const CARD_HOVER_STYLES = 'hover:scale-105 transition-transform duration-300 cursor-pointer'

/**
 * Component variant styles
 * Centralized variant definitions for reusable styling across components
 */

// Button variant styles
export const BUTTON_VARIANTS = {
    primary: 'bg-gradient-to-r from-gold to-yellow-600 text-gray-900 hover:from-yellow-500 hover:to-gold shadow-lg hover:shadow-xl focus:ring-gold',
    secondary: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 shadow-lg hover:shadow-xl focus:ring-purple-500',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-gray-900 glass-effect focus:ring-gold',
    danger: 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-500 hover:to-red-600 shadow-lg hover:shadow-xl focus:ring-red-500',
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
    dark: 'bg-gray-800 bg-opacity-70 border-2 border-gray-700',
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

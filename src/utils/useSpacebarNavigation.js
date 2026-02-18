import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

/**
 * Custom hook for spacebar navigation between pages.
 * Navigates to the next page in sequence when spacebar is pressed.
 *
 * @param {{ enabled?: boolean }} options
 *   - enabled: set to `false` to disable the hook entirely (default: true)
 */
export function useSpacebarNavigation({ enabled = true } = {}) {
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (!enabled) return

        const handleKeyDown = (e) => {
            const el = document.activeElement

            // Respect default browser behavior inside interactive elements
            if (
                el &&
                (
                    ['INPUT', 'TEXTAREA', 'BUTTON', 'SELECT'].includes(el.tagName) ||
                    el.isContentEditable
                )
            ) {
                return
            }

            if (e.code === 'Space') {
                const paths = ['/', '/projects', '/contact']
                const currentIndex = paths.indexOf(location.pathname)

                // Only navigate (and prevent default scroll) when we have a next page
                if (currentIndex !== -1 && currentIndex < paths.length - 1) {
                    e.preventDefault()
                    navigate(paths[currentIndex + 1])
                }
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [location, navigate, enabled])
}

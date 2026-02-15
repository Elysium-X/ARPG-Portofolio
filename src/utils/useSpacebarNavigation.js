import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

/**
 * Custom hook for spacebar navigation between pages
 * Navigates to the next page in sequence when spacebar is pressed
 * @returns {void}
 */
export function useSpacebarNavigation() {
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const handleKeyDown = (e) => {
            // Ignore if user is typing in an input/textarea
            if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
                return
            }

            if (e.code === 'Space') {
                e.preventDefault() // Prevent default scrolling behavior

                const paths = ['/', '/projects', '/contact']
                const currentIndex = paths.indexOf(location.pathname)

                // Navigate to next page if valid and not the last page
                if (currentIndex !== -1 && currentIndex < paths.length - 1) {
                    navigate(paths[currentIndex + 1])
                }
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [location, navigate])
}

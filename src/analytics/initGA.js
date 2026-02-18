/**
 * Google Analytics initialization.
 *
 * Dynamically injects the gtag.js script in production only.
 * - Skips entirely in development mode.
 * - Warns if VITE_GA_ID is missing in production.
 * - Safe to call multiple times (idempotent).
 */

let initialized = false

export function initGA() {
    // Already initialized — bail
    if (initialized) return

    const gaId = import.meta.env.VITE_GA_ID

    // ── Development: skip GA entirely ──
    if (import.meta.env.DEV) {
        return
    }

    // ── Production: require GA ID ──
    if (!gaId) {
        console.warn(
            '[Analytics] VITE_GA_ID is not defined. Google Analytics will not load. ' +
            'Set VITE_GA_ID in your .env file for production tracking.'
        )
        return
    }

    // ── Inject gtag.js script ──
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    script.async = true
    document.head.appendChild(script)

    // ── Configure dataLayer ──
    window.dataLayer = window.dataLayer || []
    function gtag() {
        window.dataLayer.push(arguments)
    }
    window.gtag = gtag

    gtag('js', new Date())
    gtag('config', gaId)

    initialized = true
}

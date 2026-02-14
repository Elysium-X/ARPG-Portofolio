import emailjs from '@emailjs/browser'

/**
 * EmailJS configuration — reads from Vite env vars.
 * Never hard-code credentials here; they belong in .env
 */
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

/**
 * Validate that all required EmailJS env vars are present.
 * Throws a descriptive error without exposing credential values.
 */
const validateConfig = () => {
    const missing = []
    if (!SERVICE_ID) missing.push('VITE_EMAILJS_SERVICE_ID')
    if (!TEMPLATE_ID) missing.push('VITE_EMAILJS_TEMPLATE_ID')
    if (!PUBLIC_KEY) missing.push('VITE_EMAILJS_PUBLIC_KEY')

    if (missing.length > 0) {
        throw new Error(
            `EmailJS config error: missing env var(s): ${missing.join(', ')}. ` +
            'Check your .env file.'
        )
    }
}

/**
 * Send a contact-form email via EmailJS.
 *
 * @param {{ name: string, email: string, message: string }} formData
 * @returns {Promise<import('@emailjs/browser').EmailJSResponseStatus>}
 */
export const sendContactEmail = async (formData) => {
    validateConfig()

    const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
    }

    return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
}

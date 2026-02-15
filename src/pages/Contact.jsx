import { useState } from 'react'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Textarea from '../components/ui/Textarea'
import Button from '../components/ui/Button'
import ActionButton from '../components/ui/ActionButton'
import ScrollReveal from '../components/ui/ScrollReveal'
import gitIcon from '../assets/socials/git.webp'
import linkedInIcon from '../assets/socials/linkedin.webp'
import mailIcon from '../assets/socials/mail.webp'
import scrollIcon from '../assets/yscroll.png'
import { validateContactForm } from '../utils/validation'
import { sendContactEmail } from '../services/emailService'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = validateContactForm(formData)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitSuccess(false)
    setErrors({})

    try {
      await sendContactEmail(formData)

      setSubmitSuccess(true)
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)

    } catch {
      setErrors({ submit: 'Failed to send quest message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8 relative z-10">
        <ScrollReveal>
          <div className="group mb-6">
            <Card variant="parchment" className="relative overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_1.25rem_3.75rem_-0.9375rem_rgba(217,169,78,0.3)]">

              {/* Parchment texture overlay */}
              <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(139,90,43,0.15)_100%)]" />

              <div className="relative z-10 py-6 px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">

                  {/* Scroll icon — 256x256, on the left */}
                  <img
                    src={scrollIcon}
                    alt=""
                    aria-hidden="true"
                    className="w-70 h-70 object-contain shrink-0 drop-shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Text + button centered */}
                  <div className="flex flex-col items-center text-center max-w-lg">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-fantasy font-bold text-gray-900 mb-3 leading-tight tracking-wide drop-shadow-sm">
                      Send me a Quest Message!
                    </h1>
                    <p className="text-base md:text-xl text-amber-800/90 font-fantasy leading-relaxed mb-5">
                      Ready to embark on a new adventure together? Get in touch
                    </p>

                    {/* Download CV CTA */}
                    <ActionButton
                      href="/cv.pdf"
                      download
                      variant="amber"
                      className="px-6 py-2.5 text-base"
                      icon={
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      }
                    >
                      Download CV
                    </ActionButton>
                  </div>

                </div>
              </div>
            </Card>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <Card padding="lg">
            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
              {submitSuccess && (
                <div
                  className="bg-green-500 bg-opacity-20 border-2 border-green-500 rounded-lg p-4 mb-4 animate-pulse"
                  role="alert"
                  aria-live="polite"
                >
                  <p className="text-green-100 font-fantasy text-center">
                    ✨ Quest message sent successfully! I'll respond to your summons soon! ✨
                  </p>
                </div>
              )}

              {errors.submit && (
                <div
                  className="bg-red-500 bg-opacity-20 border-2 border-red-500 rounded-lg p-4 mb-4"
                  role="alert"
                  aria-live="assertive"
                >
                  <p className="text-sm text-white-100 font-pixel text-center">{errors.submit}</p>
                </div>
              )}

              <Input
                label="Your Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your hero name..."
                error={errors.name}
                required
              />

              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@realm.com"
                error={errors.email}
                required
              />

              <Textarea
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your quest or project idea..."
                error={errors.message}
                required
                rows={6}
              />

              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="min-w-[12.5rem]"
                  ariaLabel={isSubmitting ? "Sending message" : "Send quest message"}
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block animate-spin mr-2">⚔️</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="mr-2">🚀</span>
                      Send Quest
                    </>
                  )}
                </Button>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t-2 border-gray-700">
              <h3 className="text-xl font-fantasy font-bold text-gold mb-4 text-center">
                🗺️ Other Ways to Reach Me
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg transform hover:scale-105 transition-all duration-500 ease-in-out">
                  <img src={gitIcon} alt="GitHub" className="w-16 h-16 object-contain mx-auto mb-2" loading="lazy" decoding="async" />
                  <p className="text-white font-fantasy text-sm">GitHub</p>
                  <p className="text-gold text-xs">@Elysium-X</p>
                </div>
                <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg transform hover:scale-105 transition-all duration-500 ease-in-out">
                  <img src={linkedInIcon} alt="LinkedIn" className="w-16 h-16 object-contain mx-auto mb-2" loading="lazy" decoding="async" />
                  <p className="text-white font-fantasy text-sm">LinkedIn</p>
                  <p className="text-gold text-xs break-all">www.linkedin.com/in/yousseftarekk12</p>
                </div>
                <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg transform hover:scale-105 transition-all duration-500 ease-in-out">
                  <img src={mailIcon} alt="Email" className="w-16 h-16 object-contain mx-auto mb-2" loading="lazy" decoding="async" />
                  <p className="text-white font-fantasy text-sm">Email</p>
                  <p className="text-gold text-xs">yousseftarek98@gmail.com</p>
                </div>
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </>
  )
}

export default Contact

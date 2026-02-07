import { useState } from 'react'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Textarea from '../components/ui/Textarea'
import Button from '../components/ui/Button'
import BackgroundVideo from '../components/ui/BackgroundVideo'
import bgPoster from '../assets/dropback.webp'
import bgVideoWebm from '../assets/soldier.webm'
import gitIcon from '../assets/socials/git.webp'
import linkedInIcon from '../assets/socials/linkedin.webp'
import mailIcon from '../assets/socials/mail.webp'
import { validateContactForm } from '../utils/validation'

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

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Form submitted:', formData)

      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        message: '',
      })

      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)

    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors({ submit: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <BackgroundVideo
        posterSrc={bgPoster}
        webmSrc={bgVideoWebm}
        overlayOpacity={0.6}
      />
      <div className="page-enter stagger-children max-w-3xl mx-auto">
        <Card variant="parchment" padding="lg" className="mb-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-fantasy font-bold text-gray-900 mb-4">
              📬 Send me a Quest Message
            </h1>
            <p className="text-lg text-amber-800 font-fantasy">
              Ready to embark on a new adventure together? Drop me a message!
            </p>
          </div>
        </Card>

        <Card padding="lg">
          <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
            {submitSuccess && (
              <div
                className="bg-green-500 bg-opacity-20 border-2 border-green-500 rounded-lg p-4 mb-4 animate-pulse"
                role="alert"
                aria-live="polite"
              >
                <p className="text-green-300 font-fantasy text-center">
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
                <p className="text-red-300 font-fantasy text-center">{errors.submit}</p>
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
                className="min-w-[200px]"
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
                    Send Message
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
                <p className="text-gold text-xs">@yousseftarek</p>
              </div>
              <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg transform hover:scale-105 transition-all duration-500 ease-in-out">
                <img src={linkedInIcon} alt="LinkedIn" className="w-16 h-16 object-contain mx-auto mb-2" loading="lazy" decoding="async" />
                <p className="text-white font-fantasy text-sm">LinkedIn</p>
                <p className="text-gold text-xs">@yousseftarek</p>
              </div>
              <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg transform hover:scale-105 transition-all duration-500 ease-in-out">
                <img src={mailIcon} alt="Email" className="w-16 h-16 object-contain mx-auto mb-2" loading="lazy" decoding="async" />
                <p className="text-white font-fantasy text-sm">Email</p>
                <p className="text-gold text-xs">youssef@realm.com</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Contact

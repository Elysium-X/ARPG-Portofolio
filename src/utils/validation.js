/**
 * Validate email format
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate name (min 2 characters)
 */
export const isValidName = (name) => {
  return name.trim().length >= 2
}

/**
 * Validate message (min 10 characters)
 */
export const isValidMessage = (message) => {
  return message.trim().length >= 10
}

/**
 * Validate entire contact form
 */
export const validateContactForm = (formData) => {
  const errors = {}
  
  // Name validation
  if (!formData.name.trim()) {
    errors.name = 'Name is required'
  } else if (!isValidName(formData.name)) {
    errors.name = 'Name must be at least 2 characters'
  }
  
  // Email validation
  if (!formData.email.trim()) {
    errors.email = 'Email is required'
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address'
  }
  
  // Message validation
  if (!formData.message.trim()) {
    errors.message = 'Message is required'
  } else if (!isValidMessage(formData.message)) {
    errors.message = 'Message must be at least 10 characters'
  }
  
  return errors
}

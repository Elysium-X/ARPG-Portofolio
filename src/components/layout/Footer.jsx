import gitIcon from '../../assets/socials/git.webp'
import linkedInIcon from '../../assets/socials/linkedin.webp'
import mailIcon from '../../assets/socials/mail.webp'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass-effect border-4 border-amber-900 rounded-2xl mt-6 p-6">
      <div className="text-center">
        <p className="text-gold font-pixel text-sm mb-2">
          © {currentYear} Youssef Tarek. All rights reserved.
        </p>
        <p className="text-gold font-pixel text-xs animate-pulse">
          [ PRESS SPACE TO CONTINUE YOUR JOURNEY... ]
        </p>
        <div className="flex items-center justify-center space-x-6 mt-4">
          <a
            href="https://github.com/Elysium-X"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-yellow-500 transition-all duration-500 ease-in-out transform hover:scale-110"
            aria-label="GitHub"
          >
            <img src={gitIcon} alt="GitHub" className="w-16 h-16 object-contain" loading="lazy" decoding="async" />
          </a>
          <a
            href="https://www.linkedin.com/in/yousseftarekk12/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-yellow-500 transition-all duration-500 ease-in-out transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <img src={linkedInIcon} alt="LinkedIn" className="w-16 h-16 object-contain" loading="lazy" decoding="async" />
          </a>
          <a
            href="mailto:yousseftarek98@gmail.com"
            className="text-gold hover:text-yellow-500 transition-all duration-500 ease-in-out transform hover:scale-110"
            aria-label="Email"
          >
            <img src={mailIcon} alt="Email" className="w-16 h-16 object-contain" loading="lazy" decoding="async" />
          </a>
        </div>
      </div>
    </footer>
  )
}


export default Footer

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import travellerImg from '../../assets/traveller.webp'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/projects', label: 'Projects', icon: '🎖️' },
    { path: '/contact', label: 'Contact', icon: '✉️' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="glass-effect border-4 border-amber-900 rounded-2xl mb-6 sticky top-4 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center space-x-2 hover:scale-105 transition-all duration-500 ease-in-out">
            <div className="w-10 h-10 rounded-full flex items-center justify-center border-4 border-amber-700 shadow-md overflow-hidden">
              <img
                src={travellerImg}
                alt="Youssef Tarek"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-gold font-fantasy font-bold text-xl">
              Youssef Tarek
            </span>
          </Link>

          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => window.scrollTo(0, 0)}
                className={`px-4 py-2 rounded-lg font-fantasy font-semibold transition-all duration-500 ease-in-out ${isActive(link.path)
                  ? 'bg-gold text-gray-900 shadow-lg'
                  : 'text-gold hover:bg-amber-900 hover:bg-opacity-30'
                  }`}
              >
                <span className="mr-2">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gold hover:text-yellow-500 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => {
                  setIsOpen(false)
                  window.scrollTo(0, 0)
                }}
                className={`block px-4 py-2 rounded-lg font-fantasy font-semibold transition-all duration-300 mb-2 ${isActive(link.path)
                  ? 'bg-gold text-gray-900'
                  : 'text-gold hover:bg-amber-900 hover:bg-opacity-30'
                  }`}
              >
                <span className="mr-2">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'react-icons/fa'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Calculator', href: '/calculator' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-primary text-secondary sticky top-0 z-50 shadow-elevation-2">
      <div className="container-max">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl font-bold text-accent">
            JBD Starr
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex gap-4">
            <Link to="/calculator" className="btn-primary">
              Get Estimate
            </Link>
            <Link to="/customer-portal" className="text-accent hover:text-accent-light">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden bg-primary-dark px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block hover:text-accent transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-neutral">
              <Link
                to="/calculator"
                className="block btn-primary text-center mb-2"
                onClick={() => setIsOpen(false)}
              >
                Get Estimate
              </Link>
              <Link
                to="/customer-portal"
                className="block text-center text-accent hover:text-accent-light"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const PHONE = import.meta.env.VITE_PHONE || '647-446-8418'
const EMAIL = import.meta.env.VITE_EMAIL || 'jbdstarr@outlook.com'
const WHATSAPP_URL = import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/message/5JP5APSEA4PGI1'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-secondary">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-accent font-serif text-2xl font-bold mb-4">
              JBD Starr
            </h3>
            <p className="text-text-light mb-4">
              Premium renovation and construction services in the GTA
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-accent hover:text-accent-light transition-colors" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-accent hover:text-accent-light transition-colors" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-accent hover:text-accent-light transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-light transition-colors" aria-label="WhatsApp">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Bathroom Remodeling
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Basement Renovations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Kitchen Renovations
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/projects" className="hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-accent transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/service-areas" className="hover:text-accent transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <FaPhone size={16} />
                <a href={`tel:${PHONE}`} className="hover:text-accent transition-colors">
                  {PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope size={16} />
                <a href={`mailto:${EMAIL}`} className="hover:text-accent transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp size={16} />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="text-text-light">Serving GTA & Surrounding Areas</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-light">
          <p>&copy; {currentYear} JBD Starr Paint and Home Renovations Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

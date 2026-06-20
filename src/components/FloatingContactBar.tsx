import { FaPhone, FaEnvelope, FaWhatsapp, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const PHONE = import.meta.env.VITE_PHONE || '647-446-8418'
const EMAIL = import.meta.env.VITE_EMAIL || 'jbdstarr@outlook.com'
const WHATSAPP_URL = import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/message/5JP5APSEA4PGI1'

export default function FloatingContactBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Contact Bar */}
      <div className={`fixed bottom-4 right-4 z-40 transition-all duration-300 transform ${
        isOpen ? 'scale-100' : 'scale-75 opacity-75'
      }`}>
        {/* Menu Items */}
        <div className={`flex flex-col gap-3 mb-4 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {/* WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors duration-300 hover:scale-110"
            aria-label="Contact via WhatsApp"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>

          {/* Phone */}
          <a
            href={`tel:${PHONE}`}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-colors duration-300 hover:scale-110"
            aria-label="Call us"
            title="Call now"
          >
            <FaPhone size={24} />
          </a>

          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 transition-colors duration-300 hover:scale-110"
            aria-label="Send email"
            title="Send email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-accent text-text-primary shadow-lg hover:bg-accent-dark transition-all duration-300 hover:scale-110"
          aria-label="Toggle contact menu"
          title="Contact us"
        >
          {isOpen ? <FaTimes size={24} /> : <FaPhone size={24} />}
        </button>
      </div>
    </>
  )
}

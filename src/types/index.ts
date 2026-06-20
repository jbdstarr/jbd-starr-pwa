export interface Service {
  id: number
  title: string
  description: string
  icon: string
  href: string
}

export interface Review {
  id: number
  author: string
  rating: number
  text: string
  service: string
  location: string
}

export interface TrustIndicator {
  title: string
  description: string
}

export interface FAQItem {
  id: number
  question: string
  answer: string
}

export interface Project {
  id: number
  title: string
  category: string
  image: string
  beforeImage?: string
  afterImage?: string
  description: string
  location: string
}

export interface Quote {
  id: string
  clientName: string
  clientEmail: string
  clientPhone: string
  serviceType: string
  estimatedCost: number
  status: 'pending' | 'sent' | 'accepted' | 'declined'
  createdAt: Date
}

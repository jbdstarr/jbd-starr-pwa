# JBD Starr PWA - Production-Ready Progressive Web App

## Overview

A modern, fully-featured Progressive Web App (PWA) for JBD Starr Paint and Home Renovations Inc. Built with React, TypeScript, Tailwind CSS, and Supabase for lead generation, project management, and customer engagement.

## ✨ Features

### 🎨 Public Website
- Hero section with strong CTAs
- Services showcase (12 specialized services)
- Project gallery with before/after sliders
- Customer testimonials and reviews
- Service area landing pages (7 locations)
- FAQ sections
- Blog/Resource center
- SEO optimized pages

### 📱 PWA Capabilities
- Installable on all devices (Android, iOS, tablets, desktop)
- Offline functionality
- Push notifications
- Add-to-home-screen support
- Lightning-fast performance
- WCAG accessibility compliant

### 💼 Lead Generation
- Instant quote calculators (Bathroom, Basement, Painting, Flooring)
- Lead capture forms with file uploads
- Request quote page
- Click-to-call, click-to-email, and WhatsApp chat
- Lead tracking dashboard
- Floating contact bar for easy access

### 🤖 AI Assistant
- JBD Starr Renovation Assistant chatbot
- Answers renovation questions
- Recommends services
- Schedules consultations

### 👥 Customer Portal
- Customer login/authentication
- View quotes and invoices
- Track project status
- Upload additional files
- Message project manager
- Appointment reminders

### 🛠 Admin Dashboard
- Lead management
- Project management
- Gallery management
- Review management
- Team member assignment
- Analytics and metrics

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **State Management**: Zustand, React Query
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **PWA**: Vite PWA Plugin, Workbox
- **Forms**: React Hook Form, Zod validation
- **UI**: Framer Motion, React Icons, Swiper, React Hot Toast
- **Build**: Vite
- **Hosting**: Vercel / AWS / Cloudflare

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+
- Supabase account

### Installation

```bash
# Clone repository
git clone https://github.com/jbdstarr/jbd-starr-pwa.git
cd jbd-starr-pwa

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── lib/                # Utilities and helpers
├── hooks/              # Custom React hooks
├── store/              # Zustand state management
├── types/              # TypeScript types
├── utils/              # Helper functions
├── services/           # API services
├── constants/          # Constants and config
└── index.css           # Global styles
```

## 🎨 Color Palette

- **Primary**: #003366 (Deep Navy Blue)
- **Accent**: #D4A574 (Warm Gold/Yellow)
- **Neutral**: #F5F5F5 (Light Gray/Silver)
- **Secondary**: #FFFFFF (White)
- **Text**: #001F3D (Dark Navy)

## 📞 Contact Information

- **Phone**: 647-446-8418
- **Email**: jbdstarr@outlook.com
- **WhatsApp**: https://wa.me/message/5JP5APSEA4PGI1
- **Website**: https://www.jbdstarr.ca

## ⚡ Performance Metrics

- Core Web Vitals: All green
- Lighthouse Score: 95+
- Page Load Time: <2s
- Time to Interactive: <3s
- Offline Support: Full functionality

## 🐳 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🔐 Environment Variables

See `.env.example` for all required variables.

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:
1. Create a feature branch
2. Commit changes
3. Submit a pull request

## 📄 License

Copyright © 2024 JBD Starr Paint and Home Renovations Inc. All rights reserved.

## 📧 Support

For support, email jbdstarr@outlook.com, call 647-446-8418, or chat via WhatsApp.

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaStar, FaCheck } from 'react-icons/fa'
import { heroSection, services, trustIndicators, reviews, faqData } from '@/constants/content'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-dark text-secondary min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 -right-4 w-72 h-72 bg-accent-light rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container-max section-padding relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              {heroSection.headline}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-neutral mb-8 leading-relaxed"
            >
              {heroSection.subheadline}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/calculator" className="btn-primary text-center">
                {heroSection.cta1}
              </Link>
              <Link to="/projects" className="btn-outline text-center">
                {heroSection.cta2}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-accent py-12 md:py-16">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {trustIndicators.map((indicator) => (
              <motion.div
                key={indicator.title}
                variants={fadeInUp}
                className="bg-white rounded-lg p-6 text-center shadow-card"
              >
                <h3 className="font-semibold text-lg text-primary mb-2">{indicator.title}</h3>
                <p className="text-text-secondary">{indicator.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-bg-light">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="section-title">
              Our Services
            </motion.h2>
            <motion.p variants={fadeInUp} className="section-subtitle">
              From bathroom remodels to full home renovations, we deliver excellence
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={fadeInUp}>
                <Link to={service.href}>
                  <div className="card h-full cursor-pointer group">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn-secondary">
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="section-title">
              Featured Projects
            </motion.h2>
            <motion.p variants={fadeInUp} className="section-subtitle">
              See our latest transformations
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div key={i} variants={fadeInUp}>
                <div className="card cursor-pointer overflow-hidden group h-96">
                  <div className="w-full h-64 bg-gradient-to-br from-primary to-primary-light group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-6xl">
                    🏠
                  </div>
                  <h3 className="text-lg font-semibold text-primary mt-4 group-hover:text-accent transition-colors">
                    Project #{i}
                  </h3>
                  <p className="text-text-secondary text-sm">Professional renovation completed</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/projects" className="btn-primary">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section-padding bg-bg-light">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="section-title">
              What Clients Say
            </motion.h2>
            <motion.p variants={fadeInUp} className="section-subtitle">
              Real testimonials from satisfied customers
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {reviews.map((review) => (
              <motion.div key={review.id} variants={fadeInUp} className="card">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-accent" size={16} />
                  ))}
                </div>
                <p className="text-text-secondary mb-4 italic">"{review.text}"</p>
                <div className="border-t border-neutral pt-4">
                  <p className="font-semibold text-primary">{review.author}</p>
                  <p className="text-sm text-text-light">{review.service}</p>
                  <p className="text-sm text-text-light">{review.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/reviews" className="btn-secondary">
              View All Reviews
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose JBD Starr */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="section-title">Why Choose JBD Starr?</h2>
              <p className="text-text-secondary text-lg">
                With over 15 years of experience, we've earned a reputation for excellence, attention to detail, and customer satisfaction.
              </p>
              <ul className="space-y-4">
                {[
                  'Licensed and fully insured contractors',
                  'Free in-home consultations and detailed estimates',
                  'Expert project management from start to finish',
                  'Quality workmanship and premium materials',
                  'Transparent communication and timeline',
                  'Warranty on all workmanship',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FaCheck className="text-accent flex-shrink-0" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-primary to-primary-light h-96 rounded-lg flex items-center justify-center text-8xl"
            >
              👷
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-bg-light">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="section-title">
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto space-y-4"
          >
            {faqData.map((faq) => (
              <motion.details
                key={faq.id}
                variants={fadeInUp}
                className="card cursor-pointer group"
              >
                <summary className="font-semibold text-primary text-lg flex items-center justify-between hover:text-accent transition-colors">
                  {faq.question}
                  <span className="transform group-open:rotate-180 transition-transform">▶</span>
                </summary>
                <p className="text-text-secondary mt-4 pb-2">{faq.answer}</p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-secondary">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container-max text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Transform Your Space?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free estimate today. No obligation, just honest advice from experts.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/calculator" className="btn-primary">
              Get Free Estimate
            </Link>
            <Link to="/request-quote" className="btn-outline text-secondary border-secondary hover:bg-secondary hover:text-primary">
              Request a Quote
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { services } from '@/constants/content'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-secondary section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Services</h1>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Complete renovation solutions for every project, from small upgrades to full home transformations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={fadeInUp}>
                <Link to={service.href}>
                  <div className="card h-full cursor-pointer group hover:shadow-card-hover transition-all duration-300">
                    <div className="text-6xl mb-4 group-hover:scale-125 group-hover:text-accent transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary mb-4">{service.description}</p>
                    <div className="inline-flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                      Learn More
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding bg-bg-light">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Service Categories</h2>
            <p className="section-subtitle">Browse by category to find what you need</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Bathrooms', count: 1, icon: '🛁' },
              { name: 'Basements', count: 2, icon: '🏠' },
              { name: 'Kitchens', count: 1, icon: '👨‍🍳' },
              { name: 'Painting', count: 2, icon: '🎨' },
              { name: 'Flooring', count: 1, icon: '⬜' },
              { name: 'Commercial', count: 1, icon: '🏢' },
            ].map((category, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="card text-center cursor-pointer group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{category.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">{category.name}</h3>
                <p className="text-text-light">{category.count} service(s)</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-secondary">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container-max text-center"
        >
          <h2 className="text-4xl font-serif font-bold mb-6">Not sure which service you need?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our experts. We'll assess your needs and provide recommendations.
          </p>
          <Link to="/request-quote" className="btn-primary">
            Schedule Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

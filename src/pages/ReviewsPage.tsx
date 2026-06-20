import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { reviews } from '@/constants/content'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ReviewsPage() {
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
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Customer Reviews</h1>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Don't just take our word for it - see what our satisfied customers have to say
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-accent py-12 md:py-16">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center"
          >
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '4.9★', label: 'Average Rating' },
              { number: '98%', label: 'Satisfaction Rate' },
              { number: '15+', label: 'Years in Business' },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-text-primary font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {reviews.map((review) => (
              <motion.div key={review.id} variants={fadeInUp} className="card">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-accent" size={18} />
                    ))}
                  </div>
                  <FaQuoteLeft className="text-accent text-2xl opacity-20" />
                </div>

                <p className="text-text-secondary mb-6 leading-relaxed italic">"{review.text}"</p>

                <div className="border-t border-neutral pt-4">
                  <p className="font-semibold text-primary">{review.author}</p>
                  <div className="flex items-center justify-between mt-2 text-sm text-text-light">
                    <span>{review.service}</span>
                    <span>{review.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Reviews */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 space-y-6"
          >
            {[
              {
                author: 'Robert Thompson',
                service: 'Interior Painting',
                location: 'Brampton',
                text: 'The painters were meticulous and efficient. Our home looks fantastic!',
              },
              {
                author: 'Lisa Anderson',
                service: 'Flooring Installation',
                location: 'Mississauga',
                text: 'Professional installation with minimal disruption. Very satisfied.',
              },
              {
                author: 'James Wilson',
                service: 'Legal Basement',
                location: 'Toronto',
                text: 'Great help navigating permits and regulations. Highly recommended.',
              },
              {
                author: 'Michelle Davis',
                service: 'Trim & Carpentry',
                location: 'Oakville',
                text: 'Excellent attention to detail. The craftsmanship is outstanding.',
              },
            ].map((review, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-primary">{review.author}</p>
                    <p className="text-sm text-text-light">
                      {review.service} • {review.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-accent" size={16} />
                    ))}
                  </div>
                </div>
                <p className="text-text-secondary italic">"{review.text}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-bg-light">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container-max text-center"
        >
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">
            Ready to Join Our Satisfied Customers?
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Let us transform your space. Get your free estimate today.
          </p>
          <Link to="/calculator" className="btn-primary">
            Get Free Estimate
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

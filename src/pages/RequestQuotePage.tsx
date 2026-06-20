import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import toast from 'react-hot-toast'

const quoteSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Valid phone required'),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget'),
  startDate: z.string().min(1, 'Please select a start date'),
  description: z.string().min(10, 'Please provide project details'),
})

type QuoteFormData = z.infer<typeof quoteSchema>

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function RequestQuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  })

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      toast.success('Quote request submitted! We\'ll contact you soon.')
      reset()
    } catch (error) {
      toast.error('Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Request a Quote</h1>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Tell us about your project and we'll provide a detailed estimate
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      {...register('fullName')}
                      className="input-field"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Email *</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      {...register('email')}
                      className="input-field"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                {/* Phone and City */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="(647) 446-8418"
                      {...register('phone')}
                      className="input-field"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">City *</label>
                    <select {...register('city')} className="input-field">
                      <option value="">Select a city</option>
                      <option value="Brampton">Brampton</option>
                      <option value="Mississauga">Mississauga</option>
                      <option value="Toronto">Toronto</option>
                      <option value="Vaughan">Vaughan</option>
                      <option value="Milton">Milton</option>
                      <option value="Oakville">Oakville</option>
                      <option value="Burlington">Burlington</option>
                    </select>
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Property Address *</label>
                  <input
                    type="text"
                    placeholder="123 Main Street"
                    {...register('address')}
                    className="input-field"
                  />
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                </div>

                {/* Service and Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Service Type *</label>
                    <select {...register('service')} className="input-field">
                      <option value="">Select a service</option>
                      <option value="Bathroom">Bathroom Remodeling</option>
                      <option value="Basement">Basement Renovations</option>
                      <option value="Kitchen">Kitchen Renovations</option>
                      <option value="Painting">Painting Services</option>
                      <option value="Flooring">Flooring Installation</option>
                      <option value="Full Home">Full Home Renovation</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Budget Range *</label>
                    <select {...register('budget')} className="input-field">
                      <option value="">Select budget</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000-25000">$10,000 - $25,000</option>
                      <option value="25000-50000">$25,000 - $50,000</option>
                      <option value="50000-100000">$50,000 - $100,000</option>
                      <option value="100000+">$100,000+</option>
                    </select>
                    {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>}
                  </div>
                </div>

                {/* Start Date */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Desired Start Date *</label>
                  <input
                    type="date"
                    {...register('startDate')}
                    className="input-field"
                  />
                  {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate.message}</p>}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Project Description *</label>
                  <textarea
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    rows={5}
                    {...register('description')}
                    className="input-field resize-none"
                  />
                  {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Quote'}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="space-y-6"
            >
              <div className="card">
                <h3 className="text-xl font-semibold text-primary mb-6">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <FaPhone className="text-accent text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Phone</p>
                      <a href="tel:647-446-8418" className="text-accent hover:text-accent-dark">
                        647-446-8418
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <FaEnvelope className="text-accent text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Email</p>
                      <a href="mailto:jbdstarr@outlook.com" className="text-accent hover:text-accent-dark">
                        jbdstarr@outlook.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <FaMapMarkerAlt className="text-accent text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Service Areas</p>
                      <p className="text-text-secondary text-sm">
                        Brampton, Mississauga, Toronto, Vaughan, Milton, Oakville, Burlington
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-primary text-secondary">
                <h3 className="font-semibold mb-3">Why Request a Quote?</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Free, no-obligation estimates</li>
                  <li>✓ Detailed project breakdown</li>
                  <li>✓ Professional recommendations</li>
                  <li>✓ Transparent pricing</li>
                  <li>✓ Quick response time</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

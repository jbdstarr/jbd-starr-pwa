import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  location: string
}

const projects: Project[] = [
  { id: 1, title: 'Luxury Master Bath', category: 'Bathrooms', image: '🛁', description: 'Complete bathroom overhaul with heated floors', location: 'Mississauga' },
  { id: 2, title: 'Basement Entertainment', category: 'Basements', image: '🎬', description: 'Finished basement with home theater', location: 'Toronto' },
  { id: 3, title: 'Modern Kitchen', category: 'Kitchens', image: '👨‍🍳', description: 'Contemporary kitchen with island', location: 'Brampton' },
  { id: 4, title: 'Interior Painting', category: 'Painting', image: '🎨', description: 'Professional whole-home interior painting', location: 'Vaughan' },
  { id: 5, title: 'Hardwood Flooring', category: 'Flooring', image: '⬜', description: 'Beautiful hardwood installation throughout', location: 'Oakville' },
  { id: 6, title: 'Full Renovation', category: 'Full Home', image: '🏠', description: 'Complete home transformation', location: 'Burlington' },
  { id: 7, title: 'Powder Room Upgrade', category: 'Bathrooms', image: '🚿', description: 'Elegant powder room renovation', location: 'Milton' },
  { id: 8, title: 'Legal Basement', category: 'Basements', image: '📋', description: 'Code-compliant basement apartment', location: 'Toronto' },
  { id: 9, title: 'Kitchen Island', category: 'Kitchens', image: '🪑', description: 'Custom kitchen island with seating', location: 'Mississauga' },
]

const categories = ['All', 'Bathrooms', 'Basements', 'Kitchens', 'Painting', 'Flooring', 'Full Home']

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showBeforeAfter, setShowBeforeAfter] = useState<number | null>(null)

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

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
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Explore our portfolio of completed renovations across the GTA
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="section-padding border-b border-neutral">
        <div className="container-max">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-accent text-text-primary'
                    : 'bg-neutral text-primary hover:bg-neutral-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
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
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <div
                  className="card h-full cursor-pointer group overflow-hidden"
                  onClick={() => setShowBeforeAfter(showBeforeAfter === project.id ? null : project.id)}
                >
                  <div className="relative h-64 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center overflow-hidden">
                    <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-primary mt-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center justify-between my-2">
                    <span className="text-sm bg-accent bg-opacity-20 text-accent px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-text-light">{project.location}</span>
                  </div>

                  <p className="text-text-secondary mb-4">{project.description}</p>

                  {showBeforeAfter === project.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="pt-4 border-t border-neutral"
                    >
                      <p className="text-sm text-text-light italic">Click to view before/after comparison</p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="section-padding text-center">
          <p className="text-lg text-text-secondary">No projects found in this category.</p>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-secondary">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container-max text-center"
        >
          <h2 className="text-4xl font-serif font-bold mb-6">Want to see more?</h2>
          <p className="text-xl mb-8">Schedule a consultation to see our full portfolio</p>
          <Link to="/request-quote" className="btn-primary">
            Schedule Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaSlider } from 'react-icons/fa6'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function QuoteCalculatorPage() {
  const [activeTab, setActiveTab] = useState('bathroom')
  const [estimates, setEstimates] = useState({
    bathroom: { size: '50', finish: 'standard', tile: false, vanity: false, shower: false },
    basement: { sqft: '500', layout: 'open', bathroom: false, kitchenette: false, legal: false },
    painting: { rooms: '3', condition: 'good', type: 'interior' },
    flooring: { type: 'hardwood', sqft: '500', removal: false },
  })

  const calculateBathroomPrice = () => {
    const base = 8000
    const size = parseInt(estimates.bathroom.size) * 30
    const finish = estimates.bathroom.finish === 'luxury' ? 3000 : 0
    const tile = estimates.bathroom.tile ? 2000 : 0
    const vanity = estimates.bathroom.vanity ? 1500 : 0
    const shower = estimates.bathroom.shower ? 3000 : 0
    return base + size + finish + tile + vanity + shower
  }

  const calculateBasementPrice = () => {
    const base = 15000
    const sqft = parseInt(estimates.basement.sqft) * 20
    const layout = estimates.basement.layout === 'separate' ? 5000 : 0
    const bathroom = estimates.basement.bathroom ? 6000 : 0
    const kitchenette = estimates.basement.kitchenette ? 4000 : 0
    const legal = estimates.basement.legal ? 3000 : 0
    return base + sqft + layout + bathroom + kitchenette + legal
  }

  const calculatePaintingPrice = () => {
    const base = 1500
    const rooms = parseInt(estimates.painting.rooms) * 800
    const condition = estimates.painting.condition === 'poor' ? 500 : 0
    const type = estimates.painting.type === 'exterior' ? 2000 : 0
    return base + rooms + condition + type
  }

  const calculateFlooringPrice = () => {
    const base = 2000
    const sqft = parseInt(estimates.flooring.sqft) * 8
    const removal = estimates.flooring.removal ? 1500 : 0
    const multiplier = estimates.flooring.type === 'hardwood' ? 1.5 : 1
    return (base + sqft + removal) * multiplier
  }

  const getEstimate = () => {
    switch (activeTab) {
      case 'bathroom':
        return calculateBathroomPrice()
      case 'basement':
        return calculateBasementPrice()
      case 'painting':
        return calculatePaintingPrice()
      case 'flooring':
        return calculateFlooringPrice()
      default:
        return 0
    }
  }

  const handleBathroomChange = (key: string, value: string | boolean) => {
    setEstimates(prev => ({
      ...prev,
      bathroom: { ...prev.bathroom, [key]: value }
    }))
  }

  const handleBasementChange = (key: string, value: string | boolean) => {
    setEstimates(prev => ({
      ...prev,
      basement: { ...prev.basement, [key]: value }
    }))
  }

  const handlePaintingChange = (key: string, value: string | boolean) => {
    setEstimates(prev => ({
      ...prev,
      painting: { ...prev.painting, [key]: value }
    }))
  }

  const handleFlooringChange = (key: string, value: string | boolean) => {
    setEstimates(prev => ({
      ...prev,
      flooring: { ...prev.flooring, [key]: value }
    }))
  }

  const estimate = getEstimate()

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
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Instant Quote Calculator</h1>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              Get an instant estimate for your renovation project
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-8 border-b border-neutral pb-4">
              {[
                { id: 'bathroom', label: '🛁 Bathroom' },
                { id: 'basement', label: '🏠 Basement' },
                { id: 'painting', label: '🎨 Painting' },
                { id: 'flooring', label: '⬜ Flooring' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-accent text-text-primary'
                      : 'bg-neutral text-primary hover:bg-neutral-dark'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Input Section */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="lg:col-span-2 space-y-6"
              >
                {/* Bathroom Calculator */}
                {activeTab === 'bathroom' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Bathroom Size (sq ft): {estimates.bathroom.size}
                      </label>
                      <input
                        type="range"
                        min="25"
                        max="150"
                        value={estimates.bathroom.size}
                        onChange={(e) => handleBathroomChange('size', e.target.value)}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">Finish Level</label>
                      <select
                        value={estimates.bathroom.finish}
                        onChange={(e) => handleBathroomChange('finish', e.target.value)}
                        className="input-field"
                      >
                        <option value="standard">Standard</option>
                        <option value="premium">Premium</option>
                        <option value="luxury">Luxury</option>
                      </select>
                    </div>

                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={estimates.bathroom.tile}
                        onChange={(e) => handleBathroomChange('tile', e.target.checked)}
                        className="w-5 h-5"
                      />
                      <span className="text-primary font-medium">Include Tile Replacement (+$2,000)</span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={estimates.bathroom.vanity}
                        onChange={(e) => handleBathroomChange('vanity', e.target.checked)}
                        className="w-5 h-5"
                      />
                      <span className="text-primary font-medium">Include Vanity Replacement (+$1,500)</span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={estimates.bathroom.shower}
                        onChange={(e) => handleBathroomChange('shower', e.target.checked)}
                        className="w-5 h-5"
                      />
                      <span className="text-primary font-medium">Include Shower Replacement (+$3,000)</span>
                    </label>
                  </div>
                )}

                {/* Basement Calculator */}
                {activeTab === 'basement' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Square Footage: {estimates.basement.sqft}
                      </label>
                      <input
                        type="range"
                        min="200"
                        max="1500"
                        value={estimates.basement.sqft}
                        onChange={(e) => handleBasementChange('sqft', e.target.value)}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">Layout</label>
                      <select
                        value={estimates.basement.layout}
                        onChange={(e) => handleBasementChange('layout', e.target.value)}
                        className="input-field"
                      >
                        <option value="open">Open Concept</option>
                        <option value="separate">Separate Rooms (+$5,000)</option>
                      </select>
                    </div>

                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={estimates.basement.bathroom}
                        onChange={(e) => handleBasementChange('bathroom', e.target.checked)}
                        className="w-5 h-5"
                      />
                      <span className="text-primary font-medium">Add Bathroom (+$6,000)</span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={estimates.basement.kitchenette}
                        onChange={(e) => handleBasementChange('kitchenette', e.target.checked)}
                        className="w-5 h-5"
                      />
                      <span className="text-primary font-medium">Add Kitchenette (+$4,000)</span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={estimates.basement.legal}
                        onChange={(e) => handleBasementChange('legal', e.target.checked)}
                        className="w-5 h-5"
                      />
                      <span className="text-primary font-medium">Legal Basement Compliance (+$3,000)</span>
                    </label>
                  </div>
                )}

                {/* Painting Calculator */}
                {activeTab === 'painting' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Number of Rooms: {estimates.painting.rooms}
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={estimates.painting.rooms}
                        onChange={(e) => handlePaintingChange('rooms', e.target.value)}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">Wall Condition</label>
                      <select
                        value={estimates.painting.condition}
                        onChange={(e) => handlePaintingChange('condition', e.target.value)}
                        className="input-field"
                      >
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        <option value="poor">Poor (+$500)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">Paint Type</label>
                      <select
                        value={estimates.painting.type}
                        onChange={(e) => handlePaintingChange('type', e.target.value)}
                        className="input-field"
                      >
                        <option value="interior">Interior</option>
                        <option value="exterior">Exterior (+$2,000)</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Flooring Calculator */}
                {activeTab === 'flooring' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">Flooring Type</label>
                      <select
                        value={estimates.flooring.type}
                        onChange={(e) => handleFlooringChange('type', e.target.value)}
                        className="input-field"
                      >
                        <option value="laminate">Laminate</option>
                        <option value="vinyl">Luxury Vinyl</option>
                        <option value="tile">Tile</option>
                        <option value="hardwood">Hardwood (1.5x)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Square Footage: {estimates.flooring.sqft}
                      </label>
                      <input
                        type="range"
                        min="100"
                        max="2000"
                        value={estimates.flooring.sqft}
                        onChange={(e) => handleFlooringChange('sqft', e.target.value)}
                        className="w-full"
                      />
                    </div>

                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={estimates.flooring.removal}
                        onChange={(e) => handleFlooringChange('removal', e.target.checked)}
                        className="w-5 h-5"
                      />
                      <span className="text-primary font-medium">Include Removal (+$1,500)</span>
                    </label>
                  </div>
                )}
              </motion.div>

              {/* Result Section */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="card-dark sticky top-24 h-fit"
              >
                <h3 className="text-2xl font-serif font-bold mb-4">Estimated Cost</h3>

                <div className="bg-accent bg-opacity-20 rounded-lg p-6 mb-6">
                  <p className="text-sm text-neutral mb-2">Your Estimate</p>
                  <p className="text-5xl font-bold text-accent">
                    ${estimate.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </p>
                  <p className="text-sm text-neutral mt-2">This is an estimate only</p>
                </div>

                <p className="text-sm text-neutral mb-6">
                  For an accurate quote, schedule a free consultation with our team.
                </p>

                <a href="/request-quote" className="btn-primary w-full text-center">
                  Request Official Quote
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

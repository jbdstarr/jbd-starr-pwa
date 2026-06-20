import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import HomePage from '@/pages/HomePage'
import ServicesPage from '@/pages/ServicesPage'
import ProjectsPage from '@/pages/ProjectsPage'
import QuoteCalculatorPage from '@/pages/QuoteCalculatorPage'
import RequestQuotePage from '@/pages/RequestQuotePage'
import ServiceAreasPage from '@/pages/ServiceAreasPage'
import ReviewsPage from '@/pages/ReviewsPage'
import ContactPage from '@/pages/ContactPage'
import CustomerPortalPage from '@/pages/CustomerPortalPage'
import AdminDashboard from '@/pages/AdminDashboard'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/calculator" element={<QuoteCalculatorPage />} />
          <Route path="/request-quote" element={<RequestQuotePage />} />
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/customer-portal" element={<CustomerPortalPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}

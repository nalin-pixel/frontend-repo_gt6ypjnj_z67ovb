import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import ConsultationPage from './pages/ConsultationPage'
import ContactPage from './pages/ContactPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/case-studies" element={<CaseStudiesPage />} />
      <Route path="/consultation" element={<ConsultationPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App

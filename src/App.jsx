import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import About from './pages/About'
import { updateMetaTags, getCurrentPageSEO } from './utils/seo'
import './App.css'

function AppContent() {
  const { i18n } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    // Set document direction based on language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  useEffect(() => {
    // Update meta tags when route changes
    const seoConfig = getCurrentPageSEO(location.pathname)
    updateMetaTags(seoConfig)
    
    // Scroll to top on route change (unless it's a hash link)
    if (!location.hash) {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router basename="/Road-Lions">
      <AppContent />
    </Router>
  )
}

export default App


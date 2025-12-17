import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import './Header.css'

function Header() {
  const { t } = useTranslation()
  
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo-link">
            <img src="/Header-logo.png" alt="Road Lions Logo" className="logo" />
          </Link>
          
          <div className="nav-wrapper">
            <nav className="nav">
              <Link to="/" className="nav-link">{t('nav.home')}</Link>
              <a href="#products" className="nav-link">{t('nav.products')}</a>
              <Link to="/about" className="nav-link">{t('nav.about')}</Link>
            </nav>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header


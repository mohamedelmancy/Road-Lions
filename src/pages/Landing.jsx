import { useTranslation } from 'react-i18next'
import './Landing.css'

function Landing() {
  const { t } = useTranslation()
  
  // Sample products with translations
  const products = [
    {
      id: 1,
      nameKey: 'products.items.backrest.name',
      categoryKey: 'products.categories.interior',
      image: '/Car Backrest.jpg',
      descriptionKey: 'products.items.backrest.description',
      link: 'https://amzn.eu/d/hZzGd5Z'
    },
    {
      id: 2,
      nameKey: 'products.items.carArmrest.name',
      categoryKey: 'products.categories.interior',
      image: '/beige_bags.png',
      descriptionKey: 'products.items.carArmrest.description',
      link: 'https://amzn.eu/d/2N4ucwB'
    },
    {
      id: 3,
      nameKey: 'products.items.armrestMaroon.name',
      categoryKey: 'products.categories.interior',
      image: '/armrest-maroon.png',
      descriptionKey: 'products.items.armrestMaroon.description',
      link: 'https://amzn.eu/d/fVSLKiW'
    },
    {
      id: 4,
      nameKey: 'products.items.seatOrganizer.name',
      categoryKey: 'products.categories.interior',
      image: '/back-seat-organizer.jpg',
      descriptionKey: 'products.items.seatOrganizer.description',
      link: 'https://amzn.eu/d/aWHSyij'
    },
    {
      id: 5,
      nameKey: 'products.items.gapOrganizer.name',
      categoryKey: 'products.categories.accessories',
      image: '/gabs organizer.png',
      descriptionKey: 'products.items.gapOrganizer.description',
      link: 'https://amzn.eu/d/b5hmY5y'
    },
    {
      id: 6,
      nameKey: 'products.items.neckPillow.name',
      categoryKey: 'products.categories.interior',
      image: '/Headrest.png',
      descriptionKey: 'products.items.neckPillow.description',
      link: 'https://amzn.eu/d/a2AvoO1'
    }
  ]

  return (
    <div className="landing">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">{t('hero.title')}</h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <p className="hero-description">
            {t('hero.description')}
          </p>
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary">{t('hero.shopNow')}</a>
            <a href="/about" className="btn btn-secondary">{t('hero.learnMore')}</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚗</div>
              <h3>{t('features.quality.title')}</h3>
              <p>{t('features.quality.description')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>{t('features.delivery.title')}</h3>
              <p>{t('features.delivery.description')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💯</div>
              <h3>{t('features.satisfaction.title')}</h3>
              <p>{t('features.satisfaction.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="container">
          <h2 className="section-title">{t('products.title')}</h2>
          <p className="section-subtitle">
            {t('products.subtitle')}
          </p>
          
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={t(product.nameKey)} />
                  <span className="product-category">{t(product.categoryKey)}</span>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{t(product.nameKey)}</h3>
                  <p className="product-description">{t(product.descriptionKey)}</p>
                  {product.link ? (
                    <a 
                      href={product.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary product-btn"
                    >
                      <span>{t('products.viewDetails')}</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  ) : (
                    <button className="btn btn-primary product-btn">{t('products.viewDetails')}</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">{t('cta.title')}</h2>
            <p className="cta-text">
              {t('cta.description')}
            </p>
            <button className="btn btn-primary">{t('cta.button')}</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing

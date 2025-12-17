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
            <a 
              href="https://wa.me/2001059024896?text=Hello%20Road%20Lions!%20I'm%20interested%20in%20your%20car%20accessories." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-whatsapp-cta"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {t('cta.button')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing

import { useTranslation } from 'react-i18next'
import './About.css'

function About() {
  const { t } = useTranslation()
  
  return (
    <div className="about">
      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">{t('about.pageTitle')}</h1>
          <p className="page-subtitle">{t('about.pageSubtitle')}</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">{t('about.story.title')}</h2>
              <p>{t('about.story.p1')}</p>
              <p>{t('about.story.p2')}</p>
              <p>{t('about.story.p3')}</p>
            </div>
            <div className="story-image">
              <img src="/Header-logo.png" alt="Road Lions" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">{t('about.values.title')}</h2>
          <p className="section-subtitle">{t('about.values.subtitle')}</p>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>{t('about.values.quality.title')}</h3>
              <p>{t('about.values.quality.description')}</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>{t('about.values.satisfaction.title')}</h3>
              <p>{t('about.values.satisfaction.description')}</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>{t('about.values.innovation.title')}</h3>
              <p>{t('about.values.innovation.description')}</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>{t('about.values.expertise.title')}</h3>
              <p>{t('about.values.expertise.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">{t('about.whyChoose.title')}</h2>
          
          <div className="why-choose-grid">
            <div className="why-item">
              <div className="why-number">01</div>
              <h3>{t('about.whyChoose.item1.title')}</h3>
              <p>{t('about.whyChoose.item1.description')}</p>
            </div>
            
            <div className="why-item">
              <div className="why-number">02</div>
              <h3>{t('about.whyChoose.item2.title')}</h3>
              <p>{t('about.whyChoose.item2.description')}</p>
            </div>
            
            <div className="why-item">
              <div className="why-number">03</div>
              <h3>{t('about.whyChoose.item3.title')}</h3>
              <p>{t('about.whyChoose.item3.description')}</p>
            </div>
            
            <div className="why-item">
              <div className="why-number">04</div>
              <h3>{t('about.whyChoose.item4.title')}</h3>
              <p>{t('about.whyChoose.item4.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <h2>{t('about.contact.title')}</h2>
          <p>{t('about.contact.description')}</p>
          <div className="social-cta">
            <a 
              href="https://web.facebook.com/profile.php?id=61580810542713" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t('about.contact.facebook')}
            </a>
            <a 
              href="https://www.instagram.com/roadlions_1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              {t('about.contact.instagram')}
            </a>
            <a 
              href="https://www.tiktok.com/@road_lions0?_r=1&_t=ZS-92HeiRuqve1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              TikTok
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

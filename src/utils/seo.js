/**
 * SEO Utility Functions
 * Handles dynamic meta tag updates for different pages
 */

/**
 * Update page meta tags dynamically
 * @param {Object} config - Configuration object with title, description, etc.
 */
export const updateMetaTags = (config) => {
  const {
    title,
    description,
    keywords,
    url,
    image,
    type = 'website'
  } = config

  // Update page title
  if (title) {
    document.title = title
  }

  // Update or create meta tags
  const metaTags = [
    // Primary meta tags
    { name: 'title', content: title },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    
    // Open Graph tags
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:type', content: type },
    { property: 'og:image', content: image },
    
    // Twitter Card tags
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:url', content: url },
    { name: 'twitter:image', content: image }
  ]

  metaTags.forEach(({ name, property, content }) => {
    if (!content) return

    const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`
    let element = document.querySelector(selector)

    if (element) {
      element.setAttribute('content', content)
    } else {
      element = document.createElement('meta')
      if (name) element.setAttribute('name', name)
      if (property) element.setAttribute('property', property)
      element.setAttribute('content', content)
      document.head.appendChild(element)
    }
  })

  // Update canonical URL
  if (url) {
    let canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', url)
    } else {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      canonical.setAttribute('href', url)
      document.head.appendChild(canonical)
    }
  }
}

/**
 * Add structured data (JSON-LD) to the page
 * @param {Object} data - Structured data object
 */
export const addStructuredData = (data) => {
  const scriptId = 'structured-data-product'
  
  // Remove existing structured data if present
  const existingScript = document.getElementById(scriptId)
  if (existingScript) {
    existingScript.remove()
  }

  // Add new structured data
  const script = document.createElement('script')
  script.id = scriptId
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

/**
 * Generate product structured data
 * @param {Object} product - Product object
 * @returns {Object} Structured data for the product
 */
export const generateProductStructuredData = (product) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: 'Road Lions'
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: product.link,
      priceCurrency: 'USD',
      seller: {
        '@type': 'Organization',
        name: 'Road Lions'
      }
    }
  }
}

/**
 * SEO configuration for different pages
 */
export const SEO_CONFIG = {
  home: {
    title: 'Road Lions - Premium Car Accessories & Automotive Parts Online Store',
    description: 'Shop premium car accessories, automotive parts, and interior upgrades at Road Lions. Quality car seat organizers, armrests, memory foam support, and more. Free shipping on automotive accessories.',
    keywords: 'car accessories, automotive parts, car interior accessories, car organizer, car armrest, memory foam car seat, car seat gap filler, car headrest, automotive store, online car accessories, Road Lions',
    url: 'https://mohamedelmancy.github.io/Road-Lions/',
    image: 'https://mohamedelmancy.github.io/Road-Lions/Header-logo.png'
  },
  about: {
    title: 'About Road Lions - Your Trusted Automotive Accessories Partner',
    description: 'Learn about Road Lions, your trusted partner for premium car accessories and automotive parts. Discover our mission, values, and commitment to quality vehicle upgrades.',
    keywords: 'about road lions, automotive company, car accessories company, vehicle accessories, quality car parts, automotive retail',
    url: 'https://mohamedelmancy.github.io/Road-Lions/about',
    image: 'https://mohamedelmancy.github.io/Road-Lions/Header-logo.png'
  }
}

/**
 * Get current page SEO config
 * @param {string} pathname - Current page pathname
 * @returns {Object} SEO configuration
 */
export const getCurrentPageSEO = (pathname) => {
  if (pathname.includes('/about')) {
    return SEO_CONFIG.about
  }
  return SEO_CONFIG.home
}


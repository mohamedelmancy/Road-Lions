# Road Lions - Car Accessories Store

A modern, responsive e-commerce website for Road Lions, specializing in premium automotive accessories and car parts.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design optimized for all devices
- **Landing Page**: Showcasing featured products and company highlights
- **About Us**: Company story, values, and mission
- **Social Integration**: Connected to Facebook and Instagram
- **Fast Performance**: Built with React + Vite for optimal speed
- **SEO Ready**: Structured for search engine optimization

## 🛠️ Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Lightning-fast build tool
- **React Router**: Client-side routing
- **CSS3**: Custom styling with modern features

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## 🏗️ Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

### Deploy to Netlify (Recommended - Free)

1. **Option 1: Drag & Drop**
   - Run `npm run build`
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag the `dist` folder to deploy instantly

2. **Option 2: Connect GitHub**
   - Push your code to GitHub
   - Go to [Netlify](https://www.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Netlify will auto-detect settings from `netlify.toml`
   - Click "Deploy site"

### Deploy to Vercel (Alternative - Free)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect settings from `vercel.json`
6. Click "Deploy"

### Deploy to GitHub Pages (Free)

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/road-lions",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/road-lions/'
})
```

4. Deploy:
```bash
npm run deploy
```

## 📝 Customization

### Adding Products

Edit `/src/pages/Landing.jsx` and update the `products` array with your product information.

### Updating Social Links

Social media links are in:
- `/src/components/Footer.jsx`
- `/src/pages/About.jsx`

### Changing Colors

Brand colors are defined in `/src/index.css` using CSS variables:
- `--primary-navy`: #1a3a52 (main brand color)
- `--primary-orange`: #ff8c42 (accent color)

### Logo

Replace `/public/logo.jpeg` with your logo file.

## 📱 Social Media

- Facebook: [Road Lions Facebook](https://web.facebook.com/profile.php?id=61580810542713)
- Instagram: [@roadlions_1](https://www.instagram.com/roadlions_1/)

## 🔒 Security Notes

- No sensitive data is stored in the frontend
- All external links use `rel="noopener noreferrer"` for security
- Forms validate and sanitize user input (when implemented)

## 📄 License

© 2024 Road Lions. All rights reserved.

## 🆘 Support

For questions or support, reach out via:
- Facebook: [Road Lions](https://web.facebook.com/profile.php?id=61580810542713)
- Instagram: [@roadlions_1](https://www.instagram.com/roadlions_1/)

---

**Built with ❤️ for Road Lions**


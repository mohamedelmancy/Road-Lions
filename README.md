# Road Lions - Car Accessories Store

A modern, responsive e-commerce website for Road Lions, specializing in premium automotive accessories and car parts.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design optimized for all devices
- **Bilingual Support**: Full English and Arabic translation with RTL layout
- **Landing Page**: Showcasing featured products and company highlights
- **About Us**: Company story, values, and mission
- **Social Integration**: Connected to Facebook, Instagram, and TikTok
- **Fast Performance**: Built with React + Vite for optimal speed
- **SEO Ready**: Structured for search engine optimization
- **GitHub Pages Ready**: Pre-configured for easy deployment

## 🛠️ Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Lightning-fast build tool
- **React Router**: Client-side routing
- **i18next**: Internationalization (English/Arabic)
- **CSS3**: Custom styling with modern features
- **gh-pages**: Automated GitHub Pages deployment

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

## 🌐 Live Website

**🔗 https://mohamedelmancy.github.io/Road-Lions/**

---

## 🚀 GitHub Pages Deployment (Primary Method)

This project is pre-configured and ready for GitHub Pages deployment!

### Quick Deploy:
```bash
# Step 1: Push to GitHub (first time only)
git add .
git commit -m "Deploy Road Lions website"
git push origin main

# Step 2: Deploy to GitHub Pages
npm run deploy
```

### First-Time Setup:
📖 See **`DEPLOY_NOW.md`** for step-by-step instructions
📚 See **`GITHUB_PAGES_DEPLOY.md`** for complete documentation

### Update Your Live Site:
```bash
git add .
git commit -m "Update website"
git push origin main
npm run deploy
```

---

## 📤 Alternative Deployment Options

### Deploy to Netlify

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

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect settings from `vercel.json`
6. Click "Deploy"

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

The logo is located at `/public/Header-logo.png`. Replace it with your own logo file while keeping the same filename.

## 📱 Social Media

- Facebook: [Road Lions Facebook](https://web.facebook.com/profile.php?id=61580810542713)
- Instagram: [@roadlions_1](https://www.instagram.com/roadlions_1/)
- TikTok: [@road_lions0](https://www.tiktok.com/@road_lions0)

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
- TikTok: [@road_lions0](https://www.tiktok.com/@road_lions0)

---

**Built with ❤️ for Road Lions**


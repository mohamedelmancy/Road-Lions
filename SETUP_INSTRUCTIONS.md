# 🚀 Road Lions Website - Setup Instructions

## ⚠️ Important: Quick Setup Required

There's a permissions issue with npm on your system. Follow these steps to get started:

### Step 1: Fix NPM Permissions (One-time fix)

Run this command in your terminal:

```bash
sudo chown -R $(whoami) "/Users/mohamedelmancy/.npm"
```

Enter your password when prompted. This fixes npm cache permissions.

### Step 2: Navigate to Project Directory

```bash
cd "/Users/mohamedelmancy/Road Lions/website"
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Add Your Logo

1. Save your Road Lions logo image as `logo.jpeg`
2. Place it in the `/public` folder
3. The logo should be JPEG or PNG format with transparent background (recommended)

### Step 5: Start Development Server

```bash
npm run dev
```

The website will open automatically at `http://localhost:3000` 🎉

---

## 🌐 Deploy to the Internet (FREE)

### Option 1: Netlify (Recommended - Easiest)

1. First, build your project:
   ```bash
   npm run build
   ```

2. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)

3. Drag and drop the `dist` folder

4. Done! Your site is live instantly! 🚀

### Option 2: Vercel (Alternative)

1. Go to [https://vercel.com/](https://vercel.com/)
2. Sign up with GitHub
3. Click "New Project"
4. Import this repository
5. Click "Deploy"
6. Your site is live! 🌟

### Option 3: GitHub Pages (Free)

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

---

## ✅ What's Already Done

- ✅ Modern React + Vite project structure
- ✅ Landing page with product showcase
- ✅ About Us page with company information
- ✅ Header with navigation
- ✅ Footer with social media links
- ✅ Responsive design (mobile-friendly)
- ✅ Beautiful UI with your brand colors (Navy #1a3a52 & Orange #ff8c42)
- ✅ Facebook link: https://web.facebook.com/profile.php?id=61580810542713
- ✅ Instagram link: https://www.instagram.com/roadlions_1/
- ✅ Deployment configuration files (Netlify & Vercel)

---

## 📝 Next Steps After Deployment

1. **Add Real Products**: Edit `/src/pages/Landing.jsx` to add your actual product information
2. **Customize Content**: Update About page content in `/src/pages/About.jsx`
3. **Add More Pages**: Create pages for Shop, Contact, etc.
4. **Connect Backend**: Add shopping cart, payment processing, etc.

---

## 🆘 Need Help?

If you encounter any issues:

1. Make sure Node.js is installed (version 18 or higher)
2. Try clearing npm cache: `npm cache clean --force`
3. Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

---

**Your website is ready to go live! Just follow the steps above.** 🎉


# 🚀 GitHub Pages Deployment Guide

## Complete Guide to Deploy Road Lions Website on GitHub Pages

This guide will walk you through deploying your Road Lions website to GitHub Pages, making it publicly accessible for free.

---

## 📋 Prerequisites

- Git installed on your computer
- GitHub account
- Repository created at: https://github.com/mohamedelmancy/Road-Lions

---

## 🎯 Step-by-Step Deployment

### Step 1: Push Code to GitHub

Open your terminal in the project directory and run:

```bash
# Navigate to project directory
cd "/Users/mohamedelmancy/Road Lions/website"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Prepare Road Lions website for GitHub Pages deployment"

# Add remote repository
git remote add origin https://github.com/mohamedelmancy/Road-Lions.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** If you encounter authentication issues, GitHub now requires a Personal Access Token (PAT) instead of a password:
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate a new token with `repo` permissions
3. Use this token as your password when prompted

---

### Step 2: Deploy to GitHub Pages

Once your code is on GitHub, run this single command to deploy:

```bash
npm run deploy
```

This command will:
1. Build your production-ready site
2. Create a `gh-pages` branch
3. Push the built files to GitHub Pages
4. Make your site live!

---

### Step 3: Configure GitHub Repository Settings

1. Go to your repository: https://github.com/mohamedelmancy/Road-Lions
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for deployment to complete

---

## 🌐 Your Live Website URL

Once deployed, your website will be live at:

**https://mohamedelmancy.github.io/Road-Lions/**

---

## 🔄 Updating Your Website

Whenever you make changes and want to update the live site:

```bash
# Stage changes
git add .

# Commit changes
git commit -m "Update website content"

# Push to GitHub
git push origin main

# Deploy updated version to GitHub Pages
npm run deploy
```

---

## ✅ Verification Steps

After deployment, verify everything works:

1. ✅ Visit your live URL
2. ✅ Test language switching (English/Arabic)
3. ✅ Check all product links work
4. ✅ Verify social media links (Facebook, Instagram, TikTok)
5. ✅ Test navigation between Home and About pages
6. ✅ Check mobile responsiveness

---

## 🛠️ Troubleshooting

### Issue: 404 Error on Live Site

**Solution:** Make sure:
- `gh-pages` branch exists in your repository
- Repository Settings → Pages is configured correctly
- Wait 2-3 minutes after deployment

### Issue: Images Not Loading

**Solution:** All images are correctly configured with the `/Road-Lions/` base path. If issues persist:
- Check that images exist in the `public` folder
- Rebuild and redeploy: `npm run deploy`

### Issue: CSS Not Loading / Broken Styles

**Solution:** The `vite.config.js` is configured with `base: '/Road-Lions/'`. If styles break:
- Rebuild: `npm run build`
- Redeploy: `npm run deploy`

### Issue: Git Authentication Failed

**Solution:** Use a Personal Access Token:
1. Generate token at: https://github.com/settings/tokens
2. Use token as password when Git prompts for credentials

---

## 📦 What We've Configured

Your project is now fully configured for GitHub Pages:

1. ✅ **vite.config.js** - Set base path to `/Road-Lions/`
2. ✅ **package.json** - Added deployment scripts and homepage URL
3. ✅ **gh-pages** - Installed for automated deployment
4. ✅ **All routes** - Configured to work with GitHub Pages

---

## 🎉 Quick Deploy Command

For quick updates, just run:

```bash
npm run deploy
```

This single command builds and deploys your site automatically!

---

## 📱 Share Your Website

Once live, share your website URL with customers:

**🌐 https://mohamedelmancy.github.io/Road-Lions/**

Add this URL to:
- Your Facebook page (https://web.facebook.com/profile.php?id=61580810542713)
- Your Instagram bio (https://www.instagram.com/roadlions_1/)
- Your TikTok bio (https://www.tiktok.com/@road_lions0)

---

## 🔒 Important Notes

1. **Free Hosting**: GitHub Pages is completely free for public repositories
2. **Custom Domain** (Optional): You can add a custom domain like `www.roadlions.com` in Settings → Pages
3. **Automatic Updates**: Every time you run `npm run deploy`, your site updates automatically
4. **Backup**: Your code is safely backed up on GitHub

---

## 💡 Need Help?

If you encounter any issues:
1. Check the Actions tab in your GitHub repository for deployment status
2. Verify all files are committed and pushed
3. Ensure `gh-pages` branch exists
4. Wait a few minutes after deployment for changes to propagate

---

**Your Road Lions website is ready to go live! 🚀🦁**


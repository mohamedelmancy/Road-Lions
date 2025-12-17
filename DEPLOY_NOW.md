# 🚀 Deploy Road Lions to GitHub Pages - Quick Start

## Simple 3-Step Process

### ✅ Step 1: Push to GitHub

Run these commands in your terminal:

```bash
cd "/Users/mohamedelmancy/Road Lions/website"
git init
git add .
git commit -m "Initial commit - Road Lions website"
git branch -M main
git remote add origin https://github.com/mohamedelmancy/Road-Lions.git
git push -u origin main
```

**Authentication:** When prompted for password, use a GitHub Personal Access Token:
- Generate at: https://github.com/settings/tokens
- Select `repo` permissions

---

### ✅ Step 2: Deploy to GitHub Pages

After pushing to GitHub, deploy with one command:

```bash
npm run deploy
```

Wait 1-2 minutes for deployment to complete.

---

### ✅ Step 3: Configure Repository

1. Go to: https://github.com/mohamedelmancy/Road-Lions/settings/pages
2. Under **Source**, select:
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
3. Click **Save**

---

## 🌐 Your Live Website

**URL:** https://mohamedelmancy.github.io/Road-Lions/

---

## 🔄 Update Website Later

To update your live site after making changes:

```bash
git add .
git commit -m "Update website"
git push origin main
npm run deploy
```

---

## ✨ That's it! Your website is live!

Share your website:
- 📘 Facebook: https://web.facebook.com/profile.php?id=61580810542713
- 📸 Instagram: https://www.instagram.com/roadlions_1/
- 🎵 TikTok: https://www.tiktok.com/@road_lions0

---

**Need detailed help?** See `GITHUB_PAGES_DEPLOY.md` for the complete guide.


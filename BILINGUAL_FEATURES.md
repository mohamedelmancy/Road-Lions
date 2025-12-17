# 🌐 Bilingual Support - English & Arabic

## ✨ Features Implemented

Your Road Lions website now supports **full bilingual functionality** with:

### 🔄 Language Switching
- ✅ Easy-to-use language switcher in the header
- ✅ Toggle between English (EN) and Arabic (عربي)
- ✅ Language preference saved in browser
- ✅ Automatic language detection on return visits

### 🎨 RTL (Right-to-Left) Support
- ✅ Automatic layout flip for Arabic
- ✅ Proper text alignment (right-aligned for Arabic)
- ✅ Mirrored navigation and buttons
- ✅ Arabic-optimized fonts
- ✅ Smooth transitions between languages

### 📝 Fully Translated Content
- ✅ **Navigation**: Home, About Us
- ✅ **Landing Page**: Hero, Features, Products, CTA
- ✅ **About Page**: Story, Values, Why Choose Us, Contact
- ✅ **Footer**: Links and social media
- ✅ **Buttons**: All CTAs and interactive elements

### 🛠️ Technical Implementation
- ✅ Using **i18next** and **react-i18next**
- ✅ JSON-based translation files
- ✅ Centralized translation management
- ✅ Easy to add more languages in the future

---

## 📂 File Structure

```
src/
├── i18n/
│   ├── config.js              # i18n configuration
│   └── locales/
│       ├── en.json           # English translations
│       └── ar.json           # Arabic translations
├── components/
│   ├── LanguageSwitcher.jsx  # Language toggle component
│   └── LanguageSwitcher.css
├── rtl.css                    # RTL-specific styles
└── [all components updated with translations]
```

---

## 🎯 How It Works

### 1. **Language Switcher Component**
Located in the header, allows users to toggle between EN and AR instantly.

```jsx
<LanguageSwitcher />
```

### 2. **Translation Keys**
All text uses translation keys:

```jsx
{t('hero.title')}  // "Welcome to Road Lions" or "مرحباً بك في رود ليونز"
```

### 3. **Automatic RTL**
When Arabic is selected:
- HTML `dir` attribute changes to "rtl"
- Custom RTL CSS kicks in
- Layout mirrors automatically

### 4. **Persistent Language**
User's choice is saved to `localStorage` and remembered on next visit.

---

## 🌍 Adding More Languages

Want to add more languages? Here's how:

### Step 1: Create Translation File
Create `/src/i18n/locales/[language].json` (e.g., `fr.json` for French)

### Step 2: Update Config
Add to `/src/i18n/config.js`:

```javascript
import fr from './locales/fr.json'

i18n.init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
    fr: { translation: fr }  // Add new language
  },
  // ...
})
```

### Step 3: Update Language Switcher
Add button in `/src/components/LanguageSwitcher.jsx`:

```jsx
<button onClick={() => changeLanguage('fr')} className="lang-btn">
  FR
</button>
```

### Step 4: Add RTL Support (if needed)
If the language is RTL (like Arabic, Hebrew, Persian), update the `changeLanguage` function.

---

## 📋 Translation File Structure

### English (`en.json`)
```json
{
  "nav": {
    "home": "Home",
    "about": "About Us"
  },
  "hero": {
    "title": "Welcome to Road Lions",
    ...
  }
}
```

### Arabic (`ar.json`)
```json
{
  "nav": {
    "home": "الرئيسية",
    "about": "من نحن"
  },
  "hero": {
    "title": "مرحباً بك في رود ليونز",
    ...
  }
}
```

---

## 🎨 RTL CSS Features

The `rtl.css` file handles:
- Layout mirroring (flex-direction: row-reverse)
- Text alignment (text-align: right)
- Border positioning
- Icon and button positioning
- Responsive RTL behavior

---

## ✅ Testing Checklist

- [x] Language switcher visible in header
- [x] Click EN button → Shows English
- [x] Click عربي button → Shows Arabic
- [x] Arabic text displays right-to-left
- [x] Layout mirrors properly in Arabic
- [x] Language persists after page refresh
- [x] All pages translated (Home, About)
- [x] Footer and navigation translated
- [x] Product names and descriptions translated

---

## 🚀 Usage

### For Users:
1. Look for language buttons in the header (EN | عربي)
2. Click to switch languages instantly
3. Your choice is remembered for next visit

### For Developers:
1. Use `useTranslation()` hook in components
2. Access translations with `t('key.path')`
3. Add new keys to JSON files
4. Test both languages before deploying

---

## 💡 Best Practices

### ✅ DO:
- Use translation keys for ALL user-facing text
- Test both languages thoroughly
- Keep translation files organized
- Use descriptive key names
- Test RTL layout on all pages

### ❌ DON'T:
- Hardcode text strings in components
- Forget to add new keys to both language files
- Mix languages in translation files
- Use automatic translation without review

---

## 🔧 Troubleshooting

### Issue: Language doesn't switch
**Solution**: Check browser console for errors, ensure i18n is initialized in `main.jsx`

### Issue: Arabic text shows wrong direction
**Solution**: Check that `rtl.css` is imported and HTML `dir` attribute is set

### Issue: Some text not translated
**Solution**: Ensure all text uses `t()` function and keys exist in JSON files

### Issue: Layout breaks in Arabic
**Solution**: Check RTL-specific CSS rules in `rtl.css`

---

## 📱 Mobile Support

Both languages work perfectly on mobile devices:
- ✅ Responsive language switcher
- ✅ Touch-friendly buttons
- ✅ Proper RTL layout on small screens
- ✅ No horizontal scrolling issues

---

## 🎉 Benefits

1. **Wider Audience**: Reach Arabic-speaking customers
2. **Better UX**: Users can use their preferred language
3. **Professional**: Shows attention to detail
4. **SEO**: Can target both English and Arabic searches
5. **Scalable**: Easy to add more languages

---

## 📞 Support

The bilingual system is fully functional and production-ready. All translations are complete for the current pages.

**To add custom translations**: Edit the JSON files in `/src/i18n/locales/`

**To modify RTL behavior**: Update `/src/rtl.css`

---

**Your website now speaks both English and Arabic! 🇬🇧 🇦🇪**


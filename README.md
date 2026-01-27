# Monochrome Portfolio - Implementation Guide

## 🎨 Design Concept

A **brutalist-minimal editorial** portfolio with:
- Pure black & white aesthetic
- Bold typography with Bebas Neue display font
- DM Mono for body text
- Custom cursor with mix-blend-difference effect
- Grain texture overlay
- Geometric grid backgrounds
- Smooth animations and hover effects

## 📁 File Structure

Replace your existing files with these monochrome versions:

```
src/
├── app/
│   ├── page.tsx              → Replace with page-monochrome.tsx
│   └── globals.css           → Replace with globals-monochrome.css
└── components/
    ├── Navbar.tsx            → Replace with Navbar-monochrome.tsx
    ├── Hero.tsx              → Replace with Hero-monochrome.tsx
    ├── About.tsx             → Replace with About-monochrome.tsx
    ├── Projects.tsx          → Replace with Projects-monochrome.tsx
    ├── Contact.tsx           → Replace with Contact-monochrome.tsx
    └── Footer.tsx            → Replace with Footer-monochrome.tsx
```

## 🚀 Installation Steps

1. **Replace all files:**
   ```bash
   # Copy globals CSS
   cp globals-monochrome.css src/app/globals.css
   
   # Copy page
   cp page-monochrome.tsx src/app/page.tsx
   
   # Copy all components
   cp Navbar-monochrome.tsx src/components/Navbar.tsx
   cp Hero-monochrome.tsx src/components/Hero.tsx
   cp About-monochrome.tsx src/components/About.tsx
   cp Projects-monochrome.tsx src/components/Projects.tsx
   cp Contact-monochrome.tsx src/components/Contact.tsx
   cp Footer-monochrome.tsx src/components/Footer.tsx
   ```

2. **Clear cache and restart:**
   ```bash
   rm -rf .next
   npm run dev
   ```

## ✨ Key Features

### Custom Cursor
- White circular cursor with mix-blend-difference
- Scales on hover over interactive elements
- Creates unique contrast effect

### Typography
- **Bebas Neue**: Display font for headlines (bold, condensed)
- **DM Mono**: Monospace font for body text and UI elements
- Large, dramatic headline sizes (10vw - 12vw)

### Animations
- Fade-in-up animations on scroll
- Staggered animation delays for sequenced reveals
- Smooth hover transitions on all interactive elements
- Project list items expand to show descriptions

### Layout
- Full-bleed sections with proper spacing
- Grid-based layouts with clear hierarchy
- Large section numbers as background elements
- Consistent border usage for separation

### Effects
- Grain texture overlay (3% opacity)
- Subtle grid background pattern
- Mix-blend-difference for cursor
- White scrollbar on black background

## 🎯 Customization

### Update Personal Info

1. **Navbar.tsx**: Update navigation links
2. **Hero.tsx**: Edit main title and subtitle descriptions
3. **About.tsx**: 
   - Update bio text
   - Modify skills and expertise
   - Change experience numbers
4. **Projects.tsx**: Replace project data in the projects array
5. **Contact.tsx**: Update email, location, and social links
6. **Footer.tsx**: Update social links

### Color Adjustments

While the design is monochrome, you can adjust:
- Border opacity: `border-white` → `border-white/50`
- Text opacity: `text-gray-400` for muted text
- Hover states: `hover:opacity-50`

### Typography Changes

In `globals.css`, update font imports:
```css
@import url('your-preferred-google-font');
```

Then update the font-family in the CSS variables.

## 📱 Responsive Design

All components are fully responsive:
- Mobile-first approach
- Grid layouts collapse on mobile
- Font sizes scale with viewport (vw units)
- Touch-friendly spacing on mobile

## 🎭 Animation Details

Animations use CSS keyframes with delays:
- `animate-in`: Base fade-in-up animation
- `animate-delay-100` through `animate-delay-400`: Staggered reveals
- All animations: 0.8s duration with ease-out timing

## 🔧 Troubleshooting

**Fonts not loading?**
- Check internet connection (fonts load from Google Fonts)
- Clear browser cache

**Cursor not showing?**
- Ensure JavaScript is enabled
- Check browser compatibility (works best in Chrome/Firefox)

**Animations not playing?**
- Make sure the opacity-0 classes are applied initially
- Check that animate-in class is present

## 🌐 Browser Support

- Chrome/Edge: Full support
- Firefox: Full support  
- Safari: Full support (cursor blend mode may vary)
- Mobile browsers: Touch-optimized, cursor hidden on mobile

## 📦 Production Build

For static export:
```bash
npm run build
```

The site will be exported to the `out/` folder.

---

**Design Philosophy**: Less is more. Every element serves a purpose. Bold typography makes a statement. Whitespace creates breathing room. Monochrome creates focus.
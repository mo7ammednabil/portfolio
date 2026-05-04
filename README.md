# Alex Morgan — Personal Portfolio

A modern, dark-themed personal portfolio built with React + Vite, Tailwind CSS, and Framer Motion.

## ✦ Design Choices

- **Aesthetic**: Editorial dark — ink tones, gold accent, serif + mono typography pairing
- **Fonts**: Playfair Display (headings) · DM Sans (body) · JetBrains Mono (labels/code)
- **Color Palette**: Deep ink darks (`#100f0c` → `#2a2721`) with warm gold accent (`#c8a96e`)
- **Unique touches**: Custom lerp-animated cursor, grain texture overlay, animated character-by-character title

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── CustomCursor.jsx    # Lerp-animated dual cursor
│   │   ├── FadeIn.jsx          # Reusable scroll-triggered fade wrapper
│   │   ├── Navbar.jsx          # Sticky nav with active section highlighting
│   │   ├── Hero.jsx            # Animated character-split title
│   │   ├── About.jsx           # Bio + quick facts grid
│   │   ├── Skills.jsx          # Animated progress bars + tech cloud
│   │   ├── Projects.jsx        # Project cards with hover effects
│   │   ├── Contact.jsx         # Contact form + info
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js        # All content data (projects, skills, nav)
│   ├── hooks/
│   │   └── useActiveSection.js # IntersectionObserver for active nav item
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Global styles, custom cursor, Tailwind layers
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# 1. Clone or download the project
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## ✏️ Customization

### Update your info
Edit `src/data/portfolio.js` to change:
- Project details, descriptions, tech stack, links
- Skills and proficiency levels
- Nav items

### Update bio text
Edit `src/components/About.jsx` and `src/components/Hero.jsx` directly — the text is written inline for a natural feel.

### Change name/title
- `src/components/Hero.jsx` — change "Alex" and "Morgan."
- `src/components/Navbar.jsx` — change the "AM" monogram
- `index.html` — update `<title>` and meta description

### Add a real photo
In `src/components/About.jsx`, replace the placeholder `<div>` block with:
```jsx
<img
  src="/your-photo.jpg"
  alt="Alex Morgan"
  className="w-full h-full object-cover"
/>
```

### Color customization
Edit `tailwind.config.js` — the `accent` colors and `ink` scale control the entire palette.

## 🎨 Features

- ✅ Smooth character-by-character animated hero title
- ✅ Lerp-smoothed custom cursor with hover state expansion
- ✅ Active section detection in navbar via IntersectionObserver
- ✅ Scroll-triggered fade-in animations (Framer Motion)
- ✅ Animated skill progress bars (trigger on scroll into view)
- ✅ Grain texture overlay for depth
- ✅ Mobile menu with staggered animation
- ✅ Contact form with simulated async submission
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Custom scrollbar styling
- ✅ Text selection color matching accent

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `react` + `react-dom` | UI framework |
| `vite` | Build tool |
| `tailwindcss` | Utility CSS |
| `framer-motion` | Animations |
| `lucide-react` | Icons |

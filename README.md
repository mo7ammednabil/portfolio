# Mohamed Nabil — Android Developer Portfolio

A modern, dark-themed personal portfolio built with **React (Vite)**, **Tailwind CSS**, and **Framer Motion**.  
Designed to showcase Android development skills with a clean cinematic UI and smooth micro-interactions.

---

## ✦ Overview

This portfolio is designed as a **minimal developer showcase**, not a typical personal website.

It focuses on:
- Clean UI hierarchy
- Smooth motion design
- Strong visual storytelling
- Real-world Android engineering presentation

---

## ✦ Design System

### 🎨 Visual Style
- Dark sky-inspired background
- Glassmorphism panels with subtle blur
- Gold accent highlights (`#c8a96e`)
- Soft glow lighting + gradient depth layers

### 🔤 Typography
- Playfair Display → Headings (elegant / editorial)
- DM Sans → Body text (clean readability)
- JetBrains Mono → UI labels / metadata

### 🎬 Motion Style
- Framer Motion scroll animations
- Character-by-character hero text animation
- Smooth hover transitions
- Fade-in sections on scroll

---

## 📁 Project Structure

```

portfolio/
├── public/
│   ├── favicon.svg
│   ├── news.png
│   └── ecommerce.png
├── src/
│   ├── components/
│   │   ├── CustomCursor.jsx
│   │   ├── FadeIn.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── hooks/
│   │   └── useActiveSection.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json

````

---

## 🚀 Getting Started

### Requirements
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone <repo-url>
cd portfolio
npm install
npm run dev
````

Open:
[http://localhost:5173](http://localhost:5173)

---

## 🏗 Build & Preview

```bash
npm run build
npm run preview
```

---

## ✏️ Customization Guide

### 🔹 Update Content

Edit:
src/data/portfolio.js

Includes:

* Projects
* Skills
* Navigation

---

### 🔹 Change Personal Info

* Hero.jsx → Name + title
* Navbar.jsx → initials/logo
* index.html → title + meta description

---

### 🔹 Add Profile Image

Inside About.jsx:

```jsx
<img
  src="/profile.jpg"
  alt="Mohamed Nabil"
  className="w-full h-full object-cover"
/>
```

---

### 🔹 Add Project Images

```js
image: "/news.png"
```

Place images inside:
public/

---

## ✨ Features

### UI / UX

* Cinematic hero section
* Glassmorphism layout
* Responsive design (mobile-first)
* Smooth section transitions

### Interactions

* Custom animated cursor
* Scroll-triggered fade-in
* Hover elevation effects
* Smooth navigation scroll

### Architecture

* Modular React components
* Centralized data structure
* Reusable animation wrapper (FadeIn)
* Clean separation of UI & content

---

## 📱 Sections

* Hero → Intro + CTA
* About → Personal background
* Skills → Technical stack
* Projects → Real apps showcase
* Experience → Work timeline
* Contact → Communication form

---

## 🛠 Tech Stack

* React (Vite)
* Tailwind CSS
* Framer Motion
* Lucide Icons

---

## 🎯 Focus

This portfolio highlights:

* Android development (Kotlin, MVVM, Jetpack Compose)
* Clean architecture thinking
* Performance-focused UI design
* Modern frontend engineering practices

---

## 📌 Notes

This is a **developer-focused portfolio**, built like a product showcase rather than a static resume.

Everything is designed to be:

* Minimal
* Fast
* Animated but not distracting
* Content-driven

---

## 🚀 Future Improvements

* Blog section (technical articles)
* Project filtering system
* Dark/Light theme toggle
* 3D model interaction upgrade

```

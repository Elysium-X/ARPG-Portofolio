# 🎮 Youssef Tarek – ARPG Portfolio

This project is part of my personal portfolio.  
You’re welcome to explore and learn from the code, but please don’t claim it as your own.

An **Action-RPG–inspired personal portfolio** that presents skills and experience like a character sheet.  
The project blends **fantasy UI elements** (parchment, glass, RPG panels) with **modern frontend practices**, keeping everything clear, fast, and easy to scan.

## 🛠 Tech Stack
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.3.1-purple?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-skyblue?style=for-the-badge&logo=tailwind-css)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![React Router](https://img.shields.io/badge/React%20Router-v7-red?style=for-the-badge&logo=react-router)

---

## ✨ Highlights

- Character-style hero section with level, XP, and vitals  
- Quick slots for tools and skills  
- Compact skill tree and achievements grid  
- Themed contact page  
- Fully responsive layout with smooth animations  
- Spacebar navigation between pages (`/` → `/projects` → `/contact`)  
- Contact form integration with EmailJS

---

## 🚀 Key Features

### 🧩 Component-Based Architecture
- 13+ reusable components  
- Clear separation of concerns  
- Easy to maintain and extend

### ⚡ Modern Development
- Instant HMR with Vite  
- ES Modules support  
- Automatic code splitting  
- Optimized production builds  
- Route-level lazy loading with React `Suspense`

### 🎨 Visual Design
- RPG / ARPG-inspired theme  
- Glassmorphism UI effects  
- Smooth transitions and animations  
- Custom fonts and styling  
- Mobile-first responsive design

### 🏁 Production Ready
- Optimized bundle size  
- SEO-friendly structure  
- Fast load times  
- Cross-browser compatibility  
- Error boundary for safer runtime behavior

---

## 📁 Project Structure

```text
src/
components/
character/
layout/
ui/
constants/
pages/
utils/
App.jsx
main.jsx
index.css
```

---

## ⚙️ Customization

- Update profile and stats in `src/constants/data.jsx`  
- Replace icons and images in `src/assets`  
- Adjust theme styles in `src/index.css`  
- Update contact mail sender logic in `src/services/emailService.js`

---

## 📧 EmailJS Setup

Create a `.env` file in the project root and add:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The contact form reads these values from `import.meta.env` via `src/services/emailService.js`.

---

## 🧪 Getting Started

```bash
npm install
npm run dev
```

---

## 📦 Build

```bash
npm run build
npm run preview
```

---

## 📜 License & Usage

**MIT**

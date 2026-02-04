# 🎮 Youssef Tarek - ARPG Portfolio

> 🎯 **First time here?** Read **[START_HERE.md](START_HERE.md)** for a quick introduction!

An action RPG-themed portfolio website styled like a character sheet from fantasy games. Built with **React 18**, **Vite**, **Tailwind CSS**, and **React Router v6**.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-3-cyan)

---

## ⚡ New: Vite-Powered Development!

This project has been **completely refactored** to use modern tooling:
- ✅ **Vite** for lightning-fast development
- ✅ **Modular components** in separate files
- ✅ **Centralized data** management
- ✅ **Hot Module Replacement** (HMR)
- ✅ **Optimized production builds**

See **[REFACTORING_SUMMARY.md](REFACTORING_SUMMARY.md)** for details on what changed.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:3000
```

That's it! The app should open automatically in your browser. ✨

---

## 📖 Detailed Setup

For comprehensive setup instructions, see **[SETUP.md](SETUP.md)**

### Development
```bash
npm run dev          # Start dev server with HMR
```

### Production
```bash
npm run build        # Build for production
npm run preview      # Preview production build
```

---

## ✨ Features

### 🏠 Home Page
- **Character Profile**: Avatar, name, level 25, and XP progress bar
- **Resource Vitals**: Health, Mana, and Stamina bars
- **Potion Inventory**: 4 interactive quick slots with tooltips
- **Skill Tree**: 7 technology skills with animated progress bars
  - HTML (95% - Master)
  - CSS (90% - Master)
  - Tailwind (85% - Expert)
  - JavaScript (92% - Master)
  - React (88% - Expert)
  - Redux (80% - Advanced)
  - TanStack Query (82% - Advanced)
- **Achievements**: 4 unlocked achievement badges

### 📬 Contact Page
- **Professional Form**: Name, Email, Message fields
- **Real-time Validation**: Instant feedback with error messages
- **Submit Handler**: Mock submission with loading state
- **Success Feedback**: Animated success message
- **Form Reset**: Auto-clears after submission
- **Contact Methods**: Display multiple ways to reach out

---

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Textarea.jsx
│   │   ├── Card.jsx
│   │   └── ProgressBar.jsx
│   ├── layout/                # Layout components
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── character/             # Character-themed components
│       ├── CharacterHeader.jsx
│       ├── ResourceBar.jsx
│       ├── PotionSlot.jsx
│       ├── SkillCard.jsx
│       └── Achievement.jsx
├── constants/
│   └── data.js                # All app data centralized
├── pages/
│   ├── Home.jsx               # Home page
│   └── Contact.jsx            # Contact page
├── utils/
│   └── validation.js          # Form validation utilities
├── App.jsx                    # Main app with routing
├── main.jsx                   # Entry point
└── index.css                  # Global styles
```

---

## 🎨 Customization

### Update Character Info

Edit `src/constants/data.js`:

```javascript
export const CHARACTER_DATA = {
  name: 'Your Name',
  level: 25,
  xp: 8500,
  maxXp: 10000,
}
```

### Add/Modify Skills

```javascript
export const SKILLS = [
  { 
    name: 'Your Skill',
    level: 90,
    icon: '🎯',
    color: 'from-blue-500 to-purple-500',
    rank: 'Master',
  },
]
```

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'gold': '#FFD700',
  'health': '#DC2626',
  'mana': '#3B82F6',
  'stamina': '#22C55E',
}
```

---

## 🚀 Technology Stack

- **React 18** - UI library with hooks
- **Vite 5** - Fast build tool with HMR
- **Tailwind CSS 3** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **PostCSS** - CSS processing
- **Modern ES6+** - Latest JavaScript features

---

## 📚 Documentation

- 📖 **[SETUP.md](SETUP.md)** - Complete setup and installation guide
- ⚡ **[COMMANDS.md](COMMANDS.md)** - Quick command reference
- ✅ **[CHECKLIST.md](CHECKLIST.md)** - Setup verification checklist
- 🔧 **[REFACTORING_SUMMARY.md](REFACTORING_SUMMARY.md)** - What was changed and why
- 🏗️ **[ARCHITECTURE.md](ARCHITECTURE.md)** - System design and patterns
- 🧩 **[COMPONENTS.md](COMPONENTS.md)** - Component API reference

---

## 🎯 Key Features

### Component-Based Architecture
- ✅ 13+ reusable components
- ✅ Proper separation of concerns
- ✅ Easy to maintain and extend

### Modern Development
- ✅ Vite for instant HMR
- ✅ ES modules
- ✅ Optimized builds
- ✅ Code splitting

### Beautiful Design
- ✅ RPG/ARPG theme
- ✅ Glass morphism effects
- ✅ Smooth animations
- ✅ Responsive layout
- ✅ Custom fonts

### Production Ready
- ✅ Optimized bundle
- ✅ SEO friendly
- ✅ Fast loading
- ✅ Cross-browser compatible

---

## 🚀 Deployment

### Netlify (Recommended)
```bash
npm run build
# Drag dist folder to netlify.com/drop
```

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages
```bash
npm run build
# Deploy dist folder to gh-pages branch
```

---

## 🐛 Troubleshooting

### Port Already in Use
Change port in `vite.config.js`:
```javascript
server: { port: 5173 }
```

### Dependencies Issue
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
rm -rf dist
npm run build
```

For more troubleshooting tips, see **[SETUP.md](SETUP.md)**

---

## 🎓 Learning Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [React Router Docs](https://reactrouter.com/)

---

## 📝 Scripts Reference

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## ✨ Best Practices

This project follows:
- ✅ Component-based architecture
- ✅ Separation of concerns
- ✅ Centralized data management
- ✅ Proper file organization
- ✅ Clean code principles
- ✅ Responsive design patterns

---

## 📊 Project Stats

- **Components**: 13+
- **Pages**: 2
- **Lines of Code**: ~2000+
- **Bundle Size**: Optimized with Vite
- **Load Time**: < 1 second

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Developer

**Youssef Tarek** - Full Stack Developer

- 📧 Email: youssef@realm.com
- 💼 LinkedIn: @yousseftarek
- 🐙 GitHub: @yousseftarek

---

## 🎮 Ready to Deploy?

Your ARPG portfolio is production-ready! Just follow these steps:

1. ✅ Run `npm install`
2. ✅ Run `npm run dev` to test
3. ✅ Customize your data in `src/constants/data.js`
4. ✅ Build with `npm run build`
5. ✅ Deploy the `dist` folder

**Need help?** Check [SETUP.md](SETUP.md) for detailed instructions!

---

**⚔️ Level Up Your Portfolio! Built with React, Vite, and Tailwind CSS ⚔️**

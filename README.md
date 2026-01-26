# ENIGMA LABS

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?logo=tailwind-css)

**A modern, premium developer portfolio showcasing cutting-edge web design and engineering excellence.**

[Live Demo](#) · [Report Bug](https://github.com/yakkixd/ENIGMA-LABS/issues) · [Request Feature](https://github.com/yakkixd/ENIGMA-LABS/issues)

</div>

---

## 🌟 Overview

ENIGMA LABS is a professionally crafted portfolio website built with modern web technologies. Featuring a stunning dark theme, smooth animations, glassmorphism effects, and responsive design, this portfolio demonstrates best practices in contemporary web development.

### ✨ Key Features

- **🎨 Premium Dark Theme** - Deep blacks with vibrant gradient accents (blue, purple, pink, cyan)
- **✨ Glassmorphism Effects** - Modern UI with backdrop blur and transparency
- **🎭 Gradient Typography** - Eye-catching text with multi-color gradients
- **💫 Smooth Animations** - Fade-in effects, hover states, and pulsing background orbs
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **♿ Accessible** - WCAG 2.1 AA compliant with keyboard navigation support
- **🚀 Performance Optimized** - Fast load times with Vite and efficient Tailwind CSS
- **🔍 SEO Ready** - Comprehensive meta tags for search engines and social sharing

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI framework with modern hooks and components |
| **Vite 7** | Lightning-fast build tool and dev server |
| **Tailwind CSS 4** | Utility-first CSS framework with custom theme |
| **ESLint** | Code quality and consistency |
| **Google Fonts** | Inter (sans-serif) and Space Mono (monospace) |

---

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/yakkixd/ENIGMA-LABS.git

# Navigate to project directory
cd ENIGMA-LABS

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/`

---

## 🚀 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 📁 Project Structure

```
enigma-labs/
├── public/              # Static assets
│   └── vite.svg
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx   # Navigation with glassmorphism
│   │   ├── Hero.jsx     # Landing section with gradient text
│   │   ├── About.jsx    # About section with code block
│   │   ├── Projects.jsx # Portfolio showcase
│   │   ├── Contact.jsx  # Contact form
│   │   └── Footer.jsx   # Footer with social links
│   ├── App.jsx          # Main application component
│   ├── index.css        # Tailwind configuration and custom styles
│   └── main.jsx         # Application entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎨 Design System

### Color Palette

- **Primary**: Electric Blue (`#3b82f6`)
- **Secondary**: Violet (`#8b5cf6`)
- **Accent**: Cyan (`#06b6d4`)
- **Tertiary**: Pink (`#ec4899`)
- **Background**: Deep Black (`#0a0a0a`)
- **Surface**: Dark Gray (`#111111`)

### Typography

- **Sans-serif**: Inter (300-900 weights)
- **Monospace**: Space Mono (400, 700)

### Key Visual Elements

- Gradient text with multi-color transitions
- Glassmorphism panels with backdrop blur
- Animated background orbs with pulse effects
- Smooth hover states and transitions
- Responsive grid layouts

---

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## ♿ Accessibility

This portfolio follows WCAG 2.1 AA standards:

- ✅ Keyboard navigation support
- ✅ Focus indicators on all interactive elements
- ✅ ARIA labels for screen readers
- ✅ Reduced motion support for users with motion sensitivity
- ✅ Semantic HTML structure
- ✅ Sufficient color contrast ratios

---

## 📝 Customization

### Update Personal Information

1. **Projects**: Edit `src/components/Projects.jsx` to add your projects
2. **About**: Modify `src/components/About.jsx` with your bio and skills
3. **Contact**: Update social links in `src/components/Contact.jsx` and `src/components/Footer.jsx`
4. **SEO**: Edit meta tags in `index.html`

### Modify Theme

All theme variables are defined in `src/index.css` under the `@theme` directive. Customize colors, fonts, and animations to match your brand.

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build the project
npm run build

# Deploy the 'dist' folder to Netlify
```

### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "vite build && gh-pages -d dist"

# Deploy
npm run deploy
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

**Project Link**: [https://github.com/yakkixd/ENIGMA-LABS](https://github.com/yakkixd/ENIGMA-LABS)

---

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Google Fonts](https://fonts.google.com/) - Typography
- [Heroicons](https://heroicons.com/) - Icon system

---

<div align="center">

**Built with ❤️ using React, Vite, and Tailwind CSS**

⭐ Star this repository if you found it helpful!

</div>

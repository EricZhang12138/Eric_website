# Eric Zhang's Portfolio Website

A modern, dark-themed personal portfolio website showcasing my projects, experience, and background in software engineering and distributed systems.

## Tech Stack

### Frontend Framework
- **React 19.2.4** - Component-based UI library
- **React Router DOM 7.13.0** - Client-side routing for multi-page navigation

### Build Tool
- **Vite 7.3.1** - Fast build tool and development server
- **@vitejs/plugin-react 5.1.4** - React plugin for Vite

### Styling
- Pure CSS with CSS Modules
- CSS Custom Properties (variables) for theming
- No CSS frameworks (custom dark theme built from scratch)

### Development
- Node.js/npm for package management
- ES Modules (type: "module" in package.json)
- Hot Module Replacement (HMR) for instant updates during development

### Key Features
- Single Page Application (SPA) architecture with client-side routing
- Responsive design (mobile-friendly)
- Dark theme with custom color palette
- No external UI libraries or dependencies (lightweight)
- Fast development experience with Vite
- Easy to integrate with any backend (C++, Java, Python REST APIs)
- Modern React patterns (functional components, hooks)
- Production-ready build optimization

## Project Structure

```
personal_website/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   └── Layout.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Experience.jsx
│   │   └── Experience.css
│   ├── styles/          # Global styles
│   │   ├── global.css
│   │   └── theme.css
│   ├── App.jsx          # Main app with routing
│   └── main.jsx         # React entry point
├── index.html           # Entry HTML file
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/EricZhang12138/personal_website.git
cd personal_website
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

The development server includes:
- Hot Module Replacement (HMR) - changes appear instantly
- Fast refresh - preserves component state during edits
- Detailed error messages

### Build for Production

Create an optimized production build:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Pages

- **Home (/)** - Introduction, education, passion, and career goals with social links
- **Projects (/projects)** - Showcase of technical projects including:
  - Distributed Filesystem
  - Ray Tracer
  - Distributed Orderbook
- **Experience (/experience)** - Professional experience and internships

## Customization

### Updating Content

- **Personal Info**: Edit `src/pages/Home.jsx`
- **Projects**: Edit `src/pages/Projects.jsx`
- **Experience**: Edit `src/pages/Experience.jsx`
- **Navigation**: Edit `src/components/Navbar.jsx`

### Theme Colors

Theme colors are defined in `src/styles/theme.css` using CSS custom properties:
- `--bg-primary`: Main background color
- `--bg-secondary`: Secondary background color
- `--text-primary`: Primary text color
- `--accent-primary`: Main accent color (blue)
- `--accent-secondary`: Secondary accent color (cyan)

## Deployment

This site can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts: `"deploy": "vite build && gh-pages -d dist"`
3. Run: `npm run deploy`

## Future Backend Integration

The architecture is designed to easily integrate with backend services:
- Components can consume REST APIs via fetch/axios
- Example: Projects data can be loaded from `GET /api/projects`
- Works seamlessly with C++, Java, or Python backend frameworks

## Links

- **GitHub**: [github.com/EricZhang12138](https://github.com/EricZhang12138)
- **LinkedIn**: [linkedin.com/in/yuou-zhang-455308268](https://www.linkedin.com/in/yuou-zhang-455308268/)

## License

This project is open source and available for personal use.

<p align="center">
  <img src="public/favicon.svg" alt="Portfolio Logo" width="80" />
</p>

<h1 align="center">Personal Portfolio — B. Sai Kumar</h1>

<p align="center">
  A sleek, dark-themed developer portfolio built with <strong>React 19</strong> and <strong>Vite</strong>.<br/>
  Featuring smooth scroll-reveal animations, a typewriter hero section, and a downloadable PDF resume.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License" />
</p>

<p align="center">
  <strong>🌍 Live Demo:</strong> <a href="https://Saikumar050714.github.io/FUTURE_FS_01/">View Portfolio Here</a> <br/>
  <strong>👤 GitHub Profile:</strong> <a href="https://github.com/Saikumar050714">@Saikumar050714</a>
</p>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Typewriter Hero** | Animated role-cycling text (Problem Solver → Frontend Developer → UI/UX Designer) |
| **Scroll Reveal** | Intersection Observer + MutationObserver for on-scroll entrance animations |
| **Skills Dashboard** | Animated progress bars across Frontend, Backend & Database/Tools categories |
| **Project Showcase** | Filterable project grid (All / Web / Mobile) with hover overlays |
| **Resume Section** | Simple direct links to **View** and **Download** a static PDF Resume |
| **Contact Form** | EmailJS-ready form with live validation and status feedback |
| **Responsive Design** | Fully responsive layout from mobile to ultra-wide screens |
| **SEO Optimized** | Open Graph, Twitter Card, and semantic HTML meta tags |

---

## 🛠️ Tech Stack

- **Framework** — [React 19](https://react.dev) with functional components & hooks
- **Build Tool** — [Vite 8](https://vitejs.dev)
- **Styling** — Vanilla CSS with CSS custom properties (dark theme)
- **Icons** — [React Icons](https://react-icons.github.io/react-icons/) (Font Awesome, Heroicons, Bootstrap Icons, Simple Icons)
- **Email Service** — [EmailJS](https://www.emailjs.com/) (pre-configured, just add credentials)

---

## 📂 Project Structure

```
FUTURE_FS_01/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx / .css      # Sticky navigation with smooth scroll
│   │   ├── Hero.jsx / .css        # Typewriter intro + floating badges
│   │   ├── About.jsx / .css       # Bio & personal highlights
│   │   ├── Skills.jsx / .css      # Animated skill bars + tech tags
│   │   ├── Projects.jsx / .css    # Filterable project cards
│   │   ├── Resume.jsx / .css      # Tabbed resume + PDF export
│   │   ├── Contact.jsx / .css     # EmailJS contact form
│   │   └── Footer.jsx / .css      # Social links & copyright
│   ├── App.jsx                    # Root component + scroll observers
│   ├── main.jsx                   # React DOM entry point
│   └── index.css                  # Global styles & CSS variables
├── index.html                     # HTML shell with SEO meta tags
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **v18+**
- npm (bundled with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Saikumar050714/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser — the page hot-reloads on save.

### Production Build

```bash
npm run build
npm run preview   # Preview the production build locally
```

The optimized output is generated in the `dist/` folder.

---

## ⚙️ Configuration

### EmailJS (Contact Form)

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Set up a **Service**, **Template**, and grab your **Public Key**
3. In `src/components/Contact.jsx`, replace the simulated submit handler with:

```js
import emailjs from '@emailjs/browser';

emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formRef.current,
  'YOUR_PUBLIC_KEY'
);
```

### Personalisation Checklist

| File | What to update |
|------|---------------|
| `index.html` | Title, meta descriptions, OG tags, favicon |
| `Hero.jsx` | Name, roles, stats, profile image |
| `About.jsx` | Bio, highlights, about image |
| `Skills.jsx` | Skill categories, proficiency levels, extra tags |
| `Projects.jsx` | Project entries (title, description, tags, links) |
| `Resume.jsx` | Education & experience entries |
| `Contact.jsx` | Email, phone, location, social links |
| `Footer.jsx` | Copyright name, social links |

---

## 📜 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Dev Server | `npm run dev` | Start Vite dev server with HMR |
| Build | `npm run build` | Create optimized production build |
| Preview | `npm run preview` | Serve the production build locally |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch — `git checkout -b feature/amazing-feature`
3. Commit your changes — `git commit -m "Add amazing feature"`
4. Push to the branch — `git push origin feature/amazing-feature`
5. Open a **Pull Request**

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ using React & Vite
</p>

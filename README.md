# Taswill - Architecture & Interior Design Consultancy Website

A modern, responsive website for Taswill, a leading architecture and interior design consultancy. Built with Next.js, React, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern, minimalist design inspired by world-class architecture firms
- 📱 Fully responsive across all devices
- 🎨 Beautiful animations and transitions
- 🎯 SEO-optimized structure
- ⚡ Fast loading speeds with Next.js
- 🖼️ High-quality imagery showcasing projects
- 📝 Contact form with validation
- 📰 Blog/Insights section for thought leadership
- 🎨 Custom color palette with earthy tones

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (sans-serif), Playfair Display (serif)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/taswill.git
cd taswill
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
taswill/
├── app/
│   ├── about/          # About Us page
│   ├── services/       # Services page
│   ├── portfolio/      # Portfolio/Projects page
│   ├── insights/       # Blog/Insights page
│   ├── contact/        # Contact page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Header navigation
│   └── Footer.tsx      # Footer component
├── public/             # Static assets
└── README.md
```

## Pages

- **Home**: Hero section, services preview, featured projects, stats, CTA
- **About**: Company story, values, leadership team
- **Services**: Detailed service offerings with features
- **Portfolio**: Filterable project gallery with case studies
- **Insights**: Blog posts and articles with newsletter signup
- **Contact**: Contact form, office information, map

## Customization

### Colors

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: { ... },
  accent: { ... }
}
```

### Content

Update content directly in the respective page files located in the `app/` directory.

### Images

Replace Unsplash placeholder images with your own project images. Update the URLs in each page component.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project can be deployed to:

- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Performance

- ✅ Optimized images with Next.js Image component
- ✅ Code splitting with Next.js App Router
- ✅ Lazy loading for animations
- ✅ Minimal bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Taswill. All rights reserved.

## Contact

For inquiries, please reach out to:
- Email: info@taswill.com
- Phone: +1 (234) 567-890
- Website: www.taswill.com

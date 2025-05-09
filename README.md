# Hary Ridart - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js
- 🎨 Modern UI with Tailwind CSS
- 🔄 Smooth animations with Framer Motion
- 📊 Interactive skills visualization
- 🗂️ Filterable project showcase
- 📝 Contact form

## Project Structure

```
cv-haryridart/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js app directory
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   ├── components/      # React components
│   └── types/           # TypeScript type definitions
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cv-haryridart.git
cd cv-haryridart
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

Update your personal information in the following files:

- `src/components/about-section.tsx` - About me information
- `src/components/experience-section.tsx` - Work experience
- `src/components/projects-section.tsx` - Project showcase
- `src/components/skills-section.tsx` - Technical skills
- `src/components/contact-section.tsx` - Contact information

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.ts`.

## Deployment

This project can be easily deployed to Vercel, Netlify, or any other static site hosting service.

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

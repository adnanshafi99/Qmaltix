# QMALTIX Lab Website

A modern, responsive website for QMALTIX Lab built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast**: Built with Next.js 14 for optimal performance
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Type Safe**: Full TypeScript support

## Pages

1. **Home** (`/`) - Hero section, mission statement, research areas overview, stats, and call-to-action
2. **About** (`/about`) - Lab mission, values, and history
3. **Research Areas** (`/research`) - Detailed information about research areas
4. **Publications** (`/publications`) - List of publications with filtering
5. **Team** (`/team`) - Team member profiles with filtering by role
6. **Blog** (`/blog`) - Blog posts and news updates
7. **Contact** (`/contact`) - Contact form and information
8. **Join Us** (`/join-us`) - Information about joining the lab

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
qmaltix/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── join-us/           # Join Us page
│   ├── publications/      # Publications page
│   ├── research/          # Research Areas page
│   ├── team/              # Team page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ResearchCard.tsx
│   └── StatsSection.tsx
├── data/                  # Data files
│   ├── blog.ts
│   ├── publications.ts
│   └── team.ts
└── public/                # Static assets
```

## Customization

### Updating Content

- **Team Members**: Edit `data/team.ts`
- **Publications**: Edit `data/publications.ts`
- **Blog Posts**: Edit `data/blog.ts`
- **Research Areas**: Edit `app/research/page.tsx`

### Styling

- Colors can be customized in `tailwind.config.js`
- Global styles are in `app/globals.css`

### Adding New Pages

1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Update the navigation in `components/Header.tsx`

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

## License

Copyright © 2025 QMALTIX | Powered by QMALTIX


# Lemon Hills Hotel — Where Luxury Meets Nature

A premium marketing and booking website for **Lemon Hills Hotel**, a five-star hilltop resort in Rwanda.

## Features

- **Hero Section** — Full-screen parallax hero with animated CTAs
- **Experience Section** — Showcases hilltop retreats, fine dining, infinity pool, spa, gardens, and private events
- **Rooms & Suites** — Twin, Single, Deluxe Double, Double Deluxe, and VIP Suite with image galleries
- **Amenities** — Interactive cards for pool, dining, spa, conference hall, and WiFi
- **Photo Gallery** — Filterable image gallery with lightbox viewer
- **Booking** — Date pickers, room selector, guest count, and live price estimator with confirmation toasts
- **Footer** — Newsletter signup, Google Maps embed, contact info, and social links
- **Scroll Animations** — Scroll-reveal effects throughout the site

## Tech Stack

- [Vite](https://vite.dev) + [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- [Embla Carousel](https://www.embla-carousel.com) for carousels
- [Recharts](https://recharts.org) for charts
- [Sonner](https://sonner.emilkowal.dev) for toast notifications

## Getting Started

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── assets/          # Hotel images and logo
├── components/      # React components (Hero, Rooms, Gallery, Booking, etc.)
│   └── ui/          # shadcn/ui base components
├── hooks/           # Custom hooks (useScrollReveal, etc.)
├── lib/             # Utility functions
├── pages/           # Page components (Index, NotFound)
└── main.tsx         # App entry point
```

## License

© 2026 Lemon Hills Hotel. All rights reserved.

# InkDom

InkDom is a modern React landing site for an African storytelling platform. It presents a polished homepage for discovering stories, browsing genres, learning how the platform works, and moving into reader or writer accounts.

## What the app does

InkDom is designed to:

- showcase featured stories and writing categories
- introduce readers to the platform through a visual landing page
- guide writers toward account creation and onboarding
- provide login and sign-up pages for user access
- present a responsive experience across desktop and mobile

## Main pages

- `/` - landing page with hero section, stories, genres, writers, testimonials, FAQ, and call-to-action sections
- `/login` - login screen for existing users
- `/signup` - sign-up screen for new readers and writers
- `*` - fallback not-found page

## Tech stack

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Framer Motion
- shadcn/ui components
- React Query

## Getting started

### Prerequisites

- Node.js installed
- npm installed

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

If your environment uses a different port, use the one printed by Vite.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

### Run tests

```bash
npm run test
```

## Project structure

- `src/components/landing` - landing page sections and shared brand components
- `src/components/ui` - reusable UI primitives
- `src/pages` - route-level pages
- `src/assets` - images and brand assets
- `src/lib` - shared helpers

## Notes

- The app is currently frontend-only.
- Navigation uses React Router for in-app page transitions.
- The landing page is composed of modular sections so it is easy to expand or reorder later.

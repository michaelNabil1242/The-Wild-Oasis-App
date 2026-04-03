# The Wild Oasis Website

A modern, responsive website for The Wild Oasis resort, built with Next.js. This application allows guests to browse luxury cabins, make reservations, and manage their bookings through an intuitive user interface.

## Features

- **Cabin Exploration**: Browse and view detailed information about luxury cabins
- **Reservation System**: Book cabins with an interactive date selector and reservation form
- **User Account Management**: Sign in/out functionality with profile management
- **Reservation Management**: View, edit, and delete existing reservations
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Built with Tailwind CSS and Heroicons

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Date Handling**: date-fns
- **Language**: JavaScript (ES6+)

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying files in the `app/` directory. The page auto-updates as you edit the file.

## Project Structure

```
app/
├── _components/     # Reusable UI components
├── _lib/           # Utility functions and data services
├── _styles/        # Global styles
├── about/          # About page
├── account/        # User account pages
├── cabins/         # Cabins listing page
└── page.js         # Home page

starter/
├── components/     # Additional components
├── others/         # Error pages and utilities
└── pages/          # Legacy pages (if any)
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# The Wild Oasis

A modern Next.js reservation website for The Wild Oasis, a luxury cabin resort in the Italian Dolomites. Guests can browse cabins, view details, sign in with Google, and manage bookings from a single dashboard.

## ✨ Features

- Browse the available luxury cabins and filter by capacity
- View detailed cabin information and pricing
- Book a stay using a date-based reservation flow
- Manage reservations from the guest account area
- Update guest profile information (nationality and ID)
- Responsive, polished UI built with Tailwind CSS

## 🛠️ Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- NextAuth for Google sign-in
- Supabase for data storage
- date-fns for date calculations
- SweetAlert2 for user feedback

## 📋 Prerequisites

Before running the project locally, make sure you have:

- Node.js installed
- A Supabase project
- Google OAuth credentials
- A REST Countries API key (used for country data)

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 to view the app.

## 📁 Project Structure

```text
app/
├── _components/      # Reusable UI components
├── _lib/             # Auth, API helpers, and data services
├── _styles/          # Global styles
├── about/            # About page
├── account/          # Protected guest account pages
├── cabins/           # Cabin listing and reservation pages
└── page.js           # Homepage
```

## 🧪 Available Scripts

- `npm run dev` — start the development server
- `npm run build` — build the app for production
- `npm run start` — run the production build
- `npm run lint` — run ESLint

## 🗂️ Data & Auth Notes

- Cabin and booking data are stored in Supabase.
- Guest authentication is handled through NextAuth and Google sign-in.
- Reservation pages and account routes are protected by auth rules.

## 🌐 Deployment

This project is ready to be deployed on platforms such as Vercel. Be sure to configure the same environment variables in your deployment environment.

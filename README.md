# XAMPP Control

A clean, native-feeling macOS control panel for managing an existing XAMPP installation without the clutter of a heavy dashboard.

This repository contains the marketing and download website for the XAMPP Control app, built with Next.js and designed to highlight the product, features, and installation requirements for Mac users.

## Overview

XAMPP Control is built for developers who run local web stacks on macOS and want a simple way to manage Apache, MySQL, and ProFTPD from one place.

The product is intentionally lightweight and focused:

- Start, stop, and monitor XAMPP services
- Stay out of the way while you work locally
- Keep the interface minimal and familiar for macOS users
- Support both Apple Silicon and Intel Macs

> Note: This repository is the website for the app. It does not install XAMPP itself; it is designed for users who already have XAMPP installed on their Mac.

## Features

- Service control panel for Apache, MySQL, and ProFTPD
- Simple and fast workflow for local development
- Clean, modern interface inspired by native macOS design
- Clear download selection for Apple Silicon and Intel Macs
- GitHub release and repository links

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- React Icons

## Project Structure

```bash
.
├── public/
│   └── screenshots/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── lib/
│       └── downloads.ts
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.js
└── README.md
```

## Download Links

The site exposes direct download links to the app releases:

- Apple Silicon: [XAMPP Control for Apple Silicon](https://github.com/YassineElkefi/XAMPP-Control-Panel/releases/download/1.0/XAMPP.Control-1.0.0-arm64.dmg)
- Intel: [XAMPP Control for Intel](https://github.com/YassineElkefi/XAMPP-Control-Panel/releases/download/1.0/XAMPP.Control-1.0.0.dmg)
- GitHub repository: [XAMPP-Control-Panel](https://github.com/YassineElkefi/XAMPP-Control-Panel)
- Releases page: [GitHub Releases](https://github.com/YassineElkefi/XAMPP-Control-Panel/releases)

## Requirements

Before installing the app, the site expects the following:

- macOS 13 Ventura or newer
- XAMPP 8.x installed
- XAMPP located at /Applications/XAMPP
- Apple Silicon or Intel Mac

## Notes

This project is a single-page marketing and download site for the desktop app. The landing page includes:

- hero section and tagline
- feature highlights
- architecture/download section
- system requirements
- footer with GitHub link

## Repository

- GitHub: [YassineElkefi/XAMPP-Control-Panel](https://github.com/YassineElkefi/XAMPP-Control-Panel)

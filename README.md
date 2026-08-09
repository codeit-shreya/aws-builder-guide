# AWS Builder ID Guide

A student-made, step-by-step visual guide for creating an AWS Builder ID and getting started with
AWS Builder Center. Built with React + TypeScript + Tailwind CSS (v4).

## Running locally

npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build

## Where things live

- src/data/steps.ts — every registration step (title, instructions, screenshots, tips, warnings).
  Add, remove or reorder steps here without touching any component code.
- src/data/config.ts — your name, WhatsApp number/link, and placeholder community link. Update the
  community link once you have a real invite URL.
- public/guide/ — the screenshots referenced by steps.ts. Drop new screenshots in here and
  reference them by filename.
- src/components/ — Hero, InfoCard, StepTimeline, GuideStep, ScreenshotViewer, ProgressIndicator,
  FAQAccordion, ContactCard, Footer, etc.
- src/components/FAQAccordion.tsx — the FAQ questions/answers live in the faqs array at the top
  of the file.

## Deploying

npm run build produces a static site in dist/. That folder can be deployed as-is to any static
host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.) — no server required.

## Notes

- The WhatsApp number and community link are placeholders in src/data/config.ts — replace
  communityLink once you have your real group/community URL.
- All screenshots are used as-is from the real AWS Builder ID signup flow, uncropped and undistorted.

import { Case } from "../types";

export const cases: Case[] = [
  { 
    id: 0,
    title: 'Custom Software | BB&S Lighting',
    href: 'https://www.brothers-sonsamerica.com',
    image: { id: 0, src: '/works/bbs-home-1.png' },
    highlight: 'Full stack bespoke web app for established lighting distributor',
    description: 'The client required a glossy, brochure-style website to showcase studio and production products.\nWe built a Next.js frontend user interface to client specifications using TypeScript and Sass and  a custom Ruby on Rails backend content management system, secured via Oauth 2.0, so the client could easily update site content.\nThe applications are deployed through Vercel and Heroku, with assets stored in AWS S3 buckets.'
  },
  {
    id: 1, 
    image: { id: 1, src: '/works/king-home-1.png' },
    href: 'https://www.kingmicromobility.com',
    title: 'Brand Identity | King Micromobility',
    highlight: 'Web Development, Branding, and Content Creation for startup',
    description: 'As a new startup, King needed a full suite of services to get their brand up and running. We built and maintained a Shopify eCommerce site, designed logos and graphic elements, and crafted a unique brand voice adapted to their target audience. We also oversaw the production of photo and video content and provided digital analytics.'
  },
  {
    id: 2,
    title: 'Production Management | GE/Timber + Frame',
    image: { id: 2, src: '/1x/bg3.png' },
    highlight: 'Commercial video and photo shoot production management',
    description: 'For GE\'s "Sealed For Good" campaign, we oversaw pre-production and physical production. This included hiring and overseeing department heads and crew, budget oversight and management, overseeing 4-set construction on a single stage, talent wrangling, and on-the-fly solutions to ever-changing creative requirements.'
  }
];
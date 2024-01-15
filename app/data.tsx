// library
import { ReactNode } from "react";

// types
import { Case, HeroContent, Link, ListItem, SerializedImage, Service } from "./types";

// components
import WebsitePreview from "./components/website-preview/website-preview.component";
import City from "./content/city/city.content";
import Image from "next/image";
import WinterScene from "./content/winter-scene/winter-scene.content";
import GraphicDesign from "./content/graphic-design/graphic-design.content";
import ColorAnalysis from "./content/color-analysis/color-analysis.content";
import BrandVoice from "./content/brand-voice/brand-voice.content";
import AnimatedCarousel from "./components/carousel-animated/carousel-animated.component";

export const cases: Case[] = [
  { 
    id: 0,
    name: 'Custom Software | BB&S Lighting',
    image: { id: 0, src: '/works/bbs-home-1.png' },
    description: 'Tailor-made, full stack  web app for US industrial lighting distributor'
  },
  {
    id: 1, 
    image: { id: 1, src: '/works/king-home-1.png' },
    name: 'Branding & Web Development | King Micromobility',
    description: 'Web Development, Branding, and Content Creation for electric scooter startup'
  },
  {
    id: 2,
    name: 'Production Management | GE',
    image: { id: 2, src: '/1x/bg3.png' },
    description: 'Production management and budgeting for commercial video shoot'
  }
];

export const images: SerializedImage[] = [
  { id: 1, src: '/1x/bg1.png' }, { id: 2, src: '/winter/SVG/winter-scene_4.svg' }, { id: 3, src: '/1x/bg3.png' }, { id: 4, src: '/1x/bg4.png' }, { id: 5, src: '/1x/bg5.png' }, { id: 6, src: '/1x/bg6.png' }
];

export const heroContent: HeroContent[] = [
  // { component: <City image={ images[0] } key={ 0 } />  }, 
  { component: <WinterScene color={ 'white' } image={ images[1] } key={ 1 } />, theme: { className: 'winter-theme' }}
];

export const kingLogos: SerializedImage[] = [
  { id: 0, src: '/logos/king/white.png' },
  { id: 1, src: '/logos/king/blue.png' },
  { id: 3, src: '/logos/king/purple.png' },
];

export const navLinks: Link[] = [
  { text: 'home', href: '#welcome' },
  { text: 'services', href: '#services' },
  { text: 'process', href: '#process' },
  { text: 'portfolio', href: '#selected-works' },
  { text: 'contact', href: '#contact' }
]

export const processItems: ListItem[] = [
  {
    image: { id: 1, src: './graphics/SVG/mittens_1.svg' },
    textHighlight: 'Meet & Greet',
    text: 'In our initial meeting we will brainstorm and define the needs and scope of your project'
  },
  {
    image: { id: 1, src: './graphics/SVG/blueprint_2.svg' },
    textHighlight: 'Proposal & Pricing',
    text: 'We will compile a detailed proposal outlining the project steps and provide a transparent pricing structure'
  },
  {
    image: { id: 1, src: './graphics/SVG/blueprint_4.svg' },
    textHighlight: 'Architecture & Construction',
    text: 'At this stage we will create the blueprints for your project and then begin building it out'
  },
  {
    image: { id: 1, src: './graphics/SVG/testing_1.svg' },
    textHighlight: 'Testing & Revision',
    text: 'Our goal is to get you exactly what you want, so at this stage we QC and make adjustments as needed to ensure integrity to your vision'
  },
  {
    image: { id: 1, src: './graphics/SVG/production.svg' },
    textHighlight: 'Final Delivery & Production',
    text: 'Once the project is finalized and sealed with your approval, we will deploy it to a production environment that is sensitive to ongoing costs and future maintenance'
  },
];

export const adjectives = [
  "Authentic", "Innovative", "Creative", "Trustworthy", "Friendly", 
  "Sophisticated", "Reliable", "Dynamic", "Approachable", "Professional", 
  "Bold", "Engaging", "Playful", "Empowering", "Modern", "Chic", 
  "Accessible", "Energetic", "Welcoming", "Inspirational", "Unique", 
  "Versatile", "Fresh", "Vibrant", "Credible", "Ethical", 
  "Transparent", "Diverse", "Passionate", "Visionary", "Impactful", 
  "Resilient", "Thoughtful", "Dependable", "Intuitive", "Trendy", 
  "Expressive", "Memorable", "Adaptable", "Spirited", "Relevant", 
  "Human", "Progressive", "Distinctive", "Tenacious", "Collaborative", 
  "Pragmatic", "Inclusive", "Spontaneous", "Magnetic", "Relatable", 
  "Futuristic", "Resonant", "Unconventional", "Provocative", "Exceptional", 
  "Cultured", "Assertive", "Timeless", "Convivial", "Imaginative", 
  "Cutting-edge", "Trailblazing", "Iconic", "Radiant", "Striking", 
  "Enduring", "Empathetic", "Pioneering", "Disruptive", 
  "Captivating", "Genuine", "Unforgettable", "Uncompromising"
];

export const rotatingContent: ReactNode[] = [
  <AnimatedCarousel 
    key={ 0 } 
    animationOptions={{ imageAnimation: 'rotate' }} 
    className="bg-space" 
    items={ [{ 
      id: 0, 
      images: kingLogos,
      title: 'Logo Design & Analysis'
     }]} 
  />,
  // <GraphicDesign key={ 1 } />,
  <ColorAnalysis key={ 2 } />,
  <BrandVoice key={ 3 } stringList={ adjectives } />
];

export const caseStudyMedia = [
  undefined,
  undefined,
  <WebsitePreview key={ 2 } src={ 'https://player.vimeo.com/video/827770760' } />
];

export const contactLinks: Link[] = [
  { text: 'info@worldheadquarters.co', href: 'mailto: info@worldheadquarters.co' },
  { text: '+1 (617) 571-6120', href: 'tel: +16175716120' },
]

export const socialLinks: Link[] = [
  { text: 'instagram', href: 'https://www.instagram.com/wrldhdqtrs', newTab: true },
  { text: 'linkedIn', href: 'https://www.linkedin.com/in/carterbacon', newTab: true },
  { text: 'github', href: 'https://www.github.com/baconsocrispy', newTab: true }
]
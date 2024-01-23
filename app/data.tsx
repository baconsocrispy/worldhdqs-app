// library
import { ReactNode } from "react";

// types
import { HeroContent, Link, SerializedImage } from "./types";

// components
import WebsitePreview from "./components/website-preview/website-preview.component";
import City from "./content/city/city.content";
import WinterScene from "./content/winter-scene/winter-scene.content";
import ColorAnalysis from "./content/color-analysis/color-analysis.content";
import BrandVoice from "./content/brand-voice/brand-voice.content";
import AnimatedCarousel from "./components/carousel-animated/carousel-animated.component";

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
  { text: 'Home', href: '#welcome' },
  { text: 'Services', href: '#services' },
  { text: 'Portfolio', href: '#selected-works' },
  { text: 'Process', href: '#process' },
  { text: 'Contact', href: '#contact' }
]

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
      title: 'Logo Design'
     }]} 
  />,
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
  { text: '+1 (617) 299-1345', href: 'tel: +16172991345' },
]

export const socialLinks: Link[] = [
  { text: 'Instagram', href: 'https://www.instagram.com/wrldhdqtrs', newTab: true },
  { text: 'LinkedIn', href: 'https://www.linkedin.com/in/carterbacon', newTab: true },
  { text: 'Github', href: 'https://www.github.com/baconsocrispy', newTab: true }
]
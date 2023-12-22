// library
import { ReactNode } from "react";

// components
import AnimatedCarousel, { AnimatedCarouselItem } from "./components/carousel-animated/carousel-animated.component";
import RotatingCarousel from "./components/carousel-rotating/carousel-rotating.component";

// types
import { Case, HeroContent, ListItem, SerializedImage, Service, Skill } from "./types";
import FlipCarousel from "./components/carousel-flip/carousel-flip.component";
import WebsitePreview from "./components/website-preview/website-preview.component";
import City from "./content/city/city.content";
import WinterScene from "./content/winter-scene/winter-scene.content";
import LogoDesign from "./content/logo-design/logo-design.content";
import GraphicDesign from "./content/graphic-design/graphic-design.content";
import ColorAnalysis from "./content/color-analysis/color-analysis.content";
import BrandVoice from "./content/brand-voice/brand-voice.content";
import PhotoShoot from "./content/photo-shoot/photo-shoot.content";
import Video from "./components/video/video.component";

export const cases: Case[] = [
  { 
    id: 1,
    name: 'BB&S Lighting',
    image: { id: 1, src: '/1x/bg1.png' },
    description: 'Tailor-made, full stack  website for US industrial lighting distributor'
  },
  {
    id: 2, 
    image: { id: 1, src: '/1x/bg2.png' },
    name: 'King Scooters',
    description: 'Web Development, Branding, and Content Creation for electric scooter startup'
  },
  {
    id: 3,
    name: 'GE',
    image: { id: 1, src: '/1x/bg3.png' },
    description: 'Production management and budgeting for commercial video shoot'
  }
];

export const images: SerializedImage[] = [
  { id: 1, src: '/1x/bg1.png' }, { id: 2, src: '/1x/bg2.png' }, { id: 3, src: '/1x/bg3.png' }, { id: 4, src: '/1x/bg4.png' }, { id: 5, src: '/1x/bg5.png' }, { id: 6, src: '/1x/bg6.png' }
];

export const heroContent: HeroContent[] = [
  { component: <City image={ images[0] } key={ 0 } />  }, 
  { component: <WinterScene color={ 'white' } image={ images[1] } key={ 1 } />, theme: { className: 'winter-theme' }}
];

export const kingLogos: ListItem[] = [
  { image: { id: 1, src: '/logos/king/white.png' }},
  { image: { id: 2, src: '/logos/king/blue.png' }},
  { image: { id: 3, src: '/logos/king/purple.png' }},
];

export const navLinks: ListItem[] = [
  { text: 'home', href: '/' },
  { text: 'services', href: '/services' },
  { text: 'portfolio', href: '/portfolio' },
  { text: 'about', href: '/about' },
  { text: 'blog', href: '/blog' },
  { text: 'store', href: '/store' },
  { text: 'contact', href: '/contact' }
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

export const services: Service[] = [
  { 
    id: 1,
    name: 'Custom Software Development',
    description: 'Websites, applications and APIs tailor-made to your specifications.'
  },
  {
    id: 2, 
    name: 'Branding & Graphic Design',
    description: 'Creative elements that speak to the core values and target audience of your business'
  },
  {
    id: 3,
    name: 'Content Creation',
    description: 'Let us bring your video and photographic ideas to life'
  }
];

export const skills: AnimatedCarouselItem[] = [
  {
    image: {
      id: 1,
      src: '/logos/ruby.svg'
    },
    text: 'Ruby'
  },
  {
    image: {
      id: 2,
      src: '/logos/js.png'
    },
    text: 'JavaScript'
  },
  {
    image: {
      id: 3,
      src: '/logos/ts.png'
    },
    text: 'TypeScript'
  },
  {
    image: {
      id: 4,
      src: '/logos/next-js.svg'
    },
    text: 'Next.js'
  },
  {
    image: {
      id: 5,
      src: '/logos/react.png'
    },
    text: 'React'
  }
];

export const graphics: AnimatedCarouselItem[] = [
  {
    image: {
      id: 1,
      src: '/graphics/SVG/icon.ico'
    }
  },
  {
    image: {
      id: 2,
      src: '/graphics/animals/TRex.png'
    }
  },
  {
    image: {
      id: 3,
      src: '/graphics/SVG/Sticker_v8.png'
    }
  }
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

const photos: AnimatedCarouselItem[] = [
  {
    image: {
      id: 1,
      src: '/photos/1.jpg'
    }
  },
  {
    image: {
      id: 2,
      src: '/photos/3.jpg'
    }
  },
  {
    image: {
      id: 3,
      src: '/photos/6.jpg'
    }
  },
  {
    image: {
      id: 4,
      src: '/photos/4.jpg'
    }
  },
  {
    image: {
      id: 5,
      src: '/photos/5.jpg'
    }
  },
  {
    image: {
      id: 6,
      src: '/photos/6.jpg'
    }
  },
  {
    image: {
      id: 7,
      src: '/photos/7.jpg'
    }
  },
  {
    image: {
      id: 8,
      src: '/photos/8.jpg'
    }
  },
  {
    image: {
      id: 9,
      src: '/photos/9.jpg'
    }
  },
  {
    image: {
      id: 10,
      src: '/photos/10.jpg'
    }
  },
];

export const rotatingContent: ReactNode[] = [
  <LogoDesign key={ 0 } />,
  <GraphicDesign key={ 1 } />,
  <ColorAnalysis key={ 2 } />,
  <BrandVoice key={ 3 } stringList={ adjectives } />
];

export const cardMedia: ReactNode[] = [
  <AnimatedCarousel
    key={ 0 }
    textAnimation="whizLeftToRight"
    imageAnimation='whizRightToLeft'
    items={ skills } 
    time={ 2 }
  />,
  <RotatingCarousel 
    animationOptions={{
      name: 'rotate',
      duration: 10,
      timingFunction: 'linear',
      iterationCount: 'infinite'
    }}
    key={ 1 }
    items={ rotatingContent }
    panelOffset={ 15 }
  />,
  <FlipCarousel 
    duration={ 5 }
    items={[ 
      <AnimatedCarousel 
        imageAnimation="noAnimation"
        time={ 1 }
        items={ photos }
      />,
      <Video src='/vid/raptor_1.mp4' />
    ]}
    key={ 2 }
  />
];

export const caseStudyMedia = [
  <WebsitePreview key={ 0 } src={ 'https://www.brothers-sonsamerica.com'  } />,
  <WebsitePreview key={ 1 } src={ 'https://www.brothers-sonsamerica.com'  } />,
  <WebsitePreview key={ 2 } src={ 'https://player.vimeo.com/video/827770760' } />
];
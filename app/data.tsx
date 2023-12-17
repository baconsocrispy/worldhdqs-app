// library
import { ReactNode } from "react";

// components
import AnimatedCarousel from "./components/carousel-animated/carousel-animated.component";
import RotatingCarousel from "./components/carousel-rotating/carousel-rotating.component";

// types
import { Case, HeroContent, ListItem, SerializedImage, Service, Skill } from "./types";
import FlipCarousel from "./components/carousel-flip/carousel-flip.component";
import WebsitePreview from "./components/website-preview/website-preview.component";
import City from "./content/city/city.content";
import WinterScene from "./content/winter-scene/winter-scene.content";

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

export const navLinks: ListItem[] =[
  { text: 'home', href: '/' },
  { text: 'services', href: '/services' },
  { text: 'portfolio', href: '/portfolio' },
  { text: 'about', href: '/about' },
  { text: 'blog', href: '/blog' },
  { text: 'store', href: '/store' }
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

export const skills: Skill[] = [
  {
    id: 1,
    logo: {
      id: 1,
      src: '/logos/ruby.svg'
    },
    name: 'Ruby'
  },
  {
    id: 2,
    logo: {
      id: 2,
      src: '/logos/js.png'
    },
    name: 'JavaScript'
  },
  {
    id: 3,
    logo: {
      id: 3,
      src: '/logos/ts.png'
    },
    name: 'TypeScript'
  },
  {
    id: 4,
    logo: {
      id: 4,
      src: '/logos/next-js.svg'
    },
    name: 'Next.js'
  },
  {
    id: 5,
    logo: {
      id: 5,
      src: '/logos/react.png'
    },
    name: 'React'
  }
];

export const rotatingContent: ReactNode[] = [
  <p key={ 0 }>Test 1</p>,
  <p key={ 1 }>Test 2</p>,
  <p key={ 2 }>Test 3</p>,
  <p key={ 3 }>Test 4</p>,
  <p key={ 4 }>Test 5</p>,
];

export const cardMedia: ReactNode[] = [
  <AnimatedCarousel
    key={ 0 }
    headingAnimation="whizLeftToRight"
    logoAnimation='whizRightToLeft'
    skills={ skills } 
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
    items={[ 
      <p key={ 0 }>test 1</p>,
      <p key={ 1 }>test 2</p>,
      <p key={ 2 }>test 3</p>,
      <p key={ 3 }>test 4</p>,
      <p key={ 4 }>test 5</p>, 
      <p key={ 5 }>test 6</p>,
      <p key={ 6 }>test 7</p>,
      <p key={ 7 }>test 8</p>,
      <p key={ 8 }>test 9</p>,
    ]}
    key={ 2 }
  />
];

export const caseStudyMedia = [
  <WebsitePreview key={ 0 } src={ 'https://www.brothers-sonsamerica.com'  } />,
  <WebsitePreview key={ 1 } src={ 'https://www.brothers-sonsamerica.com'  } />,
  <WebsitePreview key={ 2 } src={ 'https://player.vimeo.com/video/827770760' } />
];
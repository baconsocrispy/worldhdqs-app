import { ReactNode } from "react";
import AnimatedImageCarousel from "./components/animated-image-carousel/animated-image-carousel.component";
import { Case, SerializedImage, Service, Skill } from "./types";




export const cases: Case[] = [
  { 
    id: 1,
    name: 'BB&S Lighting',
    description: 'Tailor-made, full stack  website for US industrial lighting distributor'
  },
  {
    id: 2, 
    name: 'King Scooters',
    description: 'Web Development, Branding, and Content Creation for electric scooter startup'
  },
  {
    id: 3,
    name: 'Improv Comedy Club',
    description: 'Production management and budgeting for commercial video shoot'
  }
];

export const images: SerializedImage[] = [
  { id: 1, src: '/1x/bg1.png' }, { id: 2, src: '/1x/bg2.png' }, { id: 3, src: '/1x/bg3.png' }, { id: 4, src: '/1x/bg4.png' }, { id: 5, src: '/1x/bg5.png' }, { id: 6, src: '/1x/bg6.png' }
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

export const cardMedia: ReactNode[] = [
  <AnimatedImageCarousel
    key={ 0 }
    headingAnimation="whizLeftToRight"
    logoAnimation='whizRightToLeft'
    skills={ skills } 
    time={ 2 }
  />
];
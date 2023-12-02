// components
import Cards from "@/app/components/cards/cards.component";
import ContentFlow from "@/app/components/content-flow/content-flow.component";
import Hero from "@/app/components/hero/hero.component";

// types
import { Case, SerializedImage, Service, Skill } from "@/app/types";

const Home = () => {
  const services: Service[] = [
    { 
      id: 1,
      name: 'Custom Software Development',
      description: 'Websites and applications tailor-made to your specifications.'
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

  const cases: Case[] = [
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

  const skills: Skill[] = [
    {
      id: 1,
      name: 'Ruby'
    },
    {
      id: 2,
      name: 'JavaScript'
    },
    {
      id: 3,
      name: 'TypeScript'
    },
    {
      id: 4,
      name: 'Illustrator'
    },
    {
      id: 5,
      name: 'Photoshop'
    }
  ];

  const images: SerializedImage[] = [
    { id: 1, src: '/1x/bg1.png' }, { id: 2, src: '/1x/bg2.png' }, { id: 3, src: '/1x/bg3.png' }, { id: 4, src: '/1x/bg4.png' }, { id: 5, src: '/1x/bg5.png' }, { id: 6, src: '/1x/bg6.png' }
  ];

  return (
    <main className="home-page">
      <Hero images={ images }/>
      <section className="services">
        <h2>Our Services</h2>
        <Cards items={ services }/>
      </section>
      <section className="skills">
        <ContentFlow content={ skills }/>
        <ContentFlow content={ skills } direction="right" />
        <ContentFlow content={ skills } />
      </section>
      <section className="case-studies">
        <h2>Case Studies</h2>
        <Cards items={ cases } layout='alternating' cardType='horizontal' />
        <a href="#">View Portfolio</a>
      </section>
      <section className="">

      </section>
    </main>
  )
};

export default Home;
